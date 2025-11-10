import Link from 'next/link';
import { BarChart3, Map, ImageIcon, Workflow } from 'lucide-react';

export default function HomePage() {
  const secciones = [
    {
      href: '/dashboard',
      titulo: 'Dashboard',
      descripcion: 'Métricas, KPIs y gráficos interactivos del programa de vivienda social',
      icono: <BarChart3 size={48} />,
      color: 'bg-blue-main',
      colorHover: 'hover:bg-blue-600'
    },
    {
      href: '/mapa',
      titulo: 'Mapa Interactivo',
      descripcion: 'Geolocalización de viviendas en Santiago del Estero con filtros por clasificación',
      icono: <Map size={48} />,
      color: 'bg-yellow-accent',
      colorHover: 'hover:bg-yellow-500'
    },
    {
      href: '/impacto',
      titulo: 'Galería de Impacto',
      descripcion: 'Transformación de viviendas precarias en hogares dignos (antes/después)',
      icono: <ImageIcon size={48} />,
      color: 'bg-green-600',
      colorHover: 'hover:bg-green-700'
    },
    {
      href: '/proceso',
      titulo: 'Diagrama de Flujo',
      descripcion: 'Proceso completo de gestión con puntos críticos y decisiones identificadas',
      icono: <Workflow size={48} />,
      color: 'bg-neutral-800',
      colorHover: 'hover:bg-neutral-900'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-100 to-neutral-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-main to-red-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">Vista Previa del Proyecto</h1>
            <p className="text-xl text-red-100 mb-6">
              Programa de Vivienda Social - Subsecretaría de Promoción Humana
            </p>
            <div className="bg-white/10 rounded-lg p-4 border border-white/20">
              <p className="text-sm">
                <span className="font-semibold">⚠️ Importante:</span> Este es un preview independiente del proyecto principal.
                Los datos son simulados para demostración. Después de la entrevista, sigue las instrucciones en
                <code className="mx-1 px-2 py-1 bg-black/20 rounded">README-ACTIVACION.md</code>
                para integrarlo al proyecto principal.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
            Explora las 4 Secciones del Proyecto
          </h2>

          {/* Grid de secciones */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {secciones.map((seccion) => (
              <Link
                key={seccion.href}
                href={seccion.href}
                className={`${seccion.color} ${seccion.colorHover} text-white rounded-xl shadow-lg p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-4 rounded-lg">
                    {seccion.icono}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{seccion.titulo}</h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {seccion.descripcion}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Información adicional */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="font-bold text-lg text-neutral-900 mb-3">📊 Datos Simulados</h4>
              <ul className="text-sm text-neutral-700 space-y-2">
                <li>• 20 viviendas de ejemplo</li>
                <li>• 1,247 total simulado</li>
                <li>• 89 localidades</li>
                <li>• 23 instituciones</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="font-bold text-lg text-neutral-900 mb-3">🛠️ Tecnologías</h4>
              <ul className="text-sm text-neutral-700 space-y-2">
                <li>• Next.js 15 + React 19</li>
                <li>• Recharts (gráficos)</li>
                <li>• Leaflet (mapas)</li>
                <li>• Tailwind CSS 4</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="font-bold text-lg text-neutral-900 mb-3">✅ Componentes</h4>
              <ul className="text-sm text-neutral-700 space-y-2">
                <li>• 9 componentes React</li>
                <li>• 4 páginas completas</li>
                <li>• Diseño responsivo</li>
                <li>• Código documentado</li>
              </ul>
            </div>
          </div>

          {/* Instrucciones de activación */}
          <div className="mt-12 bg-blue-50 rounded-lg p-8 border-l-4 border-blue-main">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">
              📋 ¿Cómo activar en el proyecto principal?
            </h3>
            <ol className="space-y-3 text-neutral-700">
              <li className="flex items-start space-x-3">
                <span className="bg-blue-main text-white font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">
                  1
                </span>
                <span>Realizar la entrevista con el técnico usando <code className="bg-white px-2 py-1 rounded text-sm">ENTREVISTA-TECNICO-FLUJO-DATOS.md</code></span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="bg-blue-main text-white font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">
                  2
                </span>
                <span>Ejecutar el script de activación: <code className="bg-white px-2 py-1 rounded text-sm">activar-proyecto.bat</code></span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="bg-blue-main text-white font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">
                  3
                </span>
                <span>Reemplazar los datos simulados con información real del técnico</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="bg-blue-main text-white font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">
                  4
                </span>
                <span>Consultar <code className="bg-white px-2 py-1 rounded text-sm">README-ACTIVACION.md</code> para instrucciones detalladas</span>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-neutral-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-neutral-400 text-sm">
            Práctica Profesionalizante ITSE - Proyecto Post-Entrevista (Vista Previa)
          </p>
        </div>
      </div>
    </div>
  );
}
