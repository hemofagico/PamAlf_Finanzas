/**
 * finanzas-sync.js - Módulo unificado de sincronización y estado para Finanzas Claras
 * Incluir en todas las páginas: <script src="config.js"></script> y luego <script src="finanzas-sync.js"></script>
 */

const FinanzasSync = {
  // Estado por defecto en caso de no haber nada guardado
  getDefaultState: function() {
    return {
      mesActual: "Octubre 2026",
      presupuestoBase: {
        ingresos: [
          { concepto: "Nómina", importe: 2400 },
          { concepto: "Alquiler recurrente", importe: 850 },
          { concepto: "Alquiler Cantos A", importe: 450 },
          { concepto: "Ingresos Extras", importe: 150 }
        ],
        grupos: [
          {
            nombre: "Vivienda",
            icono: "home",
            partidas: [
              { concepto: "Hipoteca", importe: 750 },
              { concepto: "Comunidad vivienda", importe: 120 }
            ]
          },
          {
            nombre: "Suministros / Fijos",
            icono: "bolt",
            partidas: [
              { concepto: "Luz", importe: 75 },
              { concepto: "Gas", importe: 45 },
              { concepto: "DIGI", importe: 30 },
              { concepto: "Seguro", importe: 40 },
              { concepto: "Speaking Center", importe: 65 },
              { concepto: "Ingles Segundo", importe: 65 }
            ]
          },
          {
            nombre: "Deudas",
            icono: "credit-card",
            partidas: [
              { concepto: "Préstamo Coche", importe: 180 },
              { concepto: "Prestamo Carrefour", importe: 95 },
              { concepto: "Prestamo Carrefour 2", importe: 85 }
            ]
          },
          {
            nombre: "Vida Diaria",
            icono: "shopping-cart",
            partidas: [
              { concepto: "Alimentación", importe: 450 },
              { concepto: "Gasolina/transporte", importe: 140 },
              { concepto: "Salud/farmacia", importe: 60 },
              { concepto: "Ocio/restaurantes", importe: 180 },
              { concepto: "Compras/personales", importe: 120 }
            ]
          },
          {
            nombre: "Impuestos + Gastos Vivienda",
            icono: "receipt",
            partidas: [
              { concepto: "Prorrata Impuestos", importe: 170 }
            ]
          },
          {
            nombre: "Fondo Vehículos",
            icono: "car",
            partidas: [
              { concepto: "Seguros prorrateados", importe: 90 },
              { concepto: "Fondo Imprevistos V", importe: 100 }
            ]
          },
          {
            nombre: "Otros / Imprevistos",
            icono: "ellipsis-h",
            partidas: [
              { concepto: "Gastos varios", importe: 150 }
            ]
          }
        ]
      },
      ticketsMes: [],
      historico: [],
      ultimoUsuario: "Alfonso",
      updatedAt: new Date().toISOString()
    };
  },

  // Obtiene el estado local
  getLocalState: function() {
    try {
      const stored = localStorage.getItem('finanzas_estado_global');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn("Error leyendo localStorage global:", e);
    }
    return this.getDefaultState();
  },

  // Guarda en local e intenta sincronizar de fondo con Google Apps Script
  saveState: async function(state, notifyCloud = true) {
    state.updatedAt = new Date().toISOString();
    try {
      localStorage.setItem('finanzas_estado_global', JSON.stringify(state));
      // Compatibilidad con claves previas
      if (state.presupuestoBase) {
        localStorage.setItem('finanzas_presupuesto_base', JSON.stringify(state.presupuestoBase));
      }
      if (state.ticketsMes) {
        localStorage.setItem('finanzas_tickets_mes', JSON.stringify(state.ticketsMes));
      }
      if (state.mesActual) {
        localStorage.setItem('finanzas_mes_actual', state.mesActual);
      }
    } catch (e) {
      console.error("Error guardando localmente:", e);
    }

    if (notifyCloud && typeof API_URL !== 'undefined' && API_URL && API_URL.startsWith('http')) {
      try {
        await fetch(API_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(state)
        });
        console.log("☁️ Sincronización lanzada a Google Apps Script");
      } catch (err) {
        console.warn("Aviso al enviar a la nube:", err);
      }
    }
    return state;
  },

  // Carga desde Google Apps Script (GET) y actualiza local si hay datos
  pullFromCloud: async function() {
    if (typeof API_URL === 'undefined' || !API_URL || !API_URL.startsWith('http')) {
      return this.getLocalState();
    }
    try {
      const res = await fetch(API_URL);
      if (res.ok) {
        const cloudData = await res.json();
        if (cloudData && typeof cloudData === 'object' && (cloudData.presupuestoBase || cloudData.ticketsMes)) {
          console.log("📥 Datos descargados de Google Apps Script:", cloudData);
          this.saveState(cloudData, false);
          return cloudData;
        }
      }
    } catch (err) {
      console.warn("No se pudo conectar en directo con Google Sheets (offline o CORS), usando datos locales:", err);
    }
    return this.getLocalState();
  },

  // Calcula totales y techos agrupados
  calcularMetricas: function(state) {
    const prep = state.presupuestoBase || {};
    const grupos = prep.grupos || [];
    const tickets = state.ticketsMes || [];

    let totalIngresos = 0;
    (prep.ingresos || []).forEach(i => totalIngresos += (parseFloat(i.importe) || 0));

    let totalTechoGastos = 0;
    const gruposConMetricas = grupos.map(g => {
      let techoGrupo = 0;
      (g.partidas || []).forEach(p => techoGrupo += (parseFloat(p.importe) || 0));
      totalTechoGastos += techoGrupo;

      // Calcular gastado en este grupo
      const nombreNorm = (g.nombre || "").toLowerCase().trim();
      let gastadoGrupo = 0;
      tickets.forEach(t => {
        const catNorm = (t.categoria || "").toLowerCase().trim();
        if (catNorm === nombreNorm || catNorm.includes(nombreNorm) || nombreNorm.includes(catNorm)) {
          gastadoGrupo += (parseFloat(t.importe) || 0);
        }
      });

      const restante = Math.max(0, techoGrupo - gastadoGrupo);
      const pct = techoGrupo > 0 ? Math.min(100, Math.round((gastadoGrupo / techoGrupo) * 100)) : 0;

      return {
        ...g,
        techo: techoGrupo,
        gastado: gastadoGrupo,
        restante: restante,
        porcentaje: pct
      };
    });

    let totalGastadoMes = 0;
    tickets.forEach(t => totalGastadoMes += (parseFloat(t.importe) || 0));

    const saldoActual = totalIngresos - totalGastadoMes;
    const pctGastadoGlobal = totalTechoGastos > 0 ? Math.min(100, Math.round((totalGastadoMes / totalTechoGastos) * 100)) : 0;

    return {
      totalIngresos,
      totalTechoGastos,
      totalGastadoMes,
      saldoActual,
      pctGastadoGlobal,
      grupos: gruposConMetricas
    };
  }
};
window.FinanzasSync = FinanzasSync;
