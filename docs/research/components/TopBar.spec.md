# TopBar Specification

## Overview
- **Target file:** `src/components/menu/TopBar.tsx` (+ `CategoryStrip.tsx`)
- **Screenshots:** `docs/design-references/m-home.png`, `w1440-home.png`, `w390-cat1-open.png`
- **Interaction model:** click (burger, star, favorites, category select)

## DOM Structure
div (240px spacer) > nav.fixed (240px) > [burger button] [logo box] [fav button?] [star button] [category strip]

## Computed Styles
- Bar: fixed top 0, width 100%, height 240px, bg #fff, flex column center, z 999, box-shadow `0 2px 4px -1px rgba(0,0,0,.25)`.
- Burger: absolute left 10px top 20px, 40×40, padding 10px, icon `/images/ui/hamburger.svg` 20×20. Hover bg `hsla(0,0%,50.2%,.089)` radius 50%.
- Logo box: fixed top 10px, 160×80, centered horizontally; img height 100%, max-width 100%, object-fit contain.
- Star button: absolute right 10px top 20px, 40×40, icon `/images/ui/sug.svg` height 20px.
- Fav button (only if favorites.length > 0): absolute right 50px top 20px, 40×40, img `/images/ui/favoritos-4.svg` 40×40 padding 10px.
- Strip: margin-top 95px, padding 0 10px 12px, flex, gap 25px, overflow-x auto, overflow-y hidden, width 100%; `justify-content:center` at ≥640px.
- Item: width 65px, cursor pointer, text center, margin 0 1px, shrink 0.
  - Ring: 65×65 `/images/ui/item-border.svg` at opacity .5; selected → `/images/ui/item-border-selected.svg` opacity 1.
  - Icon box: absolute 65×65 centered, opacity .5 (selected 1); img 40×40.
  - Name: 12px/18px 400 `#002e3c`, width 55px, margin 9px 0 12px, `white-space:pre-line`, centered (wraps e.g. "Menu Ejecutivo").

## States & Behaviors
- Category click → select (instant ring/icon swap, no transition). Scroll window to top.

## Responsive Behavior
- <640: strip left aligned, scrolls horizontally. ≥640: centered.
