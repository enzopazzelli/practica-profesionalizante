# MÉTRICAS CLAVE PARA EL DASHBOARD
## Extraídas de Segunda Entrevista - Técnico de Campo

**Fuente:** `ENTREVISTA-2-TECNICO-CAMPO.md`
**Fecha:** Enero 2025

---

## 🎯 REQUERIMIENTOS PRINCIPALES DEL TÉCNICO

### 💡 Mejoras Solicitadas (Textual)

**1. Aplicación móvil integrada con VISOC**
> "Una visión a mejorar sería la posibilidad de tener una **aplicación vinculada con el VISOC**, para que la información que adquirimos en la visita y toda la carga de datos que hacemos en la visita, directamente quede **impactada en el VISOC**."

**Beneficio esperado:** Eliminar doble carga de datos (ahorro de 10-30 min por expediente)

---

**2. Dashboard de seguimiento de expedientes**
> "Sería bueno por lo menos tener una **mejor visibilidad de los expedientes que han pasado por nosotros** y evitar así algún reclamo o problema."

**Funcionalidad requerida:**
- Ver expedientes que visitó el técnico
- Estado actual de cada expediente
- Expedientes pendientes de seguimiento

---

**3. Sistema de notificaciones automáticas**
> "Hay alguna modalidad de que el **GEDO nos avise que los expedientes que vimos han sido aprobados**, sería bueno."

**Alertas necesarias:**
- Expediente aprobado
- Expediente rechazado
- Construcción iniciada
- Seguimiento de obra requerido

---

## 📊 DATOS DISPONIBLES PARA EL DASHBOARD

### Datos Capturados en Campo

```json
{
  "expediente": {
    "numero": "string",
    "familia": {
      "nombre_completo": "string",
      "dni_titular": "string",
      "cantidad_habitantes": "number",
      "personas_discapacidad": "boolean",
      "personas_mayores": "boolean"
    },
    "ubicacion": {
      "departamento": "string",
      "localidad": "string",
      "coordenadas": {
        "latitud": "float",
        "longitud": "float"
      }
    },
    "clasificacion": "1A | 2A | 2B | 3 | 4 | 5",
    "institucion": {
      "tipo": "ONG | Municipio | Intendencia",
      "nombre": "string"
    },
    "tecnico": {
      "nombre": "string",
      "departamento_asignado": "string"
    },
    "fotos": {
      "frente": "url",
      "fondo": "url",
      "laterales": ["url"],
      "interior": "url"
    },
    "fechas": {
      "visita": "date",
      "informe_cargado": "date"
    },
    "observaciones": "string"
  }
}
```

### Estados del Expediente

```javascript
const ESTADOS_EXPEDIENTE = [
  "visita_realizada",
  "informe_tecnico_cargado",
  "en_evaluacion_administrativa",
  "en_evaluacion_subsecretaria",
  "en_evaluacion_ministerial",
  "evaluacion_trabajadora_social", // Casos especiales
  "aprobado",
  "rechazado",
  "en_construccion",
  "seguimiento_obra",
  "finalizado"
]
```

### Tipos de Vivienda (Presupuesto)

- 1 dormitorio
- 2 dormitorios
- 3 dormitorios
- Vivienda ecológica

---

## 📈 MÉTRICAS PROPUESTAS PARA EL DASHBOARD

### KPIs Principales

#### 1. Panel del Técnico (Vista Personal)

**Mis Expedientes:**
- Total de visitas realizadas (por período)
- Expedientes pendientes de informe
- Informes cargados esta semana/mes
- Tiempo promedio de procesamiento

**Estado de Seguimiento:**
- Expedientes aprobados (de los que visité)
- Expedientes en construcción
- Expedientes finalizados
- Expedientes rechazados

**Alertas Pendientes:**
- Expedientes que requieren seguimiento de obra
- Expedientes sin retroalimentación hace +30 días

---

#### 2. Panel Administrativo (Vista Global)

**Métricas Generales:**
- Total de viviendas por clasificación (1A, 2A, 2B, etc.)
- Total por departamento
- Total por institución ejecutora (ONG/Municipio)
- Distribución por tipo de vivienda (1, 2, 3 dormitorios)

**Estadísticas de Productividad:**
- Viviendas visitadas por técnico
- Tiempo promedio de procesamiento de informes
- Tasa de aprobación/rechazo
- Expedientes en cada estado del proceso

**Análisis Temporal:**
- Viviendas por mes/año
- Tendencias de clasificación
- Tiempo promedio por fase del proceso

---

#### 3. Mapa Geoespacial Interactivo

**Funcionalidad Base:**
- Visualización de todas las viviendas con coordenadas GPS
- Marcadores coloreados por clasificación o estado

**Al hacer clic en marcador, mostrar:**
```
Expediente N°: [número]
Familia: [nombre]
Clasificación: [1A, 2A, etc.]
Departamento: [nombre]
Localidad: [nombre]
Institución: [ONG/Municipio]
Estado: [aprobado/en construcción/etc.]
Técnico: [nombre]
Fecha visita: [fecha]
[Ver fotos] [Ver informe completo]
```

