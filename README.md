# Bot de Reseñas Google My Business con IA

Responde automáticamente las reseñas de Google My Business usando Claude (IA de Anthropic).

## Requisitos previos

1. **Python 3.10+**
2. **Cuenta de Google Cloud** con la API "Business Profile API" habilitada
3. **Clave de API de Anthropic** (obtener en https://console.anthropic.com/)

## Instalación

```bash
pip install -r requirements.txt
```

## Configuración

### 1. Credenciales de Google

1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Crea un proyecto nuevo o selecciona uno existente
3. Habilita la **Business Profile API**
4. Ve a **APIs & Services > Credentials > Create Credentials > OAuth 2.0 Client ID**
5. Tipo de aplicación: **Desktop App**
6. Descarga el archivo JSON y guárdalo como `credentials.json` en esta carpeta

### 2. Variables de entorno

```bash
cp .env.example .env
```

Edita `.env` y completa:
- `ANTHROPIC_API_KEY` — tu clave de Anthropic
- `BUSINESS_NAME` — nombre de tu negocio
- `RESPONSE_LANGUAGE` — idioma de respuestas (`es` para español)

## Uso

```bash
# Ver respuestas generadas SIN publicarlas (recomendado para probar)
python main.py --dry-run

# Publicar respuestas reales en Google
python main.py
```

Si tienes varias ubicaciones o cuentas, usa:
```bash
python main.py --account 0 --location 1
```

## Primera ejecución

La primera vez se abrirá el navegador para que autorices el acceso a tu cuenta de Google. 
El token se guardará en `token.json` para que no tengas que hacerlo cada vez.

## Automatización

Para ejecutarlo cada día automáticamente, puedes usar `cron` (Linux/Mac):

```bash
# Ejecutar todos los días a las 9:00 AM
0 9 * * * cd /ruta/del/bot && python main.py
```
