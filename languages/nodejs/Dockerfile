FROM node:18-slim

WORKDIR /app

COPY package.json hello.js ./

RUN npm install

CMD ["npm", "start"]