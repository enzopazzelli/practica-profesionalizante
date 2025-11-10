import AntesDepues from '../../components/Impacto/AntesDepues';
import ClasificacionGallery from '../../components/Impacto/ClasificacionGallery';
import viviendas from '../../data/viviendas.json';

export const metadata = {
  title: 'Impacto del Programa - Vivienda Social',
  description: 'Galería de fotos antes y después del programa de vivienda social'
};

export default function ImpactoPage() {
  // Filtrar solo viviendas terminadas o en construcción que tengan fotos
  const casosConImpacto = viviendas.filter(
    v => v.estado_proyecto === 'Terminado' || v.estado_proyecto === 'En construcción'
  );

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Impacto del Programa</h1>
          <p className="text-green-100">
            Transformación de viviendas precarias en hogares dignos para las familias santiagueñas
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Mensaje de introducción */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            De Vivienda Precaria a Hogar Digno
          </h2>
          <p className="text-neutral-700 mb-3">
            El programa de vivienda social de la Subsecretaría de Promoción Humana trabaja para transformar
            la realidad habitacional de familias en situación de vulnerabilidad en toda la provincia de
            Santiago del Estero.
          </p>
          <p className="text-neutral-700">
            A través de la colaboración con municipios, ONG y fundaciones, se han mejorado y reconstruido
            cientos de viviendas, brindando condiciones dignas de habitabilidad y combatiendo enfermedades
            como el Chagas.
          </p>
        </div>

        {/* Galería Antes/Después */}
        <div className="mb-8">
          <AntesDepues casos={casosConImpacto} />
        </div>

        {/* Estadísticas de impacto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 rounded-lg shadow-md p-6 border-l-4 border-blue-main">
            <p className="text-sm font-semibold text-blue-800 uppercase tracking-wide mb-2">
              Viviendas Terminadas
            </p>
            <p className="text-4xl font-bold text-blue-600">
              {viviendas.filter(v => v.estado_proyecto === 'Terminado').length}
            </p>
            <p className="text-sm text-neutral-600 mt-1">Familias con hogar digno</p>
          </div>

          <div className="bg-yellow-50 rounded-lg shadow-md p-6 border-l-4 border-yellow-accent">
            <p className="text-sm font-semibold text-yellow-800 uppercase tracking-wide mb-2">
              En Construcción
            </p>
            <p className="text-4xl font-bold text-yellow-600">
              {viviendas.filter(v => v.estado_proyecto === 'En construcción').length}
            </p>
            <p className="text-sm text-neutral-600 mt-1">Obras en progreso</p>
          </div>

          <div className="bg-green-50 rounded-lg shadow-md p-6 border-l-4 border-green-600">
            <p className="text-sm font-semibold text-green-800 uppercase tracking-wide mb-2">
              Personas Beneficiadas
            </p>
            <p className="text-4xl font-bold text-green-600">
              {viviendas.reduce((sum, v) => sum + (v.cantidad_miembros || 0), 0)}
            </p>
            <p className="text-sm text-neutral-600 mt-1">Estimación total</p>
          </div>
        </div>

        {/* Galería de clasificaciones */}
        <div className="mb-8">
          <ClasificacionGallery />
        </div>

        {/* Objetivo del programa */}
        <div className="bg-gradient-to-r from-red-main to-red-600 text-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold mb-4">Objetivo del Programa</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-lg">🏠 Vivienda Digna</h4>
              <p className="text-red-50">
                Garantizar que todas las familias santiagueñas tengan acceso a una vivienda segura,
                digna y adecuada para su desarrollo.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-lg">🩺 Salud y Prevención</h4>
              <p className="text-red-50">
                Combatir el Chagas y otras enfermedades vinculadas a la vivienda precaria mediante
                la mejora de las condiciones habitacionales.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-lg">🤝 Trabajo Colaborativo</h4>
              <p className="text-red-50">
                Coordinar esfuerzos entre gobierno, municipios, ONG y la comunidad para maximizar
                el impacto del programa.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-lg">📊 Gestión Eficiente</h4>
              <p className="text-red-50">
                Mejorar los procesos de relevamiento, gestión y seguimiento de proyectos para
                optimizar recursos y tiempos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
