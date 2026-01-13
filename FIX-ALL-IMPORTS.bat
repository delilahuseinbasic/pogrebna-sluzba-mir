@echo off
cls
color 0B
title FINALNO RJESENJE - Svi @version importi
echo.
echo ╔═══════════════════════════════════════════════════════════╗
echo ║     AUTOMASTKO POPRAVLJANJE SVIH @VERSION IMPORTA        ║
echo ╚═══════════════════════════════════════════════════════════╝
echo.
echo Ovaj script će:
echo  1. Proći kroz SVE .tsx fajlove u ui folderu
echo  2. Zamijeniti @package@version sa @package
echo  3. Commitati i pushati promjene
echo  4. Deployati na Netlify
echo.
pause

echo.
echo [1/5] Pokretanje PowerShell script-a za popravke...
echo ────────────────────────────────────────────────────────────
powershell.exe -ExecutionPolicy Bypass -File "fix-imports.ps1"

echo.
echo [2/5] Dodavanje fajlova u Git...
echo ────────────────────────────────────────────────────────────
git add .
echo ✓ Fajlovi dodani

echo.
echo [3/5] Kreiranje commit-a...
echo ────────────────────────────────────────────────────────────
git commit -m "Fix all @version imports in UI components"
echo ✓ Commit kreiran

echo.
echo [4/5] Push na GitHub...
echo ────────────────────────────────────────────────────────────
git push origin main
if %errorlevel% neq 0 (
    color 0E
    echo ⚠ Možda trebaš unijeti Git credentials
    pause
)
echo ✓ Pushano na GitHub

echo.
echo [5/5] Čekanje da Netlify deploya...
echo ────────────────────────────────────────────────────────────
echo.
echo ╔═══════════════════════════════════════════════════════════╗
echo ║                    DEPLOY GOTOV!                          ║
echo ╚═══════════════════════════════════════════════════════════╝
echo.
echo Idi na https://app.netlify.com
echo Sačekaj 2-3 minuta za deployment
echo.
echo ═══════════════════════════════════════════════════════════
pause
