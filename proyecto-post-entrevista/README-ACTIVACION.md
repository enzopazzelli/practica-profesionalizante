# 🚀 Activación del Proyecto Post-Entrevista

Este directorio contiene todo el código para las nuevas funcionalidades del proyecto: Dashboard, Mapa Interactivo, Galería de Impacto y Diagrama de Flujo.

**IMPORTANTE:** Este código está listo para ser activado **DESPUÉS** de realizar la entrevista con el técnico de campo, cuando ya tengan información real del proceso.

---

## 📋 Contenido de esta Carpeta

```
proyecto-post-entrevista/
├── data/
│   ├── viviendas.json          # 20 registros simulados de viviendas
│   └── estadisticas.json       # Estadísticas agregadas simuladas
├── components/
│   ├── Dashboard/              # Componentes para el dashboard
│   │   ├── KPICard.jsx
│   │   ├── DistribucionChart.jsx
│   │   ├── EstadosChart.jsx
│   │   ├── EvolucionChart.jsx
│   │   └── TopLocalidades.jsx
│   ├── Mapa/
│   │   └── MapaViviendas.jsx   # Mapa interactivo con Leaflet
│   ├── Impacto/
│   │   ├── AntesDepues.jsx     # Galería antes/después
│   │   └── ClasificacionGallery.jsx
│   └── Proceso/
│       └── DiagramaFlujo.jsx   # Diagrama de flujo interactivo
└── app/                        # Páginas completas
    ├── dashboard/page.jsx
    ├── mapa/page.jsx
    ├── impacto/page.jsx
    └── proceso/page.jsx
```

---

## 🔧 Paso 1: Instalar Dependencias Adicionales

Estas dependencias son necesarias para el mapa interactivo:

```bash
npm install leaflet react-leaflet
```

**Paquetes:**
- `leaflet` v1.9.4: Librería de mapas interactivos
- `react-leaflet` v4.2.1: Wrapper de React para Leaflet

---

## 📂 Paso 2: Copiar Archivos al Proyecto Principal

### 2.1 Copiar datos simulados

```bash
# Desde la raíz del proyecto
cp -r proyecto-post-entrevista/data src/
```

### 2.2 Copiar componentes

```bash
cp -r proyecto-post-entrevista/components/* src/components/
```

### 2.3 Copiar páginas

```bash
cp -r proyecto-post-entrevista/app/* src/app/
```

### Alternativa en Windows (PowerShell):

```powershell
# Copiar datos
Copy-Item -Path "proyecto-post-entrevista\data" -Destination "src\" -Recurse

# Copiar componentes
Copy-Item -Path "proyecto-post-entrevista\components\*" -Destination "src\components\" -Recurse

# Copiar páginas
Copy-Item -Path "proyecto-post-entrevista\app\*" -Destination "src\app\" -Recurse
```

---

## 🎨 Paso 3: Agregar Estilos de Leaflet

Editar `src/app/layout.js` y agregar el import de CSS de Leaflet:

```javascript
import 'leaflet/dist/leaflet.css';
```

El archivo debería quedar así:

```javascript
import { Inter } from "next/font/google";
import "./globals.css";
import 'leaflet/dist/leaflet.css';  // ← AGREGAR ESTA LÍNEA

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Práctica Profesionalizante ITSE",
  description: "Documentación del proyecto de Práctica Profesionalizante",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
```

---

## 🧭 Paso 4: Actualizar Navegación

Editar `src/components/Navbar.jsx` para agregar enlaces a las nuevas páginas:

```javascript
const links = [
  { href: "/", label: "Inicio" },
  { href: "/santiago", label: "Santiago del Estero" },
  { href: "/organizacion", label: "Organización" },
  { href: "/entrevistas", label: "Entrevistas" },
  { href: "/problematica", label: "Problemática" },
  { href: "/dashboard", label: "Dashboard" },        // ← NUEVO
  { href: "/mapa", label: "Mapa" },                  // ← NUEVO
  { href: "/impacto", label: "Impacto" },            // ← NUEVO
  { href: "/proceso", label: "Proceso" },            // ← NUEVO
  { href: "/analisis", label: "Análisis" },
  { href: "/conclusiones", label: "Conclusiones" },
];
```

---

## ▶️ Paso 5: Ejecutar el Proyecto

```bash
npm run dev
```

Abrir en el navegador:
- **Dashboard:** http://localhost:3000/dashboard
- **Mapa:** http://localhost:3000/mapa
- **Impacto:** http://localhost:3000/impacto
- **Proceso:** http://localhost:3000/proceso

---

## 📊 Paso 6: Reemplazar Datos Simulados con Datos Reales

### 6.1 Después de la entrevista

Una vez que tengan información real del proceso y datos de muestra del técnico:

1. **Actualizar `src/data/viviendas.json`** con los datos reales que les proporcionen
2. **Actualizar `src/data/estadisticas.json`** con estadísticas reales
3. **Agregar fotos reales** en `public/fotos/` y actualizar las rutas en `viviendas.json`

