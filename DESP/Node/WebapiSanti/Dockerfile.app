FROM node
WORKDIR /app
COPY webserver.js .
CMD [ "node", "webserver.js"]
