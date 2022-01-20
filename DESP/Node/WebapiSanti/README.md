# Testing docker

```
docker run -it -v %CD%:/app -w /app node node webserver.js
docker run -it -v %CD%:/app node node /app/webserver.js   


docker build -f Dockerfile.api -t srlopez/nodeapi:1.0 .
docker run srlopez/nodeapi:1.0
```