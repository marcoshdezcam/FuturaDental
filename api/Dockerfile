FROM node:alpine
WORKDIR /app
COPY ./api .
RUN npm install && rm -rf node_modules
EXPOSE 2222
CMD [ "npm", "start" ]