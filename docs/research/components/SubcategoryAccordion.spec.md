# SubcategoryAccordion + ProductRow Specification

## Overview
- **Target files:** `src/components/menu/SubcategoryAccordion.tsx`, `src/components/menu/ProductRow.tsx`
- **Screenshots:** `w390-cat1-collapsed.png`, `w390-cat1-open.png`, `m-cat-0.png`, `w768-cat1-open.png`, `w1440-cat1-open.png`
- **Interaction model:** click-driven accordion (independent panels) + favorite toggle.

## Accordion
- Root: width 95vw, bg #fff, no shadow, centered. Text center at ≥640px.
- Summary button: padding 0 16px, min-height 52px (68px expanded), flex align center.
  - Name: 15px 400 uppercase, letter-spacing 1px, `rgb(162,79,29)`, margin-top 10px, line-height 18px.
  - Chevron: ExpandMore 32px `#9e9e9e`, right side (margin-right -12px, 38×38 hit area); rotate(180deg) when open, transition transform 150ms cubic-bezier(.4,0,.2,1).
- Collapse: height animation 0.567s cubic-bezier(.4,0,.2,1).
- Content: 1px divider `rgba(119,48,10,.85)` with `filter:opacity(.5)`, then product list.
- Default open when the category has exactly one subcategory.

## ProductRow — mobile (<640px)
- Row padding: first row 20px 5px 15px, others 0 10px 15px.
- Grid: left col 66.67% (padding-left 7px, min-width 200), right col 33.33% (relative).
- Title line: name h3 15px 600 `#575756`, line-height 17.5px, padding 4px 10px 0 0, inline-block, overflow-wrap anywhere; suggested icon `/images/ui/sug-icon.svg` h12 margin-right 10px; gluten-free `/images/ui/gluten-free.png` h20 margin 10px 5px 0.
- Description: 13px/19.5px 500 grey, padding-right 15px, margin 13px 0, `white-space:pre-line`.
- Price: 15px/21.45px 500 grey, letter-spacing 1px, margin 13px 0, "$" + price.
- Right col: optional photo 120×112 object-cover radius 8; heart chip absolute top 4 right 8, 20×20 white radius 6, img 14×12.
- Separator: full width, padding 15px 0, centered `/images/ui/divisor.svg` 257×2.

## ProductRow — ≥640px
- Flex row centered, gap 20px, text center. Text block min-width 300px.
- Title line centered: name + (no photo) heart button inline (img 14×12).
- Photo block (if image): 144×120 cover radius 8, relative; heart chip absolute top 4 right 4, 30×30 white radius 8.

## States
- Heart: `/images/ui/heart.svg` ↔ `/images/ui/heart-filled.svg`; click toggles favorite.
