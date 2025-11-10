"use client";

import { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import viviendas from '../../data/viviendas.json';

// Importar MapaViviendas dinámicamente para evitar problemas de SSR
const MapaViviendas = dynamic(
  () => import('../../components/Mapa/MapaViviendas'),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[600px] bg-neutral-100 rounded-lg flex items-center justify-center">
        <p className="text-neutral-600">Cargando mapa...</p>
      </div>
    )
  }
);

export default function MapaPage() {
  const [filtroClasificacion, setFiltroClasificacion] = useState(null);

  // Contar viviendas por clasificación (useMemo para evitar recalcular)
  const conteoClasificacion = useMemo(() => {
    return viviendas.reduce((acc, v) => {
      acc[v.clasificacion] = (acc[v.clasificacion] || 0) + 1;
      return acc;
    }, {});
  }, []);

  const clasificaciones = [
    { valor: '1A', label: '1A Estándar', color: 'bg-blue-main', count: conteoClasificacion['1A'] || 0 },
    { valor: '2A', label: '2A Precaria', color: 'bg-yellow-accent', count: conteoClasificacion['2A'] || 0 },
    { valor: 'Derrumbe', label: 'Derrumbe', color: 'bg-red-main', count: conteoClasificacion['Derrumbe'] || 0 },
    { valor: 'Otra', label: 'Otra', color: 'bg-neutral-600', count: conteoClasificacion['Otra'] || 0 }
  ];

  const viviendasFiltradas = useMemo(() => {
    return filtroClasificacion
      ? viviendas.filter(v => v.clasificacion === filtroClasificacion)
      : viviendas;
  }, [filtroClasificacion]);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-main to-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Mapa de Viviendas</h1>
          <p className="text-blue-100">
            Ubicación geográfica de las viviendas del programa en Santiago del Estero
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filtros y leyenda */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-lg font-bold text-neutral-900 mb-4">Filtrar por clasificación</h3>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setFiltroClasificacion(null)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filtroClasificacion === null
                  ? 'bg-neutral-900 text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              Todas ({viviendas.length})
            </button>
            {clasificaciones.map((c) => (
              <button
                key={c.valor}
                onClick={() => setFiltroClasificacion(c.valor)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filtroClasificacion === c.valor
                    ? `${c.color} text-white`
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {c.label} ({c.count})
              </button>
            ))}
          </div>

          {/* Leyenda */}
          <div className="mt-6 pt-4 border-t border-neutral-200">
            <p className="text-sm font-semibold text-neutral-700 mb-3">Leyenda:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {clasificaciones.map((c) => (
                <div key={c.valor} className="flex items-center space-x-2">
                  <div className={`w-5 h-5 rounded-full ${c.color}`}></div>
                  <span className="text-sm text-neutral-700">{c.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mapa */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-neutral-900">
              Mostrando {viviendasFiltradas.length} vivienda{viviendasFiltradas.length !== 1 ? 's' : ''}
              {filtroClasificacion && ` - Clasificación: ${filtroClasificacion}`}
            </h3>
          </div>
          <MapaViviendas viviendas={viviendasFiltradas} filtroClasificacion={filtroClasificacion} />
        </div>

        {/* Instrucciones */}
        <div className="mt-6 bg-blue-50 rounded-lg p-4 border-l-4 border-blue-main">
          <p className="text-sm text-neutral-700">
            <span className="font-semibold">💡 Tip:</span> Haz clic en cualquier marcador del mapa para ver los detalles
            completos de la vivienda, incluyendo expediente, estado del proyecto, institución ejecutora y observaciones.
          </p>
        </div>
      </div>
    </div>
  );
}
