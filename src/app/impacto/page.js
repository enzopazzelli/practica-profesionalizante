import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function ImpactoPage() {
  const casos = [
    {
      id: 1,
      familia: "Familia García",
      localidad: "Capital",
      clasificacion: "2A → 1A",
      miembros: 4,
      fecha: "Agosto 2024",
      descripcion: "Vivienda precaria reemplazada por construcción estándar mejorada"
    },
    {
      id: 2,
      familia: "Familia López",
      localidad: "La Banda",
      clasificacion: "Derrumbe → 1A",
      miembros: 5,
      fecha: "Julio 2024",
      descripcion: "Vivienda en riesgo de derrumbe sustituida por vivienda digna"
    },
    {
      id: 3,
      familia: "Familia Pérez",
      localidad: "Fernández",
      clasificacion: "2A → 1A",
      miembros: 6,
      fecha: "Junio 2024",
      descripcion: "Mejoramiento integral de condiciones habitacionales"
    }
  ];

  const objetivos = [
    {
      icon: "🏠",
      titulo: "Vivienda Digna",
      descripcion: "Eliminar la precariedad habitacional y proporcionar hogares seguros"
    },
    {
      icon: "🛡️",
      titulo: "Salud Familiar",
      descripcion: "Combatir el Chagas y otras enfermedades relacionadas con la vivienda precaria"
    },
    {
      icon: "👨‍👩‍👧‍👦",
      titulo: "Calidad de Vida",
      descripcion: "Mejorar el bienestar integral de las familias santiagueñas"
    },
    {
      icon: "🤝",
      titulo: "Inclusión Social",
      descripcion: "Fortalecer el tejido social y la integración comunitaria"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      <Navbar />

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-red-main via-blue-main to-yellow-accent bg-clip-text text-transparent">
              Impacto Social del Programa
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Transformando vidas a través de viviendas dignas en Santiago del Estero
            </p>
          </div>

          {/* Banner informativo */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3 mb-12">
            <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="text-sm">
              <p className="font-semibold text-blue-900 mb-1">
                Propuesta de Visualización de Impacto Social
              </p>
              <p className="text-blue-700">
                Esta sección ilustra cómo se podría documentar visualmente el impacto del programa mediante comparaciones antes/después, estadísticas de mejora y testimonios de familias beneficiarias. Los casos mostrados son ficticios con fines demostrativos.
              </p>
            </div>
          </div>

          {/* Estadísticas de Impacto */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-gradient-to-br from-green-600 to-green-400 rounded-2xl shadow-xl p-8 text-white">
              <div className="text-5xl font-bold mb-2">1,247</div>
              <div className="text-lg font-semibold mb-1">Familias Beneficiadas</div>
              <div className="text-sm text-green-100">En todo el programa 2024</div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl shadow-xl p-8 text-white">
              <div className="text-5xl font-bold mb-2">5,436</div>
              <div className="text-lg font-semibold mb-1">Personas Alcanzadas</div>
              <div className="text-sm text-blue-100">Estimado promedio 4.36 personas/familia</div>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-purple-400 rounded-2xl shadow-xl p-8 text-white">
              <div className="text-5xl font-bold mb-2">89</div>
              <div className="text-lg font-semibold mb-1">Localidades Alcanzadas</div>
              <div className="text-sm text-purple-100">En 27 departamentos de la provincia</div>
            </div>
          </div>

          {/* Casos de Transformación */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
              Casos de Transformación
            </h2>
            <div className="space-y-8">
              {casos.map((caso) => (
                <div key={caso.id} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-neutral-300">
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-neutral-900 mb-2">{caso.familia}</h3>
                        <p className="text-neutral-600">{caso.localidad} • {caso.miembros} miembros • {caso.fecha}</p>
                      </div>
                      <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-bold">
                        {caso.clasificacion}
                      </span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      {/* Imagen ANTES */}
                      <div>
                        <div className="bg-gradient-to-br from-red-100 to-red-50 rounded-xl p-4 border-2 border-red-200 mb-2">
                          <div className="aspect-video bg-red-200/50 rounded-lg flex items-center justify-center">
                            <div className="text-center">
                              <svg className="w-16 h-16 text-red-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <p className="text-sm text-red-600 font-semibold">Imagen ANTES</p>
                              <p className="text-xs text-red-500">Vivienda precaria</p>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-center font-semibold text-red-700">ANTES</p>
                      </div>

                      {/* Imagen DESPUÉS */}
                      <div>
                        <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-xl p-4 border-2 border-green-200 mb-2">
                          <div className="aspect-video bg-green-200/50 rounded-lg flex items-center justify-center">
                            <div className="text-center">
                              <svg className="w-16 h-16 text-green-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <p className="text-sm text-green-600 font-semibold">Imagen DESPUÉS</p>
                              <p className="text-xs text-green-500">Vivienda digna</p>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-center font-semibold text-green-700">DESPUÉS</p>
                      </div>
                    </div>

                    <p className="text-neutral-700 text-center italic">{caso.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Objetivos del Programa */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-neutral-300 mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
              Objetivos del Programa de Vivienda Social
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {objetivos.map((obj, i) => (
                <div key={i} className="flex items-start gap-4 p-6 bg-neutral-50 rounded-xl border border-neutral-200 hover:shadow-lg transition-all">
                  <div className="text-4xl flex-shrink-0">{obj.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg text-neutral-900 mb-2">{obj.titulo}</h3>
                    <p className="text-neutral-600">{obj.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nota sobre documentación fotográfica */}
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8 border-2 border-amber-200">
            <div className="flex items-start gap-4">
              <svg className="w-8 h-8 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-bold text-xl text-amber-900 mb-3">Importancia de la Documentación Visual</h3>
                <p className="text-amber-800 mb-3">
                  La documentación fotográfica del antes y después de cada vivienda es fundamental para:
                </p>
                <ul className="list-disc list-inside space-y-2 text-amber-800">
                  <li>Visibilizar el impacto social del programa</li>
                  <li>Generar evidencia para rendición de cuentas</li>
                  <li>Comunicar los logros a la comunidad y autoridades</li>
                  <li>Motivar a otras familias a participar del programa</li>
                  <li>Preservar la memoria histórica de la transformación social</li>
                </ul>
                <p className="text-amber-800 mt-4 font-semibold">
                  💡 Un sistema automatizado facilitaría la captura, almacenamiento y visualización de estas evidencias.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
