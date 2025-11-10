@echo off
echo ================================
echo REINSTALACION CORRECTA
echo ================================
echo.

echo [1/3] Limpiando instalacion anterior...
if exist "node_modules\" (
    echo Eliminando node_modules...
    rmdir /s /q node_modules
)
if exist "package-lock.json" (
    echo Eliminando package-lock.json...
    del package-lock.json
)
echo Limpieza completada.
echo.

echo [2/3] Instalando dependencias con --legacy-peer-deps...
echo Esto puede tardar 2-3 minutos.
echo.
call npm install --legacy-peer-deps

echo.
echo [3/3] Verificando instalacion...
if exist "node_modules\leaflet\" (
    echo [OK] Leaflet instalado correctamente
) else (
    echo [ERROR] Leaflet no se instalo
)

if exist "node_modules\react-leaflet\" (
    echo [OK] React-Leaflet instalado correctamente
) else (
    echo [ERROR] React-Leaflet no se instalo
)

echo.
echo ================================
echo REINSTALACION COMPLETADA
echo ================================
echo.
echo Ahora puedes ejecutar: npm run dev
echo O usar: ver-preview.bat
echo.
pause
