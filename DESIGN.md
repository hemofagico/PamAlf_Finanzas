---
name: Finanzas Claras
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#3d4947'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#6d7a77'
  outline-variant: '#bcc9c6'
  surface-tint: '#006a61'
  primary: '#00685f'
  on-primary: '#ffffff'
  primary-container: '#008378'
  on-primary-container: '#f4fffc'
  inverse-primary: '#6bd8cb'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#825100'
  on-tertiary: '#ffffff'
  tertiary-container: '#a36700'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#89f5e7'
  primary-fixed-dim: '#6bd8cb'
  on-primary-fixed: '#00201d'
  on-primary-fixed-variant: '#005049'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-xl:
    fontFamily: Manrope
    fontSize: 2.25rem
    fontWeight: '700'
    lineHeight: 2.75rem
    letterSpacing: -0.025em
  headline-xl-mobile:
    fontFamily: Manrope
    fontSize: 1.75rem
    fontWeight: '700'
    lineHeight: 2.25rem
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 1.75rem
    fontWeight: '600'
    lineHeight: 2.25rem
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 1.375rem
    fontWeight: '600'
    lineHeight: 1.75rem
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Manrope
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.75rem
    letterSpacing: -0.01em
  metric-display:
    fontFamily: Manrope
    fontSize: 2rem
    fontWeight: '700'
    lineHeight: 2.25rem
    letterSpacing: -0.03em
  metric-display-mobile:
    fontFamily: Manrope
    fontSize: 1.5rem
    fontWeight: '700'
    lineHeight: 1.875rem
    letterSpacing: -0.025em
  body-lg:
    fontFamily: Manrope
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.5rem
    letterSpacing: -0.005em
  body-md:
    fontFamily: Manrope
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.375rem
    letterSpacing: 0em
  body-sm:
    fontFamily: Manrope
    fontSize: 0.75rem
    fontWeight: '400'
    lineHeight: 1.125rem
    letterSpacing: 0.01em
  label-lg:
    fontFamily: Hanken Grotesk
    fontSize: 0.875rem
    fontWeight: '600'
    lineHeight: 1.25rem
    letterSpacing: 0.01em
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: 1rem
    letterSpacing: 0.025em
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 0.6875rem
    fontWeight: '700'
    lineHeight: 0.875rem
    letterSpacing: 0.06em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 1.5rem
  margin-desktop: 2.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1.25rem
  space-xl: 2rem
---

## Brand & Style

This design system targets modern households, couples, and domestic partners managing joint finances, shared commitments, and personal allowances. The emotional core balances rigorous fiscal transparency with collaborative ease—eliminating monetary friction and anxiety between partners.

The aesthetic fuses **Corporate/Modern** precision with **Tactile Minimalist** clarity:
- **Tone:** Methodical, balanced, transparent, empowering, and domestic without feeling overly informal.
- **Visual Personality:** Airy surfaces, precise tabular rhythm, confident metric displays, and delicate tactile borders that make shared balance sheets intuitive at a glance.
- **Localization Context:** Purpose-built for Spanish-language interfaces (e.g., accommodating longer nominal strings such as "Presupuesto disponible" or "Gastos recurrentes" with balanced optical hierarchy and proportional kerning).

## Colors

The palette establishes immediate functional clarity through semantic financial anchoring:

- **Primary (`#0D9488` - Teal/Esmeralda Profundo):** Represents liquidity, confirmed savings, shared balance growth, and positive cash flow. Used for primary CTAs, positive status badges, completed milestones, and active navigational elements.
- **Secondary (`#0F172A` - Marino Pizarra):** Provides structural weight and institutional authority. Applied to primary metrics, key headings, deep neutral icon containers, and focused state borders.
- **Tertiary (`#F59E0B` - Ámbar Cálido):** Highlights warnings, budget thresholds reached (>80%), pending dual approvals, and shared payment alerts without triggering unnecessary alarm. Paired with a complementary coral (`#F43F5E`) strictly for overdrafts, deficits, and critical alerts.
- **Neutral (`#64748B` - Pizarra Medio):** Governs structural borders, microcopy, category metadata, empty states, and neutral transaction legends.
- **Surface Foundations:** Grounded in layered warm-cool whites (`#FFFFFF`, `#F8FAFC`, `#F1F5F9`) ensuring long-form readability during daily reconciliation and monthly review sessions.

## Typography

The typographic hierarchy prioritizes rapid number parsing, currency legibility, and text density resilience for Spanish terms.

- **Type Pairings:**
  - **Manrope:** Drives headlines, currency amounts, running body copy, and balances. Its open counters and geometric forms render numerals (`€`, `$`, `,`, `.`) with zero ambiguity.
  - **Hanken Grotesk:** Deployed across all functional labels, metadata tags, uppercase section dividers, status indicators, and micro-metrics. Its crisp structure stays legible at small sizes on compact displays.
- **Tabular Figures:** All numeric displays (balances, breakdown lists, monthly comparisons) must enforce `font-variant-numeric: tabular-nums` to maintain vertical alignment down decimals across tables and accordions.
- **Spanish Length Mitigation:** When translating standard patterns (e.g., "Spent" to "Gastado", "Remaining" to "Restante", "Savings Goal" to "Meta de ahorro"), labels leverage `label-md` and `label-caps` with slight letter-spacing expansions to guarantee vertical breathing space without label truncation.

## Layout & Spacing

