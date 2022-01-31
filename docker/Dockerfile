# Dockerfile for UNISOT DID driver

FROM node:14

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8080

ENTRYPOINT ["node", "src/driver.js"]