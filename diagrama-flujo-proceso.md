# Diagrama de Flujo - Proceso de Gestión de Vivienda Social
## Subsecretaría de Promoción Humana - Santiago del Estero

---

## VERSIÓN PARA VALIDAR CON EL ARQUITECTO

```
╔════════════════════════════════════════════════════════════════════╗
║                    PROCESO DE VIVIENDA SOCIAL                       ║
║          De la Solicitud a la Vivienda Terminada                   ║
╚════════════════════════════════════════════════════════════════════╝

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ FASE 1: INICIO Y RELEVAMIENTO                                    ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

        [INSTITUCIÓN/ONG/MUNICIPIO]
                    │
                    │ Se acerca a la Subsecretaría
                    ↓
        ┌───────────────────────────┐
        │ SUBSECRETARÍA ORIENTA     │
        │ - Requisitos              │
        │ - Procedimientos          │
        └───────────────────────────┘
                    │
                    ↓
        ┌───────────────────────────────────────┐
        │ RELEVAMIENTO TERRITORIAL              │
        │                                       │
        │ Técnico visita el lugar:              │
        │ ✓ Captura coordenadas GPS             │
        │ ✓ Toma fotos de vivienda              │
        │ ✓ Clasifica (1A, 2A, derrumbe, etc)   │
        │ ✓ Recolecta datos del beneficiario    │
        │ ✓ Guarda datos en dispositivo         │
        └───────────────────────────────────────┘
                    │
                    ↓

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ FASE 2: CARGA Y PREPARACIÓN DE DOCUMENTACIÓN                     ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

        ┌───────────────────────────────────────┐
        │ INSTITUCIÓN PREPARA CARPETA           │
        │                                       │
        │ ✓ Carga manual a VISOC (sistema local)│
        │ ✓ Genera PDF con fotos y coordenadas  │
        │ ✓ Sube documentación al expediente    │
        └───────────────────────────────────────┘
                    │
                    ↓
              ⚠️  PUNTO CRÍTICO 1
        [Posibles errores de transcripción]
                    │
                    ↓

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ FASE 3: VERIFICACIÓN ADMINISTRATIVA                              ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

        ┌───────────────────────────────────────┐
        │ INSTITUCIÓN PRESENTA REQUISITOS       │
        │                                       │
        │ ✓ Documentación legal al día          │
        │ ✓ Cuenta bancaria habilitada          │
        │ ✓ Registro en ARCA                    │
        │ ✓ Personería jurídica vigente         │
        └───────────────────────────────────────┘
                    │
                    ↓
              ┌─────────┐
              │¿Cumple? │
              └─────────┘
                 │    │
            NO ──┘    └── SÍ
             │             │
             │             ↓
    ┌────────────────┐
    │ Institución    │
    │ subsana        │──┐
    │ observaciones  │  │
    └────────────────┘  │
             ↑          │
             └──────────┘

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ FASE 4: REGISTRO OFICIAL                                         ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

        ┌───────────────────────────────────────┐
        │ CARGA A GEDO (SISTEMA OFICIAL)        │
        │                                       │
        │ ✓ Se genera número de expediente      │
        │ ✓ Datos quedan FIJOS (no editables)   │
        └───────────────────────────────────────┘
                    │
                    ↓
              ⚠️  PUNTO CRÍTICO 2
        [Posible inconsistencia GEDO ↔ VISOC]
                    │
                    ↓

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ FASE 5: EVALUACIÓN Y APROBACIÓN                                  ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

        ┌───────────────────────────────────────┐
        │ SUBSECRETARÍA EVALÚA PROYECTO         │
        └───────────────────────────────────────┘
                    │
                    ↓
              ┌──────────┐
              │¿Aprobado?│
              └──────────┘
                 │    │
            NO ──┘    └── SÍ
             │             │
             ↓             ↓
        [ARCHIVO]

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ FASE 6: EJECUCIÓN                                                ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

        ┌───────────────────────────────────────┐
        │ INSTITUCIÓN EJECUTA                   │
        │                                       │
        │ ✓ Recibe fondos en su cuenta          │
        │ ✓ Compra materiales                   │
        │ ✓ Contrata mano de obra               │
        │ ✓ Inicia construcción                 │
        └───────────────────────────────────────┘
                    │
                    ↓

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ FASE 7: CONTROL Y SEGUIMIENTO                                    ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

        ┌───────────────────────────────────────┐
        │ SUBSECRETARÍA MONITOREA               │
        │                                       │
        │ ✓ Verifica avances                    │
        │ ✓ Institución reporta inconvenientes  │
        │ ✓ Realiza verificaciones en campo     │
        └───────────────────────────────────────┘
                    │
                    ↓

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ FASE 8: FINALIZACIÓN                                             ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

        ┌───────────────────────────────────────┐
        │ CIERRE DEL PROYECTO                   │
        │                                       │
        │ ✓ Obra terminada                      │
        │ ✓ Toma de fotos "después"             │
        │ ✓ Entrega a beneficiario              │
        │ ✓ Actualización de estado en sistemas │
        └───────────────────────────────────────┘
                    │
                    ↓
                [ FIN ]


═══════════════════════════════════════════════════════════════════

                    PUNTOS CRÍTICOS IDENTIFICADOS

⚠️  PUNTO CRÍTICO 1: ERRORES DE TRANSCRIPCIÓN
    Problema: Carga manual de datos desde el campo
    Impacto: Coordenadas incorrectas, clasificaciones erróneas

⚠️  PUNTO CRÍTICO 2: INCONSISTENCIA ENTRE SISTEMAS
    Problema: GEDO (oficial) no editable vs VISOC (local) editable
    Impacto: Datos diferentes en cada sistema, dificulta auditoría

⚠️  PUNTO CRÍTICO 3: FALTA DE VISUALIZACIÓN
    Problema: No hay herramientas para ver datos geográficamente
    Impacto: Dificulta análisis territorial y toma de decisiones

═══════════════════════════════════════════════════════════════════

                    ACTORES PRINCIPALES

┌─────────────────────────────────────────────────────────────────┐
│ • INSTITUCIÓN/ONG/MUNICIPIO                                     │
│   Rol: Ejecutor del proyecto, relevamiento inicial             │
│                                                                 │
│ • TÉCNICO DE CAMPO                                              │
│   Rol: Relevamiento territorial, captura de datos              │
│                                                                 │
│ • SUBSECRETARÍA                                                 │
│   Rol: Orientación, aprobación, control, financiamiento        │
│                                                                 │
│ • BENEFICIARIO                                                  │
│   Rol: Receptor final de la vivienda                           │
└─────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════

                    SISTEMAS INVOLUCRADOS

┌─────────────────────────────────────────────────────────────────┐
│ • VISOC (Sistema Local)                                         │
│   Características: Base de datos operativa, EDITABLE           │
│   Uso: Gestión diaria, permite correcciones                    │
│                                                                 │
│ • GEDO (Sistema Oficial)                                        │
│   Características: Sistema electrónico oficial, NO EDITABLE    │
│   Uso: Registro formal, genera expedientes oficiales           │
│                                                                 │
│ • Aplicación móvil (anterior)                                   │
│   Características: Captura offline, sincronización posterior   │
│   Estado: Ya no se usa, ahora es captura de pantalla manual    │
└─────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════
```

---

## PREGUNTAS PARA VALIDAR CON EL ARQUITECTO

Durante la segunda entrevista, usar este diagrama para:

1. **¿Las fases son correctas?** ¿Falta alguna etapa?
2. **¿Los actores están bien identificados?** ¿Hay otros involucrados?
3. **¿Los puntos críticos son los más importantes?** ¿Hay otros?
4. **¿Los sistemas están bien descritos?** ¿Hay otros sistemas que se usen?
5. **¿El flujo refleja la realidad?** ¿Algo es diferente en la práctica?

---

## NOTAS

- Este diagrama está basado en la primera entrevista realizada
- Los puntos críticos son oportunidades de mejora que nuestro proyecto puede abordar
- El dashboard propuesto ayudaría especialmente con el Punto Crítico 3
- La documentación del proceso es fundamental para entender dónde intervenir
