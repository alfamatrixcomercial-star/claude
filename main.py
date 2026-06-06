#!/usr/bin/env python3
"""
Bot para responder reseñas de Google My Business con IA (Claude).

Uso:
    python main.py              # Responde reseñas reales
    python main.py --dry-run    # Solo muestra las respuestas, no las publica
"""
import argparse
from bot import run_bot


def main():
    parser = argparse.ArgumentParser(
        description="Bot que responde reseñas de Google My Business con IA"
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Genera respuestas pero NO las publica en Google",
    )
    parser.add_argument(
        "--account",
        type=int,
        default=0,
        metavar="N",
        help="Índice de la cuenta de Google Business a usar (por defecto: 0)",
    )
    parser.add_argument(
        "--location",
        type=int,
        default=0,
        metavar="N",
        help="Índice de la ubicación a usar (por defecto: 0)",
    )
    args = parser.parse_args()

    if args.dry_run:
        print("=== MODO PRUEBA (dry-run): Las respuestas NO se publicarán ===\n")

    run_bot(dry_run=args.dry_run, account_index=args.account, location_index=args.location)


if __name__ == "__main__":
    main()
