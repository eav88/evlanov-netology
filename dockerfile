FROM node:18.17-alpine

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY ./index.js ./
COPY ./models ./models
COPY ./routes ./routes

CMD ["npm","run","dev"]