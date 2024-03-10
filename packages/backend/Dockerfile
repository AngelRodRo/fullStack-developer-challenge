FROM node:latest

WORKDIR /app

COPY packages/backend/package*.json ./

RUN npm install

COPY packages/backend/. .

RUN npm run prisma:generate

RUN npm run build

EXPOSE 4000

CMD ["npm", "start"]
