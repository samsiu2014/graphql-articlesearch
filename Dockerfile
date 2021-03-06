FROM node:12

WORKDIR /src/app
COPY . .
RUN npm install
RUN npm i webpack -g
RUN npm i webpack-cli -g
RUN webpack
EXPOSE 5000

CMD [ "npm", "start" ]