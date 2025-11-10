# Segunda Entrevista Específica
## Subsecretaría de Promoción Humana - Programa de Vivienda Social

**Fecha:** ___/___/2025
**Duración estimada:** 20-30 minutos
**Entrevistado:** Arq. Ernesto Fernández
**Equipo:** Práctica Profesionalizante ITSE

---

## INTRODUCCIÓN A LA ENTREVISTA

### Presentación del contexto

"Arquitecto, buenos días/tardes. Muchas gracias nuevamente por su tiempo.

En la primera entrevista que tuvimos, nos explicó todo el proceso de gestión de vivienda social, los sistemas que utilizan (GEDO y VISOC), y las problemáticas que enfrentan con la carga manual de datos, errores de transcripción y la necesidad de visualización geográfica.

Con esa información, nosotros desarrollamos inicialmente una propuesta de solución tecnológica completa que incluía una aplicación móvil, backend e integraciones. Sin embargo, **nuestro profesor nos reorientó el enfoque del trabajo** hacia algo más realista considerando que somos estudiantes y los tiempos de la materia."

### Explicación del nuevo alcance

"**El nuevo enfoque de nuestro proyecto es:**

En lugar de proponer el desarrollo de una aplicación completa, nos vamos a concentrar en:

1. **Documentar claramente el proceso actual** mediante un diagrama de flujo, desde que una institución se acerca hasta que la vivienda está terminada, identificando los puntos críticos.

2. **Diseñar un dashboard de visualización de datos** que muestre la información que usted y el equipo necesitan ver: cantidad total de viviendas, distribución por localidades, clasificaciones, estados de proyectos, etc.

3. **Crear un mapa interactivo** donde se puedan visualizar las ubicaciones de las viviendas usando las coordenadas GPS que ustedes registran.

4. **Mostrar el impacto visual del programa** con una galería de fotos del antes y después de las viviendas.

5. **Documentar cómo se podrían procesar y organizar los datos** que ustedes ya tienen para alimentar ese dashboard.

**No vamos a desarrollar una app móvil ni un sistema completo**, sino enfocarnos en **cómo visualizar y aprovechar mejor los datos que ustedes ya recolectan**."

### Validación del enfoque

"Nuestro profesor nos pidió específicamente que nos enfoquemos en mostrar:
- Qué información necesita ver en un dashboard
- Cómo están los datos actualmente y cómo se podrían organizar
- El flujo del proceso actual para identificar mejoras

**¿Este enfoque le parece útil para el área?** ¿Le serviría tener un dashboard donde pueda consultar rápidamente totales de viviendas por localidad, ver el mapa de ubicaciones y generar reportes básicos?"

---

## PREGUNTAS DE LA ENTREVISTA

### BLOQUE 1: VALIDACIÓN DEL PROCESO (5 minutos)

**[Mostrar diagrama de flujo preparado]**

"Basándonos en la primera entrevista, armamos este diagrama del proceso. ¿Podría verificar si refleja correctamente cómo funciona actualmente?"

**Preguntas de seguimiento:**
1. ¿Hay alguna etapa que falte o que hayamos malinterpretado?
2. ¿Los puntos que marcamos como "críticos" (errores de transcripción, inconsistencias GEDO-VISOC) son los más importantes?
3. ¿Hay otros problemas en el proceso que deberíamos destacar?

---

### BLOQUE 2: NECESIDADES DEL DASHBOARD (10 minutos)

**Pregunta central:**
"Si tuviera un dashboard donde consultar información cada mañana, **¿qué 3 o 4 datos serían los más importantes para usted?**"

**Preguntas específicas:**

**2.1 Métricas principales**
- ¿Necesita ver el total de viviendas gestionadas? ¿Discriminado de alguna forma en particular?
- ¿Le sirve ver la distribución por departamento/localidad?
- ¿Es importante ver la clasificación de las viviendas (1A, 2A, derrumbe, etc.)?
- ¿Necesita ver estados de los proyectos (en relevamiento, aprobado, en construcción, terminado)?

**2.2 Visualización del mapa**
- En el mapa de ubicaciones, ¿qué le gustaría ver al hacer click en un punto?
  - ¿Solo la dirección y clasificación?
  - ¿Datos del beneficiario?
  - ¿Fotos de la vivienda?
  - ¿Estado del proyecto?

**2.3 Filtros útiles**
"¿Cuáles de estos filtros le serían más útiles?"
- Por rango de fechas (ej: viviendas del último año)
- Por localidad/departamento
- Por institución ejecutora
- Por clasificación de vivienda
- Por estado del proyecto

**2.4 Comparaciones temporales**
- ¿Le interesa comparar datos entre períodos? (ej: viviendas de 2024 vs 2023)
- ¿Necesita ver evolución mes a mes o es suficiente anual?

