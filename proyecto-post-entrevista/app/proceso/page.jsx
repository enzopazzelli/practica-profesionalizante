import DiagramaFlujo from '../../components/Proceso/DiagramaFlujo';
import { Download, FileText } from 'lucide-react';

export const metadata = {
  title: 'Proceso de Gestión - Vivienda Social',
  description: 'Flujo de datos y proceso completo del programa de vivienda social'
};

export default function ProcesoPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-neutral-800 to-neutral-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Proceso de Gestión de Vivienda</h1>
          <p className="text-neutral-300">
            Flujo completo de datos desde el relevamiento hasta la ejecución de obra
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Introducción */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            Documentación del Proceso Actual
          </h2>
          <p className="text-neutral-700 mb-3">
            Este diagrama documenta el proceso completo de gestión de vivienda social, desde que una institución
            (ONG o municipio) presenta un caso hasta que se aprueba y ejecuta la obra.
          </p>
          <p className="text-neutral-700">
            Se identifican los <span className="font-semibold text-red-600">puntos críticos</span> donde se
            generan demoras, pérdidas de datos o errores, y los{' '}
            <span className="font-semibold text-blue-600">puntos de decisión</span> clave en cada etapa.
          </p>
        </div>

        {/* Sistemas involucrados */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 rounded-lg shadow-md p-6 border-l-4 border-blue-main">
            <h3 className="text-lg font-bold text-blue-900 mb-3">📱 VISOC</h3>
            <p className="text-sm text-neutral-700 mb-2">
              <span className="font-semibold">Sistema operativo local</span>
            </p>
            <ul className="text-sm text-neutral-700 space-y-1 list-disc list-inside">
              <li>Permite edición y modificación de datos</li>
              <li>Usado por técnicos y personal administrativo</li>
              <li>Base de datos de trabajo diario</li>
            </ul>
          </div>

          <div className="bg-red-50 rounded-lg shadow-md p-6 border-l-4 border-red-main">
            <h3 className="text-lg font-bold text-red-900 mb-3">📋 GEDO</h3>
            <p className="text-sm text-neutral-700 mb-2">
              <span className="font-semibold">Sistema oficial gubernamental</span>
            </p>
            <ul className="text-sm text-neutral-700 space-y-1 list-disc list-inside">
              <li>NO permite edición una vez cargado</li>
              <li>Sistema de expedientes oficiales</li>
              <li>Requiere datos completos y correctos</li>
            </ul>
          </div>
        </div>

        {/* Diagrama de flujo */}
        <DiagramaFlujo />

        {/* Propuestas de mejora */}
        <div className="mt-8 bg-green-50 rounded-lg shadow-md p-6 border-l-4 border-green-600">
          <h3 className="text-xl font-bold text-green-900 mb-4">💡 Oportunidades de Mejora Identificadas</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-green-800 mb-2">Corto Plazo:</h4>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">→</span>
                  <span>
                    <span className="font-semibold">Dashboard de visualización:</span> Permitir consultas rápidas
                    sin necesidad de generar reportes manuales
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">→</span>
                  <span>
                    <span className="font-semibold">Mapa interactivo:</span> Visualizar geográficamente las
                    viviendas para mejor planificación
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">→</span>
                  <span>
                    <span className="font-semibold">Estandarización de datos:</span> Definir formato único para
                    ingreso de casos desde ONG/municipios
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-800 mb-2">Mediano/Largo Plazo:</h4>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">→</span>
                  <span>
                    <span className="font-semibold">App de campo estable:</span> Solucionar problemas técnicos
                    de la aplicación móvil
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">→</span>
                  <span>
                    <span className="font-semibold">Integración automática:</span> Conectar app de campo
                    directamente con VISOC
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">→</span>
                  <span>
                    <span className="font-semibold">Validaciones automáticas:</span> Detectar errores e
                    inconsistencias antes de cargar a GEDO
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Botones de acción (placeholders) */}
        <div className="mt-8 flex flex-wrap gap-4">
          <button className="flex items-center space-x-2 px-6 py-3 bg-blue-main text-white rounded-lg hover:bg-blue-600 transition-colors">
            <Download size={20} />
            <span>Descargar Diagrama (PDF)</span>
          </button>
          <button className="flex items-center space-x-2 px-6 py-3 bg-neutral-700 text-white rounded-lg hover:bg-neutral-800 transition-colors">
            <FileText size={20} />
            <span>Ver Documentación Completa</span>
          </button>
        </div>
      </div>
    </div>
  );
}
