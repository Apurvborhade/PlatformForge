FROM node:20-alpine AS worker

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .


EXPOSE 4000

CMD ["npm", "start"]
