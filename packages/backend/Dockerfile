FROM node:latest

# Set default environment variable
ARG JWT_SECRET_KEY=testing
ENV JWT_SECRET_KEY=$JWT_SECRET_KEY

ARG DATABASE_URL=connection
ENV DATABASE_URL=$DATABASE_URL

WORKDIR /app

COPY packages/backend/package*.json ./

RUN npm install

COPY packages/backend/. .

RUN npm run prisma:generate

RUN npm run build

EXPOSE 4000

CMD ["npm", "start"]

