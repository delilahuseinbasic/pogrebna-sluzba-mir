@echo off
cls
color 0B
title ULTIMATIVNO RJESENJE - Automatsko popravljanje svih importa
echo.
echo ╔═══════════════════════════════════════════════════════════╗
echo ║           AUTOMATSKO POPRAVLJANJE IMPORTA                 ║
echo ╚═══════════════════════════════════════════════════════════╝
echo.
echo Ovaj script će automatski:
echo  √ Zamijeniti @package@version sa @package u SVIM fajlovima
echo  √ Commitati promjene
echo  √ Pushati na GitHub  
echo  √ Netlify će automatski deployati
echo.
echo ═══════════════════════════════════════════════════════════
pause

echo.
echo [Korak 1/5] Popravljanje svih @version importa...
echo ────────────────────────────────────────────────────────────
node fix-imports.js
if %errorlevel% neq 0 (
    color 0C
    echo ✗ GREŠKA pri popravljanju importa!
    pause
    exit /b 1
)

echo.
echo [Korak 2/5] Dodavanje fajlova u Git...
echo ────────────────────────────────────────────────────────────
git add .
echo ✓ Fajlovi dodani

echo.
echo [Korak 3/5] Kreiranje commit-a...
echo ────────────────────────────────────────────────────────────
git commit -m "Automatic fix: Remove @version from all imports"
if %errorlevel% equ 0 (
    echo ✓ Commit kreiran
) else (
    echo ! Nema novih promjena za commit
)

echo.
echo [Korak 4/5] Push na GitHub...
echo ────────────────────────────────────────────────────────────
git push origin main
if %errorlevel% neq 0 (
    color 0E
    echo.
    echo ⚠ Git push možda nije uspio
    echo   Provjeri da li si ulogovan
    pause
) else (
    echo ✓ Uspješno pushano!
)

echo.
echo [Korak 5/5] Deployment...
echo ────────────────────────────────────────────────────────────
echo.
color 0A
echo ╔═══════════════════════════════════════════════════════════╗
echo ║                 ✓ SVE GOTOVO!                             ║
echo ╚═══════════════════════════════════════════════════════════╝
echo.
echo Šta dalje:
echo  1. Otvori https://app.netlify.com
echo  2. Sačekaj 2-3 minuta
echo  3. Sajt će biti LIVE!
echo.
echo ═══════════════════════════════════════════════════════════
echo.
pause
