"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const COLORS = {
  'En relevamiento': '#FDB813', // yellow-accent
  'Aprobado': '#0093D3',        // blue-main
  'En construcción': '#FF8C42', // naranja
  'Terminado': '#2ECC71'        // verde
};

export default function EstadosChart({ datos }) {
  // Convertir datos de objeto a array para Recharts
  const dataArray = Object.entries(datos).map(([estado, cantidad]) => ({
    name: estado,
    value: cantidad,
    porcentaje: Math.round((cantidad / Object.values(datos).reduce((a, b) => a + b, 0)) * 100)
  }));

  const renderLabel = (entry) => {
    return `${entry.porcentaje}%`;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-neutral-900 mb-4">Estado de Proyectos</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={dataArray}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderLabel}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {dataArray.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[entry.name] || '#999999'} />
            ))}
          </Pie>
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-white p-3 border border-neutral-300 rounded shadow-lg">
                    <p className="font-semibold">{payload[0].name}</p>
                    <p className="text-sm">Cantidad: {payload[0].value}</p>
                    <p className="text-sm">Porcentaje: {payload[0].payload.porcentaje}%</p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>

      {/* Leyenda con detalles */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        {dataArray.map((item) => (
          <div key={item.name} className="flex items-center space-x-2">
            <div
              className="w-4 h-4 rounded"
              style={{ backgroundColor: COLORS[item.name] || '#999999' }}
            ></div>
            <div className="flex-1">
              <p className="text-sm font-medium text-neutral-700">{item.name}</p>
              <p className="text-xs text-neutral-600">{item.value} proyectos</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
