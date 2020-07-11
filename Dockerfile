FROM node:12

WORKDIR /src/app
COPY package*.json ./
RUN npm install
RUN npm i webpack -g
RUN webpack

COPY . .
EXPOSE 5000
CMD [ "npm", "run run" ]