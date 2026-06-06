from googleapiclient.discovery import build
from google.oauth2.credentials import Credentials
from typing import Optional


def build_mybusiness_service(creds: Credentials):
    return build(
        "mybusinessaccountmanagement",
        "v1",
        credentials=creds,
        discoveryServiceUrl="https://mybusinessaccountmanagement.googleapis.com/$discovery/rest?version=v1",
    )


def build_reviews_service(creds: Credentials):
    return build(
        "mybusiness",
        "v4",
        credentials=creds,
        discoveryServiceUrl="https://mybusiness.googleapis.com/$discovery/rest",
    )


def get_accounts(service) -> list[dict]:
    result = service.accounts().list().execute()
    return result.get("accounts", [])


def get_locations(reviews_service, account_name: str) -> list[dict]:
    result = reviews_service.accounts().locations().list(
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

        result = reviews_service.accounts().locations().reviews().list(**kwargs).execute()
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
    result = (
        reviews_service.accounts()
        .locations()
        .reviews()
        .updateReply(name=review_name, body=body)
        .execute()
    )
    return result
