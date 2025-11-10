# Prompt para Integración y Estilos Consistentes - Claude Opus

## Contexto del Proyecto

Este es un proyecto Next.js 15 de documentación de práctica profesionalizante del ITSE, enfocado en la Subsecretaría de Promoción Humana de Santiago del Estero. El proyecto tiene **DOS partes**:

### Parte 1: Desplegada y Funcionando (7 páginas activas)
- `/` - Inicio con Timeline
- `/santiago` - Información sobre Santiago del Estero
- `/organizacion` - Detalles de la organización
- `/entrevistas` - Documentación de entrevistas
- `/problematica` - Exposición del problema (4 problemas clave)
- `/analisis` - Análisis de datos con gráficos Recharts
- `/conclusiones` - Conclusiones del proyecto

**Ubicación:** `src/app/` y `src/components/`

### Parte 2: Lista para Activar (4 páginas nuevas)
- `/dashboard` - Panel con KPIs y estadísticas
- `/mapa` - Mapa interactivo con Leaflet
- `/impacto` - Galería antes/después de viviendas
- `/proceso` - Diagrama de flujo del proceso

**Ubicación:** `proyecto-post-entrevista/app/` y `proyecto-post-entrevista/components/`

---

## Tu Misión

Integrar ambas partes del proyecto en una aplicación cohesiva con **estilos consistentes y profesionales**, manteniendo la identidad visual de Santiago del Estero.

---

## Paso 1: Análisis de la Situación Actual

Primero, analiza:

1. **Leer el sistema de estilos actual:**
   - `tailwind.config.js` - Colores del sistema
   - `src/app/globals.css` - Variables CSS
   - `src/components/Navbar.js` - Navegación actual
   - Páginas en `src/app/*/page.js` - Patrones de diseño

2. **Leer los componentes pendientes:**
   - Todos los archivos en `proyecto-post-entrevista/app/`
   - Todos los archivos en `proyecto-post-entrevista/components/`

3. **Identificar inconsistencias:**
   - Diferencias en uso de colores
   - Diferencias en espaciado y padding
   - Diferencias en componentes de tarjetas
   - Diferencias en tipografía
   - Diferencias en animaciones y transiciones

**IMPORTANTE:** Documenta todas las inconsistencias encontradas en una tabla comparativa.

---

## Paso 2: Definir el Sistema de Diseño Unificado

Crea un documento de diseño con:

### Paleta de Colores (Colores provinciales de Santiago del Estero)

**Colores principales:**
```javascript
'red-main': '#c32026'      // Rojo principal - CTAs, títulos importantes
'blue-main': '#0093d3'     // Azul principal - Links, elementos interactivos
'yellow-accent': '#fdb813' // Amarillo acento - Destacados, badges
'black-main': '#000000'    // Negro - Textos principales
'white-main': '#FFFFFF'    // Blanco - Fondos y textos sobre oscuro
```

**Colores hover:**
```javascript
'red-darker': '#a01a1f'    // Hover sobre rojo
'blue-darker': '#007bb5'   // Hover sobre azul
```

**Escalas semánticas (usar estas para fondos, bordes, textos secundarios):**
- `primary-*` (50-900): Escala azul
- `neutral-*` (50-900): Escala de grises
- `accent-*` (50-900): Escala de acento

### Reglas de Aplicación de Colores

1. **Navegación y headers:**
   - Fondo: `blue-main` o gradiente `from-blue-main to-blue-darker`
   - Texto: `white-main`
   - Hover links: `yellow-accent`

2. **Botones primarios:**
   - Fondo: `red-main`
   - Hover: `red-darker`
   - Texto: `white-main`

3. **Botones secundarios:**
   - Fondo: `blue-main`
   - Hover: `blue-darker`
   - Texto: `white-main`

4. **Cards y containers:**
   - Fondo: `white-main` con `shadow-lg`
   - Border (opcional): `neutral-200`
   - Hover: `shadow-xl` + `transform hover:-translate-y-1`

5. **Badges y tags:**
   - Estados positivos: `blue-main`
   - Estados negativos: `red-main`
   - Neutrales: `neutral-400`
   - Destacados: `yellow-accent` con texto oscuro

6. **Gráficos y visualizaciones:**
   - Usar paleta: `[red-main, blue-main, yellow-accent, neutral-600]`
   - Mantener consistencia en todas las gráficas

### Tipografía

**Fuente:** Inter (ya cargada en `layout.js`)