**Filtros del Mapa:**
- Por clasificación (1A, 2A, 2B, etc.)
- Por estado (aprobado, en construcción, etc.)
- Por departamento
- Por institución ejecutora
- Por técnico responsable
- Por rango de fechas

**Análisis Espacial:**
- Heat map de densidad de viviendas
- Radio de cobertura por departamento
- Clusters de necesidad por zona

---

## 🔴 PROBLEMAS CRÍTICOS A RESOLVER

### 1. Doble Carga de Datos

**Problema:**
- Técnico carga datos en App GPS durante visita (manual)
- Técnico vuelve a cargar mismos datos en VISOC en oficina (manual)
- **Tiempo perdido:** 10-30 minutos por expediente

**Solución en Dashboard:**
- NO aplica directamente (requiere desarrollo de app móvil integrada)
- Dashboard puede mostrar: "Últimos expedientes sincronizados desde campo"

---

### 2. Falta de Retroalimentación

**Problema:**
- Técnicos NO reciben notificación cuando expediente es aprobado
- Se enteran por ONGs/Municipios (o nunca)
- No pueden hacer seguimiento proactivo de obra

**Solución en Dashboard:**
- ✅ Panel de "Mis Expedientes" con estados actualizados
- ✅ Notificaciones/alertas de cambios de estado
- ✅ Vista de expedientes aprobados pendientes de seguimiento

---

### 3. Información Perdida (Avance de Obra)

**Problema:**
- Técnicos toman fotos de avance de obra pero no las cargan
- Motivo: Toma mucho tiempo por sistemas desconectados
- Resultado: Desconocen cómo se construyó la vivienda

**Solución en Dashboard:**
- ✅ Galería de fotos de avance de obra (si se logra cargar)
- ✅ Timeline de construcción con fotos por fase
- ✅ Comparación antes/durante/después

---

## 🎨 DISEÑO DE PANTALLAS SUGERIDO

### Pantalla 1: Dashboard Principal

```
┌─────────────────────────────────────────────────────┐
│  Dashboard - Técnico [Nombre]                       │
├─────────────────────────────────────────────────────┤
│                                                       │
│  📊 KPIs                                             │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌─────────┐│
│  │Visitas   │ │Aprobados │ │En Obra   │ │Pendiente││
│  │   24     │ │    18    │ │    12    │ │    5    ││
│  └──────────┘ └──────────┘ └──────────┘ └─────────┘│
│                                                       │
│  🔔 Alertas Recientes                                │
│  • Expediente #1234 aprobado - Requiere seguimiento │
│  • Expediente #5678 en construcción - Visitar obra   │
│                                                       │
│  📈 Gráfico: Expedientes por Estado                  │
│  [Gráfico de barras]                                 │
│                                                       │
│  🗺️ Mapa de Mis Viviendas                           │
│  [Mapa interactivo con filtros]                      │
│                                                       │
└─────────────────────────────────────────────────────┘
```

---

### Pantalla 2: Mis Expedientes (Tabla)

