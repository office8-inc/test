package main

import (
	"fmt"
	"net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	html := `
	<!DOCTYPE html>
	<html>
	<head>
		<meta charset="UTF-8">
		<title>Hello World - Go</title>
		<style>
			body {
				margin: 0;
				min-height: 100vh;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				background: linear-gradient(135deg, #0c4a6e 0%, #0ea5e9 100%);
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
			<div class="emoji">🔵</div>
			<h1>Hello World from Go!</h1>
			<p>こんにちは、世界！ (Go版)</p>
		</div>
	</body>
	</html>
	`
	fmt.Fprint(w, html)
}

func main() {
	http.HandleFunc("/", handler)
	fmt.Println("🔵 Hello World from Go!")
	fmt.Println("こんにちは、世界！ (Go版)")
	fmt.Println("Server running at http://localhost:8003/")
	http.ListenAndServe(":8003", nil)
}
