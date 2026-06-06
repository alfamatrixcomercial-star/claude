from googleapiclient.discovery import build
from google.oauth2.credentials import Credentials


def build_account_service(creds: Credentials):
    return build(
        "mybusinessaccountmanagement",
        "v1",
        credentials=creds,
        discoveryServiceUrl="https://mybusinessaccountmanagement.googleapis.com/$discovery/rest?version=v1",
    )


def build_reviews_service(creds: Credentials):
    return build(
        "mybusinessreviews",
        "v1",
        credentials=creds,
        discoveryServiceUrl="https://mybusinessreviews.googleapis.com/$discovery/rest?version=v1",
    )


def get_accounts(service) -> list[dict]:
    result = service.accounts().list().execute()
    return result.get("accounts", [])


def get_locations(service, account_name: str) -> list[dict]:
    result = service.accounts().locations().list(
        parent=account_name
    ).execute()
    return result.get("locations", [])


def get_unanswered_reviews(reviews_service, location_name: str) -> list[dict]:
    unanswered = []
    page_token = None

    while True:
        kwargs = {"parent": location_name, "pageSize": 50}
        if page_token:
            kwargs["pageToken"] = page_token

        result = reviews_service.locations().reviews().list(**kwargs).execute()
        reviews = result.get("reviews", [])

        for review in reviews:
            if not review.get("reviewReply"):
                unanswered.append(review)

        page_token = result.get("nextPageToken")
        if not page_token:
            break

    return unanswered


def post_reply(reviews_service, review_name: str, reply_text: str) -> dict:
    body = {"comment": reply_text}
    return reviews_service.locations().reviews().updateReply(
        name=review_name, body=body
    ).execute()
