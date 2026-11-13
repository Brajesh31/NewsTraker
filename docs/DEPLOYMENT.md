# Deployment

## Frontend build
```bash
npm ci
npm run build
```
The production frontend output is written to `build/`.

## Required API work
The current API source is not ready to deploy: Express is not declared, no API start script exists, CORS is unrestricted, and the frontend calls localhost. Resolve these issues before connecting a public frontend to the API.

## Release checklist
- Configure a deployed API URL for the frontend.
- Store NewsAPI key only in server environment secrets.
- Restrict CORS to the frontend origin.
- Validate categories and handle upstream errors.
- Configure HTTPS, timeouts, rate limiting, and monitoring.
- Test category switching and article rendering against the deployed API.

A successful React build does not verify that the separate API is available.
