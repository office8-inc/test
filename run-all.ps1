# 簡単実行スクリプト - すべての言語でHello Worldを実行

Write-Host "🌍 Multi-Language Hello World Runner" -ForegroundColor Cyan
Write-Host "Building and running all languages..." -ForegroundColor Yellow

# すべてをビルドして実行
docker-compose up --build

Write-Host "✅ All languages executed!" -ForegroundColor Green