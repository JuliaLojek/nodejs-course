const http = require('http');

const { handler: routes } = require('./routes');

// function rqListener(req, res) {}
// http.createServer(rqListener);
// or:
const server = http.createServer(routes);

server.listen(3000); // makes the process running (listening)
