# Development

## Frontend
```bash
npm ci
npm start
```
Open <http://localhost:3000/>.

## Commands
- `npm start`: React development server.
- `npm run build`: production frontend build.
- `npm test -- --watchAll=false`: run tests once, when tests are available.

## Code areas
- `src/App.js`: category state and article requests.
- `src/component/Cards/newsCard.jsx`: article presentation.
- `src/App.css` and `src/index.css`: UI styles.
- `api/index.js`: separate API prototype, not started by the frontend command.

Do not put upstream API keys in frontend configuration. Keep local environment files untracked.
