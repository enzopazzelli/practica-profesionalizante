export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white mt-16 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Columna 1 - Info del Proyecto */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-white">
              Práctica Profesionalizante
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Instituto Técnico Superior de Estudios (ITSE) - Carrera de Ciencia de Datos
            </p>
          </div>

          {/* Columna 2 - Sobre el Proyecto */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-white">Subsecretaría</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Promoción Humana y Relaciones Institucionales con la Comunidad
            </p>
          </div>

          {/* Columna 3 - Provincia */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-white">Santiago del Estero</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Ministerio de Desarrollo Social, Promoción Humana y Relaciones Institucionales con la Comunidad
            </p>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-6 text-center">
          <p className="text-neutral-500 text-sm">
            © 2025 Práctica Profesionalizante – ITSE. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}