# Instructions for running the app locally

## Steps:

- Install [node](https://nodejs.org/) with version fixed in `.nvmrc` file.
  It is recommended to use some node version manager that supports `.nvmrc` or `.node-version` files.
  For example [nvm](https://github.com/nvm-sh/nvm)
- Make sure you have `.env` file in application root directory. Actual keys located in `.env.example` file.
- Install dependencies: `npm install`
- Update `proxy` and `proxyServer` in package.json file to `http://localhost:8000/`
- Set `REACT_APP_API_URL=http://localhost:8000/api` in .env file
- From application root directory, execute: `npm start`
- Open browser on http://localhost:3000/

## Build:

To build production static files follow the steps.

- Make sure you have `.env` file with production values.
- Install dependencies: `npm install`
- From application root directory, execute: `npm run build`
- Application will be built into `build` directory in application root.
- Run server `npm run serve`
- Open browser on http://localhost:3000/

## Docker:

It is possible to run docker locally in production like environment.
There is a Dockerfile in the repo that uses in production.
Pay attention that `docker build` can not read the `.env` file, and it needs to use `--build-arg` instead.

- Run build, replaces `key` with actual keys.

<pre>
docker image build . -t wm:prod \
    --build-arg REACT_APP_STRIPE_PUBLIC_KEY=key \
    --build-arg REACT_APP_GOOGLE_PLACES_API_KEY=key \
    --build-arg REACT_APP_SENTRY_DSN=key
    --build-arg REACT_APP_POS_DISCOUNT_PASSWORDS=key
    --build-arg REACT_APP_GTM_ID=key
</pre>

- Run container
<pre>docker container run --rm -p 3000:3000 wm:prod</pre>
- Open browser on http://localhost:3000/

## Storybook:

Components can be developed in isolation with [Storybook](https://storybook.js.org/).

- Run `npm run storybook`
- Open browser on http://localhost:9009/

# Instructions for running the app in globally

## Stage Deployment:
- Push commits to the `dev` branch.
- Watch the progress on [CircleCI](https://app.circleci.com/pipelines/github/evrone/washmix-front)
- Open browser on https://washmix.evrone.app/

## Production Deployment:
- Push commits to the `master` branch.
- ...
- Open browser on https://washmix.com/

# Scripts
- `analyze` - Runs [source-map-explorer](https://github.com/danvk/source-map-explorer) that shows a treemap
  visualization to help debug where all the code is coming from.
- `api:fetch` - Fetches swagger schema and saves it in `schema.yaml` file.
- `api:generate` - Generates api from the schema and saves it in `src/api` directory.
- `api:validate` - Validates the schema with official swagger
  [validator](https://github.com/APIDevTools/swagger-cli)
- `build` - Builds the app
- `build:static` - Builds static html pages for SEO crawlers with
  [react-snap](https://github.com/stereobooster/react-snap)
- `build:storybook` - Builds storybook static files
- `generate:icons` - Generates react icon components from svg files in `src/icons` directory.
- `lint:<scope>` - Runs linter for scope
- `lint:<scope>:fix` - Runs linter with `fix` argument for scope
- `lint:<scope>:stats` - Shows a report with statistics for scope
- `lints` - Runs all linters without fixes
- `lints:fix` - Runs all linters with fixes
- `serve` - Runs local web server on `build` directory with [http-server](https://github.com/http-party/http-server)
- `sort` - Sorts `package.json` file.
- `start` - Runs the project for development.
- `storybook` - Runs the [Storybook](https://storybook.js.org/) for development.
- `test` - Runs tests.
- `tsc:check` - Runs typescript type checking.
- `update:cssdb` - Updates database for [browserslist](https://github.com/browserslist/browserslist)
- `update:deps` - Interactively updates all dependencies.

