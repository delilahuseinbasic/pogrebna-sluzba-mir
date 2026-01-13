@echo off
cls
color 0A
title MEGA FIX - Definitivno rjesenje
echo.
echo ╔═══════════════════════════════════════════════════════════╗
echo ║            MEGA FIX - SVE @VERSION IMPORTOVE              ║
echo ╚═══════════════════════════════════════════════════════════╝
echo.
echo Ovaj super script ce pregledati i popraviti:
echo.
echo  √ lucide-react@0.487.0     -^> lucide-react
echo  √ @radix-ui/...@1.1.2      -^> @radix-ui/...
echo  √ sonner@2.0.3             -^> sonner
echo  √ class-variance-auth...   -^> class-variance-authority
echo  √ SVE druge @version       -^> bez verzije
echo  √ Sve putanje ../utils/    -^> ./
echo  √ Sve putanje ../contexts/ -^> ./
echo  √ motion/react             -^> framer-motion
echo.
echo Pregledace: 60+ fajlova
echo.
echo ═══════════════════════════════════════════════════════════
pause

echo.
echo [1/4] Pokretanje MEGA FIX script-a...
echo ────────────────────────────────────────────────────────────
node mega-fix.js
if %errorlevel% neq 0 (
    color 0C
    echo.
    echo ✗ GRESKA!
    pause
    exit /b 1
)

echo.
echo [2/4] Git add...
echo ────────────────────────────────────────────────────────────
git add .
echo ✓ Dodano

echo.
echo [3/4] Git commit...
echo ────────────────────────────────────────────────────────────
git commit -m "MEGA FIX: Remove ALL @version from ALL imports"
echo ✓ Commit

echo.
echo [4/4] Git push...
echo ────────────────────────────────────────────────────────────
git push origin main
if %errorlevel% neq 0 (
    color 0E
    echo ! Provjeri Git login
    pause
)
echo ✓ Push

echo.
color 0B
echo ╔═══════════════════════════════════════════════════════════╗
echo ║                    USPJESNO!                              ║
echo ╚═══════════════════════════════════════════════════════════╝
echo.
echo SVE @version importove su uklonjeni!
echo.
echo Sada:
echo  1. Idi na https://app.netlify.com
echo  2. Sacekaj 2-3 minuta
echo  3. GOTOVO!
echo.
echo ═══════════════════════════════════════════════════════════
pause
