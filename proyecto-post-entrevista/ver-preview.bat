@echo off
echo ================================
echo VISTA PREVIA DEL PROYECTO
echo ================================
echo.

echo Verificando si existen dependencias...
if not exist "node_modules\" (
    echo [1/2] Instalando dependencias...
    echo Esto puede tardar 2-3 minutos la primera vez.
    echo.
    call npm install --legacy-peer-deps
    echo.
) else (
    echo Las dependencias ya estan instaladas.
    echo.
)

echo [2/2] Iniciando servidor de desarrollo...
echo.
echo El preview estara disponible en: http://localhost:3001
echo.
echo Presiona Ctrl+C para detener el servidor.
echo.
call npm run dev
