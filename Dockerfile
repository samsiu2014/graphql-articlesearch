FROM node:12

WORKDIR /src/app
COPY package*.json ./
RUN npm install
RUN npm i webpack -g
COPY . .
RUN webpack
EXPOSE 5000

CMD [ "npm", "start" ]