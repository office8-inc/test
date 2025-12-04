FROM golang:1.21-alpine

WORKDIR /app

COPY go.mod go.sum* ./
RUN go mod download

COPY server.go .

CMD ["go", "run", "server.go"]