export default function ClasificacionGallery() {
  const clasificaciones = [
    {
      tipo: '1A',
      nombre: 'Vivienda Estándar',
      descripcion: 'Vivienda en condiciones aceptables que requiere mejoras o ampliación',
      color: 'border-blue-main',
      bgColor: 'bg-blue-50'
    },
    {
      tipo: '2A',
      nombre: 'Vivienda Precaria',
      descripcion: 'Vivienda en condiciones deficientes que requiere intervención significativa',
      color: 'border-yellow-accent',
      bgColor: 'bg-yellow-50'
    },
    {
      tipo: 'Derrumbe',
      nombre: 'Peligro de Derrumbe',
      descripcion: 'Vivienda en peligro de colapso que requiere reconstrucción total',
      color: 'border-red-main',
      bgColor: 'bg-red-50'
    },
    {
      tipo: 'Terminada',
      nombre: 'Vivienda Digna',
      descripcion: 'Resultado del programa: vivienda reconstruida o mejorada',
      color: 'border-green-600',
      bgColor: 'bg-green-50'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-2xl font-bold text-neutral-900 mb-4">Clasificación de Viviendas</h3>
      <p className="text-neutral-600 mb-6">
        El programa clasifica las viviendas según su estado para determinar el tipo de intervención necesaria.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {clasificaciones.map((item) => (
          <div
            key={item.tipo}
            className={`${item.bgColor} border-4 ${item.color} rounded-lg p-4 transition-transform hover:scale-105`}
          >
            {/* Placeholder de imagen */}
            <div className="aspect-square bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-lg mb-3 flex items-center justify-center">
              <div className="text-center p-4">
                <p className="font-bold text-2xl text-neutral-700">{item.tipo}</p>
                <p className="text-xs text-neutral-600 mt-1">Foto ejemplo</p>
              </div>
            </div>

            {/* Información */}
            <h4 className="font-bold text-base text-neutral-900 mb-2">{item.nombre}</h4>
            <p className="text-sm text-neutral-700">{item.descripcion}</p>
          </div>
        ))}
      </div>

      {/* Nota informativa */}
      <div className="mt-6 p-4 bg-neutral-100 rounded-lg border-l-4 border-blue-main">
        <p className="text-sm text-neutral-700">
          <span className="font-semibold">Nota:</span> Las clasificaciones se determinan durante el relevamiento
          técnico en campo y definen el tipo de intervención que recibirá cada familia beneficiaria del programa.
        </p>
      </div>
    </div>
  );
}
