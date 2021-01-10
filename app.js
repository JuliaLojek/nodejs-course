const http = require("http");

// function rqListener(req, res) {}
// http.createServer(rqListener);
//or:
const server = http.createServer((req, res) => {
  console.log(req);
});

server.listen(3000); //makes the process running (listening)
