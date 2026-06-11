const http = require('http');

const server = http.createServer((req, res) => {
  res.write("CI/CD Pipeline Working Successfully!This is my poc-22");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
