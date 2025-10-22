import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Conclusiones() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-primary-50 to-blue-50">
      <Navbar />

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary-600 via-blue-main to-red-main bg-clip-text text-transparent">
              Conclusiones
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Reflexiones finales: Hacia un futuro digital y humano
            </p>
          </div>

          {/* Contenido */}
          <div className="space-y-8">
            {/* Primera sección */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-neutral-200">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-main to-primary-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-blue-main mb-4">Experiencia Enriquecedora</h2>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    La práctica profesionalizante ha sido una experiencia enriquecedora que permitió una inmersión profunda en la realidad de la Subsecretaría de Promoción Humana y Relaciones Institucionales con la Comunidad. A lo largo de este proceso, se logró comprender la <span className="font-semibold text-blue-main">complejidad inherente al trabajo social y administrativo</span> en el ámbito público, así como la relevancia crítica de la gestión de datos para optimizar procesos y fortalecer la eficacia de la gestión.
                  </p>
                </div>
              </div>
            </div>

            {/* Segunda sección */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-neutral-200">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-main to-yellow-accent rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-red-main mb-4">Valor Humano</h2>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    Más allá de los aspectos técnicos, este proyecto buscó visibilizar el <span className="font-semibold text-red-main">inmenso valor humano</span> que subyace en cada acción institucional. Cada programa, cada interacción con un beneficiario, representa un esfuerzo por mejorar la calidad de vida de las personas. Promover una cultura de mejora continua, basada en la colaboración interinstitucional y la transparencia, es fundamental para construir un futuro donde la tecnología sirva como un puente para una sociedad más justa e inclusiva.
                  </p>
                </div>
              </div>
            </div>

            {/* Tercera sección - Destacada */}
            <div className="bg-gradient-to-r from-blue-main to-primary-600 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4">Impacto y Valor Social</h2>
                  <p className="text-lg leading-relaxed">
                    Las propuestas generadas a partir de este análisis buscan no solo resolver problemáticas operativas, sino también <span className="font-bold">potenciar el impacto social de la Subsecretaría</span>, asegurando que sus valiosos esfuerzos se traduzcan en beneficios tangibles y sostenibles para la comunidad. Este es el verdadero valor de la práctica profesionalizante: <span className="font-bold">conectar el conocimiento técnico con las necesidades reales de la sociedad</span>.
                  </p>
                </div>
              </div>
            </div>

            {/* Resumen visual */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-neutral-200 text-center transform hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-main to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl text-neutral-800 mb-2">Análisis Profundo</h3>
                <p className="text-neutral-600">Comprensión integral de la realidad institucional</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-neutral-200 text-center transform hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-red-main to-yellow-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl text-neutral-800 mb-2">Enfoque Humano</h3>
                <p className="text-neutral-600">Valoración del impacto social y comunitario</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-neutral-200 text-center transform hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-blue-main rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl text-neutral-800 mb-2">Propuestas Viables</h3>
                <p className="text-neutral-600">Soluciones digitales con impacto tangible</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}