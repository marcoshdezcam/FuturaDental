FROM node:alpine
WORKDIR /app
COPY ./admin .
RUN npm install && npm install -g serve \
    && npm run build \
    && rm -rf node_modules
EXPOSE 3000
# Start the app using serve command
CMD [ "serve", "-s", "build" ]