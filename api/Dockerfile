FROM node:18-alpine

WORKDIR /usr/api
COPY package*.json ./
RUN npm install

COPY . .
COPY .env ./
RUN npm run build

EXPOSE 8081
CMD ["npm", "run", "start:docker"]