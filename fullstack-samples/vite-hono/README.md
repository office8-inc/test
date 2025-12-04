# 🔥 Vite + React + Hono (Node.js)

Node.js (Hono) をバックエンドとした、Vite + React のフルスタック構成サンプルです。

## 技術スタック

### フロントエンド
- **Vite** - 高速な開発サーバー
- **React** - UIライブラリ
- **TypeScript** - 型安全性

### バックエンド
- **Hono** - 超高速なWebフレームワーク
- **Node.js** - JavaScriptランタイム
- **TypeScript** - 型安全性

## 特徴

✅ **高速な開発体験** - Viteのホットリロード + Honoの軽量性  
✅ **型安全** - フロントエンド・バックエンド共にTypeScript  
✅ **シンプルなAPI** - RESTful APIでTodoを管理  
✅ **Docker対応** - docker-composeで簡単起動  

## 起動方法

### Docker Composeで起動（推奨）

```bash
# プロジェクトディレクトリに移動
cd fullstack-samples/vite-hono

# コンテナをビルド・起動
docker-compose up --build

# バックグラウンドで起動する場合
docker-compose up -d --build
```

### ローカルで起動

#### バックエンド
```bash
cd backend
npm install
npm run dev
# http://localhost:3001 で起動
```

#### フロントエンド
```bash
cd frontend
npm install
npm run dev
# http://localhost:5173 で起動
```

## アクセス

- **フロントエンド**: http://localhost:5173
- **バックエンドAPI**: http://localhost:3001
- **API仕様**: http://localhost:3001/api/todos

## API エンドポイント

| メソッド | エンドポイント | 説明 |
|---------|---------------|------|
| GET | `/api/todos` | Todo一覧取得 |
| POST | `/api/todos` | Todo追加 |
| PATCH | `/api/todos/:id` | Todo完了切替 |
| DELETE | `/api/todos/:id` | Todo削除 |

## Honoの特徴

### メリット
- 🚀 **超高速** - Express.jsより高速なパフォーマンス
- 📦 **軽量** - 小さなバンドルサイズ
- 🔧 **シンプル** - 最小限の設定で動作
- 🌐 **エッジ対応** - Cloudflare WorkersやDeno Deployに対応
- 📝 **TypeScript完全サポート** - 型推論が優秀

### コード例
```typescript
import { Hono } from 'hono'

const app = new Hono()

app.get('/api/hello', (c) => {
  return c.json({ message: 'Hello from Hono!' })
})
```

## プロジェクト構造

```
vite-hono/
├── backend/
│   ├── src/
│   │   └── index.ts       # Honoサーバー
│   ├── package.json
│   ├── tsconfig.json
│   └── Dockerfile
├── frontend/
│   ├── src/
│   │   ├── App.tsx        # メインコンポーネント
│   │   ├── main.tsx       # エントリーポイント
│   │   └── App.css        # スタイル
│   ├── package.json
│   ├── vite.config.ts
│   └── Dockerfile
└── docker-compose.yml
```

## 停止方法

```bash
# コンテナを停止
docker-compose down

# データも削除する場合
docker-compose down -v
```
