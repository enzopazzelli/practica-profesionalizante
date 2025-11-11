'use client';

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Card from "@/components/Card";

export default function Problematica() {
  const [localidadActiva, setLocalidadActiva] = useState('lugones');
  const [mostrarDiagrama, setMostrarDiagrama] = useState(false);
  // Datos por localidad
  const datosLocalidades = {
    lugones: {
      nombre: "Comisión Municipal Lugones",
      departamento: "Avellaneda",
      datos: [
        { fecha: "15/03/22", titular: "GOMEZ MARIA", expediente: "1234-54-2022", tipo: "URB", drm: 2, cla: "1a", depto: "CAPITAL", activacion: "08/05/22", afo: "100,00", finObra: "15/11/22" },
        { fecha: "20/03/22", titular: "LOPEZ JUAN CARLOS", expediente: "1256-54-2022", tipo: "URB", drm: 2, cla: "1a", depto: "LA BANDA", activacion: "12/05/22", afo: "100,00", finObra: "20/11/22" },
        { fecha: "05/04/22", titular: "RODRIGUEZ ANA MARIA", expediente: "1489-54-2022", tipo: "RUR", drm: 2, cla: "1a", depto: "AVELLANEDA", activacion: "18/06/22", afo: "100,00", finObra: "05/01/23" },
        { fecha: "12/04/22", titular: "FERNANDEZ PEDRO", expediente: "1523-54-2022", tipo: "URB", drm: 1, cla: "2a", depto: "CAPITAL", activacion: "25/06/22", afo: "0,00", finObra: "-" },
        { fecha: "28/04/22", titular: "TORRES LUCIA", expediente: "1678-54-2022", tipo: "URB", drm: 2, cla: "1a", depto: "FERNANDEZ", activacion: "08/07/22", afo: "65,00", finObra: "-" },
        { fecha: "10/05/22", titular: "SILVA ROBERTO", expediente: "1789-54-2022", tipo: "RUR", drm: 0, cla: "1a", depto: "ROBLES", activacion: "-", afo: "0,00", finObra: "-" },
        { fecha: "22/05/22", titular: "PEREZ CLAUDIA", expediente: "1823-54-2022", tipo: "URB", drm: 3, cla: "1a", depto: "CAPITAL", activacion: "15/07/22", afo: "100,00", finObra: "28/12/22" },
        { fecha: "30/05/22", titular: "CAMPOS DIEGO", expediente: "1945-54-2022", tipo: "URB", drm: 0, cla: "5f", depto: "LA BANDA", activacion: "-", afo: "DES", finObra: "-", desaprobado: true }
      ],
      totales: { solicitadas: 8, finalizadas: 5, enProceso: 2, desaprobadas: 1 }
    },
    fernandez: {
      nombre: "Municipalidad de Fernández",
      departamento: "Robles",
      datos: [
        { fecha: "18/02/22", titular: "MORALES SANDRA", expediente: "987-54-2022", tipo: "URB", drm: 2, cla: "1a", depto: "ROBLES", activacion: "22/04/22", afo: "100,00", finObra: "10/10/22" },
        { fecha: "25/02/22", titular: "GUTIERREZ CARLOS", expediente: "1012-54-2022", tipo: "URB", drm: 3, cla: "1a", depto: "ROBLES", activacion: "28/04/22", afo: "100,00", finObra: "15/10/22" },
        { fecha: "10/03/22", titular: "DIAZ MIGUEL", expediente: "1145-54-2022", tipo: "RUR", drm: 2, cla: "1a", depto: "ROBLES", activacion: "15/05/22", afo: "100,00", finObra: "28/11/22" },
        { fecha: "18/03/22", titular: "RAMIREZ BEATRIZ", expediente: "1234-54-2022", tipo: "URB", drm: 1, cla: "2a", depto: "ROBLES", activacion: "20/05/22", afo: "85,00", finObra: "-" },
        { fecha: "02/04/22", titular: "CASTRO JUANA", expediente: "1389-54-2022", tipo: "URB", drm: 2, cla: "1a", depto: "ROBLES", activacion: "08/06/22", afo: "100,00", finObra: "20/12/22" },
        { fecha: "15/04/22", titular: "VELAZQUEZ OMAR", expediente: "1456-54-2022", tipo: "RUR", drm: 3, cla: "1a", depto: "ROBLES", activacion: "22/06/22", afo: "100,00", finObra: "05/01/23" },
        { fecha: "25/04/22", titular: "SOSA MARIA", expediente: "1567-54-2022", tipo: "URB", drm: 2, cla: "1a", depto: "ROBLES", activacion: "-", afo: "0,00", finObra: "-" },
        { fecha: "08/05/22", titular: "BENITEZ LUIS", expediente: "1678-54-2022", tipo: "URB", drm: 2, cla: "1a", depto: "ROBLES", activacion: "15/07/22", afo: "100,00", finObra: "15/01/23" }
      ],
      totales: { solicitadas: 8, finalizadas: 6, enProceso: 1, desaprobadas: 0 }
    },
    frias: {
      nombre: "Municipalidad de Frías",
      departamento: "Choya",
      datos: [
        { fecha: "05/01/22", titular: "QUIROGA ROSA", expediente: "456-54-2022", tipo: "URB", drm: 2, cla: "1a", depto: "CHOYA", activacion: "10/03/22", afo: "100,00", finObra: "25/09/22" },
        { fecha: "20/01/22", titular: "MONTIEL HECTOR", expediente: "578-54-2022", tipo: "RUR", drm: 3, cla: "1a", depto: "CHOYA", activacion: "18/03/22", afo: "100,00", finObra: "05/10/22" },
        { fecha: "08/02/22", titular: "ACOSTA DANIELA", expediente: "689-54-2022", tipo: "URB", drm: 1, cla: "2a", depto: "CHOYA", activacion: "25/03/22", afo: "50,00", finObra: "-" },
        { fecha: "22/02/22", titular: "HERRERA PABLO", expediente: "756-54-2022", tipo: "URB", drm: 2, cla: "1a", depto: "CHOYA", activacion: "08/04/22", afo: "100,00", finObra: "20/10/22" },
        { fecha: "12/03/22", titular: "RAMOS SILVIA", expediente: "834-54-2022", tipo: "RUR", drm: 2, cla: "1a", depto: "CHOYA", activacion: "22/04/22", afo: "100,00", finObra: "08/11/22" },
        { fecha: "28/03/22", titular: "NAVARRO RUBEN", expediente: "912-54-2022", tipo: "URB", drm: 3, cla: "1a", depto: "CHOYA", activacion: "05/05/22", afo: "100,00", finObra: "22/11/22" },
        { fecha: "10/04/22", titular: "ORTIZ MONICA", expediente: "1023-54-2022", tipo: "URB", drm: 2, cla: "1a", depto: "CHOYA", activacion: "-", afo: "0,00", finObra: "-" },
        { fecha: "25/04/22", titular: "VEGA CRISTIAN", expediente: "1134-54-2022", tipo: "ECO", drm: 0, cla: "2b", depto: "CHOYA", activacion: "-", afo: "DES", finObra: "-", desaprobado: true }
      ],
      totales: { solicitadas: 8, finalizadas: 5, enProceso: 1, desaprobadas: 1 }
    },
    labanda: {
      nombre: "Municipalidad de La Banda",
      departamento: "Banda",
      datos: [
        { fecha: "12/01/22", titular: "CORONEL MARTA", expediente: "234-54-2022", tipo: "URB", drm: 2, cla: "1a", depto: "BANDA", activacion: "15/02/22", afo: "100,00", finObra: "15/08/22" },
        { fecha: "28/01/22", titular: "BRAVO JORGE", expediente: "345-54-2022", tipo: "URB", drm: 3, cla: "1a", depto: "BANDA", activacion: "22/02/22", afo: "100,00", finObra: "28/08/22" },
        { fecha: "15/02/22", titular: "MANSILLA GRACIELA", expediente: "456-54-2022", tipo: "URB", drm: 1, cla: "2a", depto: "BANDA", activacion: "08/03/22", afo: "100,00", finObra: "10/09/22" },
        { fecha: "05/03/22", titular: "PAZ DANIEL", expediente: "567-54-2022", tipo: "URB", drm: 2, cla: "1a", depto: "BANDA", activacion: "18/03/22", afo: "75,00", finObra: "-" },
        { fecha: "22/03/22", titular: "LUNA CAROLINA", expediente: "678-54-2022", tipo: "URB", drm: 2, cla: "1a", depto: "BANDA", activacion: "05/04/22", afo: "100,00", finObra: "05/10/22" },
        { fecha: "08/04/22", titular: "CABRERA NESTOR", expediente: "789-54-2022", tipo: "URB", drm: 3, cla: "1a", depto: "BANDA", activacion: "22/04/22", afo: "100,00", finObra: "22/10/22" },
        { fecha: "20/04/22", titular: "SUAREZ ISABEL", expediente: "890-54-2022", tipo: "URB", drm: 2, cla: "1a", depto: "BANDA", activacion: "-", afo: "0,00", finObra: "-" },
        { fecha: "05/05/22", titular: "MOLINA EDUARDO", expediente: "901-54-2022", tipo: "URB", drm: 2, cla: "1a", depto: "BANDA", activacion: "15/05/22", afo: "100,00", finObra: "10/11/22" }
      ],
      totales: { solicitadas: 8, finalizadas: 6, enProceso: 1, desaprobadas: 0 }
    }
  };

  const localidadSeleccionada = datosLocalidades[localidadActiva];

  const insights = [
    {
      titulo: "Oportunidad de integración de datos de campo",
      desc: "Los técnicos capturan información completa en campo usando aplicación GPS, y posteriormente la registran en VISOC para generar informes. Este flujo toma entre 10 y 30 minutos por expediente. La integración automatizada de estas fuentes permitiría que los técnicos dediquen más tiempo a visitas y análisis cualitativo de situaciones familiares.",
      relevancia: "Alta",
      potencial: "Ahorro de tiempo",
      fuente: "Técnico: 'En campo cargo todo en la app GPS, luego en oficina debo volver a cargar en VISOC la misma información. Al no estar vinculadas, hacemos doble trabajo'",
      metrica: "10-30 min/expediente"
    },
    {
      titulo: "Flujo de datos entre sistemas VISOC y GEDO",
      desc: "El proceso actual utiliza VISOC (sistema local editable) para elaborar informes, y GEDO (sistema oficial) para el seguimiento administrativo. La transferencia se realiza mediante generación de PDF que cada técnico adjunta manualmente. Automatizar este flujo podría mejorar la trazabilidad y liberar tiempo para tareas de mayor valor agregado.",
      relevancia: "Alta",
      potencial: "Eficiencia operativa",
      fuente: "Técnico: 'VISOC sirve para armar el informe, GEDO para que el expediente siga su curso. La transferencia es manual, cada técnico debe hacerlo'",
      metrica: "Proceso manual"
    },
    {
      titulo: "Oportunidad de feedback en ciclo de vida del expediente",
      desc: "Los técnicos que realizan las visitas iniciales actualmente reciben retroalimentación de forma informal (ONGs, municipios) o no la reciben. Visualizar el estado de expedientes visitados permitiría documentar avances de obra, capturar evidencia fotográfica de calidad constructiva y responder proactivamente a consultas de beneficiarios.",
      relevancia: "Alta",
      potencial: "Seguimiento integral",
      fuente: "Técnico: 'No tenemos información del ministerio si la vivienda fue aprobada o no. Me entero cuando las ONGs me informan, en el mejor de los casos, o cuando la vivienda ya está finalizada'",
      metrica: "Datos de avance"
    },
    {
      titulo: "Potencial de documentación fotográfica del proceso constructivo",
      desc: "Los técnicos capturan fotos de avance de obra cuando visitan construcciones en progreso, pero dado el tiempo que requiere la carga manual en VISOC, priorizan procesar más informes o realizar más visitas. Un sistema que facilite la captura y asociación de evidencia fotográfica enriquecería el registro histórico del programa.",
      relevancia: "Media",
      potencial: "Registro visual",
      fuente: "Técnico: 'Realizo fotos del avance cuando puedo, pero no las cargo porque toma mucho tiempo. La demanda es tan grande que no puedo visitar todas las obras en progreso'",
      metrica: "Evidencia visual"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      <Navbar />

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-neutral-900">
              Análisis de Datos del Proceso
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Insights y oportunidades de mejora basados en evidencia de campo
            </p>
          </div>

          {/* Descripción */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-neutral-200 mb-12">
            <p className="text-lg text-neutral-700 leading-relaxed mb-4">
              Durante la práctica profesionalizante, se realizó un análisis de datos del proceso operativo, identificando oportunidades para potenciar el impacto del valioso trabajo que realiza la Subsecretaría. Los insights fueron validados mediante <span className="font-semibold text-neutral-900">dos entrevistas complementarias</span>:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-neutral-900 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                  <h4 className="font-semibold text-neutral-900">Arq. Ernesto Fernández</h4>
                </div>
                <p className="text-sm text-neutral-600">Visión estratégica y problemáticas generales desde la coordinación institucional</p>
              </div>
              <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-neutral-900 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                  <h4 className="font-semibold text-neutral-900">Técnico de Campo</h4>
                </div>
                <p className="text-sm text-neutral-600">Validación operativa detallada con datos cuantitativos del proceso diario</p>
              </div>
            </div>
          </div>

          {/* Grid de Insights */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {insights.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-neutral-300 p-8 transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">{p.titulo}</h3>
                    <div className="flex gap-2 flex-wrap mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white">
                        Relevancia: {p.relevancia}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                        Potencial: {p.potencial}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-neutral-700 mb-4 leading-relaxed">{p.desc}</p>
                {p.metrica && (
                  <div className="mb-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-lg">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <span className="text-xs font-semibold text-blue-700">Dato clave: {p.metrica}</span>
                    </div>
                  </div>
                )}
                <div className="pt-4 border-t border-neutral-200">
                  <p className="text-xs italic text-neutral-500">{p.fuente}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Botón Diagrama de Flujo */}
          <div className="text-center mb-16">
            <button
              onClick={() => setMostrarDiagrama(true)}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
              </svg>
              Ver Diagrama de Flujo del Proceso
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <p className="text-sm text-neutral-600 mt-3">Visualización completa del proceso de gestión de vivienda social</p>
          </div>

          {/* Modal Diagrama de Flujo */}
          {mostrarDiagrama && (
            <div className="fixed inset-0 z-[9999] overflow-y-auto bg-black bg-opacity-75">
              <div className="flex min-h-screen items-center justify-center p-4">
                <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] flex flex-col">
                  {/* Header */}
                  <div className="bg-purple-600 px-6 py-4 flex items-center justify-between rounded-t-2xl flex-shrink-0">
                    <div className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                      </svg>
                      <div>
                        <h3 className="text-xl font-bold text-white">Diagrama de Flujo del Proceso</h3>
                        <p className="text-sm text-purple-100">Proceso completo de gestión de vivienda social</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setMostrarDiagrama(false)}
                      className="text-white hover:bg-white/10 rounded-full p-2 transition-colors flex-shrink-0"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Content */}
                  <div className="flex-1 overflow-hidden">
                    <iframe
                      src="/diagrama-flujo-proceso.html"
                      className="w-full h-full"
                      style={{ minHeight: '600px' }}
                      title="Diagrama de Flujo del Proceso"
                    />
                  </div>

                  {/* Footer */}
                  <div className="bg-neutral-50 px-6 py-4 flex justify-between items-center border-t border-neutral-200 rounded-b-2xl flex-shrink-0">
                    <a
                      href="/diagrama-flujo-proceso.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-purple-600 hover:text-purple-800 font-semibold flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Abrir en nueva pestaña
                    </a>
                    <button
                      onClick={() => setMostrarDiagrama(false)}
                      className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Síntesis */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-xl p-8 md:p-12 text-white mb-16">
            <div className="flex items-center gap-4 mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h2 className="text-3xl font-bold">Síntesis del Análisis</h2>
            </div>
            <p className="text-lg leading-relaxed text-blue-50 mb-6">
              Este análisis de datos se basa en dos fuentes complementarias: la visión estratégica del Arq. Ernesto Fernández y la experiencia operativa detallada de técnicos de campo. El estudio cuantitativo reveló datos clave que permiten identificar áreas de oportunidad para potenciar el impacto del excelente trabajo social que realiza la Subsecretaría. Las métricas obtenidas servirán como base para propuestas de optimización que ayuden a los técnicos a dedicar más tiempo al acompañamiento de familias.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">10-30 min</div>
                <div className="text-sm text-blue-100">Tiempo actual de registro por expediente - Oportunidad de optimización</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">2 sistemas</div>
                <div className="text-sm text-blue-100">VISOC y GEDO - Potencial de integración para trazabilidad mejorada</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">Ciclo completo</div>
                <div className="text-sm text-blue-100">Oportunidad de feedback desde visita inicial hasta finalización de obra</div>
              </div>
            </div>
          </div>

          {/* Reporte VISOC - Ejemplo */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-neutral-300">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-neutral-900 mb-2">Reporte VISOC - Ejemplo de Salida</h2>
                <p className="text-neutral-600">Simulación de datos del sistema con indicadores clave</p>
              </div>
              <div className="text-right text-sm text-neutral-500">
                <p className="font-semibold">{localidadSeleccionada.nombre}</p>
                <p>Departamento: {localidadSeleccionada.departamento}</p>
              </div>
            </div>

            {/* Banner informativo */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3 mb-8">
              <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-sm">
                <p className="font-semibold text-amber-900 mb-1">
                  Datos Simulados con fines demostrativos
                </p>
                <p className="text-amber-700">
                  Esta tabla representa el formato y estructura del reporte VISOC real. Los datos son ficticios para ilustrar el tipo de información que el sistema gestiona.
                </p>
              </div>
            </div>

            {/* Pestañas de Localidades */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 border-b-2 border-neutral-200 pb-2">
                <button
                  onClick={() => setLocalidadActiva('lugones')}
                  className={`px-4 py-2 rounded-t-lg font-semibold text-sm transition-all ${
                    localidadActiva === 'lugones'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  Lugones
                </button>
                <button
                  onClick={() => setLocalidadActiva('fernandez')}
                  className={`px-4 py-2 rounded-t-lg font-semibold text-sm transition-all ${
                    localidadActiva === 'fernandez'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  Fernández
                </button>
                <button
                  onClick={() => setLocalidadActiva('frias')}
                  className={`px-4 py-2 rounded-t-lg font-semibold text-sm transition-all ${
                    localidadActiva === 'frias'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  Frías
                </button>
                <button
                  onClick={() => setLocalidadActiva('labanda')}
                  className={`px-4 py-2 rounded-t-lg font-semibold text-sm transition-all ${
                    localidadActiva === 'labanda'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  La Banda
                </button>
              </div>
            </div>

            {/* Tabla VISOC */}
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full text-sm border border-neutral-300">
                <thead className="bg-neutral-100">
                  <tr>
                    <th className="py-2 px-3 text-left text-xs font-bold text-neutral-700 border-b border-neutral-300">Fec.Sol.</th>
                    <th className="py-2 px-3 text-left text-xs font-bold text-neutral-700 border-b border-neutral-300">Titular</th>
                    <th className="py-2 px-3 text-left text-xs font-bold text-neutral-700 border-b border-neutral-300">Expediente</th>
                    <th className="py-2 px-3 text-left text-xs font-bold text-neutral-700 border-b border-neutral-300">Tipo</th>
                    <th className="py-2 px-3 text-center text-xs font-bold text-neutral-700 border-b border-neutral-300">Drm</th>
                    <th className="py-2 px-3 text-left text-xs font-bold text-neutral-700 border-b border-neutral-300">Cla</th>
                    <th className="py-2 px-3 text-left text-xs font-bold text-neutral-700 border-b border-neutral-300">Departamento</th>
                    <th className="py-2 px-3 text-left text-xs font-bold text-neutral-700 border-b border-neutral-300">Activación</th>
                    <th className="py-2 px-3 text-center text-xs font-bold text-neutral-700 border-b border-neutral-300">AFO</th>
                    <th className="py-2 px-3 text-left text-xs font-bold text-neutral-700 border-b border-neutral-300">Fin Obra</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {localidadSeleccionada.datos.map((registro, index) => (
                    <tr key={index} className={`hover:bg-neutral-50 ${registro.desaprobado ? 'bg-red-50 border-2 border-red-200' : ''}`}>
                      <td className="py-2 px-3 text-neutral-700">{registro.fecha}</td>
                      <td className="py-2 px-3 text-neutral-900 font-medium">{registro.titular}</td>
                      <td className="py-2 px-3 text-neutral-600 font-mono text-xs">{registro.expediente}</td>
                      <td className="py-2 px-3">
                        <span className={`px-2 py-1 text-xs font-semibold rounded ${
                          registro.tipo === 'URB' ? 'bg-blue-100 text-blue-800' :
                          registro.tipo === 'RUR' ? 'bg-purple-100 text-purple-800' :
                          'bg-amber-100 text-amber-800'
                        }`}>
                          {registro.tipo}
                        </span>
                      </td>
                      <td className="py-2 px-3 text-center font-bold text-neutral-700">{registro.drm}</td>
                      <td className="py-2 px-3">
                        <span className={`px-2 py-1 text-xs font-semibold rounded ${
                          registro.cla === '1a' ? 'bg-green-100 text-green-800' :
                          registro.cla === '2a' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {registro.cla}
                        </span>
                      </td>
                      <td className="py-2 px-3 text-neutral-700">{registro.depto}</td>
                      <td className="py-2 px-3 text-neutral-600">{registro.activacion}</td>
                      <td className="py-2 px-3 text-center font-bold">
                        <span className={
                          registro.afo === 'DES' ? 'text-red-600' :
                          registro.afo === '100,00' ? 'text-green-600' :
                          registro.afo === '0,00' ? 'text-amber-600' :
                          'text-blue-600'
                        }>
                          {registro.afo}
                        </span>
                      </td>
                      <td className="py-2 px-3 text-neutral-600">{registro.finObra}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Leyenda */}
            <div className="bg-neutral-50 rounded-lg p-4 mb-8 text-xs text-neutral-600">
              <p className="font-semibold text-neutral-800 mb-2">Leyenda de campos:</p>
              <div className="grid md:grid-cols-3 gap-2">
                <div><span className="font-bold">Tipo:</span> URB (Urbana), RUR (Rural), ECO (Económica)</div>
                <div><span className="font-bold">Cla:</span> 1a (estándar), 2a (precaria), 5f (no aplica)</div>
                <div><span className="font-bold">Drm:</span> Cantidad de dormitorios</div>
                <div><span className="font-bold">AFO:</span> Avance Financiero de Obra (%)</div>
                <div><span className="font-bold">DES:</span> Desaprobado</div>
              </div>
            </div>

            {/* Indicadores Clave */}
            <div>
              <h3 className="text-xl font-bold text-neutral-900 mb-6">Indicadores Clave del Reporte</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200 text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{localidadSeleccionada.totales.solicitadas}</div>
                  <div className="text-sm font-semibold text-neutral-700">Viviendas Solicitadas</div>
                  <div className="text-xs text-neutral-500 mt-1">Total del período</div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-200 text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">{localidadSeleccionada.totales.finalizadas}</div>
                  <div className="text-sm font-semibold text-neutral-700">Viviendas Finalizadas</div>
                  <div className="text-xs text-neutral-500 mt-1">
                    {Math.round((localidadSeleccionada.totales.finalizadas / localidadSeleccionada.totales.solicitadas) * 100)}% completadas
                  </div>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 border-2 border-amber-200 text-center">
                  <div className="text-4xl font-bold text-amber-600 mb-2">{localidadSeleccionada.totales.enProceso}</div>
                  <div className="text-sm font-semibold text-neutral-700">En Proceso</div>
                  <div className="text-xs text-neutral-500 mt-1">AFO parcial o sin iniciar</div>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border-2 border-red-200 text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">{localidadSeleccionada.totales.desaprobadas}</div>
                  <div className="text-sm font-semibold text-neutral-700">Desaprobada{localidadSeleccionada.totales.desaprobadas !== 1 ? 's' : ''}</div>
                  <div className="text-xs text-neutral-500 mt-1">
                    {Math.round((localidadSeleccionada.totales.desaprobadas / localidadSeleccionada.totales.solicitadas) * 100)}% del total
                  </div>
                </div>
              </div>
            </div>

            {/* Nota final */}
            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                <span className="font-bold">💡 Valor del Reporte VISOC:</span> Este tipo de reporte permite a los coordinadores tener una visión completa del estado de viviendas por solicitante/comisión, facilitando la toma de decisiones, el seguimiento de avances y la identificación de cuellos de botella en el proceso.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}