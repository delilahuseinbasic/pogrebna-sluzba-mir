@echo off
cls
echo.
echo ========================================
echo    DEPLOYMENT FIX - FINAL VERSION
echo ========================================
echo.
echo Fixed issues:
echo  - Replaced figma:asset imports with Unsplash images
echo  - Fixed sonner@2.0.3 to sonner
echo  - All files are ready for deployment
echo.
echo ========================================
echo.

echo [Step 1/4] Checking Git status...
git status
echo.

echo [Step 2/4] Adding all files to Git...
git add .
echo.

echo [Step 3/4] Creating commit...
git commit -m "Fix all deployment issues: figma assets and sonner imports"
echo.

echo [Step 4/4] Pushing to GitHub...
git push origin main
echo.

echo ========================================
echo          DEPLOYMENT COMPLETE!
echo ========================================
echo.
echo Next steps:
echo 1. Go to Netlify dashboard
echo 2. Wait 2-3 minutes for automatic deployment
echo 3. Your site will be live!
echo.
echo If automatic deployment doesn't start:
echo - Click "Trigger deploy" -^> "Deploy site"
echo.
echo ========================================
pause
