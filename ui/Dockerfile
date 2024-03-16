FROM node:18-alpine
COPY . .
RUN npm ci
RUN npm run build
RUN npm install -g serve

WORKDIR /usr/app
COPY dist .
EXPOSE 3000
CMD serve -p 3000 -s .