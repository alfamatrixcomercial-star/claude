import os
import json
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from config import GOOGLE_SCOPES, GOOGLE_CREDENTIALS_FILE, GOOGLE_TOKEN_FILE


def get_google_credentials() -> Credentials:
    creds = None

    if os.path.exists(GOOGLE_TOKEN_FILE):
        with open(GOOGLE_TOKEN_FILE, "r") as f:
            token_data = json.load(f)
        creds = Credentials.from_authorized_user_info(token_data, GOOGLE_SCOPES)

    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            if not os.path.exists(GOOGLE_CREDENTIALS_FILE):
                raise FileNotFoundError(
                    f"No se encontró el archivo '{GOOGLE_CREDENTIALS_FILE}'.\n"
                    "Descárgalo desde Google Cloud Console > APIs & Services > Credentials."
                )
            flow = InstalledAppFlow.from_client_secrets_file(
                GOOGLE_CREDENTIALS_FILE, GOOGLE_SCOPES
            )
            creds = flow.run_local_server(port=0)

        with open(GOOGLE_TOKEN_FILE, "w") as f:
            f.write(creds.to_json())
        print(f"Token guardado en {GOOGLE_TOKEN_FILE}")

    return creds
