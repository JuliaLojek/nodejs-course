const http = require("http");

// function rqListener(req, res) {}
// http.createServer(rqListener);
// or:
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  // process.exit(); // quits the process of running an event loop (server)
  res.setHeader('Content-Type', 'text/html'); // later we'll do it with packages, not manually
  // writing multiple lines to the response:
  res.write('<html>');
  res.write('<head><title>My Node App</title></head>');
  res.write('<body><h1>Hello from the server :)</h1></body>');
  res.write('</html>');
  // informing node that we finished writing headers and res body:
  res.end();
});

server.listen(3000); // makes the process running (listening)
