// config.js - Configuración global de Finanzas Claras
const API_URL = "https://script.google.com/macros/s/AKfycbw3hk0W8vEJ7P3th2YnpMVEgtOm1f3ia5sNllQFG_QUIcVfMsFj7pwVisXCfeuDwXJY/exec";

// Nombres de los miembros del hogar
const USUARIOS_HOGAR = ["Alfonso", "Pamella"];
Y luego, en la cabecera <head> de cada uno de tus archivos HTML (index.html, presupuesto.html, mes-en-curso.html, historico.html), añades esta línea:

<script src="config.js"></script>