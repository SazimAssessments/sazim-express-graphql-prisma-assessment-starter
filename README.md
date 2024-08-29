## Express-GQL-Prisma Starter Template

[Here](https://github.com/SazimAssessments/sazim-express-graphql-prisma-assessment-starter) is a starter repository to fork off of. You are open to using it and you are also welcome to change some minor packages (like forms and schema validation) if you are more familiar with other packages

## Installation

Make sure you have `nvm` installed. Then, run the following commands:

```bash
$ nvm use
```

Node v20 set by default.

```bash
$ yarn install
```

## Tech Stack

- Express
- Prisma
- GraphQL

## Environment Variables

For local development and testing, please create the following files at the root of the project directory:

- `.env`

You can follow `env.example` to specify which env variables are needed for the project as a guideline, and the above file can be created based off of this file.

## Setup DB

Once db url is setup in the `.env`, run the following commands:

```bash
$ npx prisma generate
```

```bash
$ npx prisma db push
```

## Running the app (Local)

```bash
# development
$ yarn start:dev
```

```bash
# build
$ yarn build && yarn start
```

Run the following query in the GraphiQL environment to access the status endpoint:

```
query {
  getStatus
}
```

## Running the app (Docker)

Replace `DATABASE_URL` in your `.env` with the one for docker from `.env.example`

Note that username, password and dbname must match the same values in database-environment service in `docker.compose`

Ensure docker is installed and running on your machine and run the following command from the root of your project:

```bash
$ docker compose up
```

Run the following query in the GraphiQL environment to access the status endpoint:

```
query {
  getStatus
}
```

## Test

```bash
$ yarn run test
```

## Acknowledgement

- Based on [express-template](https://github.com/firmanJS/express-template) by [firmanJS](https://github.com/firmanJS)
