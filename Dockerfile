FROM node:12

WORKDIR /src/app
COPY package*.json ./
RUN npm install
RUN webpack

COPY . .
EXPOSE 5000
CMD [ "node", "./dist/app.js" ]