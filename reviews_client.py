from googleapiclient.discovery import build
from google.oauth2.credentials import Credentials
from google.auth.transport.requests import AuthorizedSession

REVIEWS_BASE = "https://mybusinessreviews.googleapis.com/v1"


def build_account_service(creds: Credentials):
    return build(
        "mybusinessaccountmanagement",
        "v1",
        credentials=creds,
        discoveryServiceUrl="https://mybusinessaccountmanagement.googleapis.com/$discovery/rest?version=v1",
    )


def build_reviews_session(creds: Credentials) -> AuthorizedSession:
    return AuthorizedSession(creds)


def get_accounts(service) -> list[dict]:
    result = service.accounts().list().execute()
    return result.get("accounts", [])


def get_locations(service, account_name: str) -> list[dict]:
    result = service.accounts().locations().list(
        parent=account_name
    ).execute()
    return result.get("locations", [])


def get_unanswered_reviews(session: AuthorizedSession, location_name: str) -> list[dict]:
    unanswered = []
    page_token = None

    while True:
        url = f"{REVIEWS_BASE}/{location_name}/reviews"
        params = {"pageSize": 50}
        if page_token:
            params["pageToken"] = page_token

        response = session.get(url, params=params)
        response.raise_for_status()
        data = response.json()

        for review in data.get("reviews", []):
            if not review.get("reviewReply"):
                unanswered.append(review)

        page_token = data.get("nextPageToken")
        if not page_token:
            break

    return unanswered


def post_reply(session: AuthorizedSession, review_name: str, reply_text: str) -> dict:
    url = f"{REVIEWS_BASE}/{review_name}/reply"
    response = session.put(url, json={"comment": reply_text})
    response.raise_for_status()
    return response.json()
