const fs = require('fs');

const requestHandler = (req, res) => {
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
    // for every chunk of request data we fire a function passed as the second argument
    // req.on() is a listener nad 'data' means it listens when tha data comes
    const body = [];
    req.on('data', chunk => {
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message, err => {
        // res.writeHead(302, {});
        // the same but separately:
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
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
};

// module.exports = requestHandler;

// other ways of exporting:

// module.exports = {
//   handler: requestHandler,
//   text: 'Hejka',
// };

exports.handler = requestHandler;
exports.text = 'Hejo';