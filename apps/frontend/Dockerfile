FROM node:20-alpine AS frontend

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 5173

FROM nginx:alpine

COPY --from=frontend /app/dist /usr/share/nginx/html

EXPOSE 80