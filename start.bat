@echo off
echo ================================
echo  POGREBNA SLUZBA MIR - TEST
echo ================================
echo.

echo Instaliranje dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ERROR: npm install failed!
    pause
    exit /b %errorlevel%
)
echo.

echo Pokrecem development server...
echo.
echo ================================
echo  Server ce se pokrenuti na:
echo  http://localhost:5173
echo ================================
echo.
echo Pritisni Ctrl+C da zaustavis server
echo.

call npm run dev

pause
