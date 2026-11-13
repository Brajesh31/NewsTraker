# API Integration

## Intended endpoint
The API source defines:
- `GET /news`
- Optional query parameter: `category`
- Default category in the API source: `everything`
- Response: upstream NewsAPI article array

The frontend currently requests `http://localhost:3001/news?category=...`.

## Required setup fixes
The current repository has several gaps:
1. `api/index.js` imports Express, but Express is not listed in `package.json`.
2. There is no npm script to start the API process.
3. The frontend endpoint is hard-coded to localhost.
4. CORS currently allows every origin.
5. Category values are interpolated into the upstream URL without an allowlist.

These gaps must be resolved before deployment. Do not assume the API is runnable just because the source file exists.

## Environment
The API expects `NEWS_API_KEY` in the server environment. Keep this key server-side. Never put it in a `REACT_APP_*` variable because Create React App embeds those values into the public browser bundle.

## Production contract recommendations
Use a server-side API base URL configured per environment, allowlist supported categories, validate upstream responses, add timeouts and rate limits, and return a stable error shape without exposing the upstream key.
