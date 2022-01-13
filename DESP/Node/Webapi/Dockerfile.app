FROM node
WORKDIR /app
COPY webserver.js .
ENTRYPOINT [ "node", "webserver.js"]