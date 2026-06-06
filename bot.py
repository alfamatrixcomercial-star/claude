import json
import os
from datetime import datetime, timezone
from google_auth import get_google_credentials
from reviews_client import (
    build_account_service,
    build_reviews_session,
    get_accounts,
    get_locations,
    get_unanswered_reviews,
    post_reply,
)
from ai_responder import generate_reply

STATE_FILE = "state.json"


def get_cutoff_date() -> datetime:
    if os.path.exists(STATE_FILE):
        with open(STATE_FILE, "r") as f:
            data = json.load(f)
        return datetime.fromisoformat(data["ignore_before"])
    else:
        cutoff = datetime.now(timezone.utc)
        with open(STATE_FILE, "w") as f:
            json.dump({"ignore_before": cutoff.isoformat()}, f)
        print(f"Primera ejecución. Ignorando reseñas anteriores a: {cutoff.strftime('%d/%m/%Y %H:%M')} UTC")
        return cutoff


def is_new_review(review: dict, cutoff: datetime) -> bool:
    create_time = review.get("createTime")
    if not create_time:
        return False
    review_date = datetime.fromisoformat(create_time.replace("Z", "+00:00"))
    return review_date >= cutoff


def run_bot(dry_run: bool = False, account_index: int = 0, location_index: int = 0):
    print("Autenticando con Google...")
    creds = get_google_credentials()

    cutoff = get_cutoff_date()

    account_service = build_account_service(creds)
    reviews_session = build_reviews_session(creds)

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

    print("Buscando reseñas nuevas sin responder...")
    all_unanswered = get_unanswered_reviews(reviews_session, location_name)
    unanswered = [r for r in all_unanswered if is_new_review(r, cutoff)]

    skipped = len(all_unanswered) - len(unanswered)
    if skipped > 0:
        print(f"Reseñas antiguas ignoradas: {skipped}")

    if not unanswered:
        print("No hay reseñas nuevas pendientes de respuesta.")
        return

    print(f"Encontradas {len(unanswered)} reseña(s) nueva(s) sin responder.\n")

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
            post_reply(reviews_session, review_name, reply)
            print("Respuesta publicada.\n")
