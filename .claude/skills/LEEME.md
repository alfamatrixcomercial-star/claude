# Skills del proyecto

## taste-skill

Trece skills de diseño frontend de https://github.com/leonxlnx/taste-skill
(MIT), instaladas en el commit `5217fb4`.

Van acá, en el repo, y no en `~/.claude/skills/`, porque las sesiones de
Claude Code en la web corren en un contenedor que se recicla: lo que no está
versionado no sobrevive.

Para actualizarlas:

    git clone --depth 1 https://github.com/leonxlnx/taste-skill /tmp/ts
    cp -r /tmp/ts/skills/*/ .claude/skills/

### Cuáles sirven para este sitio

| Skill | Para qué |
|---|---|
| `taste-skill` | La principal. Anti-plantilla para landings y rediseños. |
| `redesign-skill` | Auditar lo que ya está y subirle el nivel sin romperlo. |
| `soft-skill` | Tipografía, espaciado, sombras y tarjetas de agencia. |
| `minimalist-skill` | Editorial limpio, monocromo cálido. |
| `brutalist-skill` | Lo contrario: grilla rígida, terminal. No es esta marca. |
| `output-skill` | Prohíbe el código a medias y los «// resto igual». |
| `brandkit` | Tableros de identidad de marca. |

### Cuáles NO son para acá

`gpt-tasteskill` e `image-to-code-skill` están escritas para Codex y GPT, y
`stitch-skill` para Google Stitch. Las dejo porque venían en el repo, pero
no son para este entorno.

Las tres `imagegen-*` generan imágenes de referencia, no código.

## ui-ux-pro-max

Ya estaba antes que estas. Es la que se usó para el plan de diseño del sitio
(ver `docs/02-plugin-design-system.md`).
