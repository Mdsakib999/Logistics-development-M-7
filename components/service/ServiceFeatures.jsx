import { CheckCircle2 } from "lucide-react";

const ServiceFeatures = ({ features }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <CheckCircle2
                size={24}
                className="text-primary group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex-1">
              <p className="text-secondary font-medium leading-relaxed">
                {feature}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceFeatures;
