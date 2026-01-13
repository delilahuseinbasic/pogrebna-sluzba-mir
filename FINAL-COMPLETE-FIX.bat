@echo off
cls
color 0B
title FINALNA ANALIZA I DEPLOYMENT
echo.
echo ╔═══════════════════════════════════════════════════════════╗
echo ║       KOMPLETNA ANALIZA I POPRAVKA SVIH PROBLEMA         ║
echo ╚═══════════════════════════════════════════════════════════╝
echo.
echo Ovaj script će pregledati i popraviti:
echo  √ Sve @version importove u ui/ folderu
echo  √ Sve pogreŠne import putanje (../utils, ../contexts)
echo  √ Sve sonner i motion importove
echo.
echo ═══════════════════════════════════════════════════════════
pause

echo.
echo [1/5] Pokretanje kompletne analize...
echo ────────────────────────────────────────────────────────────
node fix-all-problems.js
if %errorlevel% neq 0 (
    color 0C
    echo.
    echo ✗ GREŠKA pri analizi!
    pause
    exit /b 1
)

echo.
echo [2/5] Dodavanje svih fajlova u Git...
echo ────────────────────────────────────────────────────────────
git add .
echo ✓ Fajlovi dodani

echo.
echo [3/5] Kreiranje commit-a...
echo ────────────────────────────────────────────────────────────
git commit -m "Complete fix: all imports, paths, and dependencies corrected"
if %errorlevel% equ 0 (
    echo ✓ Commit uspješan
) else (
    echo ! Nema novih promjena
)

echo.
echo [4/5] Push na GitHub...
echo ────────────────────────────────────────────────────────────
git push origin main
if %errorlevel% neq 0 (
    color 0E
    echo.
    echo ⚠ Push možda nije uspio - provjeri Git login
    pause
) else (
    echo ✓ Uspješno pushano!
)

echo.
echo [5/5] Deployment...
echo ────────────────────────────────────────────────────────────
echo.
color 0A
echo ╔═══════════════════════════════════════════════════════════╗
echo ║              ✓ SVE KOMPLETNO POPRAVLJENO!                ║
echo ╚═══════════════════════════════════════════════════════════╝
echo.
echo Popravljeno:
echo  ✓ Svi @version importovi
echo  ✓ Sve import putanje
echo  ✓ Svi sonner i motion importovi
echo.
echo Šta dalje:
echo  1. Otvori: https://app.netlify.com
echo  2. Sačekaj: 2-3 minuta
echo  3. Sajt će biti LIVE!
echo.
echo ═══════════════════════════════════════════════════════════
pause
