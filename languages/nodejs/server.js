const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Hello World - Node.js</title>
        <style>
          body {
            margin: 0;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #15803d 0%, #22c55e 100%);
            color: #ffffff;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }
          .container {
            text-align: center;
            padding: 2rem;
          }
          h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
          }
          p {
            font-size: 1.5rem;
          }
          .emoji {
            font-size: 5rem;
            margin-bottom: 1rem;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="emoji">🟨</div>
          <h1>Hello World from Node.js!</h1>
          <p>こんにちは、世界！ (Node.js版)</p>
        </div>
      </body>
    </html>
  `);
});

const PORT = 8002;
server.listen(PORT, '0.0.0.0', () => {
  console.log('🟨 Hello World from Node.js!');
  console.log('こんにちは、世界！ (Node.js版)');
  console.log(`Server running at http://localhost:${PORT}/`);
});
