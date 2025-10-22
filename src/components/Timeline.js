export default function Timeline() {
  const steps = [
    "Encuentro inicial",
    "Entrevistas institucionales",
    "Identificación de problemáticas",
    "Análisis de datos",
    "Conclusiones finales",
  ];
  return (
    <div className="flex flex-col md:flex-row justify-between mt-8">
      {steps.map((step, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="bg-blue-main text-white-main w-8 h-8 rounded-full flex items-center justify-center">
            {i + 1}
          </div>
          <p className="text-sm text-black-main mt-2 text-center">{step}</p>
        </div>
      ))}
    </div>
  );
}