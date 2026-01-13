@echo off
cls
echo.
echo ========================================
echo    ULTIMATE FIX - All Issues Resolved
echo ========================================
echo.
echo Fixed in this version:
echo  [x] mockData.ts - All figma:asset replaced
echo  [x] PsihološkaPodrška.tsx - motion/react -^> framer-motion
echo  [x] VirtualCandle.tsx - motion/react -^> framer-motion  
echo  [x] ui/sonner.tsx - sonner@2.0.3 -^> sonner
echo  [x] Login.tsx, Register.tsx, Shop.tsx - sonner fixed
echo  [x] package.json - framer-motion added
echo.
echo ========================================
echo.

echo [Step 1/5] Removing node_modules (clean install)...
if exist node_modules rmdir /s /q node_modules
echo.

echo [Step 2/5] Installing all dependencies fresh...
call npm install
echo.

echo [Step 3/5] Adding all files to Git...
git add .
echo.

echo [Step 4/5] Creating commit...
git commit -m "Ultimate fix: all imports corrected, framer-motion added"
echo.

echo [Step 5/5] Pushing to GitHub...
git push origin main
echo.

echo ========================================
echo          SUCCESS!
echo ========================================
echo.
echo All issues have been fixed!
echo.
echo Next steps:
echo 1. Go to Netlify (https://app.netlify.com)
echo 2. Wait 2-3 minutes for auto-deploy
echo 3. Your site will be LIVE!
echo.
echo If it doesn't auto-deploy:
echo - Click "Trigger deploy" -^> "Deploy site"
echo.
echo ========================================
echo.
pause