```javascript
Títulos principales (h1): 'text-4xl md:text-5xl font-bold text-neutral-900'
Títulos secundarios (h2): 'text-3xl md:text-4xl font-semibold text-neutral-800'
Títulos terciarios (h3): 'text-2xl md:text-3xl font-semibold text-neutral-800'
Subtítulos (h4): 'text-xl md:text-2xl font-medium text-neutral-700'
Párrafos: 'text-base md:text-lg text-neutral-700 leading-relaxed'
Texto pequeño: 'text-sm md:text-base text-neutral-600'
```

### Espaciado Consistente

```javascript
Padding containers: 'px-4 md:px-6 lg:px-8'
Padding cards: 'p-6 md:p-8'
Gaps entre elementos: 'gap-4 md:gap-6'
Márgenes superiores: 'mt-6 md:mt-8 lg:mt-12'
Márgenes inferiores: 'mb-6 md:mb-8 lg:mb-12'
```

### Componentes Reutilizables

Define clases consistentes para:

1. **Card estándar:**
```jsx
className="bg-white rounded-2xl shadow-lg p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
```

2. **Botón primario:**
```jsx
className="bg-red-main hover:bg-red-darker text-white-main px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
```

3. **Botón secundario:**
```jsx
className="bg-blue-main hover:bg-blue-darker text-white-main px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
```

4. **Badge:**
```jsx
className="inline-block px-3 py-1 rounded-full text-sm font-medium"
// + color específico según el tipo
```

5. **Container principal:**
```jsx
className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100"
```

6. **Section wrapper:**
```jsx
className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12"
```

---

## Paso 3: Activar e Integrar los Componentes Pendientes

### 3.1. Instalar Dependencias

```bash
npm install leaflet react-leaflet
```

### 3.2. Mover Archivos

```bash
# Desde la raíz del proyecto
# Copiar páginas
cp proyecto-post-entrevista/app/dashboard/page.jsx src/app/dashboard/page.jsx
cp proyecto-post-entrevista/app/mapa/page.jsx src/app/mapa/page.jsx
cp proyecto-post-entrevista/app/impacto/page.jsx src/app/impacto/page.jsx
cp proyecto-post-entrevista/app/proceso/page.jsx src/app/proceso/page.jsx

# Copiar componentes (crear subdirectorios si no existen)
mkdir -p src/components/Dashboard
mkdir -p src/components/Mapa
mkdir -p src/components/Impacto
mkdir -p src/components/Proceso

cp -r proyecto-post-entrevista/components/Dashboard/* src/components/Dashboard/
cp -r proyecto-post-entrevista/components/Mapa/* src/components/Mapa/
cp -r proyecto-post-entrevista/components/Impacto/* src/components/Impacto/
cp -r proyecto-post-entrevista/components/Proceso/* src/components/Proceso/

# Copiar datos
cp -r proyecto-post-entrevista/data src/
```

### 3.3. Actualizar layout.js

En `src/app/layout.js`, agregar:

```javascript
import 'leaflet/dist/leaflet.css';
```

### 3.4. Actualizar Navbar

Modificar `src/components/Navbar.js` para incluir las nuevas rutas:

```javascript
const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/santiago", label: "Sobre Santiago" },
  { href: "/organizacion", label: "Organización" },
  { href: "/entrevistas", label: "Entrevistas" },
  { href: "/problematica", label: "Problemática" },
  { href: "/analisis", label: "Análisis" },
  { href: "/dashboard", label: "Dashboard" },      // NUEVO
  { href: "/mapa", label: "Mapa" },                // NUEVO
  { href: "/impacto", label: "Impacto" },          // NUEVO
  { href: "/proceso", label: "Proceso" },          // NUEVO
  { href: "/conclusiones", label: "Conclusiones" }
];
```

---

## Paso 4: Homogeneizar Estilos en Todos los Componentes

Para CADA archivo movido/integrado:

### 4.1. Páginas (`page.jsx`)

1. **Wrapper principal:** Asegurar que todas usen:
```jsx
<div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
  <Navbar />
  <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
    {/* Contenido */}
  </main>
  <Footer />
</div>
```

2. **Títulos de página:** Consistentes en todas:
```jsx
<h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 md:mb-8">
  Título de la Página
</h1>
```

3. **Subtítulos:**
```jsx
<h2 className="text-2xl md:text-3xl font-semibold text-neutral-800 mb-4">
  Subtítulo
</h2>
```

4. **Grids y layouts:**
```jsx
{/* Para 2 columnas */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

{/* Para 3 columnas */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{/* Para 4 columnas */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
```

### 4.2. Componentes de Card/KPI

Unificar todos los componentes tipo "card":

```jsx
// KPICard, Card genéricos, etc.
<div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
  {/* Contenido */}
</div>
```

