# Movies JavaScript Exercise

## Problem Description

The goal of this exercise is to display a list of actors who have been in a movie with both Nicolas Cage and Keanu Reeves (but not necessarily at the same time).

This document describes the API endpoints available to you that contain all the data needed to identify these actors and validate the results.
You may use any JavaScript SPA framework to complete this exercise (we use Angular). When you have completed the project, send the results to your recruiter. A shared link to Google Drive or Dropbox is preferred. You may also zip the entire folder and include it as an email attachment. Remember to
remove node_modules, and include steps to build and run your solution in your email (e.g. unzip, then run ng start).

## Display

Create a single web page that displays the final list of actors and the response from the validation endpoint. This page can also display any other information you deem relevant.

## About the Data

The data used in this exercise was downloaded from IMDB. It is not a complete dataset and may not contain your movies.

## Basics
Authentication is provided by the presence of the x-chmura-cors header. You have been assigned a personal access token that should be sent as the value for this header. In the curl examples below, `<access_token>` should be substituted with your personal access token.

## Movies

Provides a list of movies and the actors that starred in them.

```bash
curl --request GET \
  --url https://switch-yam-equator.azurewebsites.net/api/movies \
  --header 'x-chmura-cors: <access_token>'
```
```json
[
  {
    "movieId": 365478,
    "title": "Man with the Screaming Brain",
    "actors": [331341, 132257, 126364, 1646]
  }, ...
]
```

## Actors

Provides a list of actors and their IDs.

```bash
curl --request GET \
  --url https://switch-yam-equator.azurewebsites.net/api/actors \
  --header 'x-chmura-cors: <access_token>'
```

```json
[
  {
    "actorId": 168,
    "title": "Samuel L. Jackson"
  }, ...
]
```

## Validation

Accepts results in JSON format and returns an HTTP 200 response if the data are correct.

```bash
curl --request POST \
  --url https://switch-yam-equator.azurewebsites.net/api/validation \
  --header 'x-chmura-cors: <access_token>' \
  --data '<results>'
```

```json
[
  {
    "Name": "Alan Smithee",
    "KRMovies": [
      "The Matrix",
      "The Matrix Revolutions"
    ]
    "NCMovies": [
      "Gone in Sixty Seconds"
    ]
  }, ...
]
```
