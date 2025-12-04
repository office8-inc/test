require 'webrick'

server = WEBrick::HTTPServer.new(
  Port: 8006,
  BindAddress: '0.0.0.0',
  AccessLog: [],
  Logger: WEBrick::Log.new('/dev/null')
)

server.mount_proc '/' do |req, res|
  res.content_type = 'text/html; charset=utf-8'
  res.body = <<~HTML
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Hello World - Ruby</title>
        <style>
            body {
                margin: 0;
                min-height: 100vh;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                background: linear-gradient(135deg, #881337 0%, #f43f5e 100%);
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
            <div class="emoji">💎</div>
            <h1>Hello World from Ruby!</h1>
            <p>こんにちは、世界！ (Ruby版)</p>
        </div>
    </body>
    </html>
  HTML
end

puts '💎 Hello World from Ruby!'
puts 'こんにちは、世界！ (Ruby版)'
puts 'Server running at http://localhost:8006/'

trap('INT') { server.shutdown }
server.start
