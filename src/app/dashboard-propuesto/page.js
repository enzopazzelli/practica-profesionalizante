'use client';

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DistribucionChart from "@/components/Dashboard/DistribucionChart";
import EstadosChart from "@/components/Dashboard/EstadosChart";
import EvolucionChart from "@/components/Dashboard/EvolucionChart";
import TopLocalidades from "@/components/Dashboard/TopLocalidades";
import ModeladoModal from "@/components/Dashboard/ModeladoModal";
import estadisticas from "@/data/estadisticas.json";

export default function DashboardPropuesto() {
  const [vistaActual, setVistaActual] = useState('tecnico'); // 'tecnico', 'arquitecto', o 'analisis'
  const [mostrarModelado, setMostrarModelado] = useState(false);

  // Datos ficticios realistas - Vista Técnico
  const datosTecnico = {
    kpis: {
      visitasRealizadas: 24,
      aprobados: 18,
      enObra: 12,
      pendientes: 5
    },
    alertas: [
      { id: 1, expediente: "1234", tipo: "aprobado", mensaje: "Expediente #1234 aprobado - Requiere seguimiento", tiempo: "Hace 2 horas" },
      { id: 2, expediente: "5678", tipo: "obra", mensaje: "Expediente #5678 en construcción - Visitar obra", tiempo: "Hace 5 horas" },
      { id: 3, expediente: "9101", tipo: "evaluacion", mensaje: "Expediente #9101 en evaluación ministerial", tiempo: "Ayer" }
    ],
    expedientes: [
      { numero: "1234", familia: "García, Juan", clasificacion: "1A", estado: "Aprobado", localidad: "La Banda", fecha: "15/01/2025" },
      { numero: "5678", familia: "López, María", clasificacion: "2A", estado: "En obra", localidad: "Capital", fecha: "12/01/2025" },
      { numero: "9101", familia: "Pérez, Carlos", clasificacion: "2B", estado: "Evaluación", localidad: "Fernández", fecha: "10/01/2025" },
      { numero: "1121", familia: "Rojas, Ana", clasificacion: "1A", estado: "Rechazado", localidad: "Frías", fecha: "08/01/2025" }
    ]
  };

  // Datos ficticios realistas - Vista Arquitecto
  const datosArquitecto = {
    kpis: {
      totalExpedientes: 156,
      viviendas1A: 89,
      viviendas2A: 42,
      municipiosActivos: 12
    },
    distribucionRegional: [
      { region: "Capital", total: 45, aprobados: 32, enObra: 18, clasificacion1A: 28, clasificacion2A: 17 },
      { region: "La Banda", total: 38, aprobados: 25, enObra: 12, clasificacion1A: 22, clasificacion2A: 16 },
      { region: "Fernández", total: 27, aprobados: 18, enObra: 9, clasificacion1A: 15, clasificacion2A: 12 },
      { region: "Frías", total: 22, aprobados: 14, enObra: 7, clasificacion1A: 12, clasificacion2A: 10 },
      { region: "Otros", total: 24, aprobados: 16, enObra: 8, clasificacion1A: 12, clasificacion2A: 12 }
    ],
    tendencias: {
      mesActual: 42,
      mesAnterior: 38,
      promedioDiario: 1.8,
      tendencia: "↑ +10.5%"
    }
  };

  const estadoBadge = (estado) => {
    const styles = {
      "Aprobado": "bg-green-100 text-green-800 border-green-300",
      "En obra": "bg-blue-100 text-blue-800 border-blue-300",
      "Evaluación": "bg-amber-100 text-amber-800 border-amber-300",
      "Rechazado": "bg-red-100 text-red-800 border-red-300"
    };
    return styles[estado] || "bg-neutral-100 text-neutral-800 border-neutral-300";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      <Navbar />

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header con Switch de Vistas */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-neutral-900">
                    {vistaActual === 'tecnico' ? 'Dashboard del Técnico' : vistaActual === 'arquitecto' ? 'Dashboard Estratégico' : 'Análisis Global de Datos'}
                  </h1>
                  <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full border border-amber-300">
                    MOCKUP - Propuesta
                  </span>
                </div>
                <p className="text-neutral-600">
                  {vistaActual === 'tecnico'
                    ? 'Panel de seguimiento de expedientes - Vista operativa'
                    : vistaActual === 'arquitecto'
                    ? 'Panel de análisis y métricas agregadas - Vista estratégica'
                    : 'Visualización completa de datos del programa con gráficos interactivos'}
                </p>
              </div>

              {/* Switch de Vistas */}
              <div className="flex items-center gap-2 bg-white rounded-xl p-2 shadow-lg border border-neutral-300 flex-wrap">
                <button
                  onClick={() => setVistaActual('tecnico')}
                  className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                    vistaActual === 'tecnico'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-transparent text-neutral-600 hover:bg-neutral-100'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Vista Técnico
                  </div>
                </button>
                <button
                  onClick={() => setVistaActual('arquitecto')}
                  className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                    vistaActual === 'arquitecto'
                      ? 'bg-green-600 text-white shadow-md'
                      : 'bg-transparent text-neutral-600 hover:bg-neutral-100'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Vista Arquitecto
                  </div>
                </button>
                <button
                  onClick={() => setVistaActual('analisis')}
                  className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                    vistaActual === 'analisis'
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'bg-transparent text-neutral-600 hover:bg-neutral-100'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Análisis Global
                  </div>
                </button>
              </div>
            </div>

            {/* Banner informativo */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3">
              <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-sm">
                <p className="font-semibold text-blue-900 mb-1">
                  Propuesta de Visualización de Datos basada en Ciencia de Datos
                </p>
                <p className="text-blue-700">
                  {vistaActual === 'tecnico'
                    ? 'Esta vista empodera a técnicos de campo con visibilidad de expedientes, notificaciones automáticas y seguimiento de estados. Los datos son ficticios con fines ilustrativos.'
                    : vistaActual === 'arquitecto'
                    ? 'Esta vista provee análisis estratégico con métricas agregadas, distribución regional y tendencias para la toma de decisiones basada en datos. Los datos son ficticios con fines ilustrativos.'
                    : 'Esta vista ofrece gráficos interactivos completos mostrando distribución de viviendas, estados de proyectos, evolución temporal y ranking por departamentos. Los datos son ficticios con fines ilustrativos.'}
                </p>
              </div>
            </div>
          </div>

          {/* Botón Ver Modelado de Datos */}
          <div className="mb-8 flex justify-end">
            <button
              onClick={() => setMostrarModelado(true)}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg hover:from-purple-700 hover:to-purple-900 transition-all shadow-lg hover:shadow-xl font-semibold flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
              Ver Modelado de Datos
            </button>
          </div>

          {/* Contenido según la vista seleccionada */}
          {vistaActual === 'analisis' ? (
            // VISTA ANÁLISIS GLOBAL
            <>
              {/* KPIs Globales */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-neutral-300 hover:shadow-xl transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-neutral-900 mb-1">{estadisticas.resumen.total_viviendas}</div>
                  <div className="text-sm text-neutral-600">Total Viviendas</div>
                  <div className="text-xs text-neutral-500 mt-2">En todo el programa</div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 border border-neutral-300 hover:shadow-xl transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-neutral-900 mb-1">{estadisticas.resumen.total_localidades}</div>
                  <div className="text-sm text-neutral-600">Localidades</div>
                  <div className="text-xs text-blue-600 mt-2 font-semibold">En {estadisticas.resumen.total_departamentos} departamentos</div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 border border-neutral-300 hover:shadow-xl transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-neutral-900 mb-1">{estadisticas.resumen.total_instituciones}</div>
                  <div className="text-sm text-neutral-600">Instituciones</div>
                  <div className="text-xs text-green-600 mt-2 font-semibold">ONGs y municipios</div>
                </div>
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

              {/* Top Departamentos */}
              <div className="mb-8">
                <TopLocalidades datos={estadisticas.por_departamento} />
              </div>

              {/* Instituciones ejecutoras */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-neutral-300">
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
            </>
          ) : vistaActual === 'tecnico' ? (
            // VISTA TÉCNICO
            <>
              {/* KPIs Técnico */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-neutral-300 hover:shadow-xl transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-neutral-900 mb-1">{datosTecnico.kpis.visitasRealizadas}</div>
                  <div className="text-sm text-neutral-600">Visitas Realizadas</div>
                  <div className="text-xs text-neutral-500 mt-2">Este mes</div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 border border-neutral-300 hover:shadow-xl transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-neutral-900 mb-1">{datosTecnico.kpis.aprobados}</div>
                  <div className="text-sm text-neutral-600">Expedientes Aprobados</div>
                  <div className="text-xs text-green-600 mt-2 font-semibold">↑ De mis visitas</div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 border border-neutral-300 hover:shadow-xl transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-neutral-900 mb-1">{datosTecnico.kpis.enObra}</div>
                  <div className="text-sm text-neutral-600">En Construcción</div>
                  <div className="text-xs text-amber-600 mt-2 font-semibold">Requiere seguimiento</div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 border border-neutral-300 hover:shadow-xl transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-neutral-900 mb-1">{datosTecnico.kpis.pendientes}</div>
                  <div className="text-sm text-neutral-600">Pendientes de Informe</div>
                  <div className="text-xs text-red-600 mt-2 font-semibold">Acción requerida</div>
                </div>
              </div>

              {/* Grid de contenido Técnico */}
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Columna izquierda: Alertas y Gráfico */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Alertas Recientes */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 border border-neutral-300">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
                        <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        Notificaciones Recientes
                      </h2>
                      <span className="text-xs text-neutral-500">Últimas 24 horas</span>
                    </div>

                    <div className="space-y-3">
                      {datosTecnico.alertas.map(alerta => (
                        <div key={alerta.id} className={`p-4 rounded-xl border-l-4 ${
                          alerta.tipo === 'aprobado' ? 'bg-green-50 border-green-500' :
                          alerta.tipo === 'obra' ? 'bg-blue-50 border-blue-500' :
                          'bg-amber-50 border-amber-500'
                        }`}>
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-neutral-900">{alerta.mensaje}</p>
                              <p className="text-xs text-neutral-500 mt-1">{alerta.tiempo}</p>
                            </div>
                            <button className="text-xs px-3 py-1 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50 font-semibold">
                              Ver
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Gráfico de Estados */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 border border-neutral-300">
                    <h2 className="text-xl font-bold text-neutral-900 mb-6">Mis Expedientes por Estado</h2>

                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold text-neutral-700">Aprobados</span>
                          <span className="text-sm font-bold text-green-700">18 (45%)</span>
                        </div>
                        <div className="w-full bg-neutral-200 rounded-full h-3">
                          <div className="bg-green-600 h-3 rounded-full" style={{width: '45%'}}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold text-neutral-700">En construcción</span>
                          <span className="text-sm font-bold text-blue-700">12 (30%)</span>
                        </div>
                        <div className="w-full bg-neutral-200 rounded-full h-3">
                          <div className="bg-blue-600 h-3 rounded-full" style={{width: '30%'}}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold text-neutral-700">En evaluación</span>
                          <span className="text-sm font-bold text-amber-700">7 (17.5%)</span>
                        </div>
                        <div className="w-full bg-neutral-200 rounded-full h-3">
                          <div className="bg-amber-600 h-3 rounded-full" style={{width: '17.5%'}}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold text-neutral-700">Rechazados</span>
                          <span className="text-sm font-bold text-red-700">3 (7.5%)</span>
                        </div>
                        <div className="w-full bg-neutral-200 rounded-full h-3">
                          <div className="bg-red-600 h-3 rounded-full" style={{width: '7.5%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Columna derecha: Expedientes Recientes */}
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-2xl shadow-lg p-6 border border-neutral-300">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-bold text-neutral-900">Expedientes Recientes</h2>
                      <button className="text-sm text-blue-600 hover:text-blue-800 font-semibold">Ver todos</button>
                    </div>

                    <div className="space-y-4">
                      {datosTecnico.expedientes.map(exp => (
                        <div key={exp.numero} className="p-4 border border-neutral-200 rounded-xl hover:border-neutral-400 hover:shadow-md transition-all cursor-pointer">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <div className="text-sm font-bold text-neutral-900">#{exp.numero}</div>
                              <div className="text-sm text-neutral-700">{exp.familia}</div>
                            </div>
                            <span className={`text-xs px-2 py-1 rounded-full border font-semibold ${estadoBadge(exp.estado)}`}>
                              {exp.estado}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-neutral-500">
                            <span className="px-2 py-1 bg-neutral-100 rounded">Clasif: {exp.clasificacion}</span>
                            <span>{exp.localidad}</span>
                          </div>
                          <div className="text-xs text-neutral-400 mt-2">{exp.fecha}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Mapa Preview */}
              <div className="mt-8 bg-white rounded-2xl shadow-lg p-6 border border-neutral-300">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Mis Viviendas Georreferenciadas
                  </h2>
                  <button className="text-sm px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 font-semibold">
                    Ver mapa completo
                  </button>
                </div>

                <div className="bg-neutral-100 rounded-xl h-64 flex items-center justify-center border border-neutral-300">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-neutral-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <p className="text-neutral-600 font-semibold mb-1">Mapa Interactivo</p>
                    <p className="text-sm text-neutral-500">Vista previa - 40 viviendas visitadas por este técnico</p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            // VISTA ARQUITECTO
            <>
              {/* KPIs Arquitecto */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-neutral-300 hover:shadow-xl transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-neutral-900 mb-1">{datosArquitecto.kpis.totalExpedientes}</div>
                  <div className="text-sm text-neutral-600">Total Expedientes</div>
                  <div className="text-xs text-neutral-500 mt-2">Todos los técnicos</div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 border border-neutral-300 hover:shadow-xl transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-neutral-900 mb-1">{datosArquitecto.kpis.viviendas1A}</div>
                  <div className="text-sm text-neutral-600">Viviendas Tipo 1A</div>
                  <div className="text-xs text-green-600 mt-2 font-semibold">57% del total</div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 border border-neutral-300 hover:shadow-xl transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-neutral-900 mb-1">{datosArquitecto.kpis.viviendas2A}</div>
                  <div className="text-sm text-neutral-600">Viviendas Tipo 2A</div>
                  <div className="text-xs text-blue-600 mt-2 font-semibold">27% del total</div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 border border-neutral-300 hover:shadow-xl transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-neutral-900 mb-1">{datosArquitecto.kpis.municipiosActivos}</div>
                  <div className="text-sm text-neutral-600">Municipios Activos</div>
                  <div className="text-xs text-red-600 mt-2 font-semibold">Con proyectos en curso</div>
                </div>
              </div>

              {/* Grid de contenido Arquitecto */}
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Columna izquierda: Distribución Regional */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Distribución por Región */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 border border-neutral-300">
                    <h2 className="text-xl font-bold text-neutral-900 mb-6">Distribución Regional de Expedientes</h2>

                    <div className="space-y-4">
                      {datosArquitecto.distribucionRegional.map((region, i) => (
                        <div key={i} className="border border-neutral-200 rounded-xl p-4">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-bold text-neutral-900">{region.region}</h3>
                            <span className="text-sm font-semibold text-neutral-600">{region.total} expedientes</span>
                          </div>

                          <div className="grid grid-cols-2 gap-4 mb-3">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                              <span className="text-xs text-neutral-600">Aprobados: <span className="font-semibold">{region.aprobados}</span></span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                              <span className="text-xs text-neutral-600">En obra: <span className="font-semibold">{region.enObra}</span></span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                              <span className="text-xs text-neutral-600">Tipo 1A: <span className="font-semibold">{region.clasificacion1A}</span></span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                              <span className="text-xs text-neutral-600">Tipo 2A: <span className="font-semibold">{region.clasificacion2A}</span></span>
                            </div>
                          </div>

                          <div className="w-full bg-neutral-200 rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full" style={{width: `${(region.aprobados / region.total) * 100}%`}}></div>
                          </div>
                          <div className="text-xs text-neutral-500 mt-1 text-right">
                            {Math.round((region.aprobados / region.total) * 100)}% aprobados
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tendencias */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 border border-neutral-300">
                    <h2 className="text-xl font-bold text-neutral-900 mb-6">Tendencias de Visitas</h2>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                        <div className="text-2xl font-bold text-green-700 mb-1">{datosArquitecto.tendencias.mesActual}</div>
                        <div className="text-xs text-neutral-600">Visitas este mes</div>
                      </div>
                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                        <div className="text-2xl font-bold text-blue-700 mb-1">{datosArquitecto.tendencias.mesAnterior}</div>
                        <div className="text-xs text-neutral-600">Mes anterior</div>
                      </div>
                      <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                        <div className="text-2xl font-bold text-purple-700 mb-1">{datosArquitecto.tendencias.promedioDiario}</div>
                        <div className="text-xs text-neutral-600">Promedio diario</div>
                      </div>
                    </div>

                    <div className="mt-4 p-4 bg-neutral-100 rounded-xl">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-neutral-700">Tendencia mensual</span>
                        <span className="text-sm font-bold text-green-600">{datosArquitecto.tendencias.tendencia}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Columna derecha: Resumen Ejecutivo */}
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-2xl shadow-lg p-6 border border-neutral-300">
                    <h2 className="text-xl font-bold text-neutral-900 mb-6">Resumen Ejecutivo</h2>

                    <div className="space-y-4">
                      <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                        <div className="text-sm font-semibold text-green-900 mb-1">Tasa de Aprobación</div>
                        <div className="text-3xl font-bold text-green-700">71%</div>
                        <div className="text-xs text-neutral-600 mt-2">111 de 156 expedientes</div>
                      </div>

                      <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                        <div className="text-sm font-semibold text-blue-900 mb-1">En Construcción</div>
                        <div className="text-3xl font-bold text-blue-700">54</div>
                        <div className="text-xs text-neutral-600 mt-2">35% del total aprobado</div>
                      </div>

                      <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
                        <div className="text-sm font-semibold text-amber-900 mb-1">Tiempo Promedio</div>
                        <div className="text-3xl font-bold text-amber-700">18d</div>
                        <div className="text-xs text-neutral-600 mt-2">Desde visita a aprobación</div>
                      </div>

                      <div className="p-4 bg-purple-50 border border-purple-200 rounded-xl">
                        <div className="text-sm font-semibold text-purple-900 mb-1">Cobertura Territorial</div>
                        <div className="text-3xl font-bold text-purple-700">12</div>
                        <div className="text-xs text-neutral-600 mt-2">Municipios alcanzados</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mapa Preview Arquitecto */}
              <div className="mt-8 bg-white rounded-2xl shadow-lg p-6 border border-neutral-300">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    Mapa Estratégico Provincial
                  </h2>
                  <button className="text-sm px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 font-semibold">
                    Ver análisis geoespacial completo
                  </button>
                </div>

                <div className="bg-neutral-100 rounded-xl h-96 flex items-center justify-center border border-neutral-300">
                  <div className="text-center">
                    <svg className="w-20 h-20 text-neutral-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <p className="text-neutral-600 font-semibold mb-1">Mapa de Calor Provincial</p>
                    <p className="text-sm text-neutral-500 mb-2">Vista previa - 156 viviendas distribuidas en 12 municipios</p>
                    <div className="flex items-center justify-center gap-4 mt-4 text-xs">
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                        <span className="text-neutral-600">Aprobadas</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                        <span className="text-neutral-600">En obra</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                        <span className="text-neutral-600">En evaluación</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </main>

      {/* Modal de Modelado de Datos */}
      <ModeladoModal
        isOpen={mostrarModelado}
        onClose={() => setMostrarModelado(false)}
        vista={vistaActual}
      />

      <Footer />
    </div>
  );
}
