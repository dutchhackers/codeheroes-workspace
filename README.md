# Codeheroes Development Setup

## Applications Overview

| App name | Stack setup                 | Status  | Description              |
| -------- | --------------------------- | ------- | ------------------------ |
| api      | NestJS + GraphQL + Sheets   | Pending | Codeheroes API (backend) |

## Development setup

If you wish to develop or contribute to this repo, we suggest the following:

- Clone this repository

```
git clone https://github.com/dutchhackers/codeheroes-workspace
cd codeheroes-workspace
```

- Install this project's dependencies on your computer

```
npm install
```

Advised to use Node version 16 (or higher).

Tip: if you have nvm installed, you can run `nvm use` to auto-detect the preferred Node version

- Create .env file

Create a `.env` file in the root folder

Tip: copy `sample.env` to `.env` and fill in the environment variables

```

NODE_ENV=development
PORT=5001

```

### Run Codeheroes API locally

- Run Codeheroes API (GraphQL)

```
nx serve graph-api
```

Go to http://localhost:5001/graphql to open the Apollo GraphQL sandbox

### General commands

- build application

```
nx build graph-api
```

- test application

```
nx test graph-api
```

- lint application

```
nx lint graph-api
```
