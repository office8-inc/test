# 🌐 Fullstack Development Samples

ViteとReactを使ったフルスタック開発の比較サンプルプロジェクトです。

## 📁 プロジェクト構成

```
test/
├── fullstack-samples/      # フルスタックサンプル
│   ├── vite-hono/          # Vite + React + Hono (Node.js)
│   ├── vite-fastapi/       # Vite + React + FastAPI (Python)
│   └── README.md           # サンプル比較ガイド
├── languages/              # 各言語のHTTPサーバーサンプル
│   ├── python/             # Python HTTP Server
│   ├── nodejs/             # Node.js HTTP Server
│   ├── go/                 # Go HTTP Server
│   ├── java/               # Java HTTP Server
│   ├── csharp/             # C# HTTP Server
│   ├── nextjs/             # Next.js (React SSR)
│   └── ruby/               # Ruby HTTP Server
├── docker-compose.yml      # 言語サーバー一括起動
└── README.md               # このファイル
```

## 🎯 フルスタックサンプル

バックエンドフレームワークの比較検証用サンプルです。同じTodoアプリを異なるバックエンドで実装しています。

| サンプル | フロントエンド | バックエンド | ポート |
|---------|---------------|-------------|--------|
| 🔥 **Vite + Hono** | Vite + React + TypeScript | Node.js + Hono | 5173, 3001 |
| 🐍 **Vite + FastAPI** | Vite + React + TypeScript | Python + FastAPI | 5174, 8000 |

### 起動方法

```bash
# Hono版を起動
cd fullstack-samples/vite-hono
docker-compose up --build

# FastAPI版を起動
cd fullstack-samples/vite-fastapi
docker-compose up --build
```

詳しくは [fullstack-samples/README.md](./fullstack-samples/README.md) をご覧ください。

## 🌍 言語別HTTPサーバー

各言語でブラウザ表示可能なHTTPサーバーを実装しています。

| 言語 | バージョン | ポート | 特徴 |
|------|------------|--------|------|
| 🐍 **Python** | 3.11 | 8001 | http.server モジュール |
| 🟨 **Node.js** | 18 | 8002 | Native http module |
| 🔵 **Go** | 1.21 | 8003 | net/http package |
| ☕ **Java** | 17 | 8004 | HttpServer |
| 💜 **C#** | .NET 8.0 | 8005 | HttpListener |
| ⚛️ **Next.js** | 14.0 | 3000 | React + SSR + Hot Reload |
| 💎 **Ruby** | 3.2 | 8006 | WEBrick |

### 起動方法

```bash
# すべての言語サーバーを起動
docker-compose up -d

# 特定の言語のみ起動
docker-compose up -d python
docker-compose up -d nextjs

# 停止
docker-compose down
```

### アクセス

- Python: http://localhost:8001
- Node.js: http://localhost:8002
- Go: http://localhost:8003
- Java: http://localhost:8004
- C#: http://localhost:8005
- Ruby: http://localhost:8006
- Next.js: http://localhost:3000

## 🚀 必要な環境

- Docker Desktop
- VS Code (推奨)

## 📚 学習リソース

このリポジトリは以下を学ぶのに最適です：

- **フルスタック開発**: Vite + React + バックエンドAPI
- **Docker**: コンテナ化、マルチサービス構成
- **HTTPサーバー**: 各言語でのサーバー実装
- **フレームワーク比較**: Hono vs FastAPI

---

詳細は各ディレクトリのREADMEをご覧ください。

## 📄 ライセンス

MIT License

## 🙋‍♂️ 作成者

**office8-inc** - GitHub: [@office8-inc](https://github.com/office8-inc)

---

*このプロジェクトは、様々なプログラミング言語とDockerの学習目的で作成されました。*