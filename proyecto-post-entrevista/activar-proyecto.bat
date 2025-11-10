@echo off
echo ================================
echo ACTIVACION DEL PROYECTO POST-ENTREVISTA
echo ================================
echo.

echo [1/5] Instalando dependencias adicionales...
call npm install leaflet react-leaflet

echo.
echo [2/5] Copiando datos simulados...
xcopy /E /I /Y "proyecto-post-entrevista\data" "src\data"

echo.
echo [3/5] Copiando componentes...
xcopy /E /I /Y "proyecto-post-entrevista\components" "src\components"

echo.
echo [4/5] Copiando paginas...
xcopy /E /I /Y "proyecto-post-entrevista\app" "src\app"

echo.
echo [5/5] Creando carpeta de fotos...
if not exist "public\fotos" mkdir "public\fotos"

echo.
echo ================================
echo ACTIVACION COMPLETADA
echo ================================
echo.
echo Proximos pasos:
echo 1. Agregar "import 'leaflet/dist/leaflet.css';" en src/app/layout.js
echo 2. Actualizar Navbar.jsx con los nuevos enlaces
echo 3. Ejecutar "npm run dev" para iniciar el proyecto
echo 4. Reemplazar datos simulados con datos reales despues de la entrevista
echo.
echo Consulta README-ACTIVACION.md para instrucciones detalladas.
echo.
pause
