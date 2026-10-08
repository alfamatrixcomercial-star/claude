# SideMenu Specification

## Overview
- **Target file:** `src/components/menu/SideMenu.tsx`
- **Screenshots:** `m-burger.png`, `w1440-burger.png`
- **Interaction model:** click (open/close, HOME, SUGERIDOS, language)

## Computed Styles
- Overlay: fixed inset 0, bg rgba(0,0,0,.3), z 1000, opacity 0→1 (.3s); hidden when closed (pointer-events none).
- Panel: fixed left 0 top 0, width 310px (max 100%), height 100dvh, bg #fff, radius 0 20px 20px 0, z 1100, translateX(-100%)→0 (.5s).
- Close: fixed 15/15, 24×20 `/images/ui/close.svg`.
- Nav links: HOME (y≈90) and SUGERIDOS (y≈163): 15px 700 `#002e3c`, width 95px centered, margin-top 45px, h1 margin-top 10px.
- Thanks: `/images/ui/thx.svg` height 50px, centered, top ≈348px.
- Bottom block (panel bottom, height 262): contact 13px/17.3px `#002e3c` (email, phone) margin 20px 0; social icons 22×25 `#002e3c` 5px apart (facebook, whatsapp, open new tab); language row (height 160): two 140×38 pills radius 50 border 1px `#555`, 12px text, flags 30×20, gap 5px, at left/right 28px (35px at ≥640, pills 130×34). Active: bg `rgb(48,84,94)` text #fff; inactive: bg #fff text #000.
- Sign card: fixed bottom 0 left 12px, width 285px, padding 20px, bg #f2f2f2, radius 20px 0 20px 0 (`border-top-left-radius:20px;border-bottom-right-radius:20px`), `/images/ui/sign.svg` h30.

## Text
- HOME / SUGERIDOS (SUGGESTED in en); email `info@miradorwaikiki.com.ar`; phone `2236333330`; Español/Inglés (Spanish/English).
