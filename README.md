# alx-project-0x14

# MoviesDatabase API

## API Overview
The MoviesDatabase API is a comprehensive resource for retrieving information on movies, TV shows, and actors. It includes details such as YouTube trailer URLs, awards, full biographies, ratings, episodes, and much more.  
The database contains **over 9 million titles** (movies, series, and episodes) and **11 million actors, crew, and cast members**.  
Data is regularly updated:
- Recent titles: Weekly
- Ratings/Episodes light: Daily  

Support the developers: [Buy Me a Coffee](https://www.buymeacoffee.com/SAdrian13)

---

## Version
**Current API Version:** Refer to latest documentation (version not explicitly stated in provided text).

---

## Available Endpoints

### Titles
- **`/titles`** — Returns an array of titles according to optional filters/sorting query parameters.  
- **`/x/titles-by-ids`** — Returns an array of titles for a provided list of IMDb IDs.  
- **`/titles/{id}`** — Returns details of a specific title by IMDb ID.  
- **`/titles/{id}/ratings`** — Returns the rating and vote count for a specific title.  
- **`/titles/series/{id}`** — Returns episodes for a series, including episode and season numbers.  
- **`/titles/seasons/{id}`** — Returns the total number of seasons for a series.  
- **`/titles/series/{id}/{season}`** — Returns episodes for a specific season of a series.  
- **`/titles/episode/{id}`** — Returns details for a specific episode.  
- **`/titles/x/upcoming`** — Returns upcoming titles according to filters/sorting parameters.

### Search
- **`/titles/search/keyword/{keyword}`** — Search titles by keyword.  
- **`/titles/search/title/{title}`** — Search titles by title or part of a title.  
- **`/titles/search/akas/{aka}`** — Search titles by alternate names (exact match only).

### Actors
- **`/actors`** — Returns an array of actors according to filters.  
- **`/actors/{id}`** — Returns details for a specific actor.

### Utils
- **`/title/utils/titleType`** — Returns a list of available title types.

---

## Request and Response Format

### Example Request
```bash
POST /titles
Content-Type: application/json

{
  "page": 1,
  "year": 2024,
  "genre": "Action"
}
{
  "results": [
    {
      "id": "tt1234567",
      "titleText": { "text": "Example Movie" },
      "releaseYear": { "year": 2024 },
      "primaryImage": { "url": "https://m.media-amazon.com/example.jpg" }
    }
  ],
  "page": 1,
  "next": 2,
  "entries": 100
}

Authentication

Requests require authentication via an API key (see provider’s documentation for how to obtain one). The key should be passed in the request headers:

X-RapidAPI-Key: YOUR_API_KEY
X-RapidAPI-Host: moviesdatabase.p.rapidapi.com


---

Error Handling

Common errors include:

400 Bad Request — Invalid parameters or missing required fields.

401 Unauthorized — Invalid or missing API key.

404 Not Found — No matching records found.

429 Too Many Requests — Rate limit exceeded.


Handling tip: Always check the HTTP status code before processing the response and implement retries or user-friendly error messages where needed.
