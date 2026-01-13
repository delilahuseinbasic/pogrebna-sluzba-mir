@echo off
cls
color 0A
echo.
echo ═══════════════════════════════════════════════════════════
echo            KONAČNO RJEŠENJE - SVE PROBLEME
echo ═══════════════════════════════════════════════════════════
echo.
echo Sve što je popravljeno:
echo.
echo [√] mockData.ts - figma:asset zamijenjeni
echo [√] Login.tsx - sonnerFixed
echo [√] Register.tsx - sonner fixed  
echo [√] Shop.tsx - sonner fixed
echo [√] PsihološkaPodrška.tsx - motion/react + putanje fixed
echo [√] VirtualCandle.tsx - motion/react fixed
echo [√] ProductGallery.tsx - import putanje fixed
echo [√] ui/sonner.tsx - sonner fixed
echo [√] package.json - framer-motion added
echo.
echo ═══════════════════════════════════════════════════════════
echo.
pause
echo.

echo [1/6] Brisanje node_modules...
if exist node_modules (
    rmdir /s /q node_modules
    echo    - node_modules obrisan
) else (
    echo    - node_modules ne postoji
)
echo.

echo [2/6] Brisanje package-lock.json...
if exist package-lock.json (
    del package-lock.json
    echo    - package-lock.json obrisan
) else (
    echo    - package-lock.json ne postoji
)
echo.

echo [3/6] Instalacija svih dependencija...
echo    - Ovo može potrajati 1-2 minuta...
call npm install
if %errorlevel% neq 0 (
    echo.
    echo GREŠKA: npm install nije uspio!
    pause
    exit /b 1
)
echo    - Instalacija uspješna!
echo.

echo [4/6] Dodavanje fajlova u Git...
git add .
echo    - Fajlovi dodani
echo.

echo [5/6] Kreiranje commit-a...
git commit -m "FINAL FIX: All imports, paths, and dependencies corrected"
echo    - Commit kreiran
echo.

echo [6/6] Push na GitHub...
git push origin main
if %errorlevel% neq 0 (
    echo.
    echo GREŠKA: git push nije uspio!
    echo Možda treba unijeti credentials?
    pause
    exit /b 1
)
echo    - Push uspješan!
echo.

echo ═══════════════════════════════════════════════════════════
echo                    DEPLOYMENT GOTOV!
echo ═══════════════════════════════════════════════════════════
echo.
echo Sve je spremno! Sada:
echo.
echo 1. Idi na https://app.netlify.com
echo 2. Sačekaj 2-3 minuta za auto-deploy
echo 3. Sajt će biti LIVE!
echo.
echo Ako ne počne automatski:
echo    - Klikni "Trigger deploy" ^> "Deploy site"
echo.
echo ═══════════════════════════════════════════════════════════
echo.
pause
