import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpExchange;
import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;

public class Server {
    public static void main(String[] args) throws IOException {
        HttpServer server = HttpServer.create(new InetSocketAddress(8004), 0);
        server.createContext("/", new HelloHandler());
        server.setExecutor(null);
        
        System.out.println("☕ Hello World from Java!");
        System.out.println("こんにちは、世界！ (Java版)");
        System.out.println("Server running at http://localhost:8004/");
        
        server.start();
    }

    static class HelloHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            String html = """
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <title>Hello World - Java</title>
                <style>
                    body {
                        margin: 0;
                        min-height: 100vh;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        background: linear-gradient(135deg, #7c2d12 0%, #ea580c 100%);
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
                    <div class="emoji">☕</div>
                    <h1>Hello World from Java!</h1>
                    <p>こんにちは、世界！ (Java版)</p>
                </div>
            </body>
            </html>
            """;
            
            exchange.getResponseHeaders().set("Content-Type", "text/html; charset=utf-8");
            exchange.sendResponseHeaders(200, html.getBytes("UTF-8").length);
            OutputStream os = exchange.getResponseBody();
            os.write(html.getBytes("UTF-8"));
            os.close();
        }
    }
}
