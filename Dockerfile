# pull official base image
FROM node:13.12.0-alpine AS builder
# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package*.json ./
COPY . .
RUN npm ci
RUN npm run build

EXPOSE 8080
ENTRYPOINT [ "npm", "run", "start"]
