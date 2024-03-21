FROM node:18-alpine as build
COPY . .
RUN npm ci
RUN npm run build

FROM node:18-alpine as deploy
EXPOSE 3000
COPY --from=build dist .
RUN npm install -g serve
CMD serve -p 3000 -s .