### 4.3. Componentes de Gráficos

Para todos los gráficos (Recharts):

1. **Colores consistentes:**
```jsx
const COLORS = {
  primary: '#0093d3',    // blue-main
  secondary: '#c32026',  // red-main
  accent: '#fdb813',     // yellow-accent
  neutral: '#525252'     // neutral-600
};
```

2. **Configuración de gráficos:**
```jsx
<BarChart data={data}>
  <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
  <XAxis stroke="#737373" style={{ fontSize: '0.875rem' }} />
  <YAxis stroke="#737373" style={{ fontSize: '0.875rem' }} />
  <Tooltip
    contentStyle={{
      backgroundColor: 'white',
      border: '1px solid #e5e5e5',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}
  />
  <Legend />
  <Bar dataKey="valor" fill={COLORS.primary} radius={[8, 8, 0, 0]} />
</BarChart>
```

### 4.4. Componente de Mapa

Para `MapaViviendas.jsx`:

1. **Colores de marcadores según estado:**
```javascript
const getColorPorEstado = (estado) => {
  switch(estado) {
    case 'Terminado': return '#0093d3';      // blue-main
    case 'En construcción': return '#fdb813'; // yellow-accent
    case 'Aprobado': return '#22c55e';       // green-500
    case 'Relevamiento': return '#737373';   // neutral-500
    default: return '#525252';               // neutral-600
  }
};
```

2. **Estilo del popup:**
```css
.leaflet-popup-content-wrapper {
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}
```

### 4.5. Galería Antes/Después

Para `AntesDepues.jsx` y `ClasificacionGallery.jsx`:

1. **Container de imágenes:**
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
  <div className="relative overflow-hidden rounded-xl shadow-lg group">
    <img
      src={foto.antes}
      alt="Antes"
      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
      <p className="text-white-main font-semibold">Antes</p>
    </div>
  </div>
  {/* Similar para "Después" */}
</div>
```

2. **Badges de clasificación:**
```jsx
const getBadgeColor = (clasificacion) => {
  switch(clasificacion) {
    case '1A': return 'bg-blue-main text-white-main';
    case '2A': return 'bg-yellow-accent text-black-main';
    case 'Derrumbe': return 'bg-red-main text-white-main';
    default: return 'bg-neutral-400 text-white-main';
  }
};

<span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getBadgeColor(clasificacion)}`}>
  {clasificacion}
</span>
```

### 4.6. Diagrama de Flujo

Para `DiagramaFlujo.jsx`:

1. **Boxes de pasos:**
```jsx
<div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-blue-main transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
    {paso.titulo}
  </h3>
  <p className="text-sm text-neutral-600">
    {paso.descripcion}
  </p>
</div>
```

2. **Conectores:**
```jsx
<div className="flex justify-center">
  <div className="w-1 h-8 bg-gradient-to-b from-blue-main to-blue-darker"></div>
</div>
```

3. **Puntos críticos:**
```jsx
<div className="bg-red-50 border-l-4 border-red-main rounded-lg p-4">
  <div className="flex items-start gap-3">
    <AlertTriangle className="w-5 h-5 text-red-main flex-shrink-0 mt-0.5" />
    <div>
      <h4 className="font-semibold text-red-main mb-1">Punto Crítico</h4>
      <p className="text-sm text-neutral-700">{descripcion}</p>
    </div>
  </div>
</div>
```

---

## Paso 5: Optimizar la Navegación

### 5.1. Mejorar el Navbar

Si el navbar tiene muchos links (11 ahora), considera:

**Opción A: Dropdown para secciones relacionadas**

```jsx
{/* Análisis y Datos */}
<div className="relative group">
  <button className="hover:text-yellow-accent transition-colors">
    Análisis ▾
  </button>
  <div className="absolute hidden group-hover:block bg-white shadow-xl rounded-lg mt-2 py-2 min-w-[200px]">
    <Link href="/analisis" className="block px-4 py-2 hover:bg-neutral-100">
      Análisis General
    </Link>
    <Link href="/dashboard" className="block px-4 py-2 hover:bg-neutral-100">
      Dashboard
    </Link>
    <Link href="/mapa" className="block px-4 py-2 hover:bg-neutral-100">
      Mapa Interactivo
    </Link>
  </div>
</div>

{/* Resultados */}
<div className="relative group">
  <button className="hover:text-yellow-accent transition-colors">
    Resultados ▾
  </button>
  <div className="absolute hidden group-hover:block bg-white shadow-xl rounded-lg mt-2 py-2 min-w-[200px]">
    <Link href="/impacto" className="block px-4 py-2 hover:bg-neutral-100">
      Impacto Visual
    </Link>
    <Link href="/proceso" className="block px-4 py-2 hover:bg-neutral-100">
      Proceso Completo
    </Link>
    <Link href="/conclusiones" className="block px-4 py-2 hover:bg-neutral-100">
      Conclusiones
    </Link>
  </div>
</div>
```

