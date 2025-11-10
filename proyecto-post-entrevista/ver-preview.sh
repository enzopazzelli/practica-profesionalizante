#!/bin/bash

echo "================================"
echo "VISTA PREVIA DEL PROYECTO"
echo "================================"
echo ""

if [ ! -d "node_modules" ]; then
    echo "[1/2] Instalando dependencias..."
    echo "Esto puede tardar 2-3 minutos la primera vez."
    echo ""
    npm install --legacy-peer-deps
    echo ""
else
    echo "Las dependencias ya están instaladas."
    echo ""
fi

echo "[2/2] Iniciando servidor de desarrollo..."
echo ""
echo "El preview estará disponible en: http://localhost:3001"
echo ""
echo "Presiona Ctrl+C para detener el servidor."
echo ""
npm run dev
