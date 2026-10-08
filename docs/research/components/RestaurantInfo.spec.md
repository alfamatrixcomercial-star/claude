# RestaurantInfo Specification

## Overview
- **Target file:** `src/components/menu/RestaurantInfo.tsx`
- **Screenshot:** `docs/design-references/m-home.png`
- **Interaction model:** static

## Computed Styles
- Wrapper: flex column, align center (vertical position comes from the page grid).
- Text: 13px/18.59px 400 `#002e3c`, margin 13px 0 (first child gets 50px top spacing to match: text sits 38px below block top on mobile).
- Card list: flex wrap, center; Visa h20 m10, Amex h50 m10, Mastercard h30 m10, Mercado Pago h30 m10.

## Text Content
- es "Aceptamos las siguientes tarjetas" / en "We accept the following cards"

## Assets
- `/images/cards/visa.png`, `/images/cards/amex.png`, `/images/cards/mastercard.png`, `/images/ui/mercado-pago.png`
