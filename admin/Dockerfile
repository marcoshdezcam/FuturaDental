FROM node
WORKDIR /usr/src/app
COPY . .
RUN npm install \
    && npm install -g serve \
    && npm run build \
    && rm -fr node_modules
EXPOSE 3030
# Start the app using serve command
CMD [ "serve", "-s", "build" ]