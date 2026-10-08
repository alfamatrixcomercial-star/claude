# Onboarding Specification

## Overview
- **Target file:** `src/components/onboarding/Onboarding.tsx` (route `/miradorwaikiki`)
- **Screenshots:** `docs/design-references/m-onboard-1.png`, `m-onboard-2.png`, `m-onboard-3.png`, `w1440-onboard.png`
- **Interaction model:** click/swipe carousel (3 slides, no autoplay). Skip → `/miradorwaikiki/menu`.

## DOM Structure
section (100dvh, relative) > [skip button (absolute)] + [carousel viewport (overflow hidden) > track (flex, translateX(-index*100%)) > 3 slides] + [dots ul (absolute bottom)]

## Computed Styles
- Skip row: absolute, top 20px, right 20px, flex end, z 2, cursor pointer.
  - Text: 12px Montserrat 400, line-height 10px, `#002e3c`, margin 4px 6px 0 0, capitalize.
  - Close icon: `/images/ui/close.svg` 20×20.
- Slide: height 100dvh, flex column, justify center.
- Slide content: height 80dvh, flex column, align center. Slide 1 `justify-content:center`, slides 2-3 `space-around`.
- Slide 1: logo `<img>` width 150px, margin-top 50px; spacer 180px; title.
- Slides 2-3: logo width 130px, margin-top 20px; illustration container height 230px; img 230×230; text block.
- Title: 16px 400, letter-spacing 3px, `#201231`, margin 16px 0, center.
- Description: 14px 400 grey (`#808080`), line-height 16.1px, padding 0 5px, margin 14px 0 50px, center.
- Dots: ul absolute bottom 0, margin 10px 0, centered; li 8×8 radius 50% `#002e3c`, margin 0 8px; opacity .3 (unselected) / 1 (selected), transition opacity .25s ease-in; box-shadow 1px 1px 2px rgba(0,0,0,.9).

## States & Behaviors
- Dot click → go to slide. Swipe left/right (pointer drag > 50px) → next/prev (clamped, no loop).
- Transition: transform 350ms ease-in-out.

## Text Content (es / en)
- Skip: "Omitir" / "Skip"
- Slide 1: "BIENVENIDO" / "WELCOME"
- Slide 2: "ELEGÍ" / "I CHOSE" — "Encuentra en cada sección del menú lo que quieres pedir"
- Slide 3: "SUGERIDOS" / "SUGGESTED" — "En la esquina superior derecha puedes consultar nuestras ofertas destacadas"

## Assets
- Logo: restaurant logo URL (hotlinked). `/images/ui/close.svg`, `/images/ui/slider-elegi.svg`, `/images/ui/slider-sugeridos.svg`

## Responsive Behavior
- Same at all widths (content centered).
