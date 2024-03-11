<h1>Full Stack challenge - Frontend App</h1>

## Live Demo

Demo: https://full-stack-challenge-ale.vercel.app/

## 🚀 Getting Started


### How to run application

1. Install dependencies:
    ```
    npm install
    ```
2. Start by creating a new .env file using this format, ensuring all variables are filled in as they are **required**:
    ```bash
    POSTGRES_USER=
    POSTGRES_PASSWORD=
    POSTGRES_DB=
    
    JWT_SECRET_KEY=
    
    DATABASE_URL=postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@localhost:5432/${POSTGRES_DB}?schema=public
    ```
2. Start postgres database with:
    ```
    docker-compose up
    ```
   This command initializes the database using the **docker-compose.yml** file located in the folder, utilizing the variables specified in the .env file.


3. Execute the command to initialize the database schema, generate types, and seed data (available only in the development environment):
    ```
    npm run db:startup
    ```
4. To start the app in server mode, run the following command:
    ```
    npm run dev
    ```
   ***Note:*** This command includes the codegen generator, which means it runs both the GraphQL server and the Codegen in parallel, continuously watching for any modifications to GraphQL files to create new types.

#### Dockerfile

To make your own container, you can utilize the existing Dockerfile to run the backend application, but this implementation does not include seeder execution as it can use for production environments.

### Run tests

```
npm run test
```

