const http = require('http');
const fs = require('fs');

// function rqListener(req, res) {}
// http.createServer(rqListener);
// or:
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>My Node App</title></head>');
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    fs.writeFileSync('message.txt', 'DUMMY');
    // res.writeHead(302, {});
    // the same but separately:
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
  // console.log(req.url, req.method, req.headers);
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
