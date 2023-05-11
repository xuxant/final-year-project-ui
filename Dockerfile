FROM node:alpine as build

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/build /app/build /usr/share/nginx/html

ENV PORT=$PORT

EXPOSE $PORT
