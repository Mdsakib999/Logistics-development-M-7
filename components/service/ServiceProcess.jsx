import { ArrowRight } from "lucide-react";

const ServiceProcess = ({ process }) => {
  return (
    <div className="relative">
      {/* Desktop: Horizontal Layout with Connecting Lines */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-6 gap-4 relative">
          {/* Connecting Line */}
          <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 z-0"></div>

          {process.map((step, index) => (
            <div key={step.step} className="relative z-10">
              <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-primary transition-all duration-300 h-full">
                {/* Step Number Badge */}
                <div className="flex justify-center mb-4">
                  <div className="bg-primary text-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.step}
                  </div>
                </div>

                {/* Step Content */}
                <div className="text-center">
                  <h4 className="font-bold text-secondary mb-2 text-base">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile/Tablet: Vertical Layout */}
      <div className="lg:hidden space-y-4">
        {process.map((step, index) => (
          <div key={step.step} className="relative">
            <div className="flex gap-4">
              {/* Step Number */}
              <div className="flex-shrink-0">
                <div className="bg-primary text-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {step.step}
                </div>
              </div>

              {/* Step Content */}
              <div className="flex-1 bg-white p-4 rounded-xl border-2 border-gray-200">
                <h4 className="font-bold text-secondary mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>

            {/* Connecting Arrow (except for last item) */}
            {index < process.length - 1 && (
              <div className="flex justify-center my-2">
                <ArrowRight
                  size={24}
                  className="text-primary rotate-90"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceProcess;
