# Copilot Instructions

このリポジトリは、様々なプログラミング言語でHello Worldを表示するDockerベースのマルチ言語プロジェクトです。

## プロジェクト概要

- **リポジトリ名**: test
- **所有者**: office8-inc
- **現在のブランチ**: main
- **プロジェクトタイプ**: Dockerマルチ言語Hello World

## アーキテクチャ

### プロジェクト構造
```
languages/              # 各言語のHello World実装
├── python/             # Python 3.11 + slim image
├── nodejs/             # Node.js 18 + npm
├── go/                 # Go 1.21 + マルチステージビルド
├── java/               # OpenJDK 17 + javac/java
├── nextjs/             # Next.js 14 + React SSR
└── ruby/               # Ruby 3.2 + Gemfile
scripts/                # PowerShell実行スクリプト
docker-compose.yml      # 全言語一括実行設定
run-all.ps1            # 簡単実行スクリプト
```

### 設計原則
- **統一性**: 各言語とも同じメッセージ形式（絵文字 + 英語 + 日本語）
- **効率性**: Goは軽量バイナリ、.NET/JavaはマルチステージでAPKサイズ削減
- **日本語対応**: UTF-8エンコーディングで日本語メッセージを表示

## 開発ワークフロー

## 開発環境

- **OS**: Windows
- **シェル**: PowerShell (`pwsh.exe`)
- **エディター**: VS Code with Copilot
- **コンテナ**: Docker Desktop必須
- **対応言語**: Python, Node.js, Go, Java, C#, Next.js, Ruby

## 開発ワークフロー

### 基本コマンド
```powershell
# プロジェクトのクローン
git clone https://github.com/office8-inc/test.git

# 開発環境の起動
code .

# すべての言語を実行
.\run-all.ps1

# 特定言語のみ実行
docker-compose run --rm python
```

### 実行パターン
- **一括実行**: `docker-compose up --build` (全言語同時)
- **個別実行**: `docker-compose run --rm <言語名>`
- **詳細スクリプト**: `.\scripts\run.ps1 -Language <言語名>`
- **クリーンアップ**: `.\scripts\run.ps1 -Clean`

### ブランチ戦略
- メインブランチ: `main`
- 新機能開発: `feature/機能名`
- バグ修正: `fix/修正内容`

## AIエージェントへの指示

### 一般的なガイドライン
1. **日本語対応**: このプロジェクトは日本語環境で開発されているため、コメントやドキュメントは日本語で記述してください
2. **Windows環境**: PowerShellコマンドを使用し、Windowsパス形式（バックスラッシュ）を使用してください
3. **段階的開発**: プロジェクトが初期段階のため、段階的にアーキテクチャを構築していきます

### ファイル作成時の注意点
- 適切なディレクトリ構造を維持する
- プロジェクトの成長に合わせて設定ファイルを追加する
- 文字エンコーディングはUTF-8を使用する
- 新言語追加時は以下を更新:
  - `languages/<言語名>/` に実装とDockerfile
  - `docker-compose.yml` にサービス追加
  - `scripts/run.ps1` の `$AvailableLanguages` 配列に追加
  - README.md の対応言語テーブルに追記

### Docker関連のベストプラクティス
- Dockerfileは各言語ディレクトリに配置
- マルチステージビルドで本番イメージを軽量化（Go、.NET）
- 日本語出力を正しく表示するためUTF-8対応を確認
- 各言語で統一されたメッセージ形式: `絵文字 Hello World from <言語>!`

## 今後の拡張予定

このファイルは、プロジェクトの成長に合わせて以下の内容で更新される予定です：

- アーキテクチャパターンと設計原則
- 特定のフレームワークやライブラリの使用方法
- テスト戦略とデバッグ方法
- 外部サービスとの統合パターン
- コーディング規約と命名規則

---

*このファイルはプロジェクトの発展と共に継続的に更新されます。*