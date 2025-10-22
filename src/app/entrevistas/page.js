'use client';

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Entrevistas() {
  const [showModal, setShowModal] = useState(false);

  const interviewContent = `
# Entrevista – Subsecretaría de Vivienda / Programa de Desarrollo Social

**Entrevistador/a:**
¿Cómo describiría la misión principal del área y el aporte que hace al desarrollo social de la provincia?

**Entrevistado/a:**
Recabamos, y podemos recabar más todavía. Es porque vamos al interior y aprovechamos para sacar todos los datos que se pueden. Cuando los volcamos, lo hacemos en un programa muy básico, digamos, que sí nos da ciertas herramientas de control para poder llevar adelante el programa, pero queremos aprovecharlo más.  
Sabemos que hay muchas variantes en las cuales uno puede decir: “Che, mirá, yo necesito que, por ejemplo, lo que levanto allá poder volcarlo aquí, sin tener que hacerlo estructural, transcribirlo”. Porque ahí se cometen muchos errores. Es más automatizado el sistema a la hora de manipularlo, digamos.

Por ejemplo —le decía yo—, nosotros levantamos coordenadas. Las coordenadas son claves. ¿En qué sentido? Es un número que puede cambiar mucho de una vivienda a otra, con un grado mínimo de diferencia. Hablando de cien metros nomás, ya te cambia la ubicación, y queremos precisión.  
Después hay combinaciones que uno puede hacer. Por ejemplo: decir “Bueno, yo necesito determinar, de acuerdo a esas coordenadas —uno de los ejemplos, ¿no?—, un radio de 30 o 40 kilómetros. ¿Cuántas viviendas sociales se han hecho, digamos, en ese rango?”.  
Y los podemos sacar, porque los datos los tenemos.

Esas son las cosas. Claro, si podemos ir sabiendo: “Bueno, en el primer departamento tenemos tantas viviendas sociales, y en el otro tantas”, podemos compararlas. Los departamentos no son circulares, pero sí por población, por poblado, uno puede sacar conclusiones.  
Bueno, sin fin de cosas, como hablaba el otro día. Ahora no se me viene a la mente, pero ese era uno de los ejemplos más claros que tenemos.

**Entrevistador/a:**  
¿Ustedes cargan sólo los datos de vivienda o también información social, como si tienen trabajo o problemas de salud?

**Entrevistado/a:**  
Esa información se puede cargar, o es una posibilidad que uno puede ampliar. Lo que yo quiero hacer es algo más práctico, con una aplicación.  
No teníamos una aplicación antes, cualquiera de las opciones tiene un límite cuando uno trabaja con la nube: tiene cierta capacidad, y para ampliarla hay que pagar.  
En esa aplicación tenemos otro uso, que es el visor: cargamos manualmente y le damos a la aplicación para utilizar los datos y transportarlos o migrarlos al otro sistema.  
A veces nos quedamos sin espacio, justamente por esa limitación de capacidad que impone la nube.

**Entrevistador/a:**
¿Cómo describiría la misión principal del área y el aporte que hace al desarrollo social de la provincia, desde esta subsecretaría?

**Entrevistado/a:**  
La misión del programa es brindar una respuesta a la sociedad, que no es sólo una respuesta de salud —por la cual surgió, que era por un problema del mal de Chagas—, sino también garantizar una vivienda digna y erradicar los techos de ranchos.  
Ese es el verdadero origen del programa.

Con el tiempo uno va descubriendo que no es solo eso, sino que también mejora la calidad de vida, genera fuentes de trabajo locales, activa la economía del lugar y ayuda emocionalmente a las familias. Empiezan a organizarse: dormitorios, baño, cocina-comedor… cambia la estructura familiar.  
En un principio era algo más bien rural, pero ahora se extiende.  
La mayoría de las zonas afectadas por Chagas son viviendas precarias, con materiales como chapa, cartón o plástico; gente que realmente no tiene oportunidades inmediatas de mejorar su vivienda.

**Entrevistador/a:**  
¿Qué problemáticas sociales consideran prioritarias y cómo las aborda el área?

**Entrevistado/a:**  
Creo que un poco lo dije antes. Pero respecto a cómo se combinan los datos con la experiencia del territorio y el conocimiento humano, nosotros lo que queremos es minimizar el error humano, tanto en la carga de datos como en la interpretación.

Por ejemplo, cuando los técnicos hacen el relevamiento familiar previo, verificamos si la vivienda corresponde o no al programa.  
Cuando vamos a ver la vivienda, tenemos una clasificación. Esto lo puedo resumir así:  
- **1A:** vivienda estándar.  
- **2A:** vivienda precaria.  
Primero arrancamos con las viviendas tipo rancho, pero con el tiempo surgieron otras categorías: plásticas, de chapa, armadas de forma precaria.  
Después tenemos casos de **derrumbe**, donde la casa está en muy mal estado, incluso en zonas con riesgo por lluvias.  
Y también **casos de incapacidad**, familias numerosas con algún miembro discapacitado, donde hay que reforzar el informe para priorizarlas.

**Entrevistador/a:**  
¿Y el pasaje de los datos? ¿Quién los carga? ¿La gente o las instituciones?

**Entrevistado/a:**  
No, el programa se canaliza a través de instituciones —ONG o municipios—.  
Ellos hacen los primeros relevamientos, recopilan los datos, preparan las carpetas y las presentan aquí. Nosotros orientamos y acompañamos el proceso.  
Cuando el proyecto se aprueba, el dinero se deposita en la cuenta de la institución; ellos compran materiales, contratan la mano de obra, y se ocupan de cualquier inconveniente.  
Nosotros sólo controlamos, o cofinanciamos, la construcción.  

Además, las instituciones deben estar al día con los **requisitos administrativos y legales**, como documentación con bancos, la Dirección de Personas Jurídicas y el sistema del ARCA, que son exigidos antes de la aprobación del proyecto.

**Entrevistador/a:**  
¿Todos esos datos se manejan en el mismo sistema local?

**Entrevistado/a:**  
Exactamente. Todo el ingreso de los datos, las documentaciones, se carga aquí.  
Después salimos al territorio y trabajamos en el mismo sistema.  
Cada expediente tiene un número, y ahí se carga toda la información asociada.

**Entrevistador/a:**  
¿Y en base a esos datos, definen los sectores donde actuar?

**Entrevistado/a:**  
No, eso se trabaja en oficina. Vamos viendo dónde fortalecer más la acción, según los casos que van llegando.

**Entrevistador/a:**  
Otra pregunta: ¿de qué manera las condiciones del territorio influyen en el registro y uso de los datos? Por ejemplo, en lugares con poca señal o muy alejados.

**Entrevistado/a:**  
Mirá, antes teníamos una aplicación que lograba sacar la coordenada aproximada. En otra, se cargaban los datos y quedaban guardados en el teléfono hasta que tomaba señal; recién ahí se enviaban.  
Eso era muy útil, porque además me permitía controlar al técnico: podía ver que efectivamente estaba en ese lugar, ese día y a esa hora.  
La app tomaba automáticamente fecha, hora y coordenadas.  
Ahora lo hacemos de otra forma: sacamos la coordenada, hacemos captura de pantalla, y todo eso se sube como un PDF al expediente, con la foto y los datos relevados.

**Entrevistador/a:**  
¿Y qué pasa si los datos no se cargan bien?

**Entrevistado/a:**  
Si se carga mal, se carga mal (risas).  
A veces pasa: ves una cosa en el sistema electrónico y otra en la base interna.  
Ahí se corrige, pero es complicado, porque en el **GEDO** (sistema electrónico oficial) no se puede editar; queda como impreso.  
En nuestra base de datos sí podemos corregir.  
Por ejemplo, si un técnico marca “1A” y en realidad era “4A”, se ajusta desde acá.  
A veces incluso pasa que en el **VISOC**, que es nuestro sistema local, figura una clasificación distinta, y eso hay que rectificarlo manualmente para mantener coherencia.

**Entrevistador/a:**  
¿Qué tipo de mejoras o herramientas tecnológicas consideran necesarias para optimizar el trabajo?

**Entrevistado/a:**  
Nos gustaría contar con una **aplicación que permita cargar los datos desde el lugar del relevamiento y exportarlos sin errores**, incluso sin señal.  
También que **muestre las ubicaciones registradas por los técnicos** para poder hacer estimaciones, controles y auditorías del trabajo en territorio.  
La idea es que la herramienta permita una visualización geográfica más precisa, evitando transcripciones manuales y facilitando la integración con los sistemas GEDO y VISOC.
`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      <Navbar />

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-neutral-900">
              Entrevistas institucionales: Voces y Perspectivas
            </h1>
            <p className="text-lg text-neutral-700 max-w-4xl mx-auto leading-relaxed">
              En esta sección, presentamos las voces de los actores clave de la Subsecretaría. A través de estas entrevistas, buscamos comprender sus desafíos, perspectivas y las oportunidades de mejora en la gestión de programas sociales. Cada testimonio ofrece una visión única sobre el funcionamiento interno y el impacto de la institución en la comunidad.
            </p>
          </div>

          {/* Grid de Entrevistas */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Card 1 - Arq. Fernández */}
            <div className="bg-white rounded-2xl shadow-xl border border-neutral-300 p-8 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-semibold text-neutral-600">21 de octubre de 2025</span>
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-3">
                Arq. Ernesto Fernández – Subsecretario de Promoción Humana y Relaciones Institucionales con la Comunidad
              </h2>
              <p className="text-neutral-700 mb-4 leading-relaxed">
                En esta entrevista inicial, el Arq. Fernández compartió su visión sobre los desafíos operativos de la Subsecretaría, enfocándose en la problemática de la gestión de datos. Se abordaron temas clave como la carga manual de información, los errores de transcripción, las inconsistencias entre sistemas (GEDO y VISOC), y las limitaciones tecnológicas en el trabajo de campo. El Subsecretario destacó la necesidad urgente de herramientas digitales que automaticen procesos y faciliten la visualización geográfica de los programas sociales.
              </p>
              <p className="text-sm italic text-neutral-500 mb-6">
                <span className="font-semibold">Reflexión:</span> Primer encuentro clave para comprender la dirección estratégica y validar las problemáticas identificadas.
              </p>
              <button
                onClick={() => setShowModal(true)}
                className="group w-full bg-neutral-900 text-white font-bold py-3 px-6 rounded-xl hover:bg-neutral-800 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Ver entrevista completa
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Card 2 - Técnicos y Personal de Campo */}
            <div className="bg-white rounded-2xl shadow-xl border border-neutral-300 p-8 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-semibold text-neutral-500">Próximamente</span>
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-3">
                Entrevista Específica: Flujo de Datos y Puntos Críticos
              </h2>
              <p className="text-neutral-700 mb-4 leading-relaxed">
                Entrevista planificada con técnicos de campo y personal de oficina para diagnosticar el ciclo completo de vida del dato, desde la captura en terreno hasta el reporte en GEDO. Se abordarán fricciones operativas específicas, tiempos de transcripción manual, validación de datos y requerimientos para una solución de automatización priorizando la calidad del dato y la eficiencia operativa.
              </p>
              <div className="bg-neutral-50 rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-neutral-900 mb-2 text-sm">Temas a profundizar:</h3>
                <ul className="text-sm text-neutral-700 space-y-1">
                  <li>• Proceso de captura de datos con app de campo</li>
                  <li>• Flujo de transcripción manual a VISOC</li>
                  <li>• Integración y transferencia a GEDO</li>
                  <li>• Impacto de la tecnología en la tarea social</li>
                </ul>
              </div>
              <p className="text-sm italic text-neutral-500">
                <span className="font-semibold">Reflexión:</span> Entrevista clave para cuantificar el cuello de botella y definir requerimientos técnicos específicos.
              </p>
            </div>

            {/* Card 3 - Próximo encuentro (duplicado de la imagen) */}
            <div className="bg-white rounded-2xl shadow-xl border border-neutral-300 p-8 hover:shadow-2xl transition-all duration-300 md:col-span-2">
              <h2 className="text-2xl font-bold text-neutral-900 mb-3">
                Próximo encuentro – Por definir
              </h2>
              <p className="text-neutral-700 mb-4 leading-relaxed">
                Detalles sobre la próxima entrevista o reunión con actores clave de la institución. Se buscará profundizar en áreas específicas de interés o problemáticas identificadas.
              </p>
              <p className="text-sm italic text-neutral-500">
                <span className="font-semibold">Reflexión:</span> Preparación para futuras conversaciones y recolección de información.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[9999] overflow-y-auto">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={() => setShowModal(false)}
          ></div>

          {/* Modal Container */}
          <div className="flex min-h-screen items-center justify-center p-4">
            <div
              className="relative bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-neutral-900 px-6 py-4 flex items-center justify-between rounded-t-2xl flex-shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Entrevista al Arq. Ernesto Fernández</h3>
                    <p className="text-sm text-neutral-300">Subsecretario de Promoción Humana</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-white hover:bg-white/10 rounded-full p-2 transition-colors flex-shrink-0"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="px-6 py-6 overflow-y-auto flex-1">
                <div className="space-y-6">
                  {interviewContent.split('\n\n').map((section, idx) => {
                    if (section.trim().startsWith('**Entrevistado/a:**') || section.trim().startsWith('**Entrevistador/a:**')) {
                      const isInterviewer = section.includes('Entrevistador');
                      const text = section.replace(/\*\*(Entrevistado\/a|Entrevistador\/a):\*\*\s*/, '');

                      return (
                        <div key={idx} className={`flex gap-3 ${!isInterviewer ? 'justify-end' : ''}`}>
                          {!isInterviewer && (
                            <div className="w-8 h-8 bg-neutral-900 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                              E
                            </div>
                          )}
                          <div className={`max-w-[85%] ${isInterviewer ? 'bg-neutral-100' : 'bg-neutral-50'} rounded-2xl p-4 border ${isInterviewer ? 'border-neutral-200' : 'border-neutral-300'}`}>
                            <div className="text-xs font-semibold text-neutral-500 mb-2">
                              {isInterviewer ? 'Entrevistador' : 'Arq. Ernesto Fernández'}
                            </div>
                            <p className="text-sm text-neutral-800 leading-relaxed whitespace-pre-wrap">{text}</p>
                          </div>
                          {isInterviewer && (
                            <div className="w-8 h-8 bg-neutral-200 rounded-full flex items-center justify-center text-neutral-700 font-bold text-sm flex-shrink-0">
                              P
                            </div>
                          )}
                        </div>
                      );
                    }

                    if (section.trim().startsWith('#')) {
                      return (
                        <h2 key={idx} className="text-xl font-bold text-neutral-900 mt-8 mb-4 pb-3 border-b border-neutral-200">
                          {section.replace('#', '').trim()}
                        </h2>
                      );
                    }

                    return null;
                  })}
                </div>
              </div>

              {/* Footer */}
              <div className="bg-neutral-50 px-6 py-4 flex justify-end border-t border-neutral-200 rounded-b-2xl flex-shrink-0">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-neutral-900 hover:bg-neutral-800 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}