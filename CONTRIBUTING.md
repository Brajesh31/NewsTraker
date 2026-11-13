# Contributing

## Frontend setup
```bash
npm ci
npm start
```

## Guidelines
- Follow the existing React component structure.
- Keep API URLs configurable rather than hard-coded to localhost.
- Keep NewsAPI credentials server-side. Never expose them through React environment variables or committed files.
- Validate category input and handle empty/error responses.
- Do not commit `.env`, credentials, private data, or generated build output.
- Do not describe the current API prototype as production-ready until its missing dependency, startup command, CORS policy, and frontend integration are resolved.

## Validation
```bash
npm ci
npm run build
```
Run tests with `npm test -- --watchAll=false` when test coverage is available.

## Pull requests
Describe the frontend and API impact separately. Include test results, environment variables, deployment implications, and screenshots for UI changes.
