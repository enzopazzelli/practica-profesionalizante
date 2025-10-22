import Image from 'next/image';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Organizacion() {
  const urbanImages = [
    '/imagenes/urbana1.jpg',
    '/imagenes/urbana2.jpg',
    '/imagenes/urbana3.jpg',
    '/imagenes/urbana4.jpg',
  ];

  const ruralImages = [
    '/imagenes/rural1.jpg',
    '/imagenes/rural2.jpg',
    '/imagenes/rural3.jpg',
    '/imagenes/rural4.jpg',
  ];

  const planoUrbanoImages = [
    '/imagenes/plano-urbano-1.png',
    '/imagenes/plano-urbano-2.png',
    '/imagenes/plano-urbano-3.png',
  ];

  const planoRuralImages = [
    '/imagenes/plano-rural-1.jpg',
    '/imagenes/plano-rural-2.jpg',
  ];

  const documentationFiles = [
    { name: 'ACTA-COMPROMISO-FAMILIAR.pdf', path: '/documentacion/ACTA-COMPROMISO-FAMILIAR.pdf' },
    { name: 'ACTA-DE-COMPROMISO-Y-RESPONSABILIDAD-INSTITUCIONAL-municipalidades.pdf', path: '/documentacion/ACTA-DE-COMPROMISO-Y-RESPONSABILIDAD-INSTITUCIONAL-municipalidades.pdf' },
    { name: 'ACTA-DE-COMPROMISO-Y-RESPONSABILIDAD-INSTITUCIONAL.pdf', path: '/documentacion/ACTA-DE-COMPROMISO-Y-RESPONSABILIDAD-INSTITUCIONAL.pdf' },
    { name: 'DOCUMENTACION-A-PRESENTAR-POR-COOPERATIVAS-DE-TRABAJO-Y-MUTUALES.pdf', path: '/documentacion/DOCUMENTACION-A-PRESENTAR-POR-COOPERATIVAS-DE-TRABAJO-Y-MUTUALES.pdf' },
    { name: 'DOCUMENTACION-A-PRESENTAR-POR-FAMILIA-BENEFICIARIA.pdf', path: '/documentacion/DOCUMENTACION-A-PRESENTAR-POR-FAMILIA-BENEFICIARIA.pdf' },
    { name: 'DOCUMENTACION-A-PRESENTAR-POR-LA-ONG.pdf', path: '/documentacion/DOCUMENTACION-A-PRESENTAR-POR-LA-ONG.pdf' },
    { name: 'DOCUMENTACION-A-PRESENTAR-POR-MUNICIPIOS-y-COMISIONES-MUNICIPALES.pdf', path: '/documentacion/DOCUMENTACION-A-PRESENTAR-POR-MUNICIPIOS-y-COMISIONES-MUNICIPALES.pdf' },
    { name: 'nota-gobernador.pdf', path: '/documentacion/nota-gobernador.pdf' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-blue-50 to-neutral-100">
      <Navbar />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-main via-primary-600 to-red-main bg-clip-text text-transparent">
              Organización del Proyecto
            </h1>
          </div>

          {/* Contexto Institucional */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-neutral-200">
              <h2 className="text-4xl font-bold mb-8 text-blue-main">
                Contexto Institucional: Ministerio de Desarrollo Social, Promoción Humana y Relaciones Institucionales con la Comunidad
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                  La Subsecretaría de Promoción Humana y Relaciones Institucionales con la Comunidad, a cargo del Arq. Ernesto Fernández, forma parte del Ministerio de Desarrollo Social, Promoción Humana y Relaciones Institucionales con la Comunidad. Este ministerio, liderado por el Dr. Ángel Hugo Niccolai, opera bajo la gobernación del Dr. Gerardo Zamora en la Provincia de Santiago del Estero.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-primary-50 rounded-xl p-8 my-8 border-l-4 border-blue-main">
                  <h3 className="text-2xl font-bold mb-4 text-blue-main">La Realidad Santiagueña y la Labor del Ministerio</h3>
                  <p className="text-neutral-700 mb-4 leading-relaxed">
                    La provincia de Santiago del Estero, con su particular topografía y la dispersión de sus parajes, presenta desafíos únicos para la provisión de servicios básicos y el desarrollo social. En este contexto donde la labor del Ministerio de Desarrollo Social, Promoción Humana y Relaciones Institucionales con la Comunidad adquiere una relevancia fundamental.
                  </p>
                  <p className="text-neutral-700 mb-4 leading-relaxed">
                    La misión y visión del Ministerio están intrínsecamente ligadas a la superación de estas barreras geográficas y sociales, buscando acompañar a la población vulnerable y generar oportunidades que mejoren dignamente sus condiciones de vida. La articulación de políticas y acciones se vuelve esencial para llegar a cada rincón de la provincia, garantizando una sociedad más inclusiva y equitativa.
                  </p>
                  <p className="text-neutral-700 leading-relaxed">
                    Su labor se enmarca en una clara misión y visión orientadas al bienestar social y el desarrollo humano sostenible de la población vulnerable.
                  </p>
                </div>

                {/* Grid de Misión, Visión y Objetivo */}
                <div className="grid md:grid-cols-3 gap-6 my-10">
                  <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border border-red-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-main rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        M
                      </div>
                      <h3 className="text-2xl font-bold ml-3 text-red-main">Misión</h3>
                    </div>
                    <p className="text-neutral-700 leading-relaxed">
                      Promover y articular políticas y acciones para el desarrollo social de la población excluida de sus oportunidades básicas, con el fin de contribuir a mejorar sus condiciones de vida.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-main rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        V
                      </div>
                      <h3 className="text-2xl font-bold ml-3 text-blue-main">Visión</h3>
                    </div>
                    <p className="text-neutral-700 leading-relaxed">
                      Acompañar a la población vulnerable de la provincia de Santiago del Estero a fin de mejorar dignamente sus condiciones de vida e integrarla a la actividad productiva, propiciando una sociedad inclusiva y equitativa con desarrollo humano sostenible.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 border border-yellow-300 hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-yellow-accent rounded-full flex items-center justify-center text-black-main text-2xl font-bold">
                        O
                      </div>
                      <h3 className="text-2xl font-bold ml-3 text-yellow-accent">Objetivo</h3>
                    </div>
                    <p className="text-neutral-700 leading-relaxed">
                      Diseñar, implementar y evaluar políticas públicas orientadas a mejorar el nivel de bienestar de las personas y grupos sociales vulnerables que sufren la exclusión y viven en situación de pobreza, generando oportunidades y capacidades que les permitan mejorar sus vidas mediante la coordinación y articulación con otras instituciones públicas y de la sociedad civil en el marco de la revalorización de los derechos humanos y constitucionales.
                    </p>
                  </div>
                </div>

                {/* Autoridades */}
                <div className="bg-neutral-50 rounded-xl p-8 border border-neutral-200">
                  <h3 className="text-2xl font-bold mb-6 text-neutral-800">Autoridades Relevantes</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                      <div className="text-blue-main font-semibold text-sm mb-2">GOBERNADOR DE LA PROVINCIA</div>
                      <div className="text-xl font-bold text-neutral-800">Dr. Gerardo Zamora</div>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                      <div className="text-blue-main font-semibold text-sm mb-2">MINISTRO DE DESARROLLO SOCIAL</div>
                      <div className="text-xl font-bold text-neutral-800">Dr. Ángel Hugo Niccolai</div>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                      <div className="text-blue-main font-semibold text-sm mb-2">SUBSECRETARIO DE PROMOCIÓN HUMANA</div>
                      <div className="text-xl font-bold text-neutral-800">Arq. Ernesto Fernández</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Imágenes del Proyecto */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-neutral-200">
              <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-blue-main to-primary-600 bg-clip-text text-transparent">
                Imágenes del Proyecto
              </h2>

              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-1 h-8 bg-blue-main rounded-full mr-4"></div>
                  <h3 className="text-3xl font-bold text-blue-main">Imágenes Urbanas</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {urbanImages.map((src, index) => (
                    <div key={index} className="group relative w-full h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                      <Image
                        src={src}
                        alt={`Imagen Urbana ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-1 h-8 bg-red-main rounded-full mr-4"></div>
                  <h3 className="text-3xl font-bold text-red-main">Imágenes Rurales</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {ruralImages.map((src, index) => (
                    <div key={index} className="group relative w-full h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                      <Image
                        src={src}
                        alt={`Imagen Rural ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-1 h-8 bg-yellow-accent rounded-full mr-4"></div>
                  <h3 className="text-3xl font-bold text-yellow-accent">Planos Urbanos</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {planoUrbanoImages.map((src, index) => (
                    <div key={index} className="group relative w-full h-72 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                      <Image
                        src={src}
                        alt={`Plano Urbano ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center mb-6">
                  <div className="w-1 h-8 bg-primary-600 rounded-full mr-4"></div>
                  <h3 className="text-3xl font-bold text-primary-600">Planos Rurales</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {planoRuralImages.map((src, index) => (
                    <div key={index} className="group relative w-full h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                      <Image
                        src={src}
                        alt={`Plano Rural ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Documentación Requerida */}
          <section>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-neutral-200">
              <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-red-main to-blue-main bg-clip-text text-transparent">
                Documentación Requerida
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {documentationFiles.map((file, index) => (
                  <a
                    key={index}
                    href={file.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center p-4 bg-gradient-to-r from-neutral-50 to-blue-50 rounded-xl border border-neutral-200 hover:border-blue-main hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-main rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0113 3.414L16.586 7A2 2 0 0118 8.414V16a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm4 6a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1zm0 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div className="ml-4 flex-1">
                      <span className="text-neutral-700 group-hover:text-blue-main font-medium transition-colors duration-300 line-clamp-2">
                        {file.name}
                      </span>
                    </div>
                    <svg className="w-5 h-5 text-neutral-400 group-hover:text-blue-main group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}