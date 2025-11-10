"use client";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useState, useMemo, useRef } from 'react';

// Fix para iconos de Leaflet en Next.js
if (typeof window !== 'undefined') {
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  });
}

// Iconos personalizados por clasificación
const getIconByClasificacion = (clasificacion) => {
  const colors = {
    '1A': '#0093d3',      // blue-main
    '2A': '#fdb813',      // yellow-accent
    'Derrumbe': '#c32026', // red-main
    'Otra': '#666666'
  };

  const color = colors[clasificacion] || colors['Otra'];

  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="background-color: ${color}; width: 25px; height: 25px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3);"></div>`,
    iconSize: [25, 25],
    iconAnchor: [12, 12],
  });
};

function ViviendaMarker({ vivienda }) {
  return (
    <Marker
      position={[vivienda.coordenadas.lat, vivienda.coordenadas.lng]}
      icon={getIconByClasificacion(vivienda.clasificacion)}
    >
      <Popup>
        <div className="p-2 min-w-[250px]">
          <h4 className="font-bold text-base mb-2">Exp: {vivienda.expediente}</h4>
          <div className="space-y-1 text-sm">
            <p><span className="font-semibold">📍 Ubicación:</span> {vivienda.barrio}, {vivienda.localidad}</p>
            <p><span className="font-semibold">🏠 Clasificación:</span> {vivienda.clasificacion}</p>
            <p><span className="font-semibold">📊 Estado:</span> {vivienda.estado_proyecto}</p>
            <p><span className="font-semibold">📅 Relevado:</span> {new Date(vivienda.fecha_relevamiento).toLocaleDateString('es-AR')}</p>
            <p><span className="font-semibold">🏛️ Ejecutora:</span> {vivienda.institucion_ejecutora}</p>
            {vivienda.observaciones && (
              <p className="mt-2 text-xs text-neutral-600 italic">{vivienda.observaciones}</p>
            )}
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

function MapComponent({ viviendas, center }) {
  const mapRef = useRef(null);

  return (
    <MapContainer
      ref={mapRef}
      center={center}
      zoom={8}
      scrollWheelZoom={true}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {viviendas.map((vivienda) => (
        <ViviendaMarker key={vivienda.id} vivienda={vivienda} />
      ))}
    </MapContainer>
  );
}

export default function MapaViviendas({ viviendas, filtroClasificacion = null }) {
  const [isMounted, setIsMounted] = useState(false);
  const [uniqueId] = useState(() => `map-${Date.now()}-${Math.random()}`);

  useEffect(() => {
    // Pequeño delay para asegurar que el DOM esté listo
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    return () => {
      clearTimeout(timer);
      setIsMounted(false);
    };
  }, []);

  // Filtrar viviendas si hay filtro
  const viviendasFiltradas = useMemo(() => {
    return filtroClasificacion
      ? viviendas.filter(v => v.clasificacion === filtroClasificacion)
      : viviendas;
  }, [viviendas, filtroClasificacion]);

  // Centro del mapa: Santiago del Estero
  const center = useMemo(() => [-27.7833, -64.2667], []);

  if (!isMounted) {
    return (
      <div className="w-full h-[600px] bg-neutral-100 rounded-lg flex items-center justify-center">
        <p className="text-neutral-600">Cargando mapa...</p>
      </div>
    );
  }

  return (
    <div key={uniqueId} className="w-full h-[600px] rounded-lg overflow-hidden shadow-md">
      <MapComponent viviendas={viviendasFiltradas} center={center} />
    </div>
  );
}
