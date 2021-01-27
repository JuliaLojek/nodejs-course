const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Assignment 1</title></head>');
    res.write(
      '<body><h1>Welcome!</h1><form action="/createuser" method="POST"><input name="username" type="text"><button type="submit">send</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }

  if (url === '/users') {
    res.write('<html>');
    res.write('<head><title>Assignment 1</title></head>');
    res.write('<body><ul><li>Amanda</li><li>Lisa</li><li>Tom</li></ul></body>');
    res.write('</html>');
    return res.end();
  }

  if (url === '/createuser' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split('=')[1];
        res.statusCode = 302;
        console.log(username);
        res.setHeader('Location', '/users');
        // res.write('<html>');
        // res.write('<head><title>Assignment 1</title></head>');
        // res.write('<body><h3>Thanks for creating an account!</h3></body>');
        // res.write('</html>');
        return res.end();
    });
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Assignment 1</title></head>');
  res.write('<body><h1>Hello from the server :)</h1></body>');
  res.write('</html>');
  res.end();
};

module.exports = {
  requestHandler,
};
