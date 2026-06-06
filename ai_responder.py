import anthropic
from config import ANTHROPIC_API_KEY, BUSINESS_NAME, RESPONSE_LANGUAGE

_client = anthropic.Anthropic(api_key=ANTHROPIC_API_KEY)

LANGUAGE_NAMES = {
    "es": "español",
    "en": "English",
    "pt": "português",
}


def generate_reply(review_text: str, star_rating: int) -> str:
    language = LANGUAGE_NAMES.get(RESPONSE_LANGUAGE, "español")

    sentiment = "positiva" if star_rating >= 4 else ("neutral" if star_rating == 3 else "negativa")

    prompt = f"""Eres el gerente de atención al cliente de "{BUSINESS_NAME}".
Tu tarea es redactar una respuesta profesional, cálida y personalizada a la siguiente reseña de Google.

Reseña ({star_rating} estrellas — opinión {sentiment}):
\"\"\"{review_text}\"\"\"

Instrucciones:
- Responde en {language}.
- Sé amable, genuino y profesional.
- Si la reseña es positiva, agradece al cliente y menciona algo específico de su comentario.
- Si la reseña es negativa o neutral, muestra empatía, pide disculpas si corresponde, y ofrece resolver el problema.
- No repitas frases genéricas como "Estimado cliente".
- Máximo 4 oraciones.
- No incluyas asunto ni encabezado, solo el cuerpo de la respuesta.
"""

    message = _client.messages.create(
        model="claude-opus-4-8",
        max_tokens=512,
        thinking={"type": "adaptive"},
        messages=[{"role": "user", "content": prompt}],
    )

    return message.content[-1].text.strip()
