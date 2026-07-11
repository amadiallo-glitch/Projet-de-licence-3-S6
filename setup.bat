@echo off
REM DEKKALIMMO Project Setup Script for Windows

echo.
echo ================================
echo DEKKALIMMO Project Setup
echo ================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js n'est pas installé!
    echo.
    echo Téléchargez et installez Node.js depuis: https://nodejs.org/
    echo (Choisissez la version LTS)
    echo.
    echo Après l'installation, relancez ce script.
    pause
    exit /b 1
)

REM Get Node.js version
for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo ✅ Node.js %NODE_VERSION% détecté

REM Check npm
npm --version >nul 2>&1
if errorlevel 1 (
    echo ❌ npm n'est pas accessible!
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i
echo ✅ npm %NPM_VERSION% détecté

echo.
echo 📦 Installation des dépendances...
echo.

REM Install dependencies
npm install
if errorlevel 1 (
    echo ❌ Erreur lors de l'installation des dépendances!
    pause
    exit /b 1
)

echo.
echo ✅ Installation terminée avec succès!
echo.
echo 🚀 Pour lancer le serveur de développement:
echo    npm run dev
echo.
echo 🔨 Pour builder pour la production:
echo    npm run build
echo.
pause
