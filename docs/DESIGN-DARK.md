---
name: Neutral Charcoal
colors:
  surface: '#1c1c1c'
  surface-dim: '#1c1c1c'
  surface-bright: '#454545'
  surface-container-lowest: '#202020'
  surface-container-low: '#252525'
  surface-container: '#2d2d2d'
  surface-container-high: '#353535'
  surface-container-highest: '#3e3e3e'
  on-surface: '#e8e8e8'
  on-surface-variant: '#b9b9b9'
  inverse-surface: '#e8e8e8'
  inverse-on-surface: '#303030'
  outline: '#a0a0a0'
  outline-variant: '#494949'
  surface-tint: '#999999'
  primary: '#c0c0c0'
  on-primary: '#202020'
  primary-container: '#5b5b5b'
  on-primary-container: '#f4f4f4'
  inverse-primary: '#4d4d4d'
  secondary: '#a8a8a8'
  on-secondary: '#242424'
  secondary-container: '#454545'
  on-secondary-container: '#e8e8e8'
  tertiary: '#d0d0d0'
  on-tertiary: '#242424'
  tertiary-container: '#505050'
  on-tertiary-container: '#ededed'
  error: '#c0c0c0'
  on-error: '#202020'
  error-container: '#505050'
  on-error-container: '#ededed'
  primary-fixed: '#e0e0e0'
  primary-fixed-dim: '#c0c0c0'
  on-primary-fixed: '#202020'
  on-primary-fixed-variant: '#444444'
  secondary-fixed: '#dedede'
  secondary-fixed-dim: '#b7b7b7'
  on-secondary-fixed: '#202020'
  on-secondary-fixed-variant: '#454545'
  tertiary-fixed: '#ededed'
  tertiary-fixed-dim: '#c8c8c8'
  on-tertiary-fixed: '#222222'
  on-tertiary-fixed-variant: '#4b4b4b'
  background: '#1c1c1c'
  on-background: '#e8e8e8'
  surface-variant: '#3e3e3e'
typography:
  display:
    fontFamily: Newsreader
    fontSize: 3rem
    fontWeight: '400'
    lineHeight: 3.5rem
    letterSpacing: -0.02em
  display-mobile:
    fontFamily: Newsreader
    fontSize: 2rem
    fontWeight: '400'
    lineHeight: 2.5rem
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 2.25rem
    fontWeight: '400'
    lineHeight: 2.75rem
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Newsreader
    fontSize: 1.75rem
    fontWeight: '400'
    lineHeight: 2.25rem
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Newsreader
    fontSize: 1.75rem
    fontWeight: '500'
    lineHeight: 2.25rem
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Newsreader
    fontSize: 1.375rem
    fontWeight: '500'
    lineHeight: 1.875rem
  title-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '600'
    lineHeight: 1.625rem
    letterSpacing: -0.01em
  title-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '600'
    lineHeight: 1.5rem
  title-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '600'
    lineHeight: 1.25rem
  body-lg:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.625rem
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
  label-lg:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: 1.25rem
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '500'
    lineHeight: 1rem
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 0.6875rem
    fontWeight: '600'
    lineHeight: 0.875rem
    letterSpacing: 0.04em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-md: 1.5rem
  gutter-lg: 2rem
  margin: 1rem
  margin-md: 1.5rem
  margin-lg: 2.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
---

## Brand & Style

This design system is tailored for an advanced teacher and faculty portal operating in focused, high-density workspaces. It balances academic rigor, deep focus, and contemporary operational utility. 

The aesthetic marries **Academic Editorial** with **Technical Minimalism**:
- **Atmosphere**: Quiet, archival, and restorative. Neutral charcoal surfaces reduce eye fatigue during long sessions of study and planning.
- **Tone**: Scholarly, precise, authoritative, yet effortlessly swift.
- **Visual Stance**: Subtle structural borders, disciplined information density, and refined editorial typography that elevates routine administrative tasks into an immersive scholarly studio.

## Colors

The palette uses layered charcoal and grayscale surfaces, anchored by high-legibility neutral typography and restrained gray highlights.

### Surface System
- **Canvas Base**: `#1c1c1c` provides the grounding backdrop.
- **Surface Container**: `#262626` serves as the primary surface for cards and data tables.
- **Surface Elevated**: `#303030` lifts popovers, flyouts, and active input panels.
- **Structural Outlines & Rules**: `#494949` separates panels and dividers without introducing color.

### Typography & Content
- **Text Primary**: `#e8e8e8` delivers high-contrast legibility.
- **Text Muted**: `#b7b7b7` provides secondary hierarchy for metadata and timestamps.
- **Text Subtle**: `#8a8a8a` marks placeholders and disabled states.

### Accents & Semantic Signals
- **Primary Accent (`#bcbcbc`)**: Light gray for primary actions and focus rings.
- **Secondary Accent (`#8f8f8f`)**: Mid gray for selected and successful states.
- **Attention & Alerts**: Keep statuses distinct with gray surface and text contrast rather than adding color.

## Typography

The type scale integrates the academic heritage of **Newsreader** with the utilitarian precision of **Inter**.

