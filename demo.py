"""
Demo: muestra respuestas generadas por IA para reseñas de ejemplo.
No requiere credenciales de Google. Solo necesita ANTHROPIC_API_KEY en .env
"""
from ai_responder import generate_reply

reviews = [
    {
        "estrellas": 5,
        "texto": "Excelente vista y la comida estuvo muy rica. El servicio fue atento y rápido. Volvería sin dudas.",
    },
    {
        "estrellas": 4,
        "texto": "Muy buen lugar para una cena especial. Los mariscos fresquísimos. Solo le bajo una estrella porque el postre tardó mucho.",
    },
    {
        "estrellas": 3,
        "texto": "El lugar es lindo pero la comida estuvo fría cuando llegó. La atención fue buena.",
    },
    {
        "estrellas": 1,
        "texto": "Pésima experiencia. Esperamos más de una hora y la comida llegó fría. No vuelvo más.",
    },
    {
        "estrellas": 5,
        "texto": "",  # sin comentario
    },
]

print("=" * 60)
print("DEMO - Respuestas generadas para Mirador Waikiki")
print("=" * 60)

for r in reviews:
    print(f"\n{'★' * r['estrellas']}{'☆' * (5 - r['estrellas'])} ({r['estrellas']}/5)")
    print(f"Reseña: {r['texto'] or '(sin comentario)'}")
    print("Generando respuesta...")
    respuesta = generate_reply(r["texto"] or f"Reseña de {r['estrellas']} estrellas sin comentario", r["estrellas"])
    print(f"Respuesta: {respuesta}")
    print("-" * 60)