---

### BLOQUE 3: DATOS EXISTENTES (5 minutos)

**Objetivo:** Entender qué información hay disponible para diseñar el dashboard

**3.1 Volumen de datos**
- Aproximadamente, ¿cuántas viviendas hay registradas en total?
- ¿Desde qué año tienen datos sistematizados?

**3.2 Formato actual**
- ¿En qué formato están los datos ahora? (¿Excel? ¿Base de datos? ¿Otro?)
- ¿Qué tan completos están los datos en promedio? (ej: ¿todas tienen coordenadas?)

**3.3 Acceso a datos de muestra**
"Para diseñar el dashboard de forma realista, **¿sería posible acceder a una muestra de datos anonimizados?**"
Por ejemplo: una tabla Excel con 20-30 registros de ejemplo que incluyan:
- ID o número de expediente
- Localidad/Departamento
- Coordenadas GPS
- Clasificación de vivienda
- Estado del proyecto
- Fecha de relevamiento
- Institución ejecutora

*(Aclarar que no necesitamos nombres ni datos personales, solo la estructura para saber qué información existe)*

---

### BLOQUE 4: DOCUMENTACIÓN VISUAL (3 minutos)

**4.1 Fotos antes/después**
- ¿Tienen un archivo organizado de fotos de las viviendas?
- **¿Sería posible compartir 5-10 pares de fotos (antes/después)** para incluir en la documentación del proyecto?
  *(Sin datos personales identificables, solo para mostrar el impacto del programa)*

**4.2 Ejemplos de clasificación**
- ¿Podría compartir una foto de ejemplo de cada tipo de vivienda?
  - Una típica 1A (estándar)
  - Una típica 2A (precaria)
  - Un caso de derrumbe
  - Una vivienda construida por el programa (terminada)

---

### BLOQUE 5: PRIORIDADES Y CIERRE (2 minutos)

**5.1 Priorización**
"De todo lo que conversamos, si tuviera que priorizar **una sola funcionalidad** del dashboard, ¿cuál sería la más importante?"
- Mapa con ubicaciones
- Total de viviendas por localidad
- Galería de fotos antes/después
- Reportes para presentar a autoridades
- Otra: _______________

**5.2 Usuarios del dashboard**
"¿Quién más además de usted necesitaría consultar esta información?"
- ¿Equipo de la subsecretaría?
- ¿Autoridades superiores?
- ¿Instituciones ejecutoras?

---

## CIERRE DE LA ENTREVISTA

"Arquitecto, muchísimas gracias por su tiempo y por toda la información. Esto nos va a ayudar mucho para:

1. **Diseñar el dashboard** enfocado en las métricas que realmente necesitan
2. **Documentar el proceso actual** de forma clara
3. **Mostrar el impacto social** del programa con la galería de fotos

**¿Está bien si lo contactamos nuevamente** en caso de que surja alguna duda puntual mientras armamos el dashboard? Sería por email o WhatsApp, consultas muy breves.

También, **cuando tengamos el prototipo del dashboard armado**, nos gustaría mostrárselo para validar que sea útil y hacer ajustes si es necesario. ¿Le parece bien?"

---

## MATERIALES A SOLICITAR

**Resumen de lo que necesitamos pedirle:**

✅ **Validación del diagrama de flujo** (le mostraremos uno preparado)

✅ **Datos de muestra anonimizados** (20-30 registros en Excel con la estructura de información)

✅ **Fotos antes/después** (5-10 pares de fotos sin datos personales)

✅ **Fotos de ejemplo** de cada clasificación de vivienda

✅ **Contacto para consultas** puntuales vía email/WhatsApp

---

## NOTAS PARA EL EQUIPO

**Antes de la entrevista:**
- [ ] Imprimir diagrama de flujo para mostrarle
- [ ] Llevar laptop para mostrar mockup básico del dashboard (si tenemos)
- [ ] Preparar grabadora o app de grabación (pedir permiso)
- [ ] Llevar cuaderno para tomar notas

**Durante la entrevista:**
- [ ] Pedir permiso para grabar
- [ ] Tomar notas de las prioridades que mencione
- [ ] Si menciona algo que no entendamos, preguntar en el momento
- [ ] Observar su reacción cuando mostremos el diagrama de flujo

**Después de la entrevista:**
- [ ] Transcribir respuestas principales
- [ ] Hacer seguimiento para recibir los datos y fotos solicitadas
- [ ] Validar que tengamos toda la información necesaria
- [ ] Agradecer por email

---

**Duración estimada total:** 25-30 minutos
**Formato sugerido:** Presencial en su oficina (para poder mostrar el diagrama y mockups)