- **Editorial Headlines (`Newsreader`)**: Reserved for module banners, course syllabi titles, student case titles, and high-level summaries. The serif italic variants are sanctioned for contextual annotations, philosophical rubrics, and formal course headers.
- **Operational Interface (`Inter`)**: All data tables, grade fields, student rosters, form inputs, and functional UI metadata rely strictly on Inter to guarantee tabular alignment and dense readability without strain.
- **Tabular Figures**: Numeric inputs, percentages, points, and score breakdowns must enforce `font-feature-settings: "tnum"` for column precision.

## Layout & Spacing

The portal deploys a structured, high-density layout model engineered for information-rich desktop workflows, while gracefully collapsing on mobile for quick grade checks and notifications.

### Grid & Canvas Structure
- **Desktop (1280px+)**: 12-column layout with fixed-width utility rail (64px collapsed, 240px expanded), 2rem gutters (`gutter-lg`), and 2.5rem page margins (`margin-lg`).
- **Tablet (768px - 1279px)**: 8-column layout with 1.5rem gutters (`gutter-md`) and 1.5rem outer canvas margins (`margin-md`). Sidebar docks to an overlay drawer.
- **Mobile (<768px)**: 4-column layout with 1rem gutters (`gutter`) and 1rem canvas margins (`margin`). Dense data tables transition to card-based stacks with horizontal swipe interactions for rubrics.

### Spacing Rhythm
- **Micro Spacing (`space-xs`, `space-sm`)**: Form label gaps, badge padding, list item vertical cushions, and nested table cells.
- **Macro Spacing (`space-md`, `space-lg`, `space-xl`)**: Card padding, modular course section buffers, and multi-part rubric dividers.

## Elevation & Depth

This system avoids floating, brightly blurred shadows in favor of architectural **tonal layering** and **low-contrast structural outlines**.

### Tonal Hierarchy
- **Base Canvas (`#1c1c1c`)**: The foundational canvas backdrop.
- **Level 1 (`#262626` + border `1px solid #494949`)**: Tables, cards, and module panels.
- **Level 2 (`#303030` + border `1px solid #555555`)**: Hovered entries, active fields, and nested sections.
- **Level 3 (`#3a3a3a` + border `1px solid #666666`)**: Dialogs, menus, and popovers.

### Ambient Depth
When dialogs or contextual tooltips lift off the surface, use a neutral charcoal shadow:
- `box-shadow: 0 12px 32px -4px rgba(0, 0, 0, 0.45), 0 4px 12px -2px rgba(0, 0, 0, 0.28);`
- Dropdowns and tooltips feature a 1px perimeter outline in `#494949`.

## Shapes

The interface embraces a disciplined **Soft (`1`)** shape language that evokes bespoke archival stationery and refined ledger tools rather than consumer software.

- **Base Radius (4px / 0.25rem)**: Standard buttons, text fields, badges, table row highlights, and tabs.
- **Container Radius (`rounded-lg` / 8px / 0.5rem)**: Roster cards, grading sheets, assignment drawers, and analytical chart containers.
- **Large Panels (`rounded-xl` / 12px / 0.75rem)**: Central gradebook views, modal sheets, and floating omni-search panels.
- **Pill Exception**: Pure pill forms (`rounded-full`) are strictly reserved for count indicators (e.g., submission tally badges) and avatar frames.

## Components

### Buttons
- **Primary**: Background gradient from `#5b5b5b` to `#454545`, text `#f4f4f4`, font weight 600.
- **Secondary / Surface**: Background `#262626`, text `#e8e8e8`, border `1px solid #494949`. On hover, background transitions to `#303030`.
- **Ghost / Text**: Transparent background, text `#b7b7b7`. On hover, text shifts to `#e8e8e8` with background `#303030`.

### Text Inputs & Score Fields
- Default state: Background `#262626`, border `1px solid #494949`, text `#e8e8e8`, placeholder `#8a8a8a`, corner radius 4px.
- Focus state: Border color transitions to `#bcbcbc`, with a subtle gray focus ring.
- Tabular Grade Input: Compact cell, right-aligned, monospaced numeric styling (`font-feature-settings: "tnum"`).

### Chips & Badges
- Status Badges: Height 22px, border radius 4px, font size `label-sm`.
- **Submitted / Passing**: Background `#353535`, text `#d0d0d0`, border `1px solid #555555`.
- **Incomplete / Due**: Background `#303030`, text `#c0c0c0`, border `1px solid #555555`.
- **Draft / Archived**: Background `#262626`, text `#b7b7b7`, border `1px solid #494949`.

### Gradebook Tables & Rosters
- Header: Background `#141e1b`, border bottom `1px solid #23352e`, typography `label-md` uppercase with `letterSpacing: 0.04em`.
- Rows: Background `#182420`, border bottom `1px solid #1f2f2a`. Alternating row striping is omitted; depth is established via subtle hover states (`#1b2924`).
- Sticky Columns: Student identification column remains pinned with an understated vertical drop-shadow boundary against scrollable score axes.

### Cards & Module Trays
- Background `#182420`, border `1px solid #23352e`, border radius 8px (`rounded-lg`), padding `space-lg`.
- Header section separates with a subtle divider `#23352e` when hosting nested rubric criteria.

### Checkboxes & Radios
- Size 16x16px, background `#111a17`, border `1.5px solid #23352e`, radius 3px (checkbox) or circular (radio).
- Checked state: Fill `#bcbcbc` with icon/dot in `#202020`.