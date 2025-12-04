using System;
using System.Net;
using System.Text;

class Server
{
    static void Main()
    {
        HttpListener listener = new HttpListener();
        listener.Prefixes.Add("http://*:8005/");
        listener.Start();
        
        Console.WriteLine("💜 Hello World from C#!");
        Console.WriteLine("こんにちは、世界！ (C#版)");
        Console.WriteLine("Server running at http://localhost:8005/");

        while (true)
        {
            HttpListenerContext context = listener.GetContext();
            HttpListenerResponse response = context.Response;
            
            string html = @"
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset='UTF-8'>
                <title>Hello World - C#</title>
                <style>
                    body {
                        margin: 0;
                        min-height: 100vh;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        background: linear-gradient(135deg, #581c87 0%, #a855f7 100%);
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
                <div class='container'>
                    <div class='emoji'>💜</div>
                    <h1>Hello World from C#!</h1>
                    <p>こんにちは、世界！ (C#版)</p>
                </div>
            </body>
            </html>
            ";
            
            byte[] buffer = Encoding.UTF8.GetBytes(html);
            response.ContentType = "text/html; charset=utf-8";
            response.ContentLength64 = buffer.Length;
            response.OutputStream.Write(buffer, 0, buffer.Length);
            response.OutputStream.Close();
        }
    }
}
