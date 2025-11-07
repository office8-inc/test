# Multi-Language Hello World Runner
# すべての言語でHello Worldを実行するPowerShellスクリプト

param(
    [string]$Language = "all",
    [switch]$Build = $false,
    [switch]$Clean = $false,
    [switch]$Sequential = $false
)

$AvailableLanguages = @("python", "nodejs", "go", "java", "csharp", "nextjs", "ruby")

function Write-Header {
    param([string]$Message)
    Write-Host ""
    Write-Host "=" * 50 -ForegroundColor Cyan
    Write-Host $Message -ForegroundColor Yellow
    Write-Host "=" * 50 -ForegroundColor Cyan
}

function Invoke-Language {
    param([string]$Lang)
    
    Write-Header "Running Hello World in $Lang"
    
    if ($Build) {
        Write-Host "Building $Lang container..." -ForegroundColor Green
        docker-compose build $Lang
    }
    
    Write-Host "Executing $Lang Hello World..." -ForegroundColor Green
    
    if ($Lang -eq "nextjs") {
        Write-Host "Note: Next.js will start a web server. Press Ctrl+C to stop." -ForegroundColor Yellow
        Write-Host "Access the web app at: http://localhost:3000" -ForegroundColor Cyan
        docker-compose run --rm -p 3000:3000 $Lang
    } else {
        docker-compose run --rm $Lang
    }
    
    if ($Sequential) {
        Write-Host ""
        Write-Host "Press any key to continue to the next language..." -ForegroundColor Magenta
        $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
        Write-Host ""
    }
}

function Clear-Containers {
    Write-Header "Cleaning up containers and images"
    
    # Stop and remove containers
    docker-compose down --rmi all --volumes --remove-orphans
    
    # Remove dangling images
    $danglingImages = docker images -f "dangling=true" -q
    if ($danglingImages) {
        docker rmi $danglingImages
    }
    
    Write-Host "Cleanup completed!" -ForegroundColor Green
}

# メイン処理
if ($Clean) {
    Clear-Containers
    exit 0
}

Write-Header "Multi-Language Hello World Docker Runner"
Write-Host "Available languages: $($AvailableLanguages -join ', ')" -ForegroundColor Magenta

if ($Language -eq "all") {
    if ($Sequential) {
        Write-Host "Running all languages sequentially..." -ForegroundColor Yellow
    } else {
        Write-Host "Running all languages..." -ForegroundColor Yellow
    }
    
    if ($Build) {
        Write-Header "Building all containers"
        docker-compose build
    }
    
    if ($Sequential) {
        # 順次実行
        foreach ($lang in $AvailableLanguages) {
            Invoke-Language $lang
        }
    } else {
        # 並列実行（従来の方法）
        Write-Host "Starting all containers simultaneously..." -ForegroundColor Green
        docker-compose up --build
    }
} elseif ($Language -in $AvailableLanguages) {
    Invoke-Language $Language
} else {
    Write-Host "Error: Invalid language '$Language'" -ForegroundColor Red
    Write-Host "Available languages: $($AvailableLanguages -join ', ')" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Usage examples:" -ForegroundColor Cyan
    Write-Host "  .\run.ps1                      # Run all languages (parallel)"
    Write-Host "  .\run.ps1 -Sequential          # Run all languages (sequential)"
    Write-Host "  .\run.ps1 -Language python     # Run only Python"
    Write-Host "  .\run.ps1 -Build               # Build and run all"
    Write-Host "  .\run.ps1 -Build -Sequential   # Build and run sequentially"
    Write-Host "  .\run.ps1 -Clean               # Clean up containers"
    exit 1
}

Write-Header "Execution completed!"