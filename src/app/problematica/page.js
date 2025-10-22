import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Card from "@/components/Card";

export default function Problematica() {
  const problemas = [
    {
      titulo: "Carga manual y errores de transcripción",
      desc: "Los técnicos dedican tiempo significativo a registrar información de forma manual desde el campo, generando errores en la transcripción de datos críticos como coordenadas geográficas. La falta de automatización aumenta inconsistencias entre sistemas y afecta la precisión de la información.",
      impacto: "Alto",
      viabilidad: "Alta",
      fuente: "Entrevista: 'queremos automatizar el sistema... ahí se cometen muchos errores'"
    },
    {
      titulo: "Desarticulación entre sistemas GEDO y VISOC",
      desc: "Existe desconexión entre el sistema oficial GEDO (no editable) y el sistema local VISOC, generando discrepancias en los datos. Esta falta de integración dificulta mantener coherencia en la información y requiere rectificaciones manuales constantes.",
      impacto: "Alto",
      viabilidad: "Media",
      fuente: "Entrevista: 'ves una cosa en el sistema electrónico y otra en la base interna'"
    },
    {
      titulo: "Limitaciones tecnológicas en territorio",
      desc: "Las condiciones del territorio (falta de señal, distancias, zonas remotas) impactan la recolección de datos. La ausencia de herramientas offline modernas obliga a depender de capturas de pantalla y PDFs, un proceso ineficiente que dificulta el control y seguimiento del trabajo en campo.",
      impacto: "Alto",
      viabilidad: "Alta",
      fuente: "Entrevista: 'antes teníamos una aplicación... ahora sacamos captura de pantalla'"
    },
    {
      titulo: "Falta de herramientas de visualización y control",
      desc: "No se cuenta con sistemas para visualización geográfica ni seguimiento en tiempo real del trabajo de técnicos. Esto impide realizar auditorías efectivas, estimaciones precisas y control de calidad del relevamiento territorial, limitando la capacidad de gestión basada en datos.",
      impacto: "Alto",
      viabilidad: "Alta",
      fuente: "Entrevista: 'necesitamos visualización geográfica... para controles y auditorías'"
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
              Problemática Identificada
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Desafíos en la gestión social basados en evidencia de campo
            </p>
          </div>

          {/* Descripción */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-neutral-200 mb-12">
            <p className="text-lg text-neutral-700 leading-relaxed">
              Durante la práctica profesionalizante, se realizó un análisis exhaustivo identificando los principales desafíos que enfrenta la Subsecretaría. Estas problemáticas fueron validadas y profundizadas mediante la <span className="font-semibold text-neutral-900">entrevista con el Arq. Ernesto Fernández</span>, quien confirmó y detalló cada uno de estos puntos críticos desde su experiencia directa en la gestión institucional.
            </p>
          </div>

          {/* Grid de Problemas */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {problemas.map((p, i) => (
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
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-neutral-900 text-white">
                        Impacto: {p.impacto}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-neutral-200 text-neutral-900">
                        Viabilidad: {p.viabilidad}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-neutral-700 mb-4 leading-relaxed">{p.desc}</p>
                <div className="pt-4 border-t border-neutral-200">
                  <p className="text-xs italic text-neutral-500">{p.fuente}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Síntesis */}
          <div className="bg-neutral-900 rounded-2xl shadow-xl p-8 md:p-12 text-white">
            <div className="flex items-center gap-4 mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="text-3xl font-bold">Síntesis</h2>
            </div>
            <p className="text-lg leading-relaxed text-neutral-200">
              Estas problemáticas fueron identificadas mediante análisis de campo y validadas directamente por el Arq. Ernesto Fernández en entrevista. Cada desafío representa un punto crítico que requiere atención inmediata para optimizar el impacto social de los programas. La convergencia entre el análisis técnico y la experiencia institucional confirma la necesidad de implementar soluciones tecnológicas que automaticen procesos, integren sistemas y faciliten el trabajo en territorio.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}