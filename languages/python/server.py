from http.server import HTTPServer, BaseHTTPRequestHandler

class HelloHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/html; charset=utf-8')
        self.end_headers()
        html = '''
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Hello World - Python</title>
            <style>
                body {
                    margin: 0;
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
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
                <div class="emoji">🐍</div>
                <h1>Hello World from Python!</h1>
                <p>こんにちは、世界！ (Python版)</p>
            </div>
        </body>
        </html>
        '''
        self.wfile.write(html.encode('utf-8'))
    
    def log_message(self, format, *args):
        pass  # ログを抑制

if __name__ == '__main__':
    server = HTTPServer(('0.0.0.0', 8001), HelloHandler)
    print('🐍 Hello World from Python!')
    print('こんにちは、世界！ (Python版)')
    print('Server running at http://localhost:8001/')
    server.serve_forever()
