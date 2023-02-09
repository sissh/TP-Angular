#Etape 1

FROM node:18-alpine as build

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

#Etape 2

FROM nginx:1.17.1-alpine

COPY --from=build app/dist/exercice-2 /usr/share/nginx/html

