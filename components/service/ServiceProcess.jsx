
const ServiceProcess = ({ process }) => {
  const steps = process || [
      { step: "01", title: "Consultation", description: "We analyze your specific logistics requirements." },
      { step: "02", title: "Strategy", description: "Design a custom shipping and route plan." },
      { step: "03", title: "Execution", description: "Seamless pickup, transit, and delivery handling." },
      { step: "04", title: "Delivery", description: "Final mile delivery with real-time confirmation." },
  ];

  return (
    <div className="relative border-l border-zinc-800 ml-3 md:ml-6 space-y-12 my-12">
        {steps.map((item, index) => (
            <div key={index} className="relative pl-12 group">
                {/* Timeline Node */}
                <div className="absolute -left-[21px] top-0 w-10 h-10 rounded-full bg-black border-4 border-zinc-900 flex items-center justify-center group-hover:border-primary transition-colors duration-300 z-10">
                    <div className="w-3 h-3 rounded-full bg-zinc-700 group-hover:bg-primary transition-colors duration-300"></div>
                </div>
                
                {/* Content */}
                <div className="relative">
                    <span className="text-primary font-mono text-xs tracking-widest uppercase mb-1 block">Step {(index + 1).toString().padStart(2, '0')}</span>
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-zinc-400 leading-relaxed max-w-lg">
                        {item.description}
                    </p>
                </div>
            </div>
        ))}
    </div>
  );
};

export default ServiceProcess;
