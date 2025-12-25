import { Check } from "lucide-react";


const ServiceFeatures = ({ features }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/40 hover:bg-white/[0.04] transition-all duration-300 group hover:-translate-y-1">
                <div className="mt-1 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:shadow-[0_0_20px_rgba(74,222,128,0.4)] transition-all duration-300">
                     <Check size={14} className="text-primary group-hover:text-black transition-colors" />
                </div>
                <div>
                   <span className="text-zinc-300 text-base font-medium group-hover:text-white transition-colors leading-relaxed block">
                    {feature}
                   </span>
                </div>
            </div>
        ))}
    </div>
  );
};

export default ServiceFeatures;
