@echo off
echo ================================
echo  POGREBNA SLUZBA MIR - DEPLOYMENT
echo ================================
echo.

echo [1/3] Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ERROR: npm install failed!
    pause
    exit /b %errorlevel%
)
echo.

echo [2/3] Building project...
call npm run build
if %errorlevel% neq 0 (
    echo ERROR: Build failed!
    pause
    exit /b %errorlevel%
)
echo.

echo [3/3] Deploying to Vercel...
echo.
echo Make sure you have Vercel CLI installed: npm install -g vercel
echo.
call vercel --prod
if %errorlevel% neq 0 (
    echo.
    echo NOTE: If Vercel CLI is not installed, run: npm install -g vercel
    echo Then run this script again.
    pause
    exit /b %errorlevel%
)

echo.
echo ================================
echo  DEPLOYMENT COMPLETE!
echo ================================
pause
