# Behaviors — mimenulatech.com/miradorwaikiki

Recon done with headless Chromium (Playwright) at 390×844, 600, 700, 768, 900, 1024 and 1440×900.
The original is a CRA + MUI v4 app (react-responsive-carousel, react-burger-menu), data from Firestore.

## Global
- Font: Montserrat everywhere (body 16px/18.4px, MUI typography uses `Montserrat`).
- No smooth-scroll library, no scroll-snap, no scroll-driven animation. Native scroll on `body`.
- `--vh` custom property is used for 100vh on mobile (`calc(var(--vh,1vh)*100)`).
- Page background `#fff`.

## Onboarding (`/miradorwaikiki`)
- **Interaction model:** click/swipe-driven carousel (react-responsive-carousel), 3 slides, no autoplay observed.
- "Omitir ✕" (top-right, `top:20px; right:20px`) → navigates to `/miradorwaikiki/menu`.
- Dots (8×8, `#002e3c`, 16px gap, bottom 10px) switch slide; unselected dots at opacity .3, selected 1 (library default).
- Slide transition: horizontal translate, 350ms ease-in-out (library default).
- Slide 1: big logo (150px wide) + 180px spacer + "BIENVENIDO" (letter-spacing 3px, `#201231`).
- Slides 2–3: small logo (130px) + 230×230 illustration + title + grey description.

## Menu (`/miradorwaikiki/menu`)
### Top bar (fixed, 240px, white, `box-shadow: 0 2px 4px -1px rgba(0,0,0,.25)`, z 999)
- Burger (left 10/top 20, 40×40, icon 20×20). Hover: `background hsla(0,0%,50.2%,.089)`, radius 50%.
- Star button (right 10/top 20, 40×40) → opens **Suggested** dialog.
- Heart-fill button (right 50/top 20) appears **only when ≥1 favorite** → opens **Favorites** dialog.
- Restaurant logo centered (160×80 box, top 10).
- Category strip: horizontal scroll (`overflow-x:auto`, gap 25px, padding 0 10px 12px, margin-top 95px).
  Centered (`justify-content:center`) at ≥640px.
- Category item: 65×65 ring SVG + 40×40 icon (opacity .5); name 12px/18px `#002e3c`, width 55px.
  Click → selects category: ring swaps to `item-border-selected` (dark ring + orange dot), icon opacity 1.
  No transition on these (instant swap).

### Home state (no category selected)
- Restaurant info block: "Aceptamos las siguientes tarjetas" (13px `#002e3c`) + Visa (h20) / Amex (h50) / Mastercard (h30) / Mercado Pago (h30), each margin 10px, wrapping, centered.
- Vertical centering comes from `.content-wrapper { display:grid; grid-template-rows:auto auto 70px; height:100vh }` — free space is split between the two `auto` rows.

### Category state
- One MUI Accordion per subcategory, full width (95vw), white, no shadow.
  - Single subcategory → starts **expanded**. Several → all start **collapsed**.
  - Independent (multiple can be open at once).
  - Summary: 52px collapsed / 68px expanded (MUI min-height 48→64 + margins). Name 15px uppercase,
    letter-spacing 1px, `rgb(162,79,29)`, margin-top 10px. Chevron (`ExpandMore`, 32px, `#9e9e9e`) rotates 180° (150ms).
  - Collapse: `height 0.567s cubic-bezier(0.4,0,0.2,1)` (MUI auto duration for this content).
  - Expanded content begins with a 1px divider `rgba(119,48,10,.85)` at `opacity(.5)`.
- Product row:
  - **<640px:** grid 8/4 cols. Left: name (15px 600 `#575756`, padding-top 4px), optional suggested icon (h12) and gluten-free badge (h20), description (13px/19.5px 500 grey, `white-space:pre-line`), price (15px 500 grey, letter-spacing 1px). Right: optional photo 120×112 cover radius 8 + heart chip (20×20 white radius 6, top 4 right 8).
  - **≥640px:** centered flex row, gap 20: text block (min-width 300, centered) + optional photo 144×120 radius 8. Without photo the heart sits inline right of the name; with photo the heart chip (30×30 radius 8, top 4 right 4) overlays the photo.
  - Separator row: padding 15px 0, centered `divisor.svg` 257×2.
- Heart click toggles favorite (outline ↔ filled heart), persisted to `localStorage["product miradorwaikiki"]`.

### Burger side menu (react-burger-menu "slide")
- Panel 310px, white, `border-radius: 0 20px 20px 0`, slides from left: `transform translate3d(-100%,0,0)` → 0, `transition: .5s`.
- Overlay `rgba(0,0,0,.3)`, `transition: opacity .3s`. Clicking overlay closes.
- Close ✕ (24×20) fixed at 15/15.
- Items: HOME (back to home state) and SUGERIDOS (opens Suggested dialog), 15px 700 `#002e3c`, 45px top margins.
- "Gracias por visitarnos" script SVG (h50) mid-panel.
- Bottom: email + phone (13px `#002e3c`), Facebook / WhatsApp square icons (25px `#002e3c`),
  language pills (140×38, radius 50, 1px `#555` border; active = bg `rgb(48,84,94)` white text; inactive = white bg black text),
  MIMENU|LATECH sign card (fixed bottom-left 12px, `#f2f2f2`, radius `20px 0`, padding 20).
- Language: es/en only changes UI strings (menu data stays as entered). Persisted in localStorage.

### Suggested dialog (MUI Dialog fullScreen, transparent paper)
- Backdrop `rgba(0,0,0,.5)`, fade 225ms `cubic-bezier(.4,0,.2,1)`.
- White card radius 40, width 80% (400px at ≥500px). Top row (padding 20 0 7, h60, space-around): ✕ (14px), logo (95×50), star icon (20px).
- Infinite-loop carousel of suggested products (22). Slide: title 16px 500 `#201231`, description 14px/23px letter-spacing 1px grey (margin 10px 40px, padding-top 20), price 15px 300 `#201231` (padding-top 20).
- Arrows: CSS triangles 8px `#2c2b2b`, 28px-wide hit areas full height; dots below (wrap to 2 lines on mobile).

### Favorites dialog
- MUI Dialog (backdrop rgba(0,0,0,.5)). White form, radius 10, min-width 200.
- Header: Favoritos heart icon (20px) left, ✕ (`#002e3c`) right. List of favorite names (h3, bold) with a delete (trash-x) icon each.

### Footer
- Fixed bottom, 70px, `#f2f2f2`, radius `20px 20px 0 0`, MIMENU|LATECH sign SVG h30 centered.

## Responsive summary
| Width | Changes |
| --- | --- |
| <640 | Category strip left-aligned & scrollable; product rows 8/4 grid; heart chip 20px |
| ≥640 | Category strip centered; product rows centered flex; heart chip 30px; accordion text centered |
| ≥500 | Suggested card fixed 400px |

## Blocked / external assets
- `mimenu.nyc3.digitaloceanspaces.com` (restaurant logo, a product photo, Bebidas icon) was blocked by the
  recon environment's network policy. The clone hotlinks those URLs; `scripts/download-assets.mjs` tries to localize them.
