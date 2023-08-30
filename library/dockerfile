FROM node:18.17-alpine

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY ./files/ files/
COPY ./routes/ routes/
COPY ./views/ views/
COPY ./index.js ./

CMD ["npm","run","library"]