# Testing

## Frontend build
```bash
npm ci
npm run build
```

## Existing test command
```bash
npm test -- --watchAll=false
```

## Manual checks
1. Start the frontend.
2. Confirm the default category renders or displays a useful error when the API is unavailable.
3. Switch between General, Business, and Technology.
4. Confirm a category change triggers the expected request.
5. Verify article title, description, image, and link rendering.
6. Test empty responses, failed requests, and invalid category values.
7. Confirm the browser never receives the NewsAPI key.

The current frontend calls localhost:3001 directly, so remote deployment requires API URL configuration first.
