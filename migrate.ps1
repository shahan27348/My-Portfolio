# Quick Start Script for Windows PowerShell
# Run this script to quickly migrate your components to the new structure

Write-Host "🚀 Starting Portfolio Migration..." -ForegroundColor Green
Write-Host ""

# Check if we're in the right directory
if (-not (Test-Path "package.json")) {
    Write-Host "❌ Error: package.json not found. Please run this script from the project root." -ForegroundColor Red
    exit 1
}

Write-Host "📦 Step 1: Moving components to new structure..." -ForegroundColor Cyan

# Check if old structure exists
if (-not (Test-Path "components")) {
    Write-Host "⚠️  Warning: 'components' folder not found. Components may already be migrated." -ForegroundColor Yellow
    Write-Host "Continuing with other setup steps..." -ForegroundColor Yellow
}
else {
    # Move Layout Components
    if (Test-Path "components/Navbar.tsx") {
        Move-Item "components/Navbar.tsx" "src/components/layout/" -Force
        Write-Host "  ✅ Moved Navbar.tsx" -ForegroundColor Green
    }
    if (Test-Path "components/Footer.tsx") {
        Move-Item "components/Footer.tsx" "src/components/layout/" -Force
        Write-Host "  ✅ Moved Footer.tsx" -ForegroundColor Green
    }

    # Move Section Components
    $sectionComponents = @("Home", "About", "Experience", "Skills", "Projects", "Contact")
    foreach ($component in $sectionComponents) {
        $file = "components/$component.tsx"
        if (Test-Path $file) {
            Move-Item $file "src/components/sections/" -Force
            Write-Host "  ✅ Moved $component.tsx" -ForegroundColor Green
        }
    }

    # Move UI Components
    $uiComponents = @("ChatAssistant", "BackgroundEffect", "ScrollToTopButton", "ThemeToggle", "AnimatedSection")
    foreach ($component in $uiComponents) {
        $file = "components/$component.tsx"
        if (Test-Path $file) {
            Move-Item $file "src/components/ui/" -Force
            Write-Host "  ✅ Moved $component.tsx" -ForegroundColor Green
        }
    }

    # Move Icons
    if (Test-Path "components/icons") {
        Move-Item "components/icons" "src/components/" -Force
        Write-Host "  ✅ Moved icons folder" -ForegroundColor Green
    }

    # Move Contexts and Hooks
    if (Test-Path "contexts") {
        Move-Item "contexts" "src/" -Force
        Write-Host "  ✅ Moved contexts folder" -ForegroundColor Green
    }
    if (Test-Path "hooks") {
        Move-Item "hooks" "src/" -Force
        Write-Host "  ✅ Moved hooks folder" -ForegroundColor Green
    }

    # Clean up old files
    if (Test-Path "App.tsx") { Remove-Item "App.tsx" -Force }
    if (Test-Path "index.tsx") { Remove-Item "index.tsx" -Force }
    if (Test-Path "types.ts") { Remove-Item "types.ts" -Force }
    if (Test-Path "constants.ts") { Remove-Item "constants.ts" -Force }
    
    # Remove empty components folder
    if ((Test-Path "components") -and ((Get-ChildItem "components" -Recurse | Measure-Object).Count -eq 0)) {
        Remove-Item "components" -Recurse -Force
        Write-Host "  ✅ Cleaned up old components folder" -ForegroundColor Green
    }
}

Write-Host ""
Write-Host "✅ Step 2: Checking environment setup..." -ForegroundColor Cyan

if (-not (Test-Path ".env.local")) {
    Write-Host "  ⚠️  Creating .env.local from template..." -ForegroundColor Yellow
    Copy-Item ".env.example" ".env.local"
    Write-Host "  ⚠️  IMPORTANT: Edit .env.local and add your VITE_GEMINI_API_KEY" -ForegroundColor Yellow
}
else {
    Write-Host "  ✅ .env.local exists" -ForegroundColor Green
}

Write-Host ""
Write-Host "✅ Step 3: Installing dependencies..." -ForegroundColor Cyan
npm install

Write-Host ""
Write-Host "✅ Step 4: Running type check..." -ForegroundColor Cyan
npm run type-check

Write-Host ""
Write-Host "🎉 Migration Complete!" -ForegroundColor Green
Write-Host ""
Write-Host "⚠️  IMPORTANT NEXT STEPS:" -ForegroundColor Yellow
Write-Host "1. Update imports in migrated components from '../' to '@/'" -ForegroundColor White
Write-Host "2. Edit .env.local and add your Gemini API key" -ForegroundColor White
Write-Host "3. Update API key usage in ChatAssistant.tsx" -ForegroundColor White
Write-Host "4. Test with: npm run dev" -ForegroundColor White
Write-Host ""
Write-Host "📖 Read MIGRATION_GUIDE.md for detailed instructions" -ForegroundColor Cyan
Write-Host "📋 Read DEPLOYMENT_CHECKLIST.md before deploying" -ForegroundColor Cyan
Write-Host ""
Write-Host "🚀 To start development: npm run dev" -ForegroundColor Green
