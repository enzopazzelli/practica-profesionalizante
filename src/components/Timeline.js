export default function Timeline() {
  const currentStep = 3; // Etapa actual: Identificación de problemáticas

  const steps = [
    { title: "Encuentro inicial", status: "completed" },
    { title: "Entrevistas institucionales", status: "completed" },
    { title: "Identificación de problemáticas", status: "current" },
    { title: "Análisis de datos", status: "upcoming" },
    { title: "Conclusiones finales", status: "upcoming" },
  ];

  return (
    <div className="relative">
      {/* Progress Bar Background */}
      <div className="absolute top-4 left-0 w-full h-1 bg-neutral-200 hidden md:block">
        {/* Animated Progress Fill */}
        <div
          className="h-full bg-gradient-to-r from-green-500 via-blue-main to-yellow-accent transition-all duration-1000 ease-out"
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        ></div>
      </div>

      {/* Steps */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 relative z-10">
        {steps.map((step, i) => {
          const isCompleted = i < currentStep - 1;
          const isCurrent = i === currentStep - 1;
          const isUpcoming = i >= currentStep;

          return (
            <div
              key={i}
              className="flex flex-col items-center max-w-[140px] group"
            >
              {/* Circle with animations */}
              <div className={`
                relative w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg
                transition-all duration-500 transform
                ${isCompleted ? 'bg-green-500 text-white scale-100' : ''}
                ${isCurrent ? 'bg-blue-main text-white scale-125 shadow-xl animate-pulse ring-4 ring-blue-200' : ''}
                ${isUpcoming ? 'bg-neutral-300 text-neutral-600 scale-90' : ''}
                group-hover:scale-110
              `}>
                {isCompleted && (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
                {isCurrent && (
                  <div className="relative">
                    <span>{i + 1}</span>
                    <div className="absolute inset-0 rounded-full bg-blue-main animate-ping opacity-75"></div>
                  </div>
                )}
                {isUpcoming && <span>{i + 1}</span>}
              </div>

              {/* Step title */}
              <p className={`
                text-sm mt-3 text-center font-medium transition-all duration-300
                ${isCompleted ? 'text-green-600' : ''}
                ${isCurrent ? 'text-blue-main font-bold' : ''}
                ${isUpcoming ? 'text-neutral-500' : ''}
              `}>
                {step.title}
              </p>

              {/* Status badge */}
              {isCurrent && (
                <span className="mt-2 px-3 py-1 bg-blue-main text-white text-xs font-semibold rounded-full animate-bounce">
                  En progreso
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}