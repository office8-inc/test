# フルスタック構成サンプル

React (Vite) + バックエンドフレームワークの組み合わせを比較検証するためのサンプルプロジェクトです。

## 📁 プロジェクト一覧

### 🔥 [Vite + Hono](./vite-hono/)
- **フロントエンド**: Vite + React + TypeScript
- **バックエンド**: Node.js + Hono
- **ポート**: Frontend: 5173, Backend: 3001

### 🐍 [Vite + FastAPI](./vite-fastapi/)
- **フロントエンド**: Vite + React + TypeScript
- **バックエンド**: Python + FastAPI
- **ポート**: Frontend: 5174, Backend: 8000

## 🎯 比較ポイント

| 項目 | Hono (Node.js) | FastAPI (Python) |
|------|----------------|------------------|
| **言語** | TypeScript/JavaScript | Python |
| **パフォーマンス** | 超高速（Bun、Cloudflare Workers対応） | 高速（非同期処理） |
| **学習曲線** | JavaScript経験者には易しい | Python経験者には易しい |
| **型安全性** | TypeScript完全サポート | Pydanticによる型検証 |
| **ドキュメント** | 手動作成 | Swagger UI自動生成 |
| **エコシステム** | npm（巨大） | pip（データ解析・AI強い） |
| **デプロイ先** | Vercel、Cloudflare Workers、Deno Deploy | Heroku、AWS Lambda、Google Cloud Run |

## 🚀 クイックスタート

### Vite + Honoを試す
```bash
cd vite-hono
docker-compose up --build
# http://localhost:5173 にアクセス
```

### Vite + FastAPIを試す
```bash
cd vite-fastapi
docker-compose up --build
# http://localhost:5174 にアクセス
```

## 💡 どちらを選ぶべき？

### Hono (Node.js) を選ぶ理由
- ✅ フロント・バック共にTypeScriptで統一したい
- ✅ 超高速なパフォーマンスが必要
- ✅ エッジコンピューティング（Cloudflare Workers等）で動かしたい
- ✅ npmエコシステムを活用したい
- ✅ 軽量でシンプルなフレームワークが好き

### FastAPI (Python) を選ぶ理由
- ✅ Python経験があり、データ処理やAI機能も組み込みたい
- ✅ 自動生成されるAPIドキュメントが欲しい
- ✅ 強力なデータバリデーションが必要
- ✅ 科学計算・機械学習ライブラリと統合したい
- ✅ Pythonの豊富なライブラリを活用したい

## 📚 機能比較

両サンプルとも同じTodoアプリを実装しています：

- ✨ Todo追加
- ✅ 完了/未完了の切り替え
- 🗑️ Todo削除
- 🔄 リアルタイムUI更新

## 🛠️ 開発環境

- Docker & Docker Compose
- VS Code（推奨）
- Node.js 18+（ローカル開発時）
- Python 3.11+（ローカル開発時）

## 📖 詳細ドキュメント

各プロジェクトの詳細は、それぞれのREADMEを参照してください：
- [Vite + Hono README](./vite-hono/README.md)
- [Vite + FastAPI README](./vite-fastapi/README.md)

## 🤝 貢献

フィードバックや改善提案は歓迎します！