The structural layout relies on an 8pt base grid with a fluid column framework:
- **Mobile (<768px):** 4-column fluid layout with `margin: 1rem` and `gutter: 1rem`. Cards and modules stack vertically in single columns. Primary action targets maintain a strict minimum height of 44px (recommended 48px) for thumb-reach accessibility.
- **Tablet (768px - 1024px):** 8-column layout with `margin-tablet: 1.5rem` allowing dual-column distribution: household summary on the left, transactional feed on the right.
- **Desktop (>1024px):** 12-column layout max-capped at 1280px container width with `margin-desktop: 2.5rem` and `gutter-desktop: 1.5rem`. Enables a three-zone structure: persistent partner/account sidebar, core budget orchestration stream, and contextual analytics or category goals panel.

## Elevation & Depth

To avoid visual fatigue in data-dense financial views, this design system replaces high-displacement drop shadows with **tonal layer nesting** and **crisp, low-contrast hairline borders**.

1. **Base Canvas (`Level 0`):** Soft foundational background (`#F8FAFC`).
2. **Elevated Surface (`Level 1` - Cards, Accordions, Form Modules):** Pure white fill (`#FFFFFF`) with a 1px border of `rgba(15, 23, 42, 0.08)` and an ultra-subtle ambient tint: `box-shadow: 0 1px 3px 0 rgba(15, 23, 42, 0.03), 0 1px 2px -1px rgba(15, 23, 42, 0.02)`.
3. **Hover & Interactive Float (`Level 2`):** Triggered on card interactions and hover states. Subtle elevation rise: `box-shadow: 0 4px 6px -1px rgba(15, 23, 42, 0.05), 0 2px 4px -2px rgba(15, 23, 42, 0.04)`.
4. **Modal Overlays & Quick-Action Sheets (`Level 3`):** Bottom sheets for new expense logging and partner splitting drawers: `box-shadow: 0 20px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)`. Background backdrop uses a muted slate blur: `backdrop-filter: blur(4px); background-color: rgba(15, 23, 42, 0.3)`.

## Shapes

The interface embraces a **Rounded (Level 2)** geometry:
- Standard elements (buttons, text inputs, transaction row items) utilize **0.5rem (8px)** radius, instilling an approachable yet organized architectural structure.
- Large containers (budget cards, modular summary widgets, modal dialogs) scale up to **`rounded-lg` (1rem / 16px)**, delivering distinct grouping.
- Segmented controllers, pill filters, and status badges scale to **`rounded-full`** for high contrast against structured rectangular data blocks.
- Progress track bars employ fully rounded caps (`rounded-full`) to soften quantitative progression.

## Components

### Buttons
- **Primary ("Guardar gasto", "Asignar fondos"):** Emerald fill (`#0D9488`), white label text (`label-lg`), height 44px (mobile: 48px), `rounded-md` (8px). States: Hover (`#0F766E`), Active/Focus ring with 2px offset in `#0D9488`.
- **Secondary ("Dividir 50/50", "Editar"):** Transparent fill, 1px border in slate-200 (`#E2E8F0`), text in navy (`#0F172A`), hover background in slate-50 (`#F8FAFC`).
- **Tertiary/Ghost:** Text-only in `#0D9488` or `#64748B` with hover background of `rgba(13, 148, 136, 0.08)`.

### Financial Cards & Metrics
- Surface-backed cards housing shared balance, partner contribution splits, and projected end-of-month runway.
- Headings display the category or balance label using `label-caps` in `#64748B`.
- The aggregate number uses `metric-display` in `#0F172A`. An inline positive trend micro-badge uses a soft emerald fill (`#CCFBF1`) with dark teal text (`#115E59`).

### Collapsible Transaction Accordions
- Compact summary line: Left-hand category avatar (36px circular token with contextual icon), partner contribution badge ("Tú", "Pareja", or joint icon), concept text, and formatted currency amount.
- Click/Tap reveals extended metadata: receipt photo attachment, category reassignment pill, note history, and individual split toggle ("50/50", "Proporcional según ingresos", "Gasto personal").
- Smooth accordion expansion with an effortless 180° rotation on the navigation chevron.

### Budget Progress Bars (Real vs. Presupuestado)
- 8px dual-layer linear progress tracks with rounded-full ends.
- **Track Base:** `#F1F5F9`.
- **Progress Value:** Default emerald `#0D9488` when under 75% consumption; transitions to amber `#F59E0B` between 75% and 95%; shifts to coral `#F43F5E` when exceeding 100%.
- Paired layout: Left label denotes "Gastado: 420 €", right label denotes "Límite: 500 €" in `body-sm`.

### Status Badges & Chips
- **Aprobado / Liquidado:** Fill `#ECFDF5`, text `#065F46`, border `rgba(5, 150, 105, 0.2)`.
- **Pendiente de confirmación:** Fill `#FFFBEB`, text `#92400E`, border `rgba(217, 119, 6, 0.2)`.
- **Desviación de presupuesto:** Fill `#FFF1F2`, text `#9F1239`, border `rgba(225, 29, 72, 0.2)`.
- Chips are pill-shaped (`rounded-full`), padded 4px vertical by 10px horizontal with `label-md` styling.

### Input Fields & Selectors
- Standard text, currency, and date inputs feature an explicit height of 44px (48px on mobile).
- Inactive state: Border `#CBD5E1` on pure white background.
- Focus state: Border `#0D9488` with a soft outer ring: `0 0 0 3px rgba(13, 148, 136, 0.15)`.
- Currency prefix/suffix (`€`) anchored with fixed width, right-aligned numbers styled via `tabular-nums`.

### Checkboxes, Radio Buttons & Segmented Switches
- Form inputs employ 20px rounded squares (`rounded: 4px`) for checkboxes and standard radio circles.
- **Partner Switcher / Contribution Slider:** A dual-segment pill toggle allowing the couple to toggle views between "Conjunto" (Joint household view), "Parte de [Nombre 1]", and "Parte de [Nombre 2]". Active selection uses an elevated white pill over a muted slate container (`#F1F5F9`).