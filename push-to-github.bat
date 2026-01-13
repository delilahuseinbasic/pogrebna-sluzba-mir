@echo off
echo ========================================
echo    AUTOMATIC GIT PUSH SCRIPT
echo ========================================
echo.

echo [1/4] Checking git status...
git status
echo.

echo [2/4] Adding all files...
git add -A
echo.

echo [3/4] Creating commit...
git commit -m "Fix all sonner imports - force deployment"
echo.

echo [4/4] Pushing to GitHub...
git push origin main
echo.

echo ========================================
echo    DONE! Check Netlify in 2-3 minutes
echo ========================================
pause
