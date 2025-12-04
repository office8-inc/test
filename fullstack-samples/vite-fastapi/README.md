# 🐍 Vite + React + FastAPI (Python)

Python (FastAPI) をバックエンドとした、Vite + React のフルスタック構成サンプルです。

## 技術スタック

### フロントエンド
- **Vite** - 高速な開発サーバー
- **React** - UIライブラリ
- **TypeScript** - 型安全性

### バックエンド
- **FastAPI** - 高速なPython Webフレームワーク
- **Uvicorn** - ASGIサーバー
- **Pydantic** - データバリデーション

## 特徴

✅ **高速な開発体験** - Viteのホットリロード + FastAPIの自動リロード  
✅ **自動ドキュメント生成** - Swagger UI / ReDoc が自動生成  
✅ **型安全** - TypeScript (フロント) + Pydantic (バック)  
✅ **シンプルなAPI** - RESTful APIでTodoを管理  
✅ **Docker対応** - docker-composeで簡単起動  

## 起動方法

### Docker Composeで起動（推奨）

```bash
# プロジェクトディレクトリに移動
cd fullstack-samples/vite-fastapi

# コンテナをビルド・起動
docker-compose up --build

# バックグラウンドで起動する場合
docker-compose up -d --build
```

### ローカルで起動

#### バックエンド
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
# http://localhost:8000 で起動
```

#### フロントエンド
```bash
cd frontend
npm install
npm run dev
# http://localhost:5174 で起動
```

## アクセス

- **フロントエンド**: http://localhost:5174
- **バックエンドAPI**: http://localhost:8000
- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

## API エンドポイント

| メソッド | エンドポイント | 説明 |
|---------|---------------|------|
| GET | `/api/todos` | Todo一覧取得 |
| POST | `/api/todos` | Todo追加 |
| PATCH | `/api/todos/{todo_id}` | Todo完了切替 |
| DELETE | `/api/todos/{todo_id}` | Todo削除 |

## FastAPIの特徴

### メリット
- ⚡ **高速** - NodeJSやGoと同等のパフォーマンス
- 📚 **自動ドキュメント** - Swagger UI / ReDocが自動生成
- 🔒 **型安全** - Pydanticによる強力なバリデーション
- 🛠️ **簡単な開発** - Pythonの直感的な構文
- 🔄 **非同期対応** - async/awaitをネイティブサポート

### コード例
```python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str
    price: float

@app.post("/items/")
async def create_item(item: Item):
    return {"item": item}
```

## プロジェクト構造

```
vite-fastapi/
├── backend/
│   ├── main.py            # FastAPIサーバー
│   ├── requirements.txt
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

## 自動生成されるAPIドキュメント

FastAPIでは、コードから自動的にインタラクティブなAPIドキュメントが生成されます：

- **Swagger UI**: http://localhost:8000/docs - APIをブラウザから直接テスト可能
- **ReDoc**: http://localhost:8000/redoc - 美しいドキュメント表示

## 停止方法

```bash
# コンテナを停止
docker-compose down

# データも削除する場合
docker-compose down -v
```
