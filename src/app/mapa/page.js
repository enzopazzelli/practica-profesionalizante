"use client";

import { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import viviendas from "@/data/viviendas.json";

// Importar MapaViviendas dinámicamente para evitar problemas de SSR
const MapaViviendas = dynamic(
  () => import('@/components/Mapa/MapaViviendas'),
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
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      <Navbar />

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-neutral-900">
              Mapa de Viviendas Georreferenciadas
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Ubicación geográfica de las viviendas del programa en Santiago del Estero
            </p>
          </div>

          {/* Banner informativo */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3 mb-8">
            <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="text-sm">
              <p className="font-semibold text-blue-900 mb-1">
                Mapa Interactivo con Datos Ficticios
              </p>
              <p className="text-blue-700">
                Este mapa muestra {viviendas.length} viviendas georreferenciadas con datos ficticios para demostración. Haz clic en los marcadores para ver detalles. Los datos son ilustrativos del potencial de visualización geográfica del programa.
              </p>
            </div>
          </div>

          {/* Filtros y leyenda */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-neutral-300">
            <h3 className="text-lg font-bold text-neutral-900 mb-4">Filtrar por clasificación</h3>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setFiltroClasificacion(null)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filtroClasificacion === null
                    ? 'bg-neutral-900 text-white shadow-md'
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
                      ? `${c.color} text-white shadow-md`
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

            {/* Contador de viviendas filtradas */}
            {filtroClasificacion && (
              <div className="mt-4 p-3 bg-neutral-100 rounded-lg">
                <p className="text-sm text-neutral-700">
                  Mostrando <span className="font-bold">{viviendasFiltradas.length}</span> vivienda{viviendasFiltradas.length !== 1 ? 's' : ''} de tipo <span className="font-bold">{filtroClasificacion}</span>
                </p>
              </div>
            )}
          </div>

          {/* Mapa */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-neutral-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
                <svg className="w-6 h-6 text-red-main" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Mapa Interactivo
              </h3>
              <span className="text-sm text-neutral-600">
                {viviendasFiltradas.length} marcador{viviendasFiltradas.length !== 1 ? 'es' : ''}
              </span>
            </div>

            <MapaViviendas viviendas={viviendasFiltradas} filtroClasificacion={filtroClasificacion} />

            <div className="mt-4 p-3 bg-neutral-50 rounded-lg text-sm text-neutral-600">
              <p>💡 <span className="font-semibold">Tip:</span> Haz zoom con la rueda del mouse y haz clic en los marcadores para ver detalles de cada vivienda.</p>
            </div>
          </div>

          {/* Estadísticas rápidas */}
          <div className="grid md:grid-cols-4 gap-6 mt-8">
            {clasificaciones.map((c) => (
              <div key={c.valor} className="bg-white rounded-xl shadow-lg p-6 border border-neutral-300 text-center">
                <div className={`w-12 h-12 ${c.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-neutral-900 mb-1">{c.count}</div>
                <div className="text-sm text-neutral-600">{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
