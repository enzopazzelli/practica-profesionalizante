# 🔗 Guía: De la Entrevista a los Datos

Esta guía explica **cómo cada pregunta de la entrevista se reflejará en el proyecto final**.

---

## 📋 Tabla de Contenidos

1. [Visión General](#visión-general)
2. [Mapeo por Bloque de Entrevista](#mapeo-por-bloque-de-entrevista)
3. [Archivos a Actualizar](#archivos-a-actualizar)
4. [Escenarios Comunes](#escenarios-comunes)
5. [Checklist Post-Entrevista](#checklist-post-entrevista)

---

## 🎯 Visión General

### Flujo Completo

```
ENTREVISTA → NOTAS → ACTUALIZAR DATOS → ACTIVAR PROYECTO → VALIDAR CON TÉCNICO
```

### Conexión Entre Componentes

| Sección de la Entrevista | Se Refleja En | Archivo a Actualizar |
|--------------------------|---------------|---------------------|
| BLOQUE 0: Visión General | Diagrama de Flujo | `DiagramaFlujo.jsx` |
| BLOQUE 1: Recepción de Casos | Dashboard - Instituciones | `estadisticas.json` |
| BLOQUE 2-3: Campo y Datos | Mapa + Dashboard | `viviendas.json` + `estadisticas.json` |
| BLOQUE 3: Carga Manual | Diagrama - Paso 4 | `DiagramaFlujo.jsx` |
| BLOQUE 4: GEDO | Diagrama - Pasos 5 y 6 | `DiagramaFlujo.jsx` |
| BLOQUE 5: Puntos Críticos | Diagrama - Resumen | `DiagramaFlujo.jsx` |

---

## 📝 Mapeo por Bloque de Entrevista

### **BLOQUE 0: Visión General del Proceso y Sistemas**

#### Preguntas Clave

```
✓ ¿Podría contarnos brevemente cómo se maneja el proceso completo?
✓ ¿Cómo se utilizan GEDO y VISOC?
✓ ¿Cómo se relacionan esos sistemas?
✓ ¿Dónde se guardan los datos finalmente?
✓ ¿Quiénes son responsables de cargar datos?
```

#### Se Refleja En

**📋 Página: `/proceso` - Diagrama de Flujo**

**Qué Actualizar:**

1. **Confirmar los 6 pasos** están correctos o agregar/quitar pasos
2. **Actualizar responsables** de cada paso
3. **Verificar la relación VISOC ↔ GEDO**

**Ejemplo de Actualización:**

```javascript
// components/Proceso/DiagramaFlujo.jsx

const pasos = [
  {
    numero: 1,
    titulo: 'Ingreso Inicial',
    responsable: 'ONG / Municipios', // ← Confirmar con la entrevista
    descripcion: '...', // ← Ajustar según lo que diga el técnico
  },
  // ...
];
```

**Notas a Tomar:**

- [ ] ¿Los pasos 1-6 son correctos?
- [ ] ¿Falta algún paso intermedio?
- [ ] ¿Quién hace qué en cada paso?
- [ ] ¿VISOC y GEDO trabajan en paralelo o secuencial?

---

### **BLOQUE 1: Inicio del Flujo - Recepción de Casos**

#### Preguntas Clave

```
✓ ¿Cómo llegan los casos que ustedes tienen que atender?
✓ ¿Los datos ya vienen cargados por ONG y municipios?
✓ ¿En qué formato reciben la información?
```

#### Se Refleja En

**📊 Página: `/dashboard` - Sección "Instituciones Ejecutoras"**

**Qué Actualizar:**

```json
// data/estadisticas.json

"instituciones_ejecutoras": [
  { "nombre": "Cáritas Santiago del Estero", "cantidad_proyectos": 342 },
  { "nombre": "Municipalidad Capital", "cantidad_proyectos": 198 },
  // ← Agregar las instituciones que mencione el técnico
]
```

**Notas a Tomar:**

- [ ] Lista de ONG que presentan casos
- [ ] Lista de municipios que presentan casos
- [ ] ¿Hay otras instituciones? (fundaciones, organizaciones)
- [ ] Aproximadamente cuántos casos presenta cada una

**Ejemplo de Nota:**

```
"Trabajan con Cáritas, 3 municipios (Capital, La Banda, Fernández),
y la Fundación Hábitat. Cáritas presenta la mayoría de casos."
```

**Cómo Actualizar:**

1. Abrir `data/estadisticas.json`
2. Actualizar el array `instituciones_ejecutoras`
3. Si no tienen números exactos, usar estimaciones razonables

---

### **BLOQUE 2-3: Captura de Datos en Campo**

#### Preguntas Clave

```
✓ ¿Qué tipos de datos recolectan en campo?
✓ ¿Usan coordenadas GPS?
✓ ¿Qué información es crítica registrar? (fotos, clasificación, etc.)
✓ ¿Cómo clasifican las viviendas?
```

#### Se Refleja En

**🗺️ Página: `/mapa` - Mapa Interactivo**
**📊 Página: `/dashboard` - Gráficos de Clasificación**
**🖼️ Página: `/impacto` - Galería Antes/Después**

---

#### **Caso A: SÍ usan GPS**

**Qué Actualizar:**

```json
// data/viviendas.json

[
  {
    "id": 1,
    "expediente": "2024-0001", // ← Número real
    "localidad": "Capital",    // ← Nombre real
    "departamento": "Capital",
    "coordenadas": {
      "lat": -27.7833,        // ← Coordenadas REALES del técnico
      "lng": -64.2667
    },
    "clasificacion": "2A",     // ← Usar la nomenclatura que ELLOS usen
    // ...
  }
]
```

**Notas a Tomar:**

- [ ] ¿Tienen GPS en todas las viviendas?
- [ ] ¿Qué precisión tienen las coordenadas?
- [ ] ¿En qué formato las guardan? (decimal, grados-minutos-segundos)

---

#### **Caso B: NO usan GPS**

**Acción:**

El mapa con marcadores precisos **NO es viable**.

**Alternativas:**

1. **Opción 1:** Mapa de calor por departamento (agregado)
2. **Opción 2:** Gráfico de barras por localidad (sin mapa)
3. **Opción 3:** Proponer en conclusiones agregar GPS

**Qué Actualizar:**

- Comentar o eliminar la página `/mapa`
- Enfocarse más en el dashboard con gráficos

---

#### **Clasificaciones de Vivienda**

**Preguntas Específicas:**

- ¿Cómo clasifican las viviendas?
- ¿Usan "1A", "2A", "Derrumbe" o tienen otros nombres?

**Posibles Respuestas:**

| Lo que dicen | Cómo actualizar |
|--------------|-----------------|
| "Usamos Tipo A, Tipo B, Crítica" | Cambiar todos los archivos a estos nombres |
| "Usamos 1A, 2A, 3A, Derrumbe" | Agregar "3A" a las opciones |
| "Solo marcamos Buena, Regular, Mala" | Reemplazar clasificaciones completamente |

**Archivos a Actualizar:**

1. `data/viviendas.json` - Cambiar `"clasificacion": "2A"` por lo que usen
2. `data/estadisticas.json` - Actualizar `por_clasificacion`
3. `components/Mapa/MapaViviendas.jsx` - Actualizar colores y nombres
4. `app/mapa/page.jsx` - Actualizar filtros

**Ejemplo:**

Si dicen "Tipo A, Tipo B, Crítica":

```javascript
// components/Mapa/MapaViviendas.jsx

const getIconByClasificacion = (clasificacion) => {
  const colors = {
    'Tipo A': '#0093d3',      // ← Cambiar aquí
    'Tipo B': '#fdb813',      // ← Cambiar aquí
    'Crítica': '#c32026',     // ← Cambiar aquí
  };
  // ...
};
```

---

#### **Fotos Antes/Después**

**Preguntas Específicas:**

- ¿Tienen archivo de fotos de viviendas?
- ¿Sería posible compartir 5-10 pares antes/después?

**Qué Solicitar:**

- 5-10 pares de fotos (sin datos personales)
- Formato: JPG o PNG
- Nombres descriptivos: `caso-001-antes.jpg`, `caso-001-despues.jpg`

**Cómo Actualizar:**

1. Crear carpeta `public/fotos/`
2. Colocar las fotos ahí
3. Actualizar `viviendas.json`:

```json
{
  "id": 1,
  "fotos": {
    "antes": "/fotos/caso-001-antes.jpg",  // ← Ruta real
    "despues": "/fotos/caso-001-despues.jpg"
  }
}
```

**Si NO tienen fotos:**

- La galería mostrará placeholders
- En el informe: "Propuesta: Documentar fotográficamente el proceso"

---

### **BLOQUE 3: Carga Posterior - Del Campo a la Oficina**

#### Preguntas Clave

```
✓ ¿Cuánto tiempo toma transcribir datos de 10 visitas?
✓ ¿Con qué frecuencia cargan en VISOC?
✓ ¿Cuáles son los errores más comunes?
```

#### Se Refleja En

**📋 Página: `/proceso` - Diagrama de Flujo, PASO 4**

**Qué Actualizar:**

```javascript
// components/Proceso/DiagramaFlujo.jsx

{
  numero: 4,
  titulo: 'Carga Manual en VISOC',
  tiempoEstimado: '~3 horas por 10 casos', // ← Actualizar con tiempo REAL
  puntosCriticos: [
    'Doble carga de datos',               // ← Confirmar
    'Errores de tipeo',                   // ← Agregar los que mencione
    'Tiempo: ~3h por 10 casos'            // ← Ajustar
  ]
}
```

**Notas a Tomar:**

- [ ] Tiempo exacto de transcripción
- [ ] Errores más comunes (tipeo, omisión, duplicación)
- [ ] Frecuencia de carga (diaria, semanal)
- [ ] ¿Hay validación? ¿Quién revisa?

---

### **BLOQUE 4: Paso a GEDO y Decisión Final**

#### Preguntas Clave

```
✓ ¿En qué momento los datos pasan de VISOC a GEDO?
✓ ¿Quién hace esa transferencia?
✓ ¿Qué criterio se usa para decidir qué pasa a GEDO?
```

#### Se Refleja En

**📋 Página: `/proceso` - Diagrama de Flujo, PASOS 5 y 6**

**Qué Actualizar:**

```javascript
// components/Proceso/DiagramaFlujo.jsx

{
  numero: 5,
  titulo: 'Transferencia a GEDO',
  responsable: 'Personal administrativo', // ← Confirmar quién
  descripcion: 'Carga manual de VISOC a GEDO', // ← Ajustar si es automático
  puntosCriticos: [
    'GEDO no editable',                   // ← Confirmar
    'Inconsistencias entre sistemas',     // ← Confirmar
    // Agregar los que mencione el técnico
  ]
}
```

**Notas a Tomar:**

- [ ] ¿Es transferencia manual o automática?
- [ ] ¿Todos los casos pasan a GEDO o solo aprobados?
- [ ] ¿Quién toma la decisión de qué pasa a GEDO?
- [ ] ¿Qué pasa si hay errores después de cargar en GEDO?

---

### **BLOQUE 5: Puntos Críticos y Mejoras**

#### Preguntas Clave

```
✓ ¿En qué paso se generan más demoras?
✓ ¿Hay información que se pierde en el proceso?
✓ Si pudieran mejorar UNA COSA, ¿qué sería?
```

#### Se Refleja En

**📋 Página: `/proceso` - Sección "Principales Cuellos de Botella"**

**Qué Actualizar:**

```javascript
// components/Proceso/DiagramaFlujo.jsx

<div className="mt-8 p-6 bg-red-50 rounded-lg">
  <h4>Principales Cuellos de Botella Identificados</h4>
  <div className="grid md:grid-cols-2 gap-4">
    <div>
      <p className="font-semibold">Problemas Técnicos:</p>
      <ul>
        <li>App móvil de campo inestable</li> {/* ← Confirmar */}
        <li>Pérdida de datos durante capturas</li> {/* ← Confirmar */}
        // Agregar los que mencione
      </ul>
    </div>
    <div>
      <p className="font-semibold">Problemas de Proceso:</p>
      <ul>
        <li>Doble/triple carga manual</li> {/* ← Confirmar */}
        // Agregar los que mencione
      </ul>
    </div>
  </div>
</div>
```

**Notas a Tomar:**

- [ ] Cuello de botella #1 según el técnico
- [ ] Cuello de botella #2
- [ ] Cuello de botella #3
- [ ] Información que se pierde actualmente
- [ ] Prioridad de mejora

---

## 📂 Archivos a Actualizar

### **1. Datos Simulados → Datos Reales**

#### `data/viviendas.json`

**Estructura a completar con datos del técnico:**

```json
[
  {
    "id": 1,
    "expediente": "________",           // ← Número de expediente
    "localidad": "________",            // ← Nombre de localidad
    "departamento": "________",         // ← Departamento
    "barrio": "________",               // ← Barrio
    "direccion": "________",            // ← Dirección (si tienen)
    "coordenadas": {
      "lat": ___,                       // ← Latitud GPS
      "lng": ___                        // ← Longitud GPS
    },
    "clasificacion": "________",        // ← 1A, 2A, o lo que usen
    "estado_proyecto": "________",      // ← Estado actual
    "fecha_relevamiento": "YYYY-MM-DD", // ← Fecha
    "institucion_ejecutora": "________", // ← ONG/Municipio
    "beneficiario_hash": "BEN-___",     // ← ID anonimizado
    "cantidad_miembros": ___,           // ← Miembros de familia
    "fotos": {
      "antes": "/fotos/___",            // ← Ruta foto antes
      "despues": "/fotos/___"           // ← Ruta foto después
    },
    "observaciones": "________"         // ← Notas adicionales
  }
]
```

**¿Cuántos registros pedir?**
- Mínimo: 20-30 para demostración
- Ideal: 50-100 si tienen disponible

---

#### `data/estadisticas.json`

**Estructura a completar:**

```json
{
  "resumen": {
    "total_viviendas": ___,      // ← Total histórico
    "total_localidades": ___,    // ← Cuántas localidades cubren
    "total_instituciones": ___,  // ← Cuántas ONG/municipios
    "total_departamentos": ___   // ← Cuántos departamentos
  },
  "por_clasificacion": {
    "1A": ___,                   // ← O el nombre que usen
    "2A": ___,
    "Derrumbe": ___,
    "Otra": ___
  },
  "por_estado": {
    "En relevamiento": ___,
    "Aprobado": ___,
    "En construcción": ___,
    "Terminado": ___
  },
  "evolucion_mensual_2024": [
    { "mes": "Enero", "cantidad": ___, "acumulado": ___ },
    { "mes": "Febrero", "cantidad": ___, "acumulado": ___ },
    // ...
  ]
}
```

**Preguntas específicas para completar esto:**
- ¿Cuántas viviendas hay registradas en total?
- ¿Desde qué año tienen datos sistematizados?
- ¿Cuántas viviendas relevaron este año?
- ¿Cuántas están terminadas?

---

### **2. Componentes del Diagrama de Flujo**

#### `components/Proceso/DiagramaFlujo.jsx`

**Qué ajustar según la entrevista:**

```javascript
const pasos = [
  {
    numero: 1,
    titulo: '________',          // ← Confirmar nombre del paso
    responsable: '________',     // ← Quién lo hace
    descripcion: '________',     // ← Qué hacen exactamente
    puntosCriticos: [
      '________',                // ← Problemas específicos
      '________',
    ]
  },
  // Repetir para los 6 pasos
];
```

---

### **3. Componentes del Mapa**

#### `components/Mapa/MapaViviendas.jsx`

**Si cambian las clasificaciones:**

```javascript
const getIconByClasificacion = (clasificacion) => {
  const colors = {
    '1A': '#0093d3',      // ← Cambiar nombres si usan otros
    '2A': '#fdb813',
    'Derrumbe': '#c32026',
    'Otra': '#666666'
  };
  // ...
};
```

---

## 🎬 Escenarios Comunes

### **Escenario 1: Proceso Más Complejo**

**El técnico dice:**
> "Después de VISOC, los datos pasan por un comité de aprobación antes de ir a GEDO."

**Acción:**
- Agregar PASO 5.5 en el diagrama: "Revisión por Comité"
- Actualizar el flujo en `DiagramaFlujo.jsx`

---

### **Escenario 2: Sin GPS**

**El técnico dice:**
> "No usamos GPS, solo direcciones."

**Acción:**
1. **Opción A:** Geocodificar direcciones con Google Maps API (más complejo)
2. **Opción B:** Usar solo gráficos por localidad, sin mapa
3. **Opción C:** Proponer en conclusiones agregar GPS

**Recomendación:** Opción B para el alcance del proyecto.

---

### **Escenario 3: Clasificaciones Diferentes**

**El técnico dice:**
> "Usamos Categoría 1, Categoría 2, Categoría 3 y Urgente."

**Acción:**
Reemplazar globalmente en todos los archivos:
- `1A` → `Categoría 1`
- `2A` → `Categoría 2`
- `Derrumbe` → `Urgente`
- Agregar → `Categoría 3`

---

### **Escenario 4: No Tienen Estadísticas**

**El técnico dice:**
> "No llevamos un conteo exacto, es difícil de saber."

**Acción:**
- Usar estimaciones razonables del técnico
- Documentar en el informe: "Datos basados en estimaciones del técnico"
- Proponer en conclusiones: "Implementar sistema de conteo automático"

---

### **Escenario 5: Proceso Diferente**

**El técnico dice:**
> "En realidad no usamos VISOC, todo va directo a GEDO."

**Acción:**
- **IMPORTANTE:** El diagrama está mal
- Rediseñar completamente el flujo en `DiagramaFlujo.jsx`
- Actualizar la documentación

---

## ✅ Checklist Post-Entrevista

### **Inmediatamente después de la entrevista:**

- [ ] Revisar grabación/notas
- [ ] Identificar discrepancias con lo que suponías
- [ ] Listar datos que faltan o no obtuviste

### **Al día siguiente:**

- [ ] Transcribir respuestas clave
- [ ] Solicitar datos de muestra si no los dieron
- [ ] Pedir fotos si están disponibles

### **Durante la actualización:**

- [ ] Actualizar `viviendas.json` con 20-30 registros reales
- [ ] Actualizar `estadisticas.json` con totales reales
- [ ] Ajustar `DiagramaFlujo.jsx` con proceso real
- [ ] Cambiar clasificaciones si usan otros nombres
- [ ] Agregar fotos reales a `public/fotos/`
- [ ] Probar que todo funcione: `npm run dev`

### **Validación con el técnico:**

- [ ] Mostrarle el dashboard con datos reales
- [ ] Verificar que el diagrama de flujo sea correcto
- [ ] Confirmar que las métricas tengan sentido
- [ ] Ajustar según su feedback

### **Para el informe:**

- [ ] Documentar el proceso tal como es (no como debería ser)
- [ ] Incluir screenshots del preview funcionando
- [ ] Citar al técnico en puntos clave
- [ ] Proponer mejoras basadas en problemas reales

---

## 💡 Consejos Importantes

### **Durante la Entrevista:**

1. **Graba si es posible** (con permiso) - No confíes solo en la memoria
2. **Pide ejemplos concretos** - "¿Me puede mostrar una ficha?"
3. **Pregunta por números** - "¿Aproximadamente cuántas?"
4. **Confirma nomenclaturas** - "¿Usan el término '1A' o tienen otro nombre?"
5. **Pide contacto de seguimiento** - Para dudas posteriores

### **Al Tomar Notas:**

```
✓ Buena nota:
"Usan clasificación Tipo A (vivienda estándar mejorable),
Tipo B (precaria) y Crítica (derrumbe inminente).
Relevan aprox. 50-60 viviendas/mes.
GPS: SÍ, todas tienen coordenadas."

✗ Mala nota:
"Tienen clasificaciones. Hacen varias visitas."
```

### **Si Algo No Está Claro:**

- **Pregunta nuevamente** - Mejor repetir que suponer
- **Usa ejemplos** - "Por ejemplo, si llega un caso de Cáritas..."
- **Pide aclaraciones** - "¿Me puede explicar esa parte de nuevo?"

---

## 📧 Email de Seguimiento (Plantilla)

Después de la entrevista, envía esto para obtener datos:

```
Asunto: Seguimiento Entrevista - Datos de Muestra

Estimado [Nombre del Técnico],

Muchas gracias por su tiempo en la entrevista del [fecha].
La información que nos compartió fue muy valiosa.

Para continuar con el proyecto, necesitaríamos:

1. Datos de muestra (20-30 registros en Excel) con:
   - Número de expediente
   - Localidad y departamento
   - Coordenadas GPS (si están disponibles)
   - Clasificación de vivienda
   - Estado del proyecto
   - Fecha de relevamiento
   - Institución ejecutora

   *Aclaramos que NO necesitamos nombres ni datos personales.*

2. Fotos antes/después (5-10 pares) sin datos identificables

3. Estadísticas aproximadas:
   - Total de viviendas históricas
   - Total este año
   - Cuántas localidades cubren

¿Sería posible compartir esto en los próximos días?

Muchas gracias,
[Tu nombre]
[Equipo ITSE]
```

---

## 🎯 Resultado Final Esperado

Después de actualizar todo con datos de la entrevista, tendrás:

1. ✅ **Dashboard** con métricas reales del programa
2. ✅ **Mapa** con ubicaciones reales (si tienen GPS)
3. ✅ **Diagrama de flujo** que refleja el proceso actual
4. ✅ **Galería de impacto** con fotos reales
5. ✅ **Documentación** basada en información verídica

Todo esto servirá para:
- 📊 Demostrar el proyecto funcionando
- 📝 Escribir el informe final
- 🎓 Defender ante el profesor
- 💼 Potencialmente entregárselo a la Subsecretaría

---

**¿Dudas o necesitas aclarar algo específico?** Consulta este documento durante y después de la entrevista.