**Opción B: Indicador visual de sección activa**

```jsx
const pathname = usePathname();

const getLinkClasses = (href) => {
  const isActive = pathname === href;
  return `transition-colors relative ${
    isActive
      ? 'text-yellow-accent font-semibold after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-yellow-accent'
      : 'hover:text-yellow-accent'
  }`;
};

<Link href="/dashboard" className={getLinkClasses('/dashboard')}>
  Dashboard
</Link>
```

### 5.2. Breadcrumbs (opcional pero recomendado)

Agregar breadcrumbs en las páginas nuevas:

```jsx
// Nuevo componente: src/components/Breadcrumbs.jsx
'use client';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items }) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-neutral-600 mb-6">
      <Link href="/" className="flex items-center hover:text-blue-main transition-colors">
        <Home className="w-4 h-4" />
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRight className="w-4 h-4" />
          {item.href ? (
            <Link href={item.href} className="hover:text-blue-main transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-neutral-900 font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
```

**Uso en páginas:**
```jsx
import Breadcrumbs from '@/components/Breadcrumbs';

<Breadcrumbs items={[
  { label: 'Análisis', href: '/analisis' },
  { label: 'Dashboard' }
]} />
```

---

## Paso 6: Crear Componente Card Genérico Reutilizable

Para evitar repetición, crea un componente Card base:

```jsx
// src/components/Card.js (mejorado)
export default function Card({
  children,
  className = '',
  hover = true,
  padding = 'default', // 'default' | 'compact' | 'spacious'
  variant = 'default' // 'default' | 'outlined' | 'gradient'
}) {
  const paddingClasses = {
    compact: 'p-4',
    default: 'p-6 md:p-8',
    spacious: 'p-8 md:p-10'
  };

  const variantClasses = {
    default: 'bg-white shadow-lg',
    outlined: 'bg-white border-2 border-neutral-200',
    gradient: 'bg-gradient-to-br from-white to-neutral-50 shadow-lg'
  };

  const hoverClasses = hover
    ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1'
    : '';

  return (
    <div className={`rounded-2xl ${paddingClasses[padding]} ${variantClasses[variant]} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
}
```

**Uso:**
```jsx
import Card from '@/components/Card';

<Card hover={true} variant="default">
  <h3 className="text-xl font-semibold mb-2">Título</h3>
  <p>Contenido...</p>
</Card>
```

---

## Paso 7: Verificación Final y Testing

### 7.1. Checklist de Consistencia

Verifica que TODAS las páginas tengan:

- [ ] Mismo wrapper principal con gradiente de fondo
- [ ] Navbar y Footer en todas las páginas
- [ ] Títulos con clases consistentes
- [ ] Cards con mismo estilo (rounded-2xl, shadow-lg, hover effects)
- [ ] Colores de botones consistentes (red-main primario, blue-main secundario)
- [ ] Badges con colores semánticos apropiados
- [ ] Gráficos con la misma paleta de colores
- [ ] Espaciado consistente (padding, margin, gap)
- [ ] Transiciones y animaciones similares (duration-300)
- [ ] Responsive design con breakpoints md: y lg:

### 7.2. Testing de Navegación

1. **Probar todos los links del navbar:**
   - Verificar que cada link lleve a la página correcta
   - Verificar indicador de página activa (si implementado)

2. **Probar responsive:**
   - Mobile (< 768px)
   - Tablet (768px - 1024px)
   - Desktop (> 1024px)

3. **Probar interacciones:**
   - Hover sobre cards
   - Hover sobre botones
   - Click en elementos del mapa
   - Navegación en galería
   - Tooltips en gráficos

### 7.3. Performance

Ejecutar:
```bash
npm run build
npm start
```

Verificar:
- No hay errores de build
- No hay warnings de hidration
- Imágenes optimizadas
- Leaflet CSS carga correctamente
- Recharts renderiza sin errores

### 7.4. Validación Visual

Capturar screenshots de:
- Homepage
- Cada una de las 11 páginas
- Vista mobile de navegación

Verificar en conjunto que:
- Los colores sean consistentes
- El espaciado sea uniforme
- Las tipografías sean coherentes
- Las transiciones sean suaves

---

## Paso 8: Documentación Final

### 8.1. Actualizar README.md

Agregar sección de "Páginas disponibles":

```markdown
## Páginas Disponibles

