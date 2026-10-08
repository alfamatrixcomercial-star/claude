# FavoritesDialog Specification

## Overview
- **Target file:** `src/components/menu/FavoritesDialog.tsx`
- **Screenshot:** `m-fav-open.png`
- **Interaction model:** click

## Computed Styles
- Backdrop rgba(0,0,0,.5), z 1300, fade 225ms.
- Paper: white, radius 10px, min-width 200px, max-width 600px, margin 32px, box-shadow MUI elevation 24.
- Header row: flex space-between; left button with `/images/ui/favoritos.svg` 20×20 (padding 3px); right Close icon 32px `#002e3c`.
- Content: padding 8px 24px; ul no bullets; li h3 (bold ~17px) flex space-between: name + DeleteForever icon 32px `#002e3c`.

## Behavior
- Delete removes the favorite; when the list empties the dialog closes (and the top-bar heart disappears).
