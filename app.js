const http = require('http');

const server = http.createServer((req, res) => {
  res.write("Hi Team,My CI/CD Pipeline Working Successfully!Welcome to my poc-22");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
