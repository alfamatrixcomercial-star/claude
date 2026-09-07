# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Mirador Waikiki
**Generated:** 2026-09-07 23:33:05
**Category:** Hotel/Hospitality

---

## Global Rules

### Color Palette

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Primary | `#1E3A8A` | `--color-primary` |
| Secondary | `#3B82F6` | `--color-secondary` |
| CTA/Accent | `#CA8A04` | `--color-cta` |
| Background | `#F8FAFC` | `--color-background` |
| Text | `#1E40AF` | `--color-text` |

**Color Notes:** Luxury navy + gold service

### Typography

- **Heading Font:** Playfair Display SC
- **Body Font:** Karla
- **Mood:** restaurant, menu, culinary, elegant, foodie, hospitality
- **Google Fonts:** [Playfair Display SC + Karla](https://fonts.google.com/share?selection.family=Karla:wght@300;400;500;600;700|Playfair+Display+SC:wght@400;700)

**CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Karla:wght@300;400;500;600;700&family=Playfair+Display+SC:wght@400;700&display=swap');
```

### Spacing Variables

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `16px` / `1rem` | Standard padding |
| `--space-lg` | `24px` / `1.5rem` | Section padding |
| `--space-xl` | `32px` / `2rem` | Large gaps |
| `--space-2xl` | `48px` / `3rem` | Section margins |
| `--space-3xl` | `64px` / `4rem` | Hero padding |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | Cards, buttons |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Modals, dropdowns |
| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.15)` | Hero images, featured cards |

---

## Component Specs

### Buttons

```css
/* Primary Button */
.btn-primary {
  background: #CA8A04;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}

.btn-primary:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: #1E3A8A;
  border: 2px solid #1E3A8A;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}
```

### Cards

```css
.card {
  background: #F8FAFC;
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--shadow-md);
  transition: all 200ms ease;
  cursor: pointer;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
```

### Inputs

```css
.input {
  padding: 12px 16px;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 200ms ease;
}

.input:focus {
  border-color: #1E3A8A;
  outline: none;
  box-shadow: 0 0 0 3px #1E3A8A20;
}
```

### Modals

```css
.modal-overlay {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.modal {
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: var(--shadow-xl);
  max-width: 500px;
  width: 90%;
}
```

---

## Style Guidelines

**Style:** Liquid Glass

**Keywords:** Flowing glass, morphing, smooth transitions, fluid effects, translucent, animated blur, iridescent, chromatic aberration

**Best For:** Premium SaaS, high-end e-commerce, creative platforms, branding experiences, luxury portfolios

**Key Effects:** Morphing elements (SVG/CSS), fluid animations (400-600ms curves), dynamic blur (backdrop-filter), color transitions

### Page Pattern

**Pattern Name:** Funnel (3-Step Conversion)

- **Conversion Strategy:** Progressive disclosure. Show only essential info per step. Use progress indicators. Multiple CTAs.
- **CTA Placement:** Each step: mini-CTA. Final: main CTA
- **Section Order:** 1. Hero, 2. Step 1 (problem), 3. Step 2 (solution), 4. Step 3 (action), 5. CTA progression

---

## Anti-Patterns (Do NOT Use)

- ❌ Poor photos
- ❌ Complex booking

### Additional Forbidden Patterns

- ❌ **Emojis as icons** — Use SVG icons (Heroicons, Lucide, Simple Icons)
- ❌ **Missing cursor:pointer** — All clickable elements must have cursor:pointer
- ❌ **Layout-shifting hovers** — Avoid scale transforms that shift layout
- ❌ **Low contrast text** — Maintain 4.5:1 minimum contrast ratio
- ❌ **Instant state changes** — Always use transitions (150-300ms)
- ❌ **Invisible focus states** — Focus states must be visible for a11y

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Heroicons/Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] No horizontal scroll on mobile

---

## Cómo se aplicó esto en el sitio

Generado con:

```bash
python3 scripts/search.py "restaurant hotel resort beach complex multiple units booking" \
  --design-system --persist -p "Mirador Waikiki"
python3 scripts/search.py "restaurant hotel resort hospitality booking venue" --domain product
python3 scripts/search.py "hero centric social proof" --domain landing
```

### Lo que se tomó: la estructura

El plugin clasifica el sitio en dos tipos de producto a la vez:

| Tipo de producto | Patrón de landing que recomienda |
|---|---|
| Hotel / Hospitality | Hero-Centric Design + **Social Proof** |
| Restaurant / Food Service | Hero-Centric Design + **Conversion** |

Y define el patrón «Hero + Testimonials + CTA» así:

1. Hero
2. Propuesta de valor
3. Features (3 a 5)
4. **Testimonios**
5. **CTA de cierre**

con el CTA principal fijo en la cabecera y repetido después de los testimonios.

Contra esa grilla el sitio tenía **dos huecos estructurales**: no había ni
prueba social ni bloque de cierre. Los dos se agregaron.

### Lo que no se tomó, y por qué

- **Su paleta** (navy `#1E3A8A` + oro `#CA8A04`) y **su tipografía** (Playfair
  Display SC + Karla). Se probaron y el cliente las rechazó: contradicen el
  brandboard de Mélange, que es la fuente de verdad de la marca.
- **Su estilo «Liquid Glass»**. El propio plugin lo marca con rendimiento
  «Moderado-Pobre» y advertencia de contraste, y el sitio tiene que abrir con
  conexión móvil de verano.
- **Su patrón «Funnel (3-Step Conversion)»**, que devuelve la búsqueda cuando
  incluye la palabra *booking*. Es un embudo de SaaS: supone un solo producto
  y una sola conversión. Acá hay cuatro unidades con cuatro plazos de decisión
  distintos, y el propio plugin lista «Complex booking» como anti-patrón del
  rubro.

### Testimonios: nunca inventados

El patrón pide de 3 a 5 testimonios con nombre. **No se escribió ninguno.**
La colección `src/content/testimonios/` arranca vacía y la sección no se
renderiza hasta que haya entradas reales. Lo que sí se publica son datos
verificables: los años del complejo y los seguidores de las cuentas.
