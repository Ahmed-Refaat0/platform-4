---
name: Academic Utility & Editorial Archive
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#414845'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#717975'
  outline-variant: '#c1c8c4'
  surface-tint: '#45655a'
  primary: '#06281f'
  on-primary: '#ffffff'
  primary-container: '#1e3e34'
  on-primary-container: '#87a99c'
  inverse-primary: '#abcec0'
  secondary: '#9b4500'
  on-secondary: '#ffffff'
  secondary-container: '#fd8a42'
  on-secondary-container: '#682c00'
  tertiary: '#451000'
  on-tertiary: '#ffffff'
  tertiary-container: '#6a1d00'
  on-tertiary-container: '#ff7a4c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c7eadc'
  primary-fixed-dim: '#abcec0'
  on-primary-fixed: '#002118'
  on-primary-fixed-variant: '#2d4d42'
  secondary-fixed: '#ffdbca'
  secondary-fixed-dim: '#ffb68e'
  on-secondary-fixed: '#331200'
  on-secondary-fixed-variant: '#763300'
  tertiary-fixed: '#ffdbd0'
  tertiary-fixed-dim: '#ffb59d'
  on-tertiary-fixed: '#390c00'
  on-tertiary-fixed-variant: '#832600'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
typography:
  display-lg:
    fontFamily: Newsreader
    fontSize: 3rem
    fontWeight: '400'
    lineHeight: 3.5rem
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Newsreader
    fontSize: 2.25rem
    fontWeight: '400'
    lineHeight: 2.75rem
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 2rem
    fontWeight: '500'
    lineHeight: 2.5rem
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Newsreader
    fontSize: 1.625rem
    fontWeight: '500'
    lineHeight: 2.125rem
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Newsreader
    fontSize: 1.5rem
    fontWeight: '500'
    lineHeight: 2rem
  headline-sm:
    fontFamily: Newsreader
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.75rem
  title-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '600'
    lineHeight: 1.5rem
    letterSpacing: -0.005em
  title-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '600'
    lineHeight: 1.25rem
  body-lg:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.6rem
  body-md:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.375rem
  body-sm:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '400'
    lineHeight: 1.125rem
  label-md:
    fontFamily: Inter
    fontSize: 0.8125rem
    fontWeight: '500'
    lineHeight: 1.125rem
  label-sm:
    fontFamily: Inter
    fontSize: 0.6875rem
    fontWeight: '600'
    lineHeight: 0.875rem
    letterSpacing: 0.04em
  tabular-data:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: 1.25rem
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
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

This design system is engineered for faculty, department heads, and institutional administrators managing high schools and collegiate environments. The design philosophy balances the tactile gravitas of a classic university archive with the rigorous efficiency of a contemporary administrative workspace. It directly repudiates ephemeral software trends—there are no amorphous neon blurs, no saturated violet accents, and no weightless, heavily-shadowed surfaces.

Instead, the UI honors physical materials: unbleached cotton rag paper, ledger books, archival library catalog cards, and sharp typography stamped onto warm surfaces. The visual language conveys quiet authority, academic integrity, and deep calm during high-stress operational periods (grading windows, term-end scheduling, and curriculum oversight). 

Key design attributes include:
- **Utilitarian Elegance:** Information architecture structured like an immaculate ledger, offering high visual clarity and rapid scan paths.
- **Editorial Deliberation:** Expressive serif headings that confer institutional permanence, counterbalanced by structured sans-serif data layers.
- **Material Restraint:** Structural definition achieved through micro-ruled borders, subtle tonal shifts, and tabular alignments rather than heavy drop shadows.

## Colors

The palette draws directly from heritage collegiate architecture, letterpress inks, and natural bookbinding materials.

