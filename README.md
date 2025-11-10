# Práctica Profesionalizante ITSE - Dashboard de Análisis de Vivienda Social

> Dashboard interactivo de análisis de datos en colaboración con la Subsecretaría de Promoción Humana y Relaciones Institucionales con la Comunidad de Santiago del Estero, Argentina. Proyecto desarrollado oficiando como analistas y científicos de datos.

---

## 📋 Índice

- [Sobre el Proyecto](#sobre-el-proyecto)
- [Estado Actual](#estado-actual)
- [Tecnologías](#tecnologías)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Guías de Implementación](#guías-de-implementación)
- [Instalación y Uso](#instalación-y-uso)
- [Documentación Técnica](#documentación-técnica)
- [Contribución](#contribución)

---

## 🎯 Sobre el Proyecto

Este proyecto desarrolla un **dashboard interactivo de análisis de datos** en colaboración con la Subsecretaría de Promoción Humana, oficiando como **analistas y científicos de datos** para facilitar la visualización y comprensión del proceso de gestión de vivienda social.

### Contexto

La Subsecretaría de Promoción Humana gestiona programas de vivienda social destinados a combatir el mal de Chagas mediante la construcción y mejora de viviendas dignas. Este proyecto proporciona herramientas de análisis de datos y visualización para mejorar la toma de decisiones basada en información.

### Objetivos

1. ✅ Documentar el proceso actual de gestión de vivienda social
2. ✅ Identificar problemas y puntos críticos mediante análisis de datos
3. ✅ Desarrollar dashboard interactivo con KPIs y visualizaciones
4. ✅ Proporcionar herramientas de análisis geoespacial
5. ✅ Facilitar el trabajo de toma de decisiones del área

---

## 📊 Estado Actual

### Fase 1: ✅ Documentación Completada (7 páginas activas)

| Ruta | Descripción | Estado |
|------|-------------|--------|
| `/` | Timeline del proyecto con hitos principales | ✅ Activo |
| `/santiago` | Contexto geográfico y demográfico de Santiago del Estero | ✅ Activo |
| `/organizacion` | Detalles de la Subsecretaría y su estructura | ✅ Activo |
| `/entrevistas` | Metodología de investigación aplicada | ✅ Activo |
| `/problematica` | 4 problemas clave identificados | ✅ Activo |
| `/analisis` | Análisis cuantitativo con gráficos | ✅ Activo |
| `/conclusiones` | Conclusiones y propuestas finales | ✅ Activo |

### Fase 2: 📦 Herramientas Interactivas (Listas para activar)

Ubicación: `proyecto-post-entrevista/`

| Ruta | Descripción | Estado |
|------|-------------|--------|
| `/dashboard` | Panel con KPIs y estadísticas generales | 📦 Listo |
| `/mapa` | Mapa interactivo con Leaflet (viviendas georreferenciadas) | 📦 Listo |
| `/impacto` | Galería antes/después de intervenciones | 📦 Listo |
| `/proceso` | Diagrama de flujo interactivo del proceso | 📦 Listo |

**Componentes desarrollados:**
- 5 componentes de Dashboard (KPICard, Charts)
- Mapa con marcadores geoespaciales
- 2 componentes de galería de impacto
- Diagrama de flujo interactivo
- Datos de muestra (20 registros)

**Para activar:**
```bash
# Ver: proyecto-post-entrevista/README-ACTIVACION.md
npm install leaflet react-leaflet
# Ejecutar script de activación
```

### Fase 3: 🔮 Propuesta de Continuación (Futura)

**Base de Datos para Análisis**

Propuesta para alimentar el dashboard con datos reales de la Subsecretaría:
- 🗄️ **Diseño de Base de Datos**: Fundamentado en entrevistas con técnicos de campo
- 🔗 **Integración con Dashboard**: Scripts de exportación a JSON
- 📊 **Queries Analíticos**: Consultas optimizadas para análisis de datos
- 📈 **Vistas SQL**: Agregaciones pre-calculadas para reportes

**Documentación:** Ver `prompt-modelado-base-datos.md`

---

## 🛠️ Tecnologías

### Stack del Proyecto

```json
{
  "framework": "Next.js 15.5.6 (App Router)",
  "react": "19.1.0 (React Server Components)",
  "styling": "Tailwind CSS 4",
  "icons": "lucide-react",
  "charts": "recharts",
  "maps": "leaflet + react-leaflet",
  "utilities": "class-variance-authority, clsx, tailwind-merge"
}
```

---

## 📁 Estructura del Proyecto

```
practica-profesionalizante-itse/
├── src/
│   ├── app/                    # Páginas Next.js (App Router)
│   │   ├── page.js            # Inicio con Timeline
│   │   ├── santiago/          # Página sobre Santiago
│   │   ├── organizacion/      # Página organización
│   │   ├── entrevistas/       # Página entrevistas
│   │   ├── problematica/      # Página problemática
│   │   ├── analisis/          # Página análisis
│   │   ├── conclusiones/      # Página conclusiones
│   │   ├── layout.js          # Layout principal
│   │   └── globals.css        # Estilos globales + variables CSS
│   │
│   ├── components/            # Componentes compartidos
│   │   ├── Navbar.js          # Navegación principal
│   │   ├── Footer.js          # Footer
│   │   ├── Timeline.js        # Componente timeline
│   │   └── Card.js            # Componente card reutilizable
│   │
│   └── lib/
│       └── utils.js           # Utilidad cn() para className
│
├── proyecto-post-entrevista/  # 📦 Fase 2 (Listo para activar)
│   ├── app/                   # Nuevas páginas
│   │   ├── dashboard/         # Panel de KPIs
│   │   ├── mapa/              # Mapa interactivo
│   │   ├── impacto/           # Galería antes/después
│   │   └── proceso/           # Diagrama de flujo
│   │
│   ├── components/            # Componentes especializados
│   │   ├── Dashboard/         # 5 componentes de dashboard
│   │   ├── Mapa/              # Componente MapaViviendas
│   │   ├── Impacto/           # Componentes de galería
│   │   └── Proceso/           # DiagramaFlujo
│   │
│   ├── data/                  # Datos de muestra
│   │   ├── viviendas.json     # 20 registros de ejemplo
│   │   └── estadisticas.json  # Datos agregados
│   │
│   ├── README-ACTIVACION.md   # 📖 Guía de activación
│   ├── RESUMEN-PROYECTO.md    # Resumen de fase 2
│   ├── activar-proyecto.bat   # Script Windows
│   └── activar-proyecto.sh    # Script Linux/Mac
│
├── public/                    # Assets estáticos
│   ├── logo.png               # Logo institucional
│   ├── hero.jpg               # Imagen hero
│   └── sde.png                # Mapa Santiago del Estero
│
├── documentacion/             # 📚 Documentación del proyecto
│   ├── diagrama-flujo-proceso.md          # 8 fases documentadas
│   ├── propuesta-solucion-software.md     # Contexto teórico del proceso
│   ├── ENTREVISTA-TECNICO-FLUJO-DATOS.md  # Guía de entrevista
│   └── RESUMEN-SEGUNDA-ENTREVISTA.md      # Validación con usuarios
│
├── prompts/                   # 🤖 Prompts para IA (Claude Opus)
│   ├── prompt-integracion-estilos.md      # Integración y estilos
│   └── prompt-modelado-base-datos.md      # Diseño de BD futura
│
├── CLAUDE.md                  # Instrucciones para Claude Code
├── README.md                  # Este archivo
├── package.json               # Dependencias
├── tailwind.config.js         # Configuración Tailwind
└── next.config.js             # Configuración Next.js
```

---

## 🚀 Guías de Implementación

### 1. Integración de Estilos y Activación de Fase 2

**Archivo:** `prompt-integracion-estilos.md`

Este prompt guía la integración completa de las 11 páginas (7 activas + 4 pendientes) con estilos consistentes.

**Contenido:**
- ✅ Sistema de diseño unificado (colores, tipografía, espaciado)
- ✅ Pasos de activación (instalación de dependencias, migración de archivos)
- ✅ Homogeneización de componentes
- ✅ Optimización de navegación
- ✅ Checklist de verificación completo

**Uso:**
```bash
# 1. Abre Claude Opus
# 2. Sube prompt-integracion-estilos.md
# 3. Claude ejecutará los 8 pasos documentados
```

**Resultado esperado:**
- 11 páginas con estilos 100% consistentes
- Navbar actualizado con todas las rutas
- Componentes reutilizables optimizados
- Build sin errores

---

### 2. Diseño de Base de Datos para Dashboard

**Archivo:** `prompt-modelado-base-datos.md`

Guía para diseñar una base de datos que alimente el dashboard con datos reales. Propuesta de continuación para una futura práctica profesionalizante avanzada.

**Enfoque:**
- 📋 **Fundamentado en entrevistas**: Basado en datos capturados por técnicos de campo
- 🎯 **Orientado a análisis**: Diseñado para facilitar trabajo de analistas y científicos de datos
- 🔄 **Compatible con dashboard**: Exporta JSON para integración inmediata
- 📊 **Queries optimizados**: Consultas pre-definidas para análisis

**Genera:**

#### A. Análisis de Entrevista
- Extracción de requisitos desde `ENTREVISTA-TECNICO-FLUJO-DATOS.md`
- Identificación de datos capturados en campo
- Mapeo del flujo de información
- Justificación fundamentada de cada tabla y campo

#### B. Modelo Entidad-Relación
- Diseño de esquema completo
- Diagrama ER en Mermaid
- Diccionario de datos exhaustivo
- Scripts SQL (MySQL/PostgreSQL)

#### C. Integración con Dashboard
- Queries para exportar a JSON
- Vistas SQL para estadísticas
- Scripts de sincronización
- Consultas de ejemplo para analistas

**Uso:**
```bash
# 1. Abre Claude Opus/Sonnet
# 2. Sube prompt-modelado-base-datos.md
# 3. Sube archivos de entrevistas mencionados
# 4. Claude generará diseño de BD completo
```

**Resultado esperado:**
- `analisis-entrevista-tecnico.md` (Fundamentación)
- `modelo-er-dashboard-vivienda.md` (Diagrama ER)
- `esquema-base-datos.sql` (Script completo)
- `guia-integracion-bd-dashboard.md` (Integración)
- `plan-implementacion-bd.md` (Roadmap de 7 semanas)

---

## 💻 Instalación y Uso

### Requisitos Previos

- Node.js 18+
- npm o yarn

### Instalación

```bash
# Clonar repositorio
git clone <repository-url>
cd practica-profesionalizante-itse

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en: `http://localhost:3000`

### Comandos Disponibles

```bash
npm run dev      # Iniciar desarrollo (http://localhost:3000)
npm run build    # Construir para producción
npm start        # Iniciar servidor de producción
npm run lint     # Ejecutar ESLint
```

### Activar Fase 2 (Páginas Interactivas)

```bash
# 1. Instalar dependencias adicionales
npm install leaflet react-leaflet

# 2. Ejecutar script de activación
# Windows:
proyecto-post-entrevista\activar-proyecto.bat

# Linux/Mac:
bash proyecto-post-entrevista/activar-proyecto.sh

# 3. Verificar
npm run dev
# Navegar a /dashboard, /mapa, /impacto, /proceso
```

**Guía detallada:** Ver `proyecto-post-entrevista/README-ACTIVACION.md`

---

## 📚 Documentación Técnica

### Sistema de Colores

El proyecto utiliza los colores provinciales de Santiago del Estero:

```javascript
// Colores principales
'red-main': '#c32026'      // Rojo principal
'blue-main': '#0093d3'     // Azul principal
'yellow-accent': '#fdb813' // Amarillo acento
'black-main': '#000000'    // Negro texto
'white-main': '#FFFFFF'    // Blanco

// Colores hover
'red-darker': '#a01a1f'    // Hover rojo
'blue-darker': '#007bb5'   // Hover azul

// Escalas semánticas (50-900)
primary   // Escala azul
secondary // Escala secundaria
accent    // Escala acento
neutral   // Escala grises
```

**Uso:**
```jsx
<button className="bg-red-main hover:bg-red-darker text-white-main">
  Botón Primario
</button>
```

### Componentes Principales

#### Navbar
Navegación responsive con menú móvil.
```javascript
// Ubicación: src/components/Navbar.js
// Tipo: Client Component ('use client')
```

#### Card
Componente reutilizable para tarjetas.
```javascript
// Ubicación: src/components/Card.js
// Uso: <Card className="...">Contenido</Card>
```

#### Timeline
Línea de tiempo visual del proyecto.
```javascript
// Ubicación: src/components/Timeline.js
// Uso en: src/app/page.js (homepage)
```

### Utilidades

#### cn() - Fusión de clases
```javascript
// Ubicación: src/lib/utils.js
import { cn } from '@/lib/utils';

// Uso
<div className={cn(
  "base-classes",
  condition && "conditional-classes"
)} />
```

---

## 🗂️ Documentación del Proceso

### Entrevistas Realizadas

**Primera Entrevista - Arquitecto (Coordinador)**
- **Archivo:** `entrevista.md` / `resumen-entrevista.md`
- **Objetivo:** Entender el proceso general y contexto organizacional
- **Resultado:** Identificación de 4 problemas principales

**Segunda Entrevista - Técnico de Campo** ⭐ NUEVA
- **Archivo:** `ENTREVISTA-2-TECNICO-CAMPO.md`
- **Objetivo:** Validar flujo de trabajo detallado y requerimientos técnicos
- **Resultado:** 18 bloques con información completa del proceso operativo
- **Métricas extraídas:** Ver `METRICAS-DASHBOARD.md`

### Problemas Identificados y Validados

**Ver página:** `/problematica`

1. **⏱️ Doble carga de datos**: Técnicos cargan misma información 2 veces (10-30 min/expediente)
   - En campo: Aplicación GPS (manual)
   - En oficina: Sistema VISOC (manual, mismos datos)
2. **🔌 Inconsistencias GEDO-VISOC**: Sistemas desconectados, transferencia manual
3. **❌ Falta de retroalimentación**: Técnicos no reciben notificación de expedientes aprobados
4. **📸 Información perdida**: Fotos de avance de obra por falta de tiempo y sistemas integrados

### Solución Implementada: Dashboard de Análisis

**Componentes desarrollados:**
- 📊 Dashboard interactivo con KPIs y métricas
- 🗺️ Visualización geoespacial de viviendas
- 📸 Galería de impacto antes/después
- 📈 Gráficos de distribución y tendencias
- 📄 Documentación completa del proceso

**Datos actuales:**
- 20 registros de muestra en formato JSON
- Estadísticas pre-calculadas
- Coordenadas geoespaciales

### Propuesta de Continuación: Base de Datos

**Ver documento:** `prompt-modelado-base-datos.md`

**Propuesta para alimentar el dashboard con datos reales:**
- 🗄️ Diseño de base de datos fundamentado en entrevistas
- 🔗 Scripts de exportación a JSON
- 📊 Queries optimizados para análisis
- 📈 Vistas SQL para estadísticas

### Flujo del Proceso (8 Fases)

**Ver documento:** `diagrama-flujo-proceso.md`

1. **Inicio y Relevamiento**: Técnico visita terreno
2. **Carga de Documentación**: Preparación de expediente
3. **Verificación Administrativa**: Validación por Subsecretaría
4. **Registro Oficial GEDO**: Asignación de número de expediente
5. **Evaluación y Aprobación**: Comisión evalúa proyecto
6. **Ejecución**: Construcción de vivienda
7. **Control y Seguimiento**: Monitoreo de avances
8. **Finalización**: Entrega al beneficiario

---

## 📖 Archivos Clave

### Documentación Principal

| Archivo | Descripción |
|---------|-------------|
| `README.md` | Este archivo (visión general del proyecto) |
| `CLAUDE.md` | Instrucciones para Claude Code (IA) |

### Entrevistas y Análisis

| Archivo | Descripción |
|---------|-------------|
| `entrevista.md` | Transcripción completa - Primera entrevista (Arquitecto) |
| `resumen-entrevista.md` | Resumen ejecutivo - Primera entrevista |
| **`ENTREVISTA-2-TECNICO-CAMPO.md`** ⭐ | **Transcripción completa - Segunda entrevista (Técnico)** |
| **`METRICAS-DASHBOARD.md`** ⭐ | **Métricas clave extraídas para dashboard** |
| `ENTREVISTA-TECNICO-FLUJO-DATOS.md` | Guía de preguntas para técnicos |

### Proceso y Propuestas

| Archivo | Descripción |
|---------|-------------|
| `diagrama-flujo-proceso.md` | Proceso completo documentado (8 fases) |
| `propuesta-solucion-software.md` | Propuesta de sistema integral (SIGVS) |
| `prompt-integracion-estilos.md` | Guía para integrar Fase 2 del dashboard |
| `prompt-modelado-base-datos.md` | Diseño de BD para alimentar dashboard |
| `prompt-modelado-sistema.md` | Modelado completo del sistema |

### Activación del Dashboard

| Archivo | Descripción |
|---------|-------------|
| `proyecto-post-entrevista/README-ACTIVACION.md` | Guía para activar páginas interactivas |

---

## 🎨 Sistema de Diseño

### Principios de Diseño

1. **Consistencia**: Todos los componentes siguen el mismo patrón
2. **Identidad Provincial**: Colores de Santiago del Estero
3. **Responsive**: Mobile-first con breakpoints md: y lg:
4. **Accesibilidad**: Contraste WCAG AA, tamaños de fuente legibles
5. **Interactividad**: Hover states, transiciones suaves (300ms)

### Patrones de Componentes

**Card estándar:**
```jsx
<div className="bg-white rounded-2xl shadow-lg p-6 md:p-8
                transition-all duration-300 hover:shadow-xl
                hover:-translate-y-1">
  {/* Contenido */}
</div>
```

**Botón primario:**
```jsx
<button className="bg-red-main hover:bg-red-darker
                   text-white-main px-6 py-3 rounded-lg
                   font-semibold transition-all duration-200
                   shadow-md hover:shadow-lg">
  Acción Principal
</button>
```

**Título de sección:**
```jsx
<h2 className="text-3xl md:text-4xl font-semibold
               text-neutral-800 mb-6">
  Título de Sección
</h2>
```

---

## 👥 Contribución

### Workflow de Desarrollo

1. **Crear branch:**
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```

2. **Desarrollar y testear:**
   ```bash
   npm run dev
   # Verificar en localhost:3000
   ```

3. **Commit con convención:**
   ```bash
   git commit -m "feat: agregar nueva funcionalidad"
   # Tipos: feat, fix, docs, style, refactor, test
   ```

4. **Push y PR:**
   ```bash
   git push origin feature/nueva-funcionalidad
   # Crear Pull Request en GitHub
   ```

### Guía de Estilo

- **JavaScript**: Sin TypeScript (configurado en components.json)
- **Estilos**: Tailwind CSS (no CSS modules)
- **Componentes**: Preferir Server Components (usar 'use client' solo cuando sea necesario)
- **Formato**: Prettier con 2 espacios
- **Nombres**: camelCase para funciones, PascalCase para componentes

### Checklist de PR

- [ ] Build exitoso (`npm run build`)
- [ ] Sin errores de lint (`npm run lint`)
- [ ] Estilos consistentes con sistema de diseño
- [ ] Responsive (mobile, tablet, desktop)
- [ ] Accesibilidad verificada
- [ ] Comentarios en código complejo
- [ ] README actualizado si hay cambios estructurales

---

## 🔮 Roadmap

### ✅ Fase 1: Documentación (Completada)
- Investigación y entrevistas
- Análisis del proceso actual
- Identificación de problemas
- Desarrollo de sitio de documentación

### 🚧 Fase 2: Prototipo Interactivo (En progreso)
- Dashboard con KPIs *(Listo)*
- Mapa geoespacial *(Listo)*
- Galería de impacto *(Listo)*
- Diagrama de flujo *(Listo)*
- **Pendiente:** Integración y activación

### 📅 Fase 3: Base de Datos para Análisis (Propuesta)
- Diseño de esquema fundamentado en entrevistas con técnicos
- Implementación de base de datos (MySQL/PostgreSQL)
- Scripts de exportación a JSON
- Vistas SQL optimizadas para análisis
- Integración con dashboard existente
- Queries pre-definidos para analistas

### 🎯 Fase 4: Evolución y Mejora Continua (Futura)
- Carga periódica de datos reales de la Subsecretaría
- Expansión de métricas y visualizaciones según necesidades
- Desarrollo de nuevos reportes analíticos
- Capacitación de analistas en uso de herramientas
- API REST opcional para consumo de datos
- Integración con sistemas existentes según recursos disponibles

---

## 📞 Contacto y Soporte

### Institución
**ITSE** - Instituto Técnico Superior de Estudios

### Organización Estudiada
**Subsecretaría de Promoción Humana y Relaciones Institucionales con la Comunidad**
Gobierno de Santiago del Estero, Argentina

### Documentación
- **Sitio:** `http://localhost:3000` (desarrollo)
- **Repositorio:** [GitHub URL]
- **Issues:** [GitHub Issues URL]

---

## 📄 Licencia

Este proyecto es parte de una Práctica Profesionalizante académica del ITSE.

---

## 👥 Equipo

**Integrantes del Proyecto:**
- Pablo Castillo
- Sara Lombardi
- Valeria Martinetti
- Santiago Gallardo
- Enzo Pazzelli

**Institución:** ITSE - Instituto Técnico Superior de Estudios

---

## 🙏 Agradecimientos

- **Arq. Fernandez** - Subsecretaría de Promoción Humana (Entrevista inicial)
- **Técnicos de campo** - Por compartir su experiencia
- **ITSE** - Instituto Técnico Superior de Estudios
- **Comunidad de Santiago del Estero** - Por su colaboración

---

## 📌 Notas Importantes

### ⚠️ Privacidad
Los datos de beneficiarios en los registros de muestra están **anonimizados** por tratarse de datos hipotéticos de demostración. Los 20 registros en `viviendas.json` son datos ficticios generados para propósitos ilustrativos del dashboard.

### 🔒 Seguridad
- No commitear archivos `.env` con credenciales
- No exponer datos sensibles en el código
- Validar todas las entradas de usuario
- Usar prepared statements para SQL

### 🗺️ Datos Geoespaciales
Las coordenadas GPS en el proyecto de muestra son aproximadas y están desplazadas para proteger la privacidad de los beneficiarios reales.

---

**Desarrollado con ❤️ para la Subsecretaría de Promoción Humana de Santiago del Estero**

---

*Última actualización: Enero 2025*