### 6.2 Estructura de datos esperada

**viviendas.json:**
```json
[
  {
    "id": 1,
    "expediente": "2024-0001",
    "localidad": "Capital",
    "departamento": "Capital",
    "barrio": "San Martín",
    "direccion": "Av. Libertad 1234",
    "coordenadas": { "lat": -27.7833, "lng": -64.2667 },
    "clasificacion": "2A",
    "estado_proyecto": "En construcción",
    "fecha_relevamiento": "2024-01-15",
    "institucion_ejecutora": "Cáritas Santiago",
    "beneficiario_hash": "BEN-001",
    "cantidad_miembros": 4,
    "fotos": {
      "antes": "/fotos/caso-001-antes.jpg",
      "despues": "/fotos/caso-001-despues.jpg"
    },
    "observaciones": "Vivienda precaria con riesgo estructural"
  }
]
```

### 6.3 Agregar fotos reales

1. Crear carpeta `public/fotos/`
2. Colocar fotos con nombres descriptivos: `caso-001-antes.jpg`, `caso-001-despues.jpg`, etc.
3. Actualizar las rutas en `viviendas.json`

---

## 🎯 Funcionalidades Incluidas

### ✅ Dashboard (`/dashboard`)
- KPIs principales: Total viviendas, localidades, instituciones
- Gráfico de barras: Distribución por clasificación
- Gráfico de torta: Estados de proyectos
- Gráfico de línea: Evolución mensual 2024
- Top 10 departamentos
- Lista de instituciones ejecutoras

### ✅ Mapa Interactivo (`/mapa`)
- Mapa de Santiago del Estero con todas las viviendas
- Marcadores coloreados por clasificación
- Popup al hacer clic con información detallada
- Filtros por clasificación
- Leyenda interactiva

### ✅ Galería de Impacto (`/impacto`)
- Comparación antes/después de viviendas
- Navegación entre casos
- Estadísticas de viviendas terminadas
- Galería de clasificaciones
- Objetivos del programa

### ✅ Diagrama de Flujo (`/proceso`)
- 6 pasos del proceso documentados
- Puntos críticos identificados (en rojo)
- Puntos de decisión marcados
- Información de VISOC y GEDO
- Propuestas de mejora

---

## 🔍 Validación Post-Entrevista

Después de activar el proyecto, validar que:

1. ✓ El diagrama de flujo refleja el proceso real explicado por el técnico
2. ✓ Los datos simulados tienen la estructura correcta según la información obtenida
3. ✓ Los puntos críticos identificados coinciden con los mencionados en la entrevista
4. ✓ Las métricas del dashboard son las que el técnico considera importantes

---

## 🐛 Solución de Problemas

### Error: "Module not found: Can't resolve 'leaflet'"
**Solución:** Ejecutar `npm install leaflet react-leaflet`

### Error: "Hydration failed" en el mapa
**Solución:** El componente MapaViviendas ya usa `dynamic import` con `ssr: false`, no requiere cambios.

### Los iconos del mapa no se ven
**Solución:** Ya están configurados los CDN de Leaflet en `MapaViviendas.jsx`

### Error con import de CSS
**Solución:** Verificar que `import 'leaflet/dist/leaflet.css'` esté en `src/app/layout.js`

---

## 📝 Notas Importantes

1. **Datos simulados:** Los 20 registros en `viviendas.json` son ejemplos. Reemplázalos con datos reales después de la entrevista.

2. **Fotos placeholder:** Las rutas de fotos apuntan a `/placeholder-antes.jpg` y `/placeholder-despues.jpg`. Crea estas imágenes o reemplaza con fotos reales.

3. **Coordenadas GPS:** Las coordenadas simuladas están dentro de Santiago del Estero. Verifica que las coordenadas reales sean correctas.

4. **Colores del proyecto:** Todos los componentes usan los colores oficiales de Santiago del Estero definidos en `globals.css`:
   - `--red-main: #c32026`
   - `--blue-main: #0093d3`
   - `--yellow-accent: #fdb813`

5. **Recharts:** Ya está instalado en el proyecto según el `package.json` existente, no requiere instalación adicional.

---

## 🎓 Para el Informe Final

Este código demuestra:

1. ✅ **Documentación del proceso:** Diagrama de flujo completo con puntos críticos
2. ✅ **Visualización de datos:** Dashboard con métricas clave
3. ✅ **Geolocalización:** Mapa interactivo de viviendas
4. ✅ **Impacto social:** Galería antes/después
5. ✅ **Propuesta de organización:** Estructura de datos en JSON
6. ✅ **Identificación de mejoras:** Puntos críticos y oportunidades

---

## 📧 Contacto

Si tienen dudas sobre cómo activar o personalizar estos componentes, consulten con su profesor o equipo.

**¡Éxito con la entrevista y el proyecto!** 🚀
