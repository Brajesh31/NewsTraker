# NewsTraker

NewsTraker is a React 18 news-category interface with a small Node-style API prototype intended to fetch articles from NewsAPI. The frontend displays categories and article cards. The API source is in `api/index.js`.

> This repository is an incomplete development prototype, not a production news service. The frontend currently calls `http://localhost:3001` directly, the API has unrestricted CORS, and the API source imports Express even though Express is not declared in the current `package.json`. Review [docs/API.md](docs/API.md) before attempting to run or deploy the API.

## Current frontend features
- React interface for general, business, and technology categories.
- Category selection and manual refresh.
- Article cards rendered from API response data.
- Axios for HTTP requests.

## Technology
- React 18
- Create React App / `react-scripts` 5
- Axios
- Node.js API prototype using Express, Axios and CORS imports
- NewsAPI as the intended upstream provider

## Repository structure
```text
src/
  App.js                  Category selection and article fetching
  component/Cards/        Article card component
  App.css
  index.css
api/
  index.js                NewsAPI proxy prototype
public/
  index.html
  manifest.json
  robots.txt
```

## Requirements
- Node.js and npm.
- The repository's `package-lock.json`.

## Frontend setup
```bash
git clone https://github.com/Brajesh31/NewsTraker.git
cd NewsTraker
npm ci
npm start
```

Open <http://localhost:3000/>.

## API setup status
The API source expects `NEWS_API_KEY` and defaults to port 3001. However, Express is missing from the current dependency manifest, and there is no API start script. The frontend is hard-coded to call localhost. These are known integration gaps, not completed setup steps. See [API documentation](docs/API.md) for the required work.

## Scripts
| Command | Purpose |
| --- | --- |
| `npm start` | Start the React development server |
| `npm run build` | Create the production frontend build |
| `npm test` | Run Create React App tests in watch mode |
| `npm run eject` | Eject Create React App configuration, irreversible |

## Security and privacy
Keep the NewsAPI key on the server and out of the React bundle. Restrict CORS to the deployed frontend origin, validate category values, and avoid logging secrets. Do not commit `.env` files. See [SECURITY.md](SECURITY.md).

## Documentation
- [Architecture](docs/ARCHITECTURE.md)
- [API integration and setup gaps](docs/API.md)
- [Development](docs/DEVELOPMENT.md)
- [Deployment](docs/DEPLOYMENT.md)
- [Testing](docs/TESTING.md)

## Contributing and license
See [CONTRIBUTING.md](CONTRIBUTING.md). Licensed under MIT, see [LICENSE](LICENSE).

Last updated: 2026-11-13 20:11 UTC