```
┌─────────────────────────────────────────────────────────────────┐
│  Mis Expedientes                              [🔍 Buscar] [🔽 Filtros] │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  N° Exp.  │ Familia        │ Clasificación │ Estado          │ Acción  │
│  ─────────┼────────────────┼───────────────┼─────────────────┼─────────│
│  #1234    │ García, Juan   │ 1A            │ ✅ Aprobado     │ [Ver]   │
│  #5678    │ López, María   │ 2A            │ 🏗️ En obra      │ [Ver]   │
│  #9101    │ Pérez, Carlos  │ 2B            │ ⏳ Evaluación   │ [Ver]   │
│  #1121    │ Rojas, Ana     │ 1A            │ ❌ Rechazado    │ [Ver]   │
│                                                                   │
│  [Paginación: 1 2 3 ... 10]                                      │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

---

### Pantalla 3: Detalle de Expediente

```
┌──────────────────────────────────────────────────────┐
│  Expediente #1234                      [← Volver]    │
├──────────────────────────────────────────────────────┤
│                                                        │
│  📋 Información General                               │
│  Familia: García, Juan (DNI: 12345678)               │
│  Localidad: La Banda, Santiago del Estero            │
│  Clasificación: 1A (Vivienda precaria - Urgente)     │
│  Institución: Municipalidad de La Banda              │
│                                                        │
│  👤 Técnico Responsable                               │
│  Técnico: [Tu nombre]                                │
│  Fecha visita: 15/01/2025                            │
│                                                        │
│  📍 Ubicación                                         │
│  Coordenadas: -27.7833, -64.2667                     │
│  [Mapa con marcador]                                 │
│                                                        │
│  📸 Fotos de la Visita                                │
│  [Frente] [Fondo] [Lateral Izq] [Lateral Der] [Interior] │
│                                                        │
│  📊 Estado del Expediente                             │
│  ┌─────────────────────────────────────────────┐     │
│  │ ✅ Visita realizada      │ 15/01/2025       │     │
│  │ ✅ Informe cargado       │ 16/01/2025       │     │
│  │ ✅ Evaluación admin      │ 18/01/2025       │     │
│  │ ✅ Aprobado por Ministro │ 25/01/2025       │     │
│  │ 🏗️ En construcción       │ 01/02/2025       │     │
│  └─────────────────────────────────────────────┘     │
│                                                        │
│  🔔 Acción Requerida                                  │
│  ⚠️ Requiere seguimiento de obra                     │
│  [Programar visita de seguimiento]                   │
│                                                        │
└──────────────────────────────────────────────────────┘
```

---

## 🔧 DATOS TÉCNICOS

### Organización del Personal

- **Total técnicos:** 10 técnicos + 2 arquitectas
- **Distribución:** Por departamento (1 o más técnicos según flujo)
- **Zonas:** Toda la provincia de Santiago del Estero

### Tiempos del Proceso

- **Visita en campo:** Variable (depende de zona y cantidad de familias)
- **Procesamiento de informe:** 10-30 minutos por expediente
- **Factores que afectan tiempo:**
  - Capacidad del técnico
  - Herramientas disponibles (computadora, software)
  - Complejidad del caso

### Clasificaciones de Vivienda

**Sistema de clasificación del 1 al 5:**
- **1A:** Vivienda precaria estándar (más común)
- **2A:** Vivienda semi-precaria
- **2B:** Vivienda con necesidades específicas
- **3-5:** Otras clasificaciones (consultar planilla oficial)

**Nota:** Solicitar planilla oficial con todas las clasificaciones detalladas

---

## 📋 FILTROS RECOMENDADOS

### Filtros Globales (Aplican a todas las vistas)

**Por Entidad:**
- Departamento (dropdown con todos los departamentos)
- Localidad (dependiente del departamento)
- Institución Ejecutora (ONG, Municipio, Intendencia)
- Nombre de institución específica

**Por Clasificación:**
- Todas las clasificaciones
- Solo 1A (urgentes)
- Solo 2A
- Solo 2B
- Otras

**Por Estado:**
- Todos
- Pendiente de visita
- Visita realizada
- En evaluación
- Aprobado
- Rechazado
- En construcción
- Finalizado

**Por Técnico:**
- Todos
- Por técnico específico (dropdown)
- Mis expedientes (filtro personal)

**Por Fecha:**
- Último mes
- Últimos 3 meses
- Último año
- Rango personalizado

---

## 🎯 PRIORIZACIÓN DE DESARROLLO

### Fase 1 (MVP - Crítico)
1. ✅ Dashboard personal del técnico
2. ✅ Lista de "Mis Expedientes" con estados
3. ✅ Mapa geoespacial básico con coordenadas
4. ✅ Vista detalle de expediente

### Fase 2 (Mejoras)
5. ✅ Sistema de notificaciones/alertas
6. ✅ Filtros avanzados
7. ✅ Gráficos y estadísticas
8. ✅ Galería de fotos antes/después

### Fase 3 (Avanzado)
9. ⏳ Análisis espacial (heat maps, clusters)
10. ⏳ Exportación de reportes (PDF, Excel)
11. ⏳ Integración con app móvil (futuro)
12. ⏳ Timeline de avance de obra

---

## 📝 NOTAS IMPORTANTES

### Limitaciones Actuales

1. **No hay métricas específicas del técnico**
   - El técnico NO especificó qué 3-4 KPIs son prioritarios
   - Se infirieron métricas basadas en problemas identificados

2. **Falta información de clasificaciones**
   - Solicitar planilla oficial con todas las clasificaciones
   - Entender diferencias entre 1A, 2A, 2B, 3, 4, 5

3. **Datos de muestra pendientes**
   - Solicitar 20-30 registros reales (anonimizados)
   - Solicitar 5-10 pares de fotos antes/después
   - Coordenadas GPS de ejemplo

### Próximos Pasos Recomendados

1. **Validar métricas con el técnico**
   - Mostrarle mockups/wireframes
   - Preguntar: "¿Estos 4 KPIs te sirven? ¿Agregarías otros?"
   - Priorizar qué ve primero en la pantalla principal

2. **Definir permisos y roles**
   - ¿Qué ve un técnico vs un coordinador vs un administrador?
   - ¿Pueden ver expedientes de otros técnicos?

3. **Integración con sistemas existentes**
   - ¿Se puede consultar VISOC para obtener datos?
   - ¿Se puede consultar GEDO para estados?
   - ¿O es solo visualización de datos exportados?

---

**Documento generado:** Enero 2025
**Basado en:** ENTREVISTA-2-TECNICO-CAMPO.md
**Estado:** Métricas inferidas - Requiere validación con usuario final
