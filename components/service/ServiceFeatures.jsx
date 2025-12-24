import { Check } from "lucide-react";

const ServiceFeatures = ({ features }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50 hover:border-primary/30 transition-colors group">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20">
                     <Check size={12} className="text-primary" />
                </div>
                <span className="text-zinc-300 text-sm font-medium group-hover:text-white transition-colors">
                    {feature}
                </span>
            </div>
        ))}
    </div>
  );
};

export default ServiceFeatures;
