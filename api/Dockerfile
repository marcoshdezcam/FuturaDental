FROM node:alpine
WORKDIR /app
COPY ./api .
RUN npm install
EXPOSE 2222
CMD [ "npm", "run", "dev" ]