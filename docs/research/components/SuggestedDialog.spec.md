# SuggestedDialog Specification

## Overview
- **Target file:** `src/components/menu/SuggestedDialog.tsx`
- **Screenshots:** `m-suggested.png`, `w1440-suggested.png`
- **Interaction model:** click/swipe infinite carousel inside a modal

## Computed Styles
- Backdrop: fixed inset 0, rgba(0,0,0,.5), z 1300, fade 225ms.
- Card: centered, bg #fff, radius 40px, width 80% (400px at ≥500px), flex column, text center.
- Top row: padding 20px 0 7px, height 60px, flex space-around. Close button (img `/images/ui/black-cross.svg` 14×14, button h30), logo wrapper 95×50 (img contain), star `/images/ui/sug-icon.svg` 20×20.
- Carousel: width 100%, relative; arrows 28px-wide full-height buttons left/right, CSS triangle 8px `#2c2b2b` (prev: border-right, next: border-left).
- Slide item: flex column center, min-height 350px, margin 20px 0 30px.
  - Title h2: 16px 500 `#201231`, margin 10px 10px 0, centered.
  - Description: 14px/23px 400 letter-spacing 1px grey, margin 10px 40px, padding-top 20px.
  - Price: 15px 300 `#201231`, margin 10px 10px 0, padding-top 20px, "$" + value.
- Dots: below slides inside card (margin 10px 0, padding-bottom 10px), 8×8 `#002e3c` margin 0 8px, opacity .3 / 1, wrap.

## Behavior
- Infinite loop (prev on first → last). Order = `suggestedProductIds`.
