Write-Host "=======================================" -ForegroundColor Green
Write-Host "  POPRAVLJANJE SVIH @VERSION IMPORTA" -ForegroundColor Green
Write-Host "=======================================" -ForegroundColor Green
Write-Host ""

$files = Get-ChildItem -Path "ui" -Filter "*.tsx" -Recurse

Write-Host "Pronađeno $($files.Count) fajlova za provjeru..." -ForegroundColor Yellow
Write-Host ""

$totalReplacements = 0

foreach ($file in $files) {
    Write-Host "Provjeravam: $($file.Name)" -ForegroundColor Cyan
    
    $content = Get-Content $file.FullName -Raw
    $originalContent = $content
    
    # Zamijeni sve @package@version sa samo @package
    $content = $content -replace '@([a-zA-Z0-9\-\/]+)@[\d\.]+', '@$1'
    
    if ($content -ne $originalContent) {
        Set-Content -Path $file.FullName -Value $content -NoNewline
        Write-Host "  ✓ Popravljeno!" -ForegroundColor Green
        $totalReplacements++
    } else {
        Write-Host "  - Već je ok" -ForegroundColor Gray
    }
}

Write-Host ""
Write-Host "=======================================" -ForegroundColor Green
Write-Host "  GOTOVO!" -ForegroundColor Green  
Write-Host "=======================================" -ForegroundColor Green
Write-Host ""
Write-Host "Popravljeno fajlova: $totalReplacements" -ForegroundColor Yellow
Write-Host ""
Write-Host "Pritisnite Enter za nastavak..."
Read-Host
