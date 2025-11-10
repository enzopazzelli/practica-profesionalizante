"use client";

import { AlertCircle, ArrowDown, CheckCircle, FileText, MapPin, Database, Send } from 'lucide-react';

export default function DiagramaFlujo() {
  const pasos = [
    {
      numero: 1,
      titulo: 'Ingreso Inicial',
      responsable: 'ONG / Municipios',
      descripcion: 'Instituciones presentan casos con planillas y expedientes',
      icono: <FileText size={32} />,
      puntosCriticos: ['Datos incompletos', 'Información duplicada', 'Falta de estandarización'],
      colorBorde: 'border-blue-main',
      colorBg: 'bg-blue-50'
    },
    {
      numero: 2,
      titulo: 'Recepción por Técnicos',
      responsable: 'Subsecretaría',
      descripcion: 'Verifican información y planifican visitas',
      icono: <CheckCircle size={32} />,
      decision: '¿Información completa?',
      opciones: ['SI → Visita de campo', 'NO → Solicitar datos adicionales'],
      colorBorde: 'border-blue-main',
      colorBg: 'bg-blue-50'
    },
    {
      numero: 3,
      titulo: 'Visita de Campo',
      responsable: 'Técnicos en territorio',
      descripcion: 'Recolectan datos: fotos, GPS, clasificación de vivienda',
      icono: <MapPin size={32} />,
      puntosCriticos: ['App móvil inestable', 'Pérdida de datos', 'Falta de conectividad'],
      colorBorde: 'border-yellow-accent',
      colorBg: 'bg-yellow-50'
    },
    {
      numero: 4,
      titulo: 'Carga Manual en VISOC',
      responsable: 'Personal de oficina',
      descripcion: 'Transcripción manual de datos del campo',
      icono: <Database size={32} />,
      puntosCriticos: ['Doble carga de datos', 'Errores de tipeo', 'Tiempo: ~3h por 10 casos'],
      tiempoEstimado: '~3 horas por 10 casos',
      colorBorde: 'border-red-main',
      colorBg: 'bg-red-50'
    },
    {
      numero: 5,
      titulo: 'Transferencia a GEDO',
      responsable: 'Personal administrativo',
      descripcion: 'Carga manual de VISOC a GEDO para expedientes oficiales',
      icono: <Send size={32} />,
      puntosCriticos: ['GEDO no editable', 'Inconsistencias entre sistemas', 'Nueva transcripción manual'],
      colorBorde: 'border-red-main',
      colorBg: 'bg-red-50'
    },
    {
      numero: 6,
      titulo: 'Decisión Final y Aprobación',
      responsable: 'Autoridades',
      descripcion: 'Revisión, aprobación de proyecto y asignación de presupuesto',
      icono: <CheckCircle size={32} />,
      decision: '¿Proyecto aprobado?',
      opciones: ['SI → Ejecución de obra', 'NO → Rechazar o solicitar ajustes'],
      colorBorde: 'border-green-600',
      colorBg: 'bg-green-50'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-2xl font-bold text-neutral-900 mb-4">Flujo de Datos - Gestión de Vivienda Social</h3>
      <p className="text-neutral-600 mb-8">
        Proceso completo desde que una institución presenta un caso hasta que se aprueba y ejecuta la obra.
      </p>

      <div className="space-y-6">
        {pasos.map((paso, index) => (
          <div key={paso.numero}>
            {/* Paso */}
            <div className={`border-l-4 ${paso.colorBorde} ${paso.colorBg} rounded-lg p-6`}>
              <div className="flex items-start space-x-4">
                {/* Icono */}
                <div className={`${paso.colorBorde.replace('border', 'bg')} text-white p-3 rounded-full flex-shrink-0`}>
                  {paso.icono}
                </div>

                {/* Contenido */}
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="bg-neutral-900 text-white text-sm font-bold px-3 py-1 rounded-full">
                      PASO {paso.numero}
                    </span>
                    <h4 className="text-xl font-bold text-neutral-900">{paso.titulo}</h4>
                  </div>

                  <p className="text-sm text-neutral-600 mb-2">
                    <span className="font-semibold">Responsable:</span> {paso.responsable}
                  </p>

                  <p className="text-neutral-700 mb-3">{paso.descripcion}</p>

                  {/* Tiempo estimado */}
                  {paso.tiempoEstimado && (
                    <p className="text-sm text-neutral-600 mb-3">
                      <span className="font-semibold">⏱️ Tiempo estimado:</span> {paso.tiempoEstimado}
                    </p>
                  )}

                  {/* Puntos críticos */}
                  {paso.puntosCriticos && (
                    <div className="bg-white rounded-lg p-3 border-2 border-red-200">
                      <div className="flex items-center space-x-2 mb-2">
                        <AlertCircle size={16} className="text-red-600" />
                        <p className="font-semibold text-sm text-red-800">Puntos Críticos:</p>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-sm text-neutral-700">
                        {paso.puntosCriticos.map((punto, idx) => (
                          <li key={idx}>{punto}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Decisión */}
                  {paso.decision && (
                    <div className="bg-white rounded-lg p-3 border-2 border-blue-200 mt-3">
                      <p className="font-semibold text-sm text-blue-800 mb-2">
                        🔀 Punto de Decisión: {paso.decision}
                      </p>
                      <ul className="space-y-1 text-sm text-neutral-700">
                        {paso.opciones.map((opcion, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <span className="text-blue-600">→</span>
                            <span>{opcion}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Flecha hacia siguiente paso */}
            {index < pasos.length - 1 && (
              <div className="flex justify-center my-4">
                <ArrowDown size={32} className="text-neutral-400" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Resumen de problemas */}
      <div className="mt-8 p-6 bg-red-50 rounded-lg border-2 border-red-200">
        <h4 className="font-bold text-lg text-red-900 mb-3 flex items-center space-x-2">
          <AlertCircle size={24} />
          <span>Principales Cuellos de Botella Identificados</span>
        </h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="font-semibold text-sm text-red-800 mb-2">Problemas Técnicos:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-neutral-700">
              <li>App móvil de campo inestable</li>
              <li>Pérdida de datos durante capturas</li>
              <li>Falta de validación automática</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-sm text-red-800 mb-2">Problemas de Proceso:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-neutral-700">
              <li>Doble/triple carga manual de datos</li>
              <li>Errores de transcripción</li>
              <li>Inconsistencia entre VISOC y GEDO</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
