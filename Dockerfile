FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

RUN npm install sqlite3
RUN npm rebuild sqlite3

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]