### Documentación del Proyecto
- **Inicio** (`/`) - Timeline del proyecto
- **Santiago** (`/santiago`) - Contexto geográfico
- **Organización** (`/organizacion`) - Detalles institucionales
- **Entrevistas** (`/entrevistas`) - Metodología de investigación
- **Problemática** (`/problematica`) - 4 problemas identificados
- **Análisis** (`/analisis`) - Análisis cuantitativo

### Herramientas Interactivas (Post-Entrevista)
- **Dashboard** (`/dashboard`) - KPIs y estadísticas generales
- **Mapa** (`/mapa`) - Visualización geoespacial de viviendas
- **Impacto** (`/impacto`) - Galería antes/después
- **Proceso** (`/proceso`) - Diagrama de flujo documentado

### Cierre
- **Conclusiones** (`/conclusiones`) - Conclusiones y propuestas
```

### 8.2. Crear Guía de Estilos

Crear archivo `STYLEGUIDE.md` con:

```markdown
# Guía de Estilos - Proyecto ITSE

## Colores

### Principales
- Rojo: `red-main` (#c32026) - Botones primarios, CTAs
- Azul: `blue-main` (#0093d3) - Links, elementos interactivos
- Amarillo: `yellow-accent` (#fdb813) - Destacados

### Uso en Componentes
[Tabla con ejemplos de uso]

## Tipografía
[Jerarquía de títulos]

## Componentes
[Ejemplos de código para cada componente]

## Espaciado
[Grid de espaciado]
```

### 8.3. Changelog

Actualizar `resumen_de_cambios.md`:

```markdown
## [Integración] - 2025-01-XX

### Agregado
- 4 nuevas páginas: Dashboard, Mapa, Impacto, Proceso
- 15+ componentes nuevos
- Sistema de diseño unificado
- Breadcrumbs de navegación
- Componente Card genérico mejorado

### Modificado
- Navbar actualizado con nuevas rutas
- Sistema de colores estandarizado
- Todos los componentes homogeneizados con estilos consistentes
- Layout.js con importación de Leaflet CSS

### Técnico
- Instaladas dependencias: leaflet, react-leaflet
- Migrados archivos de proyecto-post-entrevista/ a src/
- Integrados datos de muestra (20 registros)
```

---

## Entregables Esperados

Al finalizar, deberías tener:

1. ✅ **11 páginas funcionando** con estilos 100% consistentes
2. ✅ **Navbar actualizado** con todas las rutas
3. ✅ **Sistema de diseño documentado** (STYLEGUIDE.md)
4. ✅ **Componentes reutilizables** unificados (Card, etc.)
5. ✅ **Sin errores de build** ni warnings
6. ✅ **Responsive en todos los breakpoints**
7. ✅ **Paleta de colores aplicada consistentemente**
8. ✅ **Documentación actualizada** (README.md, changelog)

---

## Consejos Finales

- **Usa el componente `cn()`** de `src/lib/utils.js` para combinar clases dinámicas
- **No inventes colores nuevos** - usa solo los definidos en tailwind.config.js
- **Mantén los hover effects consistentes** - todos los cards deben tener la misma interacción
- **Verifica la accesibilidad** - contraste de colores, tamaño de fuente, áreas de click
- **Optimiza imágenes** - usa Next.js Image component donde sea posible
- **Comenta código complejo** - especialmente en componentes de mapa y gráficos

---

## ¿Preguntas Frecuentes?

**P: ¿Debo crear nuevos colores además de los provinciales?**
R: No. Usa las escalas semánticas (primary, neutral, accent) para variaciones.

**P: ¿Puedo cambiar la estructura de carpetas?**
R: Sí, pero mantén la convención Next.js App Router. Documenta cualquier cambio.

**P: ¿Qué hago si un componente necesita estilos muy específicos?**
R: Primero intenta usar Tailwind. Si es muy complejo, crea un CSS module (.module.css).

**P: ¿Actualizo las páginas viejas o solo las nuevas?**
R: AMBAS. El objetivo es homogeneidad total.

---

## Comando Final de Verificación

```bash
# 1. Verificar build
npm run build

# 2. Verificar que no hay errores
npm run lint

# 3. Iniciar en producción y revisar manualmente
npm start

# 4. Capturar screenshots de todas las páginas
# (Usar herramienta como Percy, Chromatic, o manual)
```

---

**¡Adelante! Crea una experiencia visual cohesiva y profesional que refleje la identidad de Santiago del Estero.** 🇦🇷