### Palette Architecture
- **Primary — Academic Forest (`#1E3E34` / Deep Variant `#162E27`):** Represents institutional authority, stability, and completion. Used for primary interactive actions, high-level headers, and positive verification states (such as finalized grades and submitted syllabi).
- **Secondary — Parchment Amber (`#B45309` / Highlight `#D97706`):** Evokes aged library paper and brass desk lamps. Reserved for temporal awareness: pending approvals, approaching assignment deadlines, and observational warnings.
- **Tertiary — Archival Terracotta (`#C2410C` / Deep `#9A3412`):** A warm, bookish brick tone used for actionable urgency: missing student submissions, overdue administrative tasks, grade discrepancies, and attendance flags.
- **Neutral Primary Ink (`#1E293B`):** A balanced slate navy serving as primary body copy and dense tabular text, softer and more legible than pure carbon black.
- **Canvas & Surface System:**
  - Base Alabaster (`#FBFBF9`): The foundational canvas mimicking unbleached cotton archival stock.
  - Ledger White (`#FFFFFF`): Applied strictly to focused workspaces, data sheets, and inputs to provide crisp contrast.
  - Muted Parchment (`#F4F4F0`): Structural sidebar containers, table headers, and read-only field regions.
  - Ruled Border Slate (`#E4E5E0`): Crisp, low-contrast micro-rules for dividing data rows, cards, and column headers.
  - Border Subdued (`#D3D5CE`): Delimits active input fields and pinned matrix headers.

## Typography

The typographic hierarchy pairs the literary authority of **Newsreader** (used for page manifests, executive summaries, course titles, and section headlines) with the functional efficiency of **Inter** (applied to controls, inputs, data visualization, and grade ledgers).

### Tabular Formatting Rules
All quantitative figures—including grade book scores, GPA, attendance percentages, timetable slots, and credit distributions—must enforce monospaced numbers using OpenType tabular figures (`font-variant-numeric: tabular-nums;` or `font-feature-settings: "tnum" 1;`). This maintains vertical column alignment across nested administrative sheets.

### Editorial Headings
Headings set in Newsreader should consistently use normal or medium weights. Bold weights are restricted to small sizes to maintain crisp serifs and avoid ink-spread density. Italic variations are reserved strictly for annotations, metadata subheadings (such as semester identifiers), and student portfolio attributions.

## Layout & Spacing

The layout is built upon an architectural grid designed to accommodate dense administrative rosters and multi-column ledger interfaces without cognitive clutter.

### Grid & Breakpoints
- **Desktop (1280px+):** 12-column fluid grid with `2.5rem` outer margins and `1.5rem` column gutters. Dedicated collapsible master-detail panels and persistent utility sidebars run alongside the core content area.
- **Tablet (768px - 1279px):** 8-column grid with `1.5rem` outer margins and `1rem` column gutters. Multi-column grading tables convert to horizontally scrollable matrices with sticky student identifier columns.
- **Mobile (Below 768px):** 4-column grid with `1rem` outer margins and `0.75rem` gutters. Multi-pane panels collapse into a single stacked hierarchy with bottom sheet filters.

### Spacing Rhythm
The rhythm relies on an organic 4px base increment, prioritizing information density over excessive negative space. Data tables use compact vertical heights (`space-sm` to `space-md` padding) to allow 20–25 rows within a standard viewport. Sections and cards use `space-lg` to `space-xl` for breathing room between macro units.

## Elevation & Depth

This system avoids blurred, floating shadows in favor of a **tactile, planar elevation structure** rooted in physical paper sheets, folder tabs, and rule lines.

### Elevation Hierarchy
1. **Level 0 (Base Foundation):** Canvas surface (`#FBFBF9`). Contains background utilities, breadcrumbs, and layout scaffolding.
2. **Level 1 (Work Surface / Cards):** Crisp `#FFFFFF` surface enclosed by a 1px solid border (`#E4E5E0`). No shadow is applied; division is established entirely through value contrast against the alabaster ground.
3. **Level 2 (Interactive Floating Surfaces / Menus / Dropdowns):** `#FFFFFF` surface paired with a fine 1px structural outline (`#D3D5CE`) and an archival micro-shadow: `0 2px 4px rgba(30, 41, 59, 0.04), 0 6px 12px -2px rgba(30, 41, 59, 0.08)`. The shadow is tightly bound, sharp, and tinted with slate navy.
4. **Level 3 (Modal Dialogs / Critical Rubric Overlays):** `#FFFFFF` surface enclosed by a 1px border (`#1E293B` at 15% opacity), positioned above a low-opacity dimming wash (`rgba(30, 41, 59, 0.4)`). Shadow: `0 8px 24px -4px rgba(22, 46, 39, 0.12), 0 16px 32px -8px rgba(30, 41, 59, 0.08)`.

