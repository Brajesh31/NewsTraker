# Security Policy

## Current risks and limitations
The API prototype currently enables CORS for all origins and places the NewsAPI key in the upstream request URL. The frontend calls a hard-coded localhost endpoint. Express is imported by `api/index.js` but is not declared in the current package manifest.

Do not deploy this API as-is or expose a NewsAPI key in browser code.

## Before production
- Add and pin the API runtime dependencies.
- Keep `NEWS_API_KEY` in server-side environment configuration.
- Restrict CORS to trusted frontend origins.
- Validate and allowlist category values.
- Add request timeouts, rate limiting, and safe error handling.
- Avoid logging API keys or sensitive upstream response details.
- Configure the frontend API base URL for each environment.

## Reporting
Do not disclose secrets or exploitable details publicly. Use GitHub private vulnerability reporting when available, or contact the repository owner privately with impact and reproduction steps.
