"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Programa de Inclusión Social", beneficiarios: 120 },
  { name: "Programa de Desarrollo Comunitario", beneficiarios: 300 },
  { name: "Programa de Fortalecimiento Familiar", beneficiarios: 180 },
  { name: "Programa de Capacitación Laboral", beneficiarios: 250 },
];

export default function Analisis() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-primary-50 to-neutral-100">
      <Navbar />

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-main via-primary-600 to-red-main bg-clip-text text-transparent">
              Análisis de Datos
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Impacto y Métricas
            </p>
          </div>

          {/* Descripción */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-neutral-200 mb-12">
            <p className="text-lg text-neutral-700 leading-relaxed">
              Esta sección presenta una visualización de datos clave obtenidos durante la práctica, ofreciendo una perspectiva cuantitativa del impacto de los programas de la Subsecretaría. Los gráficos interactivos y las tablas detalladas permiten comprender mejor la distribución de beneficiarios y otras métricas relevantes.
            </p>
          </div>

          {/* Gráfico */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-neutral-200 mb-12">
            <div className="flex items-center mb-6">
              <div className="w-1 h-8 bg-blue-main rounded-full mr-4"></div>
              <h2 className="text-3xl font-bold text-blue-main">Beneficiarios por Programa</h2>
            </div>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="name" tick={{ fill: '#6b7280' }} />
                  <YAxis tick={{ fill: '#6b7280' }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}
                  />
                  <Bar dataKey="beneficiarios" fill="#0093d3" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Tabla de Métricas */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-neutral-200">
            <div className="flex items-center mb-8">
              <div className="w-1 h-8 bg-red-main rounded-full mr-4"></div>
              <h2 className="text-3xl font-bold text-red-main">Métricas Adicionales</h2>
            </div>
            <div className="overflow-x-auto rounded-xl border border-neutral-200">
              <table className="min-w-full bg-white">
                <thead className="bg-gradient-to-r from-blue-main to-primary-600 text-white">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Métrica</th>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Valor</th>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Descripción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-blue-main">Beneficiarios Totales</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900 font-bold text-xl">850</td>
                    <td className="px-6 py-4 text-sm text-neutral-600">Número total de personas alcanzadas por los programas.</td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-colors bg-neutral-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-blue-main">Zonas de Intervención</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900 font-bold text-xl">15</td>
                    <td className="px-6 py-4 text-sm text-neutral-600">Cantidad de barrios o localidades donde se implementan programas.</td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-blue-main">Proyectos Activos</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900 font-bold text-xl">5</td>
                    <td className="px-6 py-4 text-sm text-neutral-600">Cantidad de iniciativas en curso actualmente.</td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-colors bg-neutral-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-blue-main">Tasa de Retención</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900 font-bold text-xl">85%</td>
                    <td className="px-6 py-4 text-sm text-neutral-600">Porcentaje de beneficiarios que continúan en los programas.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}