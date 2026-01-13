@echo off
cls
echo.
echo ========================================
echo    FINAL FIX - Adding framer-motion
echo ========================================
echo.

echo [1/5] Installing framer-motion...
call npm install
echo.

echo [2/5] Adding files to Git...
git add .
echo.

echo [3/5] Creating commit...
git commit -m "Add framer-motion dependency and fix all imports"
echo.

echo [4/5] Pushing to GitHub...
git push origin main
echo.

echo [5/5] DONE!
echo.
echo ========================================
echo      DEPLOYMENT READY!
echo ========================================
echo.
echo Go to Netlify and wait 2-3 minutes!
echo Your site should deploy successfully now.
echo.
echo ========================================
pause
