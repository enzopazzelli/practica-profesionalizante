"use client";

import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function EvolucionChart({ datos }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-neutral-900 mb-4">Evolución Mensual - 2024</h3>

      {/* Gráfico de línea para nuevas viviendas por mes */}
      <div className="mb-8">
        <p className="text-sm text-neutral-600 mb-3">Nuevas viviendas relevadas por mes</p>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={datos}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mes" />
            <YAxis />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-white p-3 border border-neutral-300 rounded shadow-lg">
                      <p className="font-semibold">{payload[0].payload.mes}</p>
                      <p className="text-sm text-blue-600">Nuevas: {payload[0].value}</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Legend />
            <Line type="monotone" dataKey="cantidad" stroke="#0093d3" strokeWidth={2} name="Nuevas viviendas" dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Gráfico de área para acumulado */}
      <div>
        <p className="text-sm text-neutral-600 mb-3">Acumulado de viviendas relevadas</p>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={datos}>
            <defs>
              <linearGradient id="colorAcumulado" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0093d3" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#0093d3" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mes" />
            <YAxis />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-white p-3 border border-neutral-300 rounded shadow-lg">
                      <p className="font-semibold">{payload[0].payload.mes}</p>
                      <p className="text-sm text-green-600">Total acumulado: {payload[0].value}</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Legend />
            <Area type="monotone" dataKey="acumulado" stroke="#0093d3" fillOpacity={1} fill="url(#colorAcumulado)" name="Total acumulado" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Resumen textual */}
      <div className="mt-4 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-neutral-700">
          <span className="font-semibold">Total viviendas relevadas en 2024:</span>{' '}
          {datos[datos.length - 1]?.acumulado.toLocaleString('es-AR')}
        </p>
        <p className="text-sm text-neutral-700 mt-1">
          <span className="font-semibold">Promedio mensual:</span>{' '}
          {Math.round(datos[datos.length - 1]?.acumulado / datos.length).toLocaleString('es-AR')}
        </p>
      </div>
    </div>
  );
}
