"use client";

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function AntesDepues({ casos }) {
  const [indiceActual, setIndiceActual] = useState(0);

  const casoActual = casos[indiceActual];

  const siguiente = () => {
    setIndiceActual((prev) => (prev + 1) % casos.length);
  };

  const anterior = () => {
    setIndiceActual((prev) => (prev - 1 + casos.length) % casos.length);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold text-neutral-900">Transformación de Viviendas</h3>
        <div className="text-sm text-neutral-600">
          Caso {indiceActual + 1} de {casos.length}
        </div>
      </div>

      {/* Comparación Antes/Después */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* ANTES */}
        <div>
          <div className="bg-red-100 text-red-800 text-sm font-semibold px-3 py-1 rounded-t-lg inline-block">
            ANTES
          </div>
          <div className="border-4 border-red-200 rounded-lg overflow-hidden bg-neutral-100">
            <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-neutral-200 to-neutral-300">
              {casoActual.fotos?.antes ? (
                <img
                  src={casoActual.fotos.antes}
                  alt="Antes"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center p-8">
                  <p className="text-neutral-600 font-medium">Vivienda Precaria</p>
                  <p className="text-sm text-neutral-500 mt-2">{casoActual.clasificacion}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* DESPUÉS */}
        <div>
          <div className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-t-lg inline-block">
            DESPUÉS
          </div>
          <div className="border-4 border-green-200 rounded-lg overflow-hidden bg-neutral-100">
            <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
              {casoActual.fotos?.despues ? (
                <img
                  src={casoActual.fotos.despues}
                  alt="Después"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center p-8">
                  <p className="text-neutral-600 font-medium">Vivienda Digna</p>
                  <p className="text-sm text-neutral-500 mt-2">
                    {casoActual.estado_proyecto === 'Terminado' ? 'Obra Finalizada' : 'En Proceso'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Información del caso */}
      <div className="bg-blue-50 rounded-lg p-4 mb-6">
        <h4 className="font-bold text-lg text-neutral-900 mb-3">
          📍 {casoActual.localidad}, {casoActual.departamento}
        </h4>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-neutral-700">
              <span className="font-semibold">Expediente:</span> {casoActual.expediente}
            </p>
            <p className="text-neutral-700">
              <span className="font-semibold">Clasificación original:</span> {casoActual.clasificacion}
            </p>
            <p className="text-neutral-700">
              <span className="font-semibold">Estado:</span> {casoActual.estado_proyecto}
            </p>
          </div>
          <div>
            <p className="text-neutral-700">
              <span className="font-semibold">Relevado:</span>{' '}
              {new Date(casoActual.fecha_relevamiento).toLocaleDateString('es-AR', {
                year: 'numeric',
                month: 'long'
              })}
            </p>
            {casoActual.fecha_fin_obra && (
              <p className="text-neutral-700">
                <span className="font-semibold">Obra terminada:</span>{' '}
                {new Date(casoActual.fecha_fin_obra).toLocaleDateString('es-AR', {
                  year: 'numeric',
                  month: 'long'
                })}
              </p>
            )}
            <p className="text-neutral-700">
              <span className="font-semibold">Ejecutora:</span> {casoActual.institucion_ejecutora}
            </p>
          </div>
        </div>
        {casoActual.observaciones && (
          <p className="mt-3 text-sm text-neutral-600 italic border-l-4 border-blue-400 pl-3">
            "{casoActual.observaciones}"
          </p>
        )}
      </div>

      {/* Navegación */}
      <div className="flex items-center justify-between">
        <button
          onClick={anterior}
          className="flex items-center space-x-2 px-4 py-2 bg-neutral-200 hover:bg-neutral-300 rounded-lg transition-colors"
        >
          <ChevronLeft size={20} />
          <span>Anterior</span>
        </button>

        {/* Indicadores de paginación */}
        <div className="flex space-x-2">
          {casos.map((_, index) => (
            <button
              key={index}
              onClick={() => setIndiceActual(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === indiceActual ? 'bg-blue-main w-6' : 'bg-neutral-300'
              }`}
            />
          ))}
        </div>

        <button
          onClick={siguiente}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-main hover:bg-blue-600 text-white rounded-lg transition-colors"
        >
          <span>Siguiente</span>
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
