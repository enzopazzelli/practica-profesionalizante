import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline";
import Link from "next/link"; // Importar Link
import Image from "next/image"; // Importar Image

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-blue-50 to-neutral-100">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-neutral-900">
              Práctica Profesionalizante – ITSE
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Este proyecto documenta de forma interactiva y visual el proceso de una práctica profesionalizante,
              combinando datos, entrevistas y una profunda reflexión social.
            </p>
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-neutral-200 max-w-4xl mx-auto">
              <p className="text-lg text-neutral-700 leading-relaxed">
                Nuestro objetivo es analizar y proponer soluciones digitales para la <span className="font-semibold text-blue-main">Subsecretaría de Promoción Humana y Relaciones Institucionales con la Comunidad</span>,
                buscando optimizar sus procesos y fortalecer su impacto en la ciudadanía.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Link
              href="/entrevistas"
              className="group flex items-center gap-2 bg-red-main text-white-main px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-darker shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Ver entrevistas
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/problematica"
              className="group flex items-center gap-2 bg-blue-main text-white-main px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-darker shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Ver análisis
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Link>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <Timeline />
          </div>

          {/* Equipo Section */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-red-main via-blue-main to-yellow-accent bg-clip-text text-transparent">
              Equipo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { nombre: "Pablo Castillo", foto: "/pablo.jpeg" },
                { nombre: "Sara Lombardi", foto: "/sara.jpeg" },
                { nombre: "Valeria Martinetti", foto: "/vale.jpeg" },
                { nombre: "Santiago Gallardo", foto: "/santi.jpeg" },
                { nombre: "Enzo Pazzelli", foto: "/enzo.jpeg" }
              ].map((miembro, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 border border-neutral-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-center"
                >
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gradient-to-br from-blue-main to-primary-600">
                    <Image
                      src={miembro.foto}
                      alt={miembro.nombre}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="font-bold text-lg text-neutral-900">
                    {miembro.nombre}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Santiago CTA */}
          <div className="text-center">
            <Link
              href="/santiago"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-accent to-yellow-500 text-black-main px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Conoce más sobre Santiago del Estero
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
