"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function TopLocalidades({ datos }) {
  // Tomar solo top 10
  const top10 = datos.slice(0, 10);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-neutral-900 mb-4">Top 10 Departamentos</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={top10} layout="vertical" margin={{ left: 80 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="departamento" type="category" width={75} />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-white p-3 border border-neutral-300 rounded shadow-lg">
                    <p className="font-semibold">{payload[0].payload.departamento}</p>
                    <p className="text-sm">Viviendas: {payload[0].value}</p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Bar dataKey="cantidad" fill="#c32026" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
