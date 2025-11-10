import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Card from "@/components/Card";

export default function Problematica() {
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
          <div className="grid md:grid-cols-2 gap-6 mb-16">
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

          {/* Síntesis */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-xl p-8 md:p-12 text-white">
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
        </div>
      </main>

      <Footer />
    </div>
  );
}