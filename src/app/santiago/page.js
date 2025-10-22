import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function SantiagoPage() {
  const departamentos = [
    { nombre: "Aguirre", poblacion: "8 970", cabecera: "Pinto", localidades: "Argentina, Casares, Malbrán", mapa: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Aguirre_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg/120px-Aguirre_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg.png" },
    { nombre: "Alberdi", poblacion: "20 104", cabecera: "Campo Gallo", localidades: "Donadeu, Huachana, Sacháyoj, Santos Lugares", mapa: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Alberdi_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg/120px-Alberdi_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg.png" },
    { nombre: "Atamisqui", poblacion: "14 903", cabecera: "Villa Atamisqui", localidades: "Estación Atamisqui, Hoyón, Juanillo, Medellín", mapa: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Atamisqui_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg/120px-Atamisqui_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg.png" },
    { nombre: "Avellaneda", poblacion: "25 476", cabecera: "Herrera", localidades: "Colonia Dora, Icaño, Lugones, Punta Pozo, Real Sayana, Villa Mailín", mapa: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Avellaneda_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg/120px-Avellaneda_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg.png" },
    { nombre: "Banda", poblacion: "170 651", cabecera: "La Banda", localidades: "Clodomira, Abra Grande, Antajé, Ardiles, Cañada Escobar, Chaupi Pozo, El Aibe, Estación Simbolar, Los Quiroga, La Aurora, La Dársena, Negra Muerta", mapa: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Banda_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg/120px-Banda_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg.png" },
    { nombre: "Belgrano", poblacion: "10 813", cabecera: "Bandera", localidades: "Cuatro Bocas, Fortín Inca, Guardia Escolta", mapa: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Belgrano_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg/120px-Belgrano_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg.png" },
    { nombre: "Choya", poblacion: "43 736", cabecera: "Frías", localidades: "Choya, Laprida, Tapso, Villa La Punta", mapa: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Choya_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg/120px-Choya_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg.png" },
    { nombre: "Copo", poblacion: "35 741", cabecera: "Monte Quemado", localidades: "Pampa de los Guanacos, Ahí Veremos, El Caburé, Los Pirpintos, San José del Boquerón, Villa Matoque", mapa: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Copo_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg/120px-Copo_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg.png" },
    { nombre: "Figueroa", poblacion: "20 270", cabecera: "La Cañada", localidades: "Bandera Bajada, Caspi Corral - San Antonio, Colonia San Juan, La Cañada, La Invernada, Vaca Huañuna, Villa Figueroa", mapa: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Figueroa_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg/120px-Figueroa_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg.png" },
    { nombre: "General Taboada", poblacion: "46 508", cabecera: "Añatuya", localidades: "Los Juríes, Averías, Estación Tacañitas, La Simona, La Nena, Tomás Young", mapa: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/General_Taboada_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg/120px-General_Taboada_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg.png" },
    { nombre: "Guasayán", poblacion: "9 255", cabecera: "San Pedro de Guasayán", localidades: "Doña Luisa, Guampacha, Lavalle, Santa Catalina, Villa Guasayán", mapa: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Guasay%C3%A1n_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg/120px-Guasay%C3%A1n_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg.png" },
    { nombre: "Jiménez", poblacion: "18 625", cabecera: "Pozo Hondo", localidades: "El Arenal, El Bobadal, El Charco, Gramilla, Tres Cruces", mapa: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Jim%C3%A9nez_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg/120px-Jim%C3%A9nez_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg.png" },
    { nombre: "Juan Felipe Ibarra", poblacion: "20 589", cabecera: "Suncho Corral", localidades: "El Colorado, El Cuadrado, Matará, Melero, Pozo del Toba, San Antonio - Roldán, Vilelas, Yuchán", mapa: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Juan_Felipe_Ibarra_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg/120px-Juan_Felipe_Ibarra_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg.png" },
    { nombre: "Juan Francisco Borges", poblacion: "330 112", cabecera: "Santiago del Estero", localidades: "El Deán, Remes, San Benito, San Pedro, Santa María, Sol de Mayo, El Zanjón, Maco, Maquito, Mal Paso, Puestito San Antonio, Yanda, Vuelta de la Barranca", mapa: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Capital_%28Santiago_del_Estero%29_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg/120px-Capital_%28Santiago_del_Estero%29_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg.png" },
    { nombre: "Loreto", poblacion: "24 060", cabecera: "Loreto", localidades: "La Noria, San Vicente, Sauce Solo, Tío Pozo", mapa: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Loreto_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg/120px-Loreto_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg.png" },
    { nombre: "Mitre", poblacion: "1 440", cabecera: "Villa Unión", localidades: "Fuerte Esperanza, Abras, Unión, Captaros, Porongos", mapa: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Mitre_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg/120px-Mitre_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg.png" },
    { nombre: "Moreno", poblacion: "40 460", cabecera: "Quimilí", localidades: "Tintina, Amamá, Pampa Pozo, Santo Domingo, Granadero Gatica, Las Tinajas, Libertad, Lilo Viejo - Patay, Otumpa, Villa Brana, Weisburd", mapa: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Moreno_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg/120px-Moreno_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg.png" },
    { nombre: "Ojo de Agua", poblacion: "15 116", cabecera: "Villa Ojo de Agua", localidades: "Sol de Julio, El 49, Ambargasta", mapa: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Ojo_de_Agua_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg/120px-Ojo_de_Agua_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg.png" },
    { nombre: "Pellegrini", poblacion: "26 193", cabecera: "Nueva Esperanza", localidades: "Ahí Veremos, Campo Grande, El Mojón, Las Delicias, Pozo Betbeder, Quebracho Coto, Rapelli, Santo Domingo, Villa Mercedes", mapa: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Pellegrini_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg/120px-Pellegrini_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg.png" },
    { nombre: "Quebrachos", poblacion: "12 354", cabecera: "Sumampa", localidades: "Ramírez de Velazco", mapa: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Quebrachos_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg/120px-Quebrachos_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg.png" },
    { nombre: "Río Hondo", poblacion: "66 761", cabecera: "Termas de Río Hondo", localidades: "Acos - Pozo del Arbolito, Amicha, Colonia Tinco, El Sauzal, Lescano, Los Núñez, Los Ovejero, Pozuelos, Sotelo, Villa Río Hondo, Vinará", mapa: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/R%C3%ADo_Hondo_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg/120px-R%C3%ADo_Hondo_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg.png" },
    { nombre: "Rivadavia", poblacion: "5 315", cabecera: "Selva", localidades: "Colonia Alpina, Palo Negro", mapa: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Rivadavia_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg/120px-Rivadavia_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg.png" },
    { nombre: "Robles", poblacion: "54 015", cabecera: "Fernández", localidades: "Beltrán, Ingeniero Forres, Colonia El Simbolar, Los Romanos - Santo Domingo, Vilmer, Villa Hipólita, Villa Robles", mapa: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Robles_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg/120px-Robles_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg.png" },
    { nombre: "Salavina", poblacion: "12 787", cabecera: "Los Telares", localidades: "Chilca Juliana, La Paliza, Sabagasta, Vaca Human, Villa Salavina", mapa: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Salavina_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg/120px-Salavina_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg.png" },
    { nombre: "San Martín", poblacion: "11 848", cabecera: "Brea Pozo", localidades: "Átoj Pozo, Estación Robles, Estación Taboada, Villa Nueva", mapa: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/San_Mart%C3%ADn_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg/120px-San_Mart%C3%ADn_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg.png" },
    { nombre: "Sarmiento", poblacion: "5 038", cabecera: "Garza", localidades: "Matará, Sauce Bajada, Guaype", mapa: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Sarmiento_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg/120px-Sarmiento_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg.png" },
    { nombre: "Silípica", poblacion: "9 766", cabecera: "Árraga", localidades: "Nueva Francia, Manogasta, Villa Silípica", mapa: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Sil%C3%ADpica_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg/120px-Sil%C3%ADpica_%28Provincia_de_Santiago_de_Estero_-_Argentina%29.svg.png" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-yellow-50 to-neutral-100">
      <Navbar />

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-yellow-accent via-red-main to-blue-main bg-clip-text text-transparent">
              Santiago del Estero
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-700 max-w-3xl mx-auto">
              Geografía y Desafíos Territoriales
            </h2>
          </div>

          {/* Descripción Principal */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-neutral-200 mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                La provincia de Santiago del Estero presenta una topografía particular que influye directamente en la distribución de su población y en la provisión de servicios básicos. Caracterizada por extensas llanuras y zonas de monte, la geografía santiagueña se distingue por la presencia de numerosos parajes y pequeñas localidades que se encuentran distantes unos de otros.
              </p>

              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 border border-yellow-200">
                  <div className="w-12 h-12 bg-yellow-accent rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-black-main" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-neutral-800 mb-2">Dispersión Geográfica</h3>
                  <p className="text-sm text-neutral-600">Numerosos parajes y localidades distantes entre sí</p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border border-red-200">
                  <div className="w-12 h-12 bg-red-main rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-neutral-800 mb-2">Desafío Logístico</h3>
                  <p className="text-sm text-neutral-600">Infraestructura vial limitada y acceso complejo</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                  <div className="w-12 h-12 bg-blue-main rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-neutral-800 mb-2">Impacto Social</h3>
                  <p className="text-sm text-neutral-600">Accesibilidad a servicios básicos y desarrollo</p>
                </div>
              </div>

              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                Esta dispersión geográfica representa un desafío significativo para la administración pública y las organizaciones que buscan llevar servicios esenciales a cada rincón de la provincia. La infraestructura vial, en muchas ocasiones, no es óptima, lo que dificulta el acceso y el transporte de recursos.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-primary-50 rounded-xl p-8 my-8 border-l-4 border-blue-main">
                <p className="text-neutral-700 leading-relaxed">
                  La distancia entre los centros urbanos y los parajes más remotos impacta directamente en la accesibilidad a la salud, educación, agua potable, energía eléctrica y conectividad. La logística para la distribución de bienes y la atención de necesidades básicas se vuelve compleja y costosa, requiriendo estrategias innovadoras y un compromiso constante para superar estas barreras geográficas.
                </p>
              </div>

              <p className="text-lg text-neutral-700 leading-relaxed">
                Comprender esta realidad topográfica y sus implicaciones es fundamental para el diseño e implementación de políticas públicas y proyectos de desarrollo social que sean verdaderamente efectivos y equitativos para toda la población santiagueña.
              </p>
            </div>
          </div>

          {/* Tabla de Departamentos */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-neutral-200">
            <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-yellow-accent to-red-main bg-clip-text text-transparent">
              División Territorial de Santiago del Estero
            </h2>
            <p className="text-neutral-600 text-center mb-10 text-lg">
              Detalle de los departamentos de la provincia, su población según el censo de 2022, sus cabeceras y principales localidades, reflejando la diversidad y extensión del territorio santiagueño.
            </p>
            <div className="overflow-x-auto rounded-xl border border-neutral-200">
              <table className="min-w-full bg-white">
                <thead className="bg-neutral-100">
                  <tr>
                    <th className="py-4 px-6 text-center text-base font-bold text-black-main">Mapa</th>
                    <th className="py-4 px-6 text-left text-base font-bold text-black-main">Departamento</th>
                    <th className="py-4 px-6 text-left text-base font-bold text-black-main">Población (2022)</th>
                    <th className="py-4 px-6 text-left text-base font-bold text-black-main">Cabecera</th>
                    <th className="py-4 px-6 text-left text-base font-bold text-black-main">Otras Localidades y Municipios</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {departamentos.map((dep, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? 'bg-neutral-50' : 'bg-white'
                      } hover:bg-blue-50 transition-colors duration-200`}
                    >
                      <td className="py-4 px-6 flex justify-center items-center">
                        <div className="relative w-24 h-24">
                          <Image
                            src={dep.mapa}
                            alt={`Mapa de ${dep.nombre}`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </td>
                      <td className="py-4 px-6 whitespace-nowrap text-sm font-semibold text-blue-main">{dep.nombre}</td>
                      <td className="py-4 px-6 whitespace-nowrap text-sm text-neutral-700 font-medium">{dep.poblacion}</td>
                      <td className="py-4 px-6 whitespace-nowrap text-sm text-neutral-700">{dep.cabecera}</td>
                      <td className="py-4 px-6 text-sm text-neutral-600">{dep.localidades}</td>
                    </tr>
                  ))}
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
