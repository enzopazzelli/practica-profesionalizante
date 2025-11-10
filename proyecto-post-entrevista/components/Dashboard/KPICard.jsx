export default function KPICard({ titulo, valor, icono, colorClase = "bg-blue-main" }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-t-4" style={{ borderTopColor: 'var(--blue-main)' }}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-neutral-600 text-sm font-medium uppercase tracking-wide">{titulo}</p>
          <p className="text-4xl font-bold text-neutral-900 mt-2">{valor.toLocaleString('es-AR')}</p>
        </div>
        {icono && (
          <div className={`${colorClase} text-white p-4 rounded-full`}>
            {icono}
          </div>
        )}
      </div>
    </div>
  );
}
