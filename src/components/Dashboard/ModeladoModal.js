"use client";

export default function ModeladoModal({ isOpen, onClose, vista }) {
  if (!isOpen) return null;

  const modelados = {
    tecnico: {
      titulo: "Modelado de Datos - Vista Técnico",
      descripcion: "Esta vista consume datos de expedientes asignados a un técnico específico, con énfasis en seguimiento operativo.",
      entidades: [
        {
          nombre: "Expediente",
          campos: [
            { nombre: "numero", tipo: "String", descripcion: "Número único del expediente" },
            { nombre: "familia", tipo: "String", descripcion: "Apellido y nombre del beneficiario" },
            { nombre: "clasificacion", tipo: "Enum", valores: "1A, 2A, 2B, 3, 4, 5", descripcion: "Tipo de vivienda según relevamiento" },
            { nombre: "estado", tipo: "Enum", valores: "Aprobado, En obra, Evaluación, Rechazado", descripcion: "Estado actual del expediente" },
            { nombre: "localidad", tipo: "String", descripcion: "Localidad donde se encuentra la vivienda" },
            { nombre: "fecha_visita", tipo: "Date", descripcion: "Fecha de visita del técnico" },
            { nombre: "tecnico_id", tipo: "Foreign Key", descripcion: "Técnico asignado" },
            { nombre: "coordenadas", tipo: "Point", descripcion: "Lat/Lng de la vivienda" }
          ]
        },
        {
          nombre: "Tecnico",
          campos: [
            { nombre: "id", tipo: "UUID", descripcion: "Identificador único del técnico" },
            { nombre: "nombre", tipo: "String", descripcion: "Nombre completo" },
            { nombre: "zona_asignada", tipo: "String", descripcion: "Departamento o zona de trabajo" }
          ]
        },
        {
          nombre: "Alerta",
          campos: [
            { nombre: "id", tipo: "UUID", descripcion: "Identificador único" },
            { nombre: "expediente_id", tipo: "Foreign Key", descripcion: "Expediente relacionado" },
            { nombre: "tipo", tipo: "Enum", valores: "aprobado, obra, evaluacion", descripcion: "Tipo de notificación" },
            { nombre: "mensaje", tipo: "String", descripcion: "Texto de la alerta" },
            { nombre: "timestamp", tipo: "DateTime", descripcion: "Momento de generación" },
            { nombre: "leida", tipo: "Boolean", descripcion: "Si fue vista por el técnico" }
          ]
        }
      ],
      fuentes: [
        "Sistema VISOC - Base de datos de expedientes",
        "Sistema GEDO - Estados actualizados de tramitación",
        "App GPS de campo - Coordenadas georreferenciadas",
        "Sistema de notificaciones - Alertas automáticas"
      ],
      queries: [
        {
          nombre: "Expedientes del técnico",
          sql: "SELECT * FROM expedientes WHERE tecnico_id = :tecnico_actual ORDER BY fecha_visita DESC LIMIT 10"
        },
        {
          nombre: "Alertas recientes",
          sql: "SELECT a.* FROM alertas a JOIN expedientes e ON a.expediente_id = e.id WHERE e.tecnico_id = :tecnico_actual AND a.timestamp > NOW() - INTERVAL '24 hours' ORDER BY a.timestamp DESC"
        },
        {
          nombre: "KPIs del técnico",
          sql: "SELECT COUNT(*) as total, COUNT(CASE WHEN estado = 'Aprobado' THEN 1 END) as aprobados FROM expedientes WHERE tecnico_id = :tecnico_actual AND EXTRACT(MONTH FROM fecha_visita) = EXTRACT(MONTH FROM NOW())"
        }
      ]
    },
    arquitecto: {
      titulo: "Modelado de Datos - Vista Arquitecto",
      descripcion: "Esta vista agrega datos de todo el programa para análisis estratégico y toma de decisiones.",
      entidades: [
        {
          nombre: "Departamento",
          campos: [
            { nombre: "nombre", tipo: "String", descripcion: "Nombre del departamento" },
            { nombre: "total_expedientes", tipo: "Integer", descripcion: "Total de expedientes en el departamento" },
            { nombre: "aprobados", tipo: "Integer", descripcion: "Expedientes aprobados" },
            { nombre: "en_obra", tipo: "Integer", descripcion: "Viviendas en construcción" },
            { nombre: "clasificacion_1A", tipo: "Integer", descripcion: "Cantidad de tipo 1A" },
            { nombre: "clasificacion_2A", tipo: "Integer", descripcion: "Cantidad de tipo 2A" }
          ]
        },
        {
          nombre: "Metrica_Mensual",
          campos: [
            { nombre: "mes", tipo: "String", descripcion: "Nombre del mes" },
            { nombre: "visitas_nuevas", tipo: "Integer", descripcion: "Visitas realizadas ese mes" },
            { nombre: "mes_anterior", tipo: "Integer", descripcion: "Visitas del mes previo" },
            { nombre: "promedio_diario", tipo: "Float", descripcion: "Promedio de visitas por día hábil" }
          ]
        },
        {
          nombre: "Resumen_Ejecutivo",
          campos: [
            { nombre: "tasa_aprobacion", tipo: "Percentage", descripcion: "Porcentaje de expedientes aprobados" },
            { nombre: "total_en_construccion", tipo: "Integer", descripcion: "Viviendas actualmente en obra" },
            { nombre: "tiempo_promedio_aprobacion", tipo: "Integer", descripcion: "Días desde visita a aprobación" },
            { nombre: "municipios_activos", tipo: "Integer", descripcion: "Municipios con proyectos en curso" }
          ]
        }
      ],
      fuentes: [
        "Sistema VISOC - Datos agregados de expedientes",
        "Sistema GEDO - Estados oficiales de tramitación",
        "Base de datos de municipios - Información geográfica",
        "Sistema de métricas - Cálculos de tendencias"
      ],
      queries: [
        {
          nombre: "Distribución regional",
          sql: "SELECT d.nombre as departamento, COUNT(*) as total, COUNT(CASE WHEN e.estado = 'Aprobado' THEN 1 END) as aprobados FROM expedientes e JOIN departamentos d ON e.departamento_id = d.id GROUP BY d.nombre ORDER BY total DESC"
        },
        {
          nombre: "Tendencia mensual",
          sql: "SELECT DATE_TRUNC('month', fecha_visita) as mes, COUNT(*) as cantidad FROM expedientes WHERE EXTRACT(YEAR FROM fecha_visita) = 2024 GROUP BY mes ORDER BY mes"
        },
        {
          nombre: "Tasa de aprobación",
          sql: "SELECT (COUNT(CASE WHEN estado = 'Aprobado' THEN 1 END)::float / COUNT(*)::float * 100) as tasa FROM expedientes"
        }
      ]
    },
    analisis: {
      titulo: "Modelado de Datos - Vista Análisis Global",
      descripcion: "Esta vista integra todos los datos del programa para visualizaciones completas con gráficos interactivos.",
      entidades: [
        {
          nombre: "Estadisticas_Globales",
          campos: [
            { nombre: "total_viviendas", tipo: "Integer", descripcion: "Total de viviendas relevadas" },
            { nombre: "total_localidades", tipo: "Integer", descripcion: "Localidades alcanzadas" },
            { nombre: "total_instituciones", tipo: "Integer", descripcion: "ONGs y municipios ejecutores" },
            { nombre: "total_departamentos", tipo: "Integer", descripcion: "Departamentos con cobertura" }
          ]
        },
        {
          nombre: "Clasificacion",
          campos: [
            { nombre: "tipo", tipo: "Enum", valores: "1A, 2A, Derrumbe, Otra", descripcion: "Tipo de vivienda" },
            { nombre: "cantidad", tipo: "Integer", descripcion: "Cantidad de viviendas de este tipo" },
            { nombre: "porcentaje", tipo: "Float", descripcion: "Porcentaje del total" }
          ]
        },
        {
          nombre: "Estado_Proyecto",
          campos: [
            { nombre: "estado", tipo: "Enum", valores: "En relevamiento, Aprobado, En construcción, Terminado", descripcion: "Estado del proyecto" },
            { nombre: "cantidad", tipo: "Integer", descripcion: "Cantidad en este estado" }
          ]
        },
        {
          nombre: "Evolucion_Temporal",
          campos: [
            { nombre: "mes", tipo: "String", descripcion: "Mes del año" },
            { nombre: "cantidad", tipo: "Integer", descripcion: "Nuevas viviendas relevadas" },
            { nombre: "acumulado", tipo: "Integer", descripcion: "Total acumulado hasta ese mes" }
          ]
        },
        {
          nombre: "Institucion_Ejecutora",
          campos: [
            { nombre: "nombre", tipo: "String", descripcion: "Nombre de la ONG o municipio" },
            { nombre: "cantidad_proyectos", tipo: "Integer", descripcion: "Proyectos ejecutados" },
            { nombre: "tipo", tipo: "Enum", valores: "Cáritas, Municipalidad, Fundación, ONG", descripcion: "Tipo de institución" }
          ]
        }
      ],
      fuentes: [
        "Sistema VISOC - Base de datos completa",
        "Sistema GEDO - Seguimiento oficial",
        "Base de datos de instituciones - Ejecutores del programa",
        "Sistema de estadísticas - Agregaciones y cálculos",
        "Base temporal - Evolución histórica 2024"
      ],
      queries: [
        {
          nombre: "Distribución por clasificación",
          sql: "SELECT clasificacion, COUNT(*) as cantidad, (COUNT(*)::float / (SELECT COUNT(*) FROM expedientes)::float * 100) as porcentaje FROM expedientes GROUP BY clasificacion"
        },
        {
          nombre: "Estados de proyectos",
          sql: "SELECT estado_proyecto, COUNT(*) as cantidad FROM expedientes GROUP BY estado_proyecto"
        },
        {
          nombre: "Evolución mensual",
          sql: "SELECT TO_CHAR(fecha_relevamiento, 'Month') as mes, COUNT(*) as cantidad, SUM(COUNT(*)) OVER (ORDER BY DATE_TRUNC('month', fecha_relevamiento)) as acumulado FROM expedientes WHERE EXTRACT(YEAR FROM fecha_relevamiento) = 2024 GROUP BY DATE_TRUNC('month', fecha_relevamiento) ORDER BY DATE_TRUNC('month', fecha_relevamiento)"
        },
        {
          nombre: "Top departamentos",
          sql: "SELECT d.nombre as departamento, COUNT(*) as cantidad FROM expedientes e JOIN departamentos d ON e.departamento_id = d.id GROUP BY d.nombre ORDER BY cantidad DESC LIMIT 10"
        },
        {
          nombre: "Instituciones ejecutoras",
          sql: "SELECT i.nombre, COUNT(*) as cantidad_proyectos FROM expedientes e JOIN instituciones i ON e.institucion_id = i.id GROUP BY i.nombre ORDER BY cantidad_proyectos DESC"
        }
      ]
    }
  };

  const modelado = modelados[vista];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm flex items-start justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full my-8 max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
            <div>
              <h2 className="text-2xl font-bold">{modelado.titulo}</h2>
              <p className="text-purple-200 text-sm">{modelado.descripcion}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-purple-700 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {/* Entidades */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Entidades del Modelo
            </h3>
            <div className="space-y-4">
              {modelado.entidades.map((entidad, i) => (
                <div key={i} className="border-2 border-purple-200 rounded-xl overflow-hidden">
                  <div className="bg-purple-100 px-4 py-2 border-b-2 border-purple-200">
                    <h4 className="font-bold text-purple-900">{entidad.nombre}</h4>
                  </div>
                  <div className="p-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-neutral-300">
                          <th className="text-left py-2 px-2 font-semibold text-neutral-700">Campo</th>
                          <th className="text-left py-2 px-2 font-semibold text-neutral-700">Tipo</th>
                          <th className="text-left py-2 px-2 font-semibold text-neutral-700">Descripción</th>
                        </tr>
                      </thead>
                      <tbody>
                        {entidad.campos.map((campo, j) => (
                          <tr key={j} className="border-b border-neutral-200 hover:bg-neutral-50">
                            <td className="py-2 px-2 font-mono text-purple-700 font-semibold">{campo.nombre}</td>
                            <td className="py-2 px-2">
                              <span className="px-2 py-1 bg-neutral-200 rounded text-xs font-semibold text-neutral-700">
                                {campo.tipo}
                              </span>
                              {campo.valores && (
                                <div className="text-xs text-neutral-500 mt-1">{campo.valores}</div>
                              )}
                            </td>
                            <td className="py-2 px-2 text-neutral-600">{campo.descripcion}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fuentes de Datos */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
              </svg>
              Fuentes de Datos
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {modelado.fuentes.map((fuente, i) => (
                <div key={i} className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-start gap-2">
                  <svg className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-blue-900">{fuente}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Queries de Ejemplo */}
          <div>
            <h3 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Queries de Ejemplo
            </h3>
            <div className="space-y-3">
              {modelado.queries.map((query, i) => (
                <div key={i} className="bg-neutral-900 rounded-lg overflow-hidden">
                  <div className="bg-neutral-800 px-4 py-2 flex items-center justify-between">
                    <span className="text-sm font-semibold text-green-400">{query.nombre}</span>
                    <span className="text-xs text-neutral-400">SQL</span>
                  </div>
                  <div className="p-4">
                    <code className="text-sm text-green-300 font-mono whitespace-pre-wrap break-all">
                      {query.sql}
                    </code>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-neutral-100 px-6 py-4 border-t border-neutral-300 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
