# 🔧 Solución del Error de Dependencias

## ❌ El Error

```
npm error ERESOLVE unable to resolve dependency tree
npm error peer react@"^18.0.0" from react-leaflet@4.2.1
```

**Causa:** `react-leaflet` requiere React 18, pero el proyecto usa React 19.

---

## ✅ Solución

### Paso 1: Detener el Servidor

Si el servidor está corriendo, presiona `Ctrl + C` en la terminal.

---

### Paso 2: Limpiar y Reinstalar

Ejecuta estos comandos **dentro de la carpeta `proyecto-post-entrevista/`**:

#### Windows (CMD):
```bash
cd proyecto-post-entrevista
rmdir /s /q node_modules
del package-lock.json
npm install --legacy-peer-deps
npm run dev
```

#### Windows (PowerShell):
```powershell
cd proyecto-post-entrevista
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install --legacy-peer-deps
npm run dev
```

#### Linux/Mac:
```bash
cd proyecto-post-entrevista
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
npm run dev
```

---

### Paso 3: Verificar

Después de `npm install --legacy-peer-deps`, deberías ver:

```
✓ Leaflet instalado
✓ React-Leaflet instalado
```

Luego al ejecutar `npm run dev`, debería iniciar sin errores.

---

## 🚀 Método Más Fácil (Recomendado)

Usa el script actualizado que ya tiene la bandera `--legacy-peer-deps`:

### Windows:
```bash
cd proyecto-post-entrevista
ver-preview.bat
```

### Linux/Mac:
```bash
cd proyecto-post-entrevista
./ver-preview.sh
```

---

## 🔍 ¿Por Qué `--legacy-peer-deps`?

Esta bandera le dice a npm que:
- Ignore los conflictos de versiones de peer dependencies
- Instale las dependencias de todas formas
- React-Leaflet funciona bien con React 19 aunque solicite React 18

Es **seguro** usarlo en este caso porque:
- Solo es para preview
- React-Leaflet es compatible con React 19
- No afecta el proyecto principal

---

## 📝 Después de Solucionar

Una vez que funcione:
1. Abre http://localhost:3001
2. Explora las 4 secciones
3. Cuando termines, presiona `Ctrl + C`

---

## ❓ Otros Errores Comunes

### Error: "Port 3001 is already in use"
**Solución:** Cierra la terminal anterior o cambia el puerto en `package.json`

### Error: "Module not found: Can't resolve 'leaflet'"
**Solución:** Asegúrate de haber ejecutado `npm install --legacy-peer-deps`

### Error: "Map container is already initialized"
**Solución:** Ya está solucionado en el código. Si persiste:
1. Recarga la página con `Ctrl + F5` (recarga forzada)
2. Limpia el caché del navegador
3. Reinicia el servidor: `Ctrl + C` y luego `npm run dev`

**Causa:** Leaflet intenta inicializar el mapa dos veces. Ahora está configurado con:
- Key estática en MapContainer
- useMemo para evitar re-renders innecesarios
- Verificación de montaje antes de renderizar

---

**¡Ya está todo configurado para funcionar correctamente!** 🎉
