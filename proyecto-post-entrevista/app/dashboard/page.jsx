import { Home, MapPin, Building2 } from 'lucide-react';
import KPICard from '../../components/Dashboard/KPICard';
import DistribucionChart from '../../components/Dashboard/DistribucionChart';
import EstadosChart from '../../components/Dashboard/EstadosChart';
import EvolucionChart from '../../components/Dashboard/EvolucionChart';
import TopLocalidades from '../../components/Dashboard/TopLocalidades';

// Importar datos simulados
import estadisticas from '../../data/estadisticas.json';

export const metadata = {
  title: 'Dashboard - Programa de Vivienda Social',
  description: 'Visualización de datos del programa de vivienda social'
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-main to-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Dashboard - Programa de Vivienda Social</h1>
          <p className="text-blue-100">
            Visualización de datos y métricas del programa de la Subsecretaría de Promoción Humana
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* KPIs principales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <KPICard
            titulo="Total Viviendas"
            valor={estadisticas.resumen.total_viviendas}
            icono={<Home size={32} />}
            colorClase="bg-blue-main"
          />
          <KPICard
            titulo="Localidades"
            valor={estadisticas.resumen.total_localidades}
            icono={<MapPin size={32} />}
            colorClase="bg-yellow-accent"
          />
          <KPICard
            titulo="Instituciones"
            valor={estadisticas.resumen.total_instituciones}
            icono={<Building2 size={32} />}
            colorClase="bg-red-main"
          />
        </div>

        {/* Gráficos principales */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <DistribucionChart datos={estadisticas.por_clasificacion} />
          <EstadosChart datos={estadisticas.por_estado} />
        </div>

        {/* Evolución temporal */}
        <div className="mb-8">
          <EvolucionChart datos={estadisticas.evolucion_mensual_2024} />
        </div>

        {/* Top Localidades */}
        <div className="mb-8">
          <TopLocalidades datos={estadisticas.por_departamento} />
        </div>

        {/* Instituciones ejecutoras */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-neutral-900 mb-4">Instituciones Ejecutoras</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {estadisticas.instituciones_ejecutoras.map((inst) => (
              <div key={inst.nombre} className="bg-neutral-50 rounded-lg p-4 border-l-4 border-blue-main">
                <p className="font-semibold text-neutral-900">{inst.nombre}</p>
                <p className="text-2xl font-bold text-blue-main mt-1">{inst.cantidad_proyectos}</p>
                <p className="text-sm text-neutral-600">proyectos</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
