# Page Topology

## Routes
| Route | Original | Clone |
| --- | --- | --- |
| Onboarding | `/miradorwaikiki` | `src/app/miradorwaikiki/page.tsx` |
| Menu | `/miradorwaikiki/menu` | `src/app/miradorwaikiki/menu/page.tsx` |
| Root | — | `src/app/page.tsx` redirects to `/miradorwaikiki` |

## Onboarding (single full-viewport section)
1. `SkipButton` — absolute overlay, top-right, z 2.
2. `OnboardingCarousel` — 3 slides, 100vh each, dots absolute at bottom. *Interaction: click/swipe.*

## Menu (`.content-wrapper`: grid rows `auto auto 70px`, height 100vh)
| Order | Section | Positioning | Interaction |
| --- | --- | --- | --- |
| 1 | `TopBar` (burger, logo, fav, star, `CategoryStrip`) | `position:fixed` 240px, inside a 240px spacer row | click |
| 2a | `RestaurantInfo` (home state) | flow, grid row 2 | static |
| 2b | `CategoryAccordions` → `ProductRow` (category state) | flow, grid row 2 | click (accordion, heart) |
| 3 | `Footer` | `position:fixed` bottom, 70px (grid row 3 spacer) | static |
| overlay | `SideMenu` | fixed, z 1100, slides from left | click |
| overlay | `SuggestedDialog` | fixed, z 1300 | click/swipe carousel |
| overlay | `FavoritesDialog` | fixed, z 1300 | click |

## Shared state (client, `MenuApp`)
- `categoryIndex: number | null` (null = home)
- `lang: "es" | "en"` (localStorage `subsidiaryLanguage`)
- `favorites: string[]` product ids (localStorage `product miradorwaikiki`)
- `menuOpen`, `suggestedOpen`, `favoritesOpen`

## Z-index layers
footer/topbar 999 → side menu overlay 1000 / panel 1100 → dialogs 1300.
