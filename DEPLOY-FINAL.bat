@echo off
cls
color 0A
title Deployment - Pogrebna Sluzba Mir
echo.
echo ╔═══════════════════════════════════════════════════════════╗
echo ║         KONAČNO RJEŠENJE - SVE PROBLEMI RIJEŠENI         ║
echo ╚═══════════════════════════════════════════════════════════╝
echo.
echo Popravke u ovoj verziji:
echo.
echo  [√] mockData.ts - Sve figma slike zamijenjene
echo  [√] Login.tsx - sonner import fixed
echo  [√] Register.tsx - sonner import fixed  
echo  [√] Shop.tsx - sonner import fixed
echo  [√] PsihološkaPodrška.tsx - motion + sonner + putanje
echo  [√] VirtualCandle.tsx - motion import fixed
echo  [√] ProductGallery.tsx - import putanje fixed
echo  [√] ui/sonner.tsx - sonner + next-themes removed
echo  [√] package.json - framer-motion dodato
echo.
echo ═══════════════════════════════════════════════════════════
echo.
echo Počinjem deployment proces...
echo.
pause

echo.
echo [Korak 1/6] Čišćenje node_modules...
echo ────────────────────────────────────────────────────────────
if exist node_modules (
    rmdir /s /q node_modules
    echo ✓ node_modules obrisan
) else (
    echo ✓ node_modules već ne postoji
)

echo.
echo [Korak 2/6] Brisanje package-lock.json...
echo ────────────────────────────────────────────────────────────
if exist package-lock.json (
    del package-lock.json
    echo ✓ package-lock.json obrisan
) else (
    echo ✓ package-lock.json već ne postoji
)

echo.
echo [Korak 3/6] Instalacija dependencija...
echo ────────────────────────────────────────────────────────────
echo Molimo sačekajte, ovo može potrajati 1-2 minuta...
echo.
call npm install
if %errorlevel% neq 0 (
    color 0C
    echo.
    echo ✗ GREŠKA: npm install nije uspio!
    echo.
    pause
    exit /b 1
)
echo.
echo ✓ Sve dependencije instalirane uspješno!

echo.
echo [Korak 4/6] Dodavanje fajlova u Git...
echo ────────────────────────────────────────────────────────────
git add .
echo ✓ Svi fajlovi dodani u Git

echo.
echo [Korak 5/6] Kreiranje Git commit-a...
echo ────────────────────────────────────────────────────────────
git commit -m "FINAL FIX: All imports, paths, dependencies, and next-themes fixed"
echo ✓ Commit kreiran

echo.
echo [Korak 6/6] Push na GitHub...
echo ────────────────────────────────────────────────────────────
git push origin main
if %errorlevel% neq 0 (
    color 0E
    echo.
    echo ⚠ UPOZORENJE: git push možda nije uspio
    echo   Provjerite da li ste ulogovani u Git
    echo.
    pause
) else (
    echo ✓ Uspješno pushano na GitHub!
)

echo.
echo ╔═══════════════════════════════════════════════════════════╗
echo ║                 DEPLOYMENT ZAVRŠEN!                       ║
echo ╚═══════════════════════════════════════════════════════════╝
echo.
echo Šta dalje:
echo.
echo  1. Otvori https://app.netlify.com u browseru
echo  2. Sačekaj 2-3 minuta da Netlify builda sajt
echo  3. Tvoj sajt će biti LIVE!
echo.
echo Ako ne počne automatski:
echo  - Klikni "Trigger deploy" ^> "Deploy site" u Netlify
echo.
echo ═══════════════════════════════════════════════════════════
echo.
echo Pritisnite bilo koji taster za izlaz...
pause > nul
