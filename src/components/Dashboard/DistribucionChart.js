"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function DistribucionChart({ datos }) {
  // Convertir datos de objeto a array para Recharts
  const dataArray = Object.entries(datos).map(([clasificacion, cantidad]) => ({
    clasificacion,
    cantidad,
    porcentaje: Math.round((cantidad / Object.values(datos).reduce((a, b) => a + b, 0)) * 100)
  }));

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-neutral-900 mb-4">Distribución por Clasificación</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={dataArray}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="clasificacion" />
          <YAxis />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-white p-3 border border-neutral-300 rounded shadow-lg">
                    <p className="font-semibold">{payload[0].payload.clasificacion}</p>
                    <p className="text-sm">Cantidad: {payload[0].value}</p>
                    <p className="text-sm">Porcentaje: {payload[0].payload.porcentaje}%</p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Legend />
          <Bar dataKey="cantidad" fill="#0093d3" name="Viviendas" />
        </BarChart>
      </ResponsiveContainer>

      {/* Detalle en formato de barras horizontales */}
      <div className="mt-4 space-y-2">
        {dataArray.map((item) => (
          <div key={item.clasificacion}>
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium text-neutral-700">{item.clasificacion}</span>
              <span className="text-neutral-600">{item.porcentaje}% ({item.cantidad})</span>
            </div>
            <div className="w-full bg-neutral-200 rounded-full h-2">
              <div
                className="bg-blue-main h-2 rounded-full transition-all duration-300"
                style={{ width: `${item.porcentaje}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
