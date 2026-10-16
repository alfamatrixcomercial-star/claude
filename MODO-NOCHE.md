# Modo noche: dejar a Claude trabajando mientras dormís

## Primero, cómo funcionan los “tokens”

Tu plan de Claude tiene un **límite de uso que se renueva cada unas 5 horas**, y además un **tope semanal**. Cuando llegás al límite, Claude se frena en el medio de lo que estaba haciendo y **no se despierta solo** cuando se renueva: alguien le tiene que mandar un mensaje.

Entonces el truco tiene 3 partes:

1. **Que trabaje en la nube**, no en tu compu (así podés cerrar todo).
2. **Que tenga la lista de tareas en un archivo** (`TAREAS.md`), así sabe dónde quedó aunque se corte.
3. **Que un mensaje automático lo despierte** cada tantas horas para seguir.

---

## 1. Trabajar en la nube (como ahora)

Esta sesión corre en un servidor de Anthropic, no en tu celu ni en tu compu. Podés cerrar la app, apagar la compu o quedarte sin batería y la sesión sigue existiendo. Lo único que hay que hacer es que **todo lo importante quede guardado en el repositorio** (commit + push). Lo que no está pusheado se puede perder cuando el servidor se recicla.

---

## 2. La memoria: `TAREAS.md`

Claude se olvida de todo entre sesiones. El repositorio no. Por eso la lista de tareas vive en `TAREAS.md`, en la raíz del proyecto. Cada tarea tiene:

- Qué hay que hacer, en concreto.
- Cuándo se considera terminada.

Claude toma la primera sin marcar, la hace, la marca `[x]`, hace commit y push, y sigue con la próxima. Si se corta en el medio, lo hecho ya quedó guardado y la próxima vuelta retoma desde ahí.

Si una tarea necesita una decisión tuya (un precio, un nombre, plata), Claude la anota en **“Preguntas para la mañana”** y pasa a la siguiente. No se queda trabado.

**Tip:** tareas chicas y claras rinden mucho más que “mejorá todo”. Mejor “sumá 10 retos al nivel Fuego” que “hacé mejor el juego”.

---

## 3. El despertador: tareas programadas

En Claude Code en la nube existen las **tareas programadas**: un mensaje que se le manda solo a Claude a una hora fija o cada X horas. Es exactamente lo que necesitás: si una vuelta dispara cuando todavía no se renovó tu uso, esa vuelta falla y **la siguiente lo retoma**.

### La forma más fácil: pedímelo

Escribime en esta conversación algo como:

> “Programá una tarea que cada 3 horas, entre las 23 y las 8 hora de Argentina, siga con TAREAS.md en la rama claude/admiring-ritchie-g5lcvr.”

Yo la creo, y la podés pausar o borrar cuando quieras (“pausá la tarea nocturna”, “borrá la tarea nocturna”).

También sirve para una sola vez:

> “A las 3 de la mañana seguí con TAREAS.md.”

### El mensaje que dispara cada vuelta

Este es el texto que conviene que use la tarea programada (podés copiarlo tal cual):

```
Modo noche. Repositorio alfamatrixcomercial-star/claude, rama claude/admiring-ritchie-g5lcvr.
1. Traé lo último de la rama (git pull).
2. Abrí TAREAS.md y tomá la primera tarea sin marcar de "Pendientes".
3. Hacela completa y probala (si es la app o la landing, abrila en el navegador y revisá que no haya errores).
4. Marcala [x] con una línea de qué hiciste y movela a "Hechas".
5. Commit y push a la misma rama.
6. Seguí con la próxima hasta que no queden o se termine el uso.
Reglas: no borres archivos que no creaste, no cambies precios, códigos ni links de pago,
no publiques nada fuera del repositorio, no crees PRs, no hagas compras ni mandes mensajes a nadie.
Si algo necesita una decisión mía, anotalo en "Preguntas para la mañana" y pasá a la siguiente tarea.
```

---

## 4. A la mañana

1. Abrí `TAREAS.md`: mirá qué quedó en **Hechas** y qué hay en **Preguntas para la mañana**.
2. Probá lo nuevo (la app y la landing se abren desde la carpeta `sitio/`).
3. Respondé las preguntas en el chat y cargá tareas nuevas para la noche siguiente.
4. **Nada se publica solo:** vos decidís qué subir a Netlify y qué anuncios lanzar.

---

## 5. Plan B: Claude Code en tu propia compu

Si usás Claude Code en la terminal de tu compu, tenés el script `scripts/modo-noche.sh`. Hace lo mismo: le da el mensaje de arriba a Claude, y si se acabó el uso espera 30 minutos y vuelve a probar, hasta que no queden tareas.

```bash
# desde la carpeta del proyecto
chmod +x scripts/modo-noche.sh

# Mac (caffeinate evita que la compu se duerma)
caffeinate -i ./scripts/modo-noche.sh

# Linux
systemd-inhibit ./scripts/modo-noche.sh

# Windows: usalo desde WSL y poné en Opciones de energía "Suspender: nunca"
```

Lo que pasa queda anotado en `modo-noche.log`. Contras: la compu tiene que quedar prendida, enchufada y con internet toda la noche. Por eso la opción de la nube es mejor.

---

## 6. Cuidados

- **El uso de la noche sale del mismo cupo.** Si Claude labura toda la noche, a la mañana capaz tenés menos disponible (y suma al tope semanal). Si se acabó el tope semanal, no hay despertador que valga hasta que se renueve.
- **No le des tareas que muevan plata o publiquen cosas** sin que vos lo revises. Que prepare; vos aprobás.
- **Revisá siempre** antes de subir cambios a la versión que ven tus clientes.
- Si dejás de usar el modo noche, **pausá o borrá la tarea programada** para que no gaste uso de más.
