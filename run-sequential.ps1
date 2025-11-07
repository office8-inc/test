# 順次実行スクリプト - すべての言語を順番にHello World実行

Write-Host "🌍 Multi-Language Hello World Sequential Runner" -ForegroundColor Cyan
Write-Host "7つの言語を順番に実行します..." -ForegroundColor Yellow
Write-Host ""

# 各言語を順番に実行
.\scripts\run.ps1 -Sequential

Write-Host ""
Write-Host "✅ All languages executed sequentially!" -ForegroundColor Green