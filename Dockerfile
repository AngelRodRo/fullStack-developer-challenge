FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY packages/backend .

RUN npm run prisma:initmigrate

RUN npm run prisma:seed

RUN npm run build

EXPOSE 4000

CMD ["npm", "start"]
