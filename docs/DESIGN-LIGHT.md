---
name: Soft Gray Academic
colors:
  surface: '#f1f3f3'
  surface-dim: '#dedede'
  surface-bright: '#f8f9f8'
  surface-container-lowest: '#f8f9f8'
  surface-container-low: '#f1f3f3'
  surface-container: '#e8e8e8'
  surface-container-high: '#dedede'
  surface-container-highest: '#d4d4d4'
  on-surface: '#2c2c2c'
  on-surface-variant: '#5d5d5d'
  inverse-surface: '#2b2b2b'
  inverse-on-surface: '#f0f0f0'
  outline: '#6d6d6d'
  outline-variant: '#c8c8c8'
  surface-tint: '#5b5b5b'
  primary: '#4d4d4d'
  on-primary: '#f8f8f8'
  primary-container: '#e5e5e5'
  on-primary-container: '#333333'
  inverse-primary: '#bcbcbc'
  secondary: '#666666'
  on-secondary: '#f8f8f8'
  secondary-container: '#e5e5e5'
  on-secondary-container: '#333333'
  tertiary: '#5b5b5b'
  on-tertiary: '#f8f8f8'
  tertiary-container: '#e3e3e3'
  on-tertiary-container: '#333333'
  error: '#666666'
  on-error: '#f8f8f8'
  error-container: '#e3e3e3'
  on-error-container: '#333333'
  primary-fixed: '#e5e5e5'
  primary-fixed-dim: '#c0c0c0'
  on-primary-fixed: '#202020'
  on-primary-fixed-variant: '#444444'
  secondary-fixed: '#e3e3e3'
  secondary-fixed-dim: '#c8c8c8'
  on-secondary-fixed: '#202020'
  on-secondary-fixed-variant: '#454545'
  tertiary-fixed: '#ededed'
  tertiary-fixed-dim: '#c8c8c8'
  on-tertiary-fixed: '#222222'
  on-tertiary-fixed-variant: '#4b4b4b'
  background: '#f1f3f3'
  on-background: '#263238'
  surface-variant: '#d4d4d4'
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

The palette uses quiet paper-gray surfaces, softened white work areas, and charcoal text.

### Palette Architecture
- **Primary (`#4D4D4D`):** Used for primary interactive actions and active navigation.
- **Secondary (`#666666`):** Used for supporting actions and selected states.
- **Neutral Primary Ink (`#2C2C2C`):** Used for body copy and dense text instead of pure black.
- **Canvas & Surface System:**
  - Soft Gray Canvas (`#F2F2F2`): The foundational page background.
  - Soft White Surface (`#F8F8F8`): Cards, inputs, and focused work areas.
  - Raised Gray Surface (`#E8E8E8`): Secondary panels and read-only regions.
  - Neutral Borders (`#C8C8C8`): Dividers and input outlines.

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
- **Primary:** A short grayscale gradient from `#4D4D4D` to `#333333`, with soft white text.
- **Secondary / Outline:** Background `#F8F8F8`, text `#2C2C2C`, and border `#C8C8C8`. Hover shifts to `#E8E8E8`.
- **Destructive:** Use the same neutral surfaces; distinguish the action with its label and confirmation state.
- **Ghost Utility:** Borderless gray text with a `#E8E8E8` hover surface.

### Chips & Badges
- **Status Chips:** Low-saturation backgrounds with high-contrast text:
  - *Submitted/Complete:* `#E5E5E5` background, `#333333` text, `#C8C8C8` border.
  - *Pending/Action Required:* `#DEDEDE` background, `#454545` text, `#B7B7B7` border.
  - *Overdue/Missing:* `#D4D4D4` background, `#333333` text, `#A8A8A8` border.
  - *Neutral/Archived:* `#E8E8E8` background, `#5D5D5D` text, `#C8C8C8` border.
- All chips maintain uppercase tracking (`label-sm`) with a 1px border.

### Form Inputs & Selectors
- **Text Inputs:** Soft white (`#F8F8F8`) background, 1px `#C8C8C8` border, and `0.25rem` radius. Focus uses a brighter gray stroke.
- **Inline Editing (Grades):** Use raised gray surfaces and a clear neutral focus border.

### Checkboxes & Radio Controls
- Square (`0.125rem` radius) for checkboxes, circular for radios. Inactive state: 1px border in `#C8C8C8` on `#F8F8F8`. Active state: filled with `#4D4D4D` with a soft white checkmark.

### Data Tables & Ledgers (Core Component)
- **Header:** Background in `#F4F4F0`, border-bottom in 1px `#D3D5CE`. Labels in Inter `label-sm` with letter spacing.
- **Rows:** Alternating rows optional; standard layout relies on thin 1px `#E4E5E0` horizontal row dividers. Active hover changes background to `#F9F9F6`.
- **Data Cells:** `tabular-data` typography with vertical alignment centered. Right-aligned for grades, weighted averages, and credit hours; left-aligned for student and course names.

### Master-Detail Card
- Composed with an alabaster canvas, `#FFFFFF` interior fill, and `#E4E5E0` outline. The header displays the course title or student name in Newsreader `headline-sm`, complemented by metadata pill tags in the upper-right corner.