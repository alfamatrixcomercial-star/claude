from google_auth import get_google_credentials
from reviews_client import (
    build_account_service,
    build_reviews_service,
    get_accounts,
    get_locations,
    get_unanswered_reviews,
    post_reply,
)
from ai_responder import generate_reply


def run_bot(dry_run: bool = False, account_index: int = 0, location_index: int = 0):
    print("Autenticando con Google...")
    creds = get_google_credentials()

    account_service = build_account_service(creds)
    reviews_service = build_reviews_service(creds)

    accounts = get_accounts(account_service)
    if not accounts:
        print("No se encontraron cuentas de Google Business.")
        return

    account = accounts[account_index]
    print(f"Cuenta: {account.get('accountName') or account.get('name')}")

    locations = get_locations(account_service, account["name"])
    if not locations:
        print("No se encontraron ubicaciones en esta cuenta.")
        return

    location = locations[location_index]
    location_name = location["name"]
    print(f"Ubicación: {location.get('title') or location.get('locationName') or location_name}")

    print("Buscando reseñas sin responder...")
    unanswered = get_unanswered_reviews(reviews_service, location_name)

    if not unanswered:
        print("No hay reseñas pendientes de respuesta.")
        return

    print(f"Encontradas {len(unanswered)} reseña(s) sin responder.\n")

    for review in unanswered:
        reviewer = review.get("reviewer", {}).get("displayName", "Cliente")
        rating = review.get("starRating", 0)
        comment = review.get("comment", "").strip()
        review_name = review["name"]

        star_map = {"ONE": 1, "TWO": 2, "THREE": 3, "FOUR": 4, "FIVE": 5}
        stars = star_map.get(str(rating), 3)

        print(f"--- Reseña de {reviewer} ({stars}★) ---")
        print(f"Comentario: {comment or '(sin texto)'}")

        reply = generate_reply(comment or f"Reseña de {stars} estrellas sin comentario", stars)
        print(f"Respuesta generada: {reply}")

        if dry_run:
            print("[DRY RUN] No se publicó la respuesta.\n")
        else:
            post_reply(reviews_service, review_name, reply)
            print("Respuesta publicada.\n")
