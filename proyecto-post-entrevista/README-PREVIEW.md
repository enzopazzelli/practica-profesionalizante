# 👀 Vista Previa del Proyecto Post-Entrevista

Este directorio ahora es una **aplicación Next.js independiente** que puedes ejecutar para ver cómo lucirán las nuevas secciones **sin afectar el proyecto principal**.

---

## 🚀 Cómo Ver el Preview

### Paso 1: Instalar Dependencias

```bash
cd proyecto-post-entrevista
npm install
```

Esto instalará:
- Next.js 15 + React 19
- Recharts (gráficos)
- Leaflet + React-Leaflet (mapas)
- Tailwind CSS 4
- Lucide React (iconos)

**Tiempo estimado:** 2-3 minutos

---

### Paso 2: Ejecutar el Servidor de Desarrollo

```bash
npm run dev
```

El servidor se ejecutará en **puerto 3001** (diferente al proyecto principal que usa 3000).

---

### Paso 3: Abrir en el Navegador

Abre tu navegador en: **http://localhost:3001**

Verás una página de inicio con enlaces a las 4 secciones:

1. 📊 **Dashboard** - `/dashboard`
2. 🗺️ **Mapa Interactivo** - `/mapa`
3. 🖼️ **Galería de Impacto** - `/impacto`
4. 📋 **Diagrama de Flujo** - `/proceso`

---

## 📸 Lo Que Verás

### **Página de Inicio (`/`)**
- Bienvenida con descripción del proyecto
- 4 tarjetas grandes (clickeables) para cada sección
- Información de datos simulados, tecnologías y componentes
- Instrucciones de activación

### **Dashboard (`/dashboard`)**
- 3 KPIs principales: Total viviendas, localidades, instituciones
- Gráfico de barras: Distribución por clasificación (1A, 2A, Derrumbe)
- Gráfico de torta: Estados de proyectos
- Gráfico de línea: Evolución mensual 2024
- Gráfico de área: Total acumulado
- Top 10 departamentos (barras horizontales)
- Grid de instituciones ejecutoras

### **Mapa Interactivo (`/mapa`)**
- Mapa de Santiago del Estero con OpenStreetMap
- 20 marcadores coloreados por clasificación
- Filtros por clasificación (botones)
- Popup con información completa al hacer clic
- Leyenda de colores
- Contador de viviendas filtradas

### **Galería de Impacto (`/impacto`)**
- Comparación visual ANTES vs DESPUÉS
- Navegación entre casos (botones Anterior/Siguiente)
- Indicadores de paginación
- Información detallada de cada caso
- Estadísticas de impacto (3 KPIs)
- Galería de clasificaciones de vivienda
- Objetivos del programa

### **Diagrama de Flujo (`/proceso`)**
- 6 pasos del proceso documentados
- Puntos críticos marcados en rojo
- Puntos de decisión marcados en azul
- Información de VISOC y GEDO
- Resumen de problemas
- Propuestas de mejora

---

## ⚡ Características del Preview

✅ **Totalmente funcional** - Todo el código está operativo
✅ **Datos simulados** - 20 viviendas de ejemplo + estadísticas
✅ **Responsive** - Funciona en móvil, tablet y desktop
✅ **Interactivo** - Filtros, navegación, popups funcionan
✅ **Puerto diferente** - No interfiere con el proyecto principal
✅ **Independiente** - No modifica archivos del proyecto principal

---

## 🔍 Explorar el Código

Mientras el servidor está corriendo, puedes explorar:

- **`/app/`** - Las 4 páginas completas
- **`/components/`** - Los 9 componentes reutilizables
- **`/data/`** - Los datos simulados en JSON
- **`/app/globals.css`** - Los estilos personalizados
- **`/tailwind.config.js`** - Configuración de colores

---

## 🛑 Detener el Servidor

Presiona `Ctrl + C` en la terminal donde está corriendo el servidor.

---

## 📝 Después de Ver el Preview

Una vez que veas cómo luce y decidas activarlo en el proyecto principal:

1. Detén el servidor del preview (`Ctrl + C`)
2. Realiza la entrevista usando `ENTREVISTA-TECNICO-FLUJO-DATOS.md`
3. Ejecuta el script de activación `activar-proyecto.bat` (Windows) o `activar-proyecto.sh` (Linux/Mac)
4. Sigue las instrucciones en `README-ACTIVACION.md`

---

## 🐛 Solución de Problemas

### Error: "Cannot find module 'next'"
**Solución:** Ejecuta `npm install` dentro de la carpeta `proyecto-post-entrevista/`

### Error: "Port 3001 is already in use"
**Solución:** Detén cualquier otro servidor en puerto 3001, o edita `package.json` y cambia `-p 3001` por `-p 3002`

### El mapa no se ve
**Solución:** Espera unos segundos, Leaflet tarda en cargar la primera vez. Si persiste, verifica tu conexión a internet (necesita descargar tiles de OpenStreetMap)

### Los gráficos no se ven
**Solución:** Asegúrate de haber ejecutado `npm install`. Recharts es una dependencia necesaria.

---

## 💡 Notas Importantes

1. **No edites el código aquí** - Después de la entrevista, los cambios se harán en el proyecto principal
2. **Los datos son simulados** - Son solo para demostración visual
3. **Puerto diferente** - El preview usa puerto 3001, el proyecto principal usa 3000
4. **node_modules/** - Se creará al ejecutar `npm install` (ocupa ~500MB, es normal)

---

## 📊 Estructura del Proyecto Preview

```
proyecto-post-entrevista/
├── package.json              ← Dependencias del preview
├── next.config.mjs           ← Configuración Next.js
├── tailwind.config.js        ← Configuración Tailwind
├── .gitignore                ← Archivos ignorados
├── app/
│   ├── layout.jsx            ← Layout principal con Inter font
│   ├── globals.css           ← Estilos globales
│   ├── page.jsx              ← Página de inicio del preview
│   ├── dashboard/page.jsx
│   ├── mapa/page.jsx
│   ├── impacto/page.jsx
│   └── proceso/page.jsx
├── components/               ← 9 componentes
├── data/                     ← Datos simulados
└── README-PREVIEW.md         ← Este archivo
```

---

## 🎯 Objetivo del Preview

Este preview te permite:
- ✅ Ver cómo lucirá el proyecto final
- ✅ Probar todas las interacciones
- ✅ Entender qué datos necesitas obtener en la entrevista
- ✅ Decidir si quieres activarlo en el proyecto principal
- ✅ Hacer ajustes antes de la integración

---

**¡Disfruta explorando el preview!** 🚀

Si tienes dudas, consulta `README-ACTIVACION.md` para más información sobre la activación final.
