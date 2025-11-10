# Propuesta de Solución de Software
## Sistema Integral de Gestión de Vivienda Social (SIGVS)

---

## 1. Resumen Ejecutivo

La Subsecretaría de Promoción Humana y Relaciones Institucionales con la Comunidad requiere modernizar su sistema de gestión de datos de vivienda social. La presente propuesta plantea el desarrollo de un **Sistema Integral de Gestión de Vivienda Social (SIGVS)** que automatice la recolección de datos en territorio, integre los sistemas existentes, reduzca errores de transcripción y facilite la toma de decisiones basada en información geoespacial precisa.

---

## 2. Análisis de Necesidades

### 2.1. Problemáticas Identificadas

| Problemática | Impacto | Prioridad |
|-------------|---------|-----------|
| Carga manual y errores de transcripción | Alto | Alta |
| Desarticulación entre sistemas GEDO y VISOC | Alto | Media |
| Limitaciones tecnológicas en territorio | Alto | Alta |
| Falta de herramientas de visualización y control | Alto | Alta |

### 2.2. Necesidades Funcionales Clave

1. **Recolección de datos offline** en zonas sin conectividad
2. **Captura automática de coordenadas geográficas** con precisión
3. **Integración bidireccional** con sistemas GEDO y VISOC
4. **Visualización geoespacial** de viviendas y proyectos
5. **Control y auditoría** del trabajo de técnicos en campo
6. **Clasificación estandarizada** de tipos de vivienda
7. **Reducción de errores** en transcripción de datos
8. **Análisis espacial** (radios de cobertura, densidad de viviendas)

---

## 3. Arquitectura de la Solución

### 3.1. Componentes del Sistema