### Tactile Micro-Borders
Dividers between nested items use continuous hairline rules (1px) rendered in `#E4E5E0`. Pinned headers in data grids leverage a double-ruled bottom edge (a 1px line, 2px whitespace, and a second 1px line) to evoke academic register books.

## Shapes

The design uses a **Soft (Level 1)** shape language. High corner roundness is intentionally avoided to preserve a crisp, technical document feel that feels calibrated for administrative precision rather than consumer leisure.

### Geometry Standards
- **Containers, Cards, Panels, Modals:** `0.25rem` (4px). Clean, defined corners that align tightly against tabular grids and column rules.
- **Buttons, Text Inputs, Segmented Controls:** `0.25rem` (4px). Provides a steady, grounded appearance without being aggressively sharp.
- **Status Tags, Counter Badges, System Pills:** Semi-rounded at `0.25rem` (4px) or full pill shape strictly for high-visibility numeric indicators (`9999px`) when displaying counts (such as total unread parent notes or grade anomalies).
- **Table Cell Highlights:** `0.125rem` (2px) corner radius for focused, editable spreadsheet cells.

## Components

### Buttons
- **Primary:** Background in Academic Forest (`#1E3E34`), text in `#FFFFFF`, with a 1px matching border. Hover shifts to `#162E27`. Focused state introduces a 2px offset outline in `#1E3E34`.
- **Secondary / Outline:** Background in `#FFFFFF`, text in `#1E293B`, 1px border in `#D3D5CE`. Hover shifts background to `#F4F4F0`.
- **Destructive:** Background in `#FFFFFF`, text and border in Archival Terracotta (`#C2410C`). Hover fills with `#C2410C` and shifts text to `#FFFFFF`.
- **Ghost Utility:** Borderless, text in `#1E293B` with hover color change to `#1E3E34` over `#F4F4F0`.

### Chips & Badges
- **Status Chips:** Low-saturation backgrounds with high-contrast text:
  - *Submitted/Complete:* `#E8EFEA` background, `#162E27` text, `#C3D5C8` border.
  - *Pending/Action Required:* `#FEF3C7` background, `#92400E` text, `#FDE68A` border.
  - *Overdue/Missing:* `#FFEDD5` background, `#9A3412` text, `#FDBA74` border.
  - *Neutral/Archived:* `#F4F4F0` background, `#475569` text, `#E4E5E0` border.
- All chips maintain uppercase tracking (`label-sm`) with a 1px border.

### Form Inputs & Selectors
- **Text Inputs:** Ledger white (`#FFFFFF`) background, 1px `#E4E5E0` border, `0.25rem` radius. Text set in Inter `body-md`. Focus state uses a 1px `#1E3E34` stroke with a companion 2px muted forest glow (`rgba(30, 62, 52, 0.12)`).
- **Inline Editing (Grades):** Flush background that adopts a white fill and `#1E3E34` border only on hover or active focus, matching traditional spreadsheet behavior.

### Checkboxes & Radio Controls
- Square (`0.125rem` radius) for checkboxes, circular for radios. Inactive state: 1px border in `#CBD5E1` on `#FFFFFF`. Active state: filled with `#1E3E34` with an ivory `#FBFBF9` checkmark icon.

### Data Tables & Ledgers (Core Component)
- **Header:** Background in `#F4F4F0`, border-bottom in 1px `#D3D5CE`. Labels in Inter `label-sm` with letter spacing.
- **Rows:** Alternating rows optional; standard layout relies on thin 1px `#E4E5E0` horizontal row dividers. Active hover changes background to `#F9F9F6`.
- **Data Cells:** `tabular-data` typography with vertical alignment centered. Right-aligned for grades, weighted averages, and credit hours; left-aligned for student and course names.

### Master-Detail Card
- Composed with an alabaster canvas, `#FFFFFF` interior fill, and `#E4E5E0` outline. The header displays the course title or student name in Newsreader `headline-sm`, complemented by metadata pill tags in the upper-right corner.