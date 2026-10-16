#!/usr/bin/env bash
# Modo noche LOCAL: deja a Claude Code (terminal) trabajando hasta terminar TAREAS.md.
# Si se acaba el uso, espera y vuelve a intentar. Ver MODO-NOCHE.md.
#
# Uso (desde la carpeta del proyecto):
#   Mac:    caffeinate -i ./scripts/modo-noche.sh
#   Linux:  systemd-inhibit ./scripts/modo-noche.sh
set -u
cd "$(dirname "$0")/.." || exit 1

LOG="modo-noche.log"
ESPERA_SIN_USO=1800   # segundos de espera cuando se acabó el uso (30 min)
ESPERA_ENTRE_VUELTAS=30
MAX_VUELTAS=40

PROMPT='Modo noche. Estás en la carpeta del proyecto, en la rama actual.
1. Traé lo último de la rama (git pull).
2. Abrí TAREAS.md y tomá la primera tarea sin marcar de "Pendientes".
3. Hacela completa y probala.
4. Marcala [x] con una línea de qué hiciste y movela a "Hechas".
5. Commit y push a la misma rama.
Reglas: no borres archivos que no creaste, no cambies precios, códigos ni links de pago,
no publiques nada fuera del repositorio, no hagas compras ni mandes mensajes a nadie.
Si algo necesita una decisión del dueño, anotalo en "Preguntas para la mañana" y pasá a la siguiente.
Si ya no quedan tareas sin marcar en "Pendientes", respondé solamente: TERMINADO'

if ! command -v claude >/dev/null 2>&1; then
  echo "No encuentro el comando 'claude'. Instalá Claude Code primero." >&2
  exit 1
fi

for ((i = 1; i <= MAX_VUELTAS; i++)); do
  echo "=== Vuelta $i · $(date '+%d/%m %H:%M') ===" | tee -a "$LOG"
  salida=$(claude -p "$PROMPT" \
    --permission-mode acceptEdits \
    --allowedTools "Read,Edit,Write,Glob,Grep,Bash(git:*),Bash(node:*),Bash(npm:*),Bash(npx:*),Bash(python3:*)" 2>&1)
  echo "$salida" >> "$LOG"

  if grep -q "TERMINADO" <<<"$salida"; then
    echo "✅ No quedan tareas. Fin." | tee -a "$LOG"
    break
  fi

  if grep -qiE "usage limit|hit your limit|limit reached|rate limit|resets? at|try again" <<<"$salida"; then
    echo "⏳ Sin uso disponible. Reintento en $((ESPERA_SIN_USO / 60)) minutos." | tee -a "$LOG"
    sleep "$ESPERA_SIN_USO"
  else
    sleep "$ESPERA_ENTRE_VUELTAS"
  fi
done