```
┌─────────────────────────────────────────────────────────────┐
│                    SIGVS - Arquitectura                      │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────────────┐      ┌────────────────────────────┐  │
│  │  Aplicación Móvil │◄────►│   Backend Central          │  │
│  │  (Android/iOS)   │      │   - API REST              │  │
│  │  - Relevamiento  │      │   - Lógica de negocio     │  │
│  │  - Offline-first │      │   - Sincronización        │  │
│  │  - GPS nativo    │      │   - Validaciones          │  │
│  └──────────────────┘      └────────────────────────────┘  │
│           │                            │                      │
│           │                            ▼                      │
│           │                   ┌────────────────┐             │
│           │                   │  Base de Datos │             │
│           │                   │  PostgreSQL +  │             │
│           │                   │  PostGIS       │             │
│           │                   └────────────────┘             │
│           │                            │                      │
│           ▼                            ▼                      │
│  ┌──────────────────┐      ┌────────────────────────────┐  │
│  │  Portal Web      │      │   Integración              │  │
│  │  - Dashboard     │      │   - Connector GEDO         │  │
│  │  - Mapas         │      │   - Connector VISOC        │  │
│  │  - Reportes      │      │   - ETL bidireccional      │  │
│  │  - Administración│      │   - Validación de datos    │  │
│  └──────────────────┘      └────────────────────────────┘  │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

### 3.2. Stack Tecnológico Recomendado

#### Frontend Móvil
- **Framework:** React Native (cross-platform iOS/Android)
- **Almacenamiento local:** SQLite con Watermelon DB
- **Mapas:** React Native Maps
- **Geolocalización:** React Native Geolocation Service
- **Offline-first:** Redux Persist + sincronización diferida

#### Backend
- **Framework:** Node.js + Express / NestJS
- **API:** REST + GraphQL (opcional)
- **Autenticación:** JWT + OAuth 2.0
- **Queue system:** Bull/BullMQ (para sincronizaciones)

#### Base de Datos
- **Relacional:** PostgreSQL 15+
- **Extensión geoespacial:** PostGIS
- **Cache:** Redis

#### Frontend Web
- **Framework:** Next.js 15 (ya utilizado en el proyecto)
- **Mapas:** Leaflet / Mapbox GL JS
- **Visualización:** Recharts / D3.js
- **UI:** Tailwind CSS (ya implementado)

#### Infraestructura
- **Hosting:** AWS / Google Cloud / Azure
- **Storage:** S3 (fotos, PDFs)
- **CI/CD:** GitHub Actions
- **Monitoreo:** Sentry + CloudWatch

---

## 4. Módulos Funcionales

### 4.1. Módulo de Relevamiento en Campo (App Móvil)

**Características principales:**
- Formularios estructurados para clasificación de viviendas (1A, 2A, derrumbe, incapacidad)
- Captura automática de coordenadas GPS con precisión
- Registro automático de fecha, hora y usuario
- Captura de fotografías georreferenciadas
- Funcionamiento offline completo
- Sincronización automática al recuperar conectividad
- Validación de datos en tiempo real

**Flujo de trabajo:**
1. Técnico inicia sesión en la app
2. Selecciona institución/municipio y proyecto
3. Completa formulario de relevamiento:
   - Datos del beneficiario
   - Clasificación de vivienda
   - Coordenadas (captura automática)
   - Fotos (mínimo 4: frente, fondo, laterales)
   - Observaciones
4. Datos se guardan localmente
5. Al recuperar señal, se sincronizan automáticamente
6. Sistema valida y notifica al técnico sobre el estado

### 4.2. Módulo de Integración con GEDO y VISOC

**Características principales:**
- Conector bidireccional con GEDO (lectura)
- Conector bidireccional con VISOC (lectura/escritura)
- Detección automática de inconsistencias
- Reporte de discrepancias entre sistemas
- Exportación de datos en formatos compatibles
- Log de auditoría de integraciones

**Funcionalidades:**
- Importación automática de expedientes desde GEDO
- Sincronización de clasificaciones con VISOC
- Detección de diferencias y alertas
- Propuesta de correcciones inteligentes
- Exportación a PDF para GEDO

### 4.3. Módulo de Visualización Geoespacial (Portal Web)

**Características principales:**
- Mapa interactivo con todas las viviendas registradas
- Filtros por:
  - Clasificación de vivienda
  - Estado del proyecto
  - Institución ejecutora
  - Rango de fechas
  - Departamento/municipio
- Análisis espacial:
  - Radio de cobertura (30, 40, 50 km)
  - Densidad de viviendas por zona
  - Heat maps
- Visualización de rutas de técnicos
- Capas adicionales (departamentos, municipios, áreas de riesgo)

**Herramientas de análisis:**
- Medición de distancias
- Cálculo de áreas de influencia
- Identificación de clusters de necesidad
- Comparación temporal (evolución de proyectos)

### 4.4. Módulo de Control y Auditoría

**Características principales:**
- Dashboard con KPIs en tiempo real:
  - Viviendas relevadas por técnico
  - Tiempo promedio de relevamiento
  - Tasa de sincronización
  - Errores detectados
- Tracking GPS de técnicos en campo
- Verificación de presencialidad (fecha/hora/coordenada)
- Reportes de actividad
- Alertas de anomalías

### 4.5. Módulo de Administración

**Características principales:**
- Gestión de usuarios y roles:
  - Técnicos
  - Coordinadores
  - Administradores
  - Instituciones/ONG
- Configuración de clasificaciones de vivienda
- Gestión de instituciones y municipios
- Parametrización del sistema
- Respaldos y restauración

### 4.6. Módulo de Reportería

**Características principales:**
- Reportes predefinidos:
  - Viviendas por departamento
  - Viviendas por clasificación
  - Evolución temporal
  - Productividad de técnicos
  - Estado de proyectos
- Generador de reportes personalizados
- Exportación a Excel, PDF, CSV
- Programación de reportes automáticos
- Integración con BI tools (opcional)

---

## 5. Beneficios Esperados

### 5.1. Reducción de Errores
- **80-90%** de reducción en errores de transcripción
- Validación automática de coordenadas
- Eliminación de discrepancias entre sistemas

### 5.2. Eficiencia Operativa
- **50-60%** de reducción en tiempo de carga de datos
- Sincronización automática sin intervención manual
- Proceso de relevamiento más rápido y estructurado

### 5.3. Control y Transparencia
- Trazabilidad completa de actividades
- Auditoría en tiempo real
- Verificación objetiva de trabajo en campo

### 5.4. Toma de Decisiones
- Información geoespacial precisa
- Análisis territorial automatizado
- Dashboards interactivos con datos actualizados

### 5.5. Escalabilidad
- Sistema preparado para crecer con la institución
- Arquitectura modular y extensible
- Posibilidad de agregar nuevos programas sociales

---

## 6. Plan de Implementación

### Fase 1: Diseño y Planificación (1-2 meses)
- Levantamiento detallado de requerimientos
- Diseño de arquitectura técnica
- Diseño de interfaz de usuario (UX/UI)
- Definición de integraciones con GEDO y VISOC
- Plan de migración de datos

### Fase 2: Desarrollo del MVP (3-4 meses)
**Módulos prioritarios:**
- Aplicación móvil con funcionalidad offline
- Backend con API REST
- Base de datos PostgreSQL + PostGIS
- Portal web básico con mapas
- Integración con VISOC (lectura/escritura)

### Fase 3: Pruebas Piloto (1-2 meses)
- Pruebas con 2-3 técnicos en territorio
- Ajustes basados en retroalimentación
- Validación de integración con sistemas existentes
- Capacitación inicial

### Fase 4: Despliegue Completo (1-2 meses)
- Implementación de módulos adicionales
- Integración con GEDO (lectura)
- Módulo de reportería avanzada
- Capacitación masiva
- Migración completa de datos históricos

### Fase 5: Monitoreo y Mejora Continua (ongoing)
- Soporte técnico
- Actualizaciones y mejoras
- Nuevas funcionalidades basadas en feedback
- Optimización de rendimiento

**Duración total estimada:** 6-10 meses

---

## 7. Consideraciones de Seguridad

### 7.1. Autenticación y Autorización
- Sistema de roles y permisos granular
- Autenticación de dos factores (2FA) opcional
- Sesiones con timeout automático
- Contraseñas cifradas con bcrypt

### 7.2. Protección de Datos
- Cifrado de datos sensibles en tránsito (HTTPS/TLS)
- Cifrado de base de datos
- Cumplimiento con Ley de Protección de Datos Personales (Argentina)
- Backups automáticos diarios
- Política de retención de datos

### 7.3. Auditoría
- Log completo de todas las operaciones
- Trazabilidad de cambios en datos
- Alertas de actividad sospechosa
- Reportes de auditoría

---

## 8. Capacitación y Adopción

### 8.1. Plan de Capacitación
**Técnicos de campo:**
- Uso de aplicación móvil (2-3 horas)
- Procedimientos de sincronización
- Resolución de problemas comunes

**Personal administrativo:**
- Uso del portal web (4-6 horas)
- Generación de reportes
- Interpretación de mapas y análisis

**Administradores:**
- Configuración del sistema (8-10 horas)
- Gestión de usuarios
- Integración con sistemas externos

### 8.2. Materiales de Apoyo
- Videos tutoriales
- Manual de usuario digital
- Guía rápida impresa
- FAQ y base de conocimiento
- Soporte técnico dedicado (primeros 3 meses)

---

## 9. Costos Estimados

### 9.1. Desarrollo Inicial
| Concepto | Estimación |
|----------|------------|
| Análisis y diseño | $8,000 - $12,000 USD |
| Desarrollo backend + base de datos | $15,000 - $20,000 USD |
| Desarrollo app móvil | $18,000 - $25,000 USD |
| Desarrollo portal web | $12,000 - $18,000 USD |
| Integración GEDO/VISOC | $8,000 - $12,000 USD |
| Testing y QA | $6,000 - $10,000 USD |
| Capacitación | $3,000 - $5,000 USD |
| **Total desarrollo** | **$70,000 - $102,000 USD** |

### 9.2. Costos Recurrentes Anuales
| Concepto | Estimación Anual |
|----------|------------------|
| Hosting e infraestructura (AWS/Azure) | $3,600 - $6,000 USD |
| Licencias de mapas (Mapbox/Google Maps) | $2,400 - $4,800 USD |
| Mantenimiento y soporte | $12,000 - $18,000 USD |
| Actualizaciones y mejoras | $8,000 - $15,000 USD |
| **Total anual** | **$26,000 - $43,800 USD** |

### 9.3. Opciones de Financiamiento
- Desarrollo por etapas (MVP primero)
- Financiamiento mediante organismos nacionales/internacionales
- Búsqueda de fondos específicos para modernización del Estado
- Alianzas con universidades (desarrollo colaborativo)

---

## 10. Métricas de Éxito

### KPIs a medir:
1. **Reducción de errores de transcripción:** < 5% de error
2. **Tiempo de carga de datos:** Reducción del 50%
3. **Adopción del sistema:** > 90% de técnicos usando la app
4. **Satisfacción de usuarios:** > 4/5 en encuestas
5. **Disponibilidad del sistema:** > 99% uptime
6. **Sincronización de datos:** < 24 horas desde relevamiento
7. **Precisión geoespacial:** < 10 metros de error
8. **Coherencia GEDO-VISOC:** > 95% de coincidencia

---

## 11. Riesgos y Mitigación

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|--------------|---------|------------|
| Resistencia al cambio | Media | Alto | Capacitación intensiva, champions internos |
| Problemas de conectividad | Alta | Medio | Funcionalidad offline robusta |
| Complejidad de integración GEDO | Media | Alto | Análisis técnico profundo previo, prototipo |
| Falta de presupuesto | Media | Alto | Desarrollo por fases, búsqueda de financiamiento |
| Pérdida de datos | Baja | Alto | Backups automáticos, redundancia |
| Problemas de rendimiento | Media | Medio | Testing de carga, arquitectura escalable |

---

## 12. Conclusiones

El **Sistema Integral de Gestión de Vivienda Social (SIGVS)** responde directamente a las cuatro problemáticas identificadas:

1. **Automatización:** Elimina la carga manual y reduce errores de transcripción
2. **Integración:** Conecta GEDO y VISOC, manteniendo coherencia
3. **Conectividad:** Funcionalidad offline para trabajo en territorio
4. **Visualización:** Herramientas geoespaciales para control y análisis

Esta solución no solo moderniza los procesos actuales, sino que transforma la capacidad de la institución para gestionar datos, tomar decisiones basadas en evidencia y maximizar el impacto social de sus programas.

---

## 13. Próximos Pasos

1. **Aprobación de la propuesta** por autoridades de la Subsecretaría
2. **Búsqueda de financiamiento** (programas nacionales/internacionales)
3. **Licitación o selección de equipo de desarrollo**
4. **Kick-off del proyecto** con análisis detallado de requerimientos
5. **Desarrollo del MVP** (Fase 2 del plan)
6. **Prueba piloto** con usuarios reales
7. **Despliegue y capacitación**
8. **Mejora continua** basada en feedback

---

## Anexos

### A. Glosario de Términos
- **GEDO:** Sistema electrónico oficial de gestión documental (no editable)
- **VISOC:** Sistema local operativo de la Subsecretaría (editable)
- **PostGIS:** Extensión de PostgreSQL para datos geoespaciales
- **MVP:** Minimum Viable Product (Producto Mínimo Viable)
- **ETL:** Extract, Transform, Load (proceso de integración de datos)
- **KPI:** Key Performance Indicator (Indicador Clave de Rendimiento)

### B. Referencias
- Entrevista con Arq. Ernesto Fernández (ver `entrevista.md`)
- Análisis de problemática (ver `src/app/problematica/page.js`)
- Documentación del proyecto Next.js (ver `README.md` y `CLAUDE.md`)

---

**Documento generado:** Octubre 2025
**Versión:** 1.0
**Autor:** Práctica Profesionalizante ITSE
**Institución:** Subsecretaría de Promoción Humana y Relaciones Institucionales con la Comunidad
