import os
from dotenv import load_dotenv

load_dotenv()

ANTHROPIC_API_KEY = os.getenv("ANTHROPIC_API_KEY")
BUSINESS_NAME = os.getenv("BUSINESS_NAME", "Mi Negocio")
RESPONSE_LANGUAGE = os.getenv("RESPONSE_LANGUAGE", "es")
GOOGLE_CREDENTIALS_FILE = os.getenv("GOOGLE_CREDENTIALS_FILE", "credentials.json")
GOOGLE_TOKEN_FILE = os.getenv("GOOGLE_TOKEN_FILE", "token.json")

GOOGLE_SCOPES = [
    "https://www.googleapis.com/auth/business.manage"
]

if not ANTHROPIC_API_KEY:
    raise ValueError("Falta ANTHROPIC_API_KEY en el archivo .env")
