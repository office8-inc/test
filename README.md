# 🌍 Multi-Language Hello World with Docker

様々なプログラミング言語でHello Worldを表示するDockerベースのプロジェクトです。

## 📁 プロジェクト構造

```
test/
├── languages/
│   ├── python/          # Python Hello World
│   ├── nodejs/          # Node.js Hello World
│   ├── go/              # Go Hello World
│   ├── java/            # Java Hello World
│   ├── csharp/          # C# Hello World
│   ├── nextjs/          # Next.js Hello World
│   └── ruby/            # Ruby Hello World
├── scripts/
│   └── run.ps1          # 高度な実行スクリプト
├── docker-compose.yml   # 全言語一括実行
├── run-all.ps1          # 簡単実行スクリプト
└── README.md            # このファイル
```

## 🎯 対応言語

| 言語 | バージョン | コンテナサイズ | 特徴 |
|------|------------|----------------|------|
| 🐍 **Python** | 3.11 | ~45MB | シンプルで読みやすい |
| 🟨 **Node.js** | 18 | ~35MB | JavaScriptランタイム |
| 🔵 **Go** | 1.21 | ~10MB | 高速・軽量バイナリ |
| ☕ **Java** | 17 | ~70MB | JVM言語の代表 |
| 💜 **C#** | .NET 8.0 | ~55MB | マイクロソフト製 |
| ⚛️ **Next.js** | 14.0 | ~85MB | React + SSR |
| 💎 **Ruby** | 3.2 | ~40MB | 開発者フレンドリー |

## 🚀 クイックスタート

### 必要な環境
- Docker Desktop
- PowerShell (Windows標準)

### すべての言語を一括実行（並列）
```powershell
.\run-all.ps1
```

### すべての言語を順番に実行（順次）
```powershell
.\run-sequential.ps1
```

### 特定の言語のみ実行
```powershell
# Python のみ
docker-compose run --rm python

# Node.js のみ
docker-compose run --rm nodejs

# Go のみ
docker-compose run --rm go

# Next.js のみ（Webサーバー起動）
docker-compose run --rm -p 3000:3000 nextjs

# Ruby のみ
docker-compose run --rm ruby
```

## 🛠️ 高度な使用方法

### 詳細スクリプトを使用
```powershell
# すべての言語を並列実行
.\scripts\run.ps1

# すべての言語を順次実行（キー入力で次へ）
.\scripts\run.ps1 -Sequential

# 特定の言語のみ
.\scripts\run.ps1 -Language python
.\scripts\run.ps1 -Language nextjs
.\scripts\run.ps1 -Language ruby

# ビルドから実行
.\scripts\run.ps1 -Build

# ビルドから順次実行
.\scripts\run.ps1 -Build -Sequential

# クリーンアップ
.\scripts\run.ps1 -Clean
```

### 手動でDocker操作
```powershell
# すべてビルド
docker-compose build

# すべて実行
docker-compose up

# 特定の言語をビルドして実行
docker-compose up --build python

# クリーンアップ
docker-compose down --rmi all
```

## 📝 各言語の詳細

### Python (languages/python/)
- **ファイル**: `hello.py`
- **特徴**: UTF-8対応、日本語メッセージ
- **実行**: `python hello.py`

### Node.js (languages/nodejs/)
- **ファイル**: `hello.js`, `package.json`
- **特徴**: npm scripts対応
- **実行**: `npm start`

### Go (languages/go/)
- **ファイル**: `hello.go`, `go.mod`
- **特徴**: マルチステージビルドで軽量化
- **実行**: `go run hello.go`

### Java (languages/java/)
- **ファイル**: `HelloWorld.java`
- **特徴**: コンパイル＋実行
- **実行**: `javac HelloWorld.java && java HelloWorld`

### C# (languages/csharp/)
- **ファイル**: `Program.cs`, `HelloWorld.csproj`
- **特徴**: .NET 8.0、マルチステージビルド
- **実行**: `dotnet run`

### Next.js (languages/nextjs/)
- **ファイル**: `pages/index.tsx`, `package.json`
- **特徴**: React + SSR、TypeScript対応
- **実行**: `npm run dev` (開発) / `npm start` (本番)

### Ruby (languages/ruby/)
- **ファイル**: `hello.rb`, `Gemfile`
- **特徴**: 簡潔な文法、UTF-8ネイティブサポート
- **実行**: `ruby hello.rb`

## 🎨 カスタマイズ

### 新しい言語を追加するには

1. `languages/新言語名/` ディレクトリを作成
2. Hello Worldプログラムを作成
3. `Dockerfile` を作成
4. `docker-compose.yml` に追加
5. `scripts/run.ps1` の `$AvailableLanguages` に追加

### 例: Rust を追加
```powershell
mkdir languages\rust
# main.rs と Dockerfile を作成
# docker-compose.yml と run.ps1 を更新
```

## 🔧 トラブルシューティング

### Docker Desktop が起動していない
```
Error: Cannot connect to the Docker daemon
```
→ Docker Desktop を起動してください

### ポート競合
```
Error: Port already in use
```
→ 他のコンテナを停止: `docker-compose down`

### イメージビルドエラー
```
Error: Failed to build image
```
→ クリーンビルド: `docker-compose build --no-cache`

## 📊 パフォーマンス比較

| 言語 | ビルド時間 | 実行時間 | イメージサイズ |
|------|------------|----------|----------------|
| Go | 30秒 | 0.1秒 | 10MB |
| Node.js | 15秒 | 0.2秒 | 35MB |
| Ruby | 20秒 | 0.25秒 | 40MB |
| Python | 10秒 | 0.3秒 | 45MB |
| C# | 45秒 | 0.4秒 | 55MB |
| Java | 20秒 | 0.5秒 | 70MB |
| Next.js | 60秒 | 0.8秒 | 85MB |

## 🤝 コントリビューション

1. このリポジトリをフォーク
2. 新しいブランチを作成: `git checkout -b feature/新機能`
3. 変更をコミット: `git commit -m '新機能を追加'`
4. ブランチにプッシュ: `git push origin feature/新機能`
5. プルリクエストを作成

## 📄 ライセンス

MIT License - 詳細は [LICENSE](LICENSE) ファイルを参照

## 🙋‍♂️ 作成者

**office8-inc** - GitHub: [@office8-inc](https://github.com/office8-inc)

---

*このプロジェクトは、様々なプログラミング言語とDockerの学習目的で作成されました。*