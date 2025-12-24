
const ServiceProcess = ({ process }) => {
  // Use passed process prop or fallback to default for consistent rendering if integrated elsewhere
  const steps = process || [
      { step: "01", title: "Consultation", description: "We analyze your specific logistics requirements." },
      { step: "02", title: "Strategy", description: "Design a custom shipping and route plan." },
      { step: "03", title: "Execution", description: "Seamless pickup, transit, and delivery handling." },
      { step: "04", title: "Delivery", description: "Final mile delivery with real-time confirmation." },
  ];

  return (
    <div className="py-12 bg-zinc-950">
        {/* Header - Optional if used as standalone section, minimal here for embedding */}
        <div className="mb-12 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Operational Workflow</h3>
            <p className="text-zinc-500">How we ensure precision at every step.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Desktop Connecting Line */}
            <div className="hidden lg:block absolute top-[28px] left-0 w-full h-px bg-zinc-800 -z-10"></div>

            {steps.map((item, index) => (
                <div key={index} className="group relative bg-zinc-950">
                    {/* Node */}
                    <div className="w-14 h-14 bg-black border border-zinc-800 rounded-full flex items-center justify-center mb-6 group-hover:border-primary group-hover:bg-primary/10 transition-colors duration-300 z-10 shadow-lg">
                        <span className="text-zinc-400 font-bold group-hover:text-primary">{item.step || `0${index+1}`}</span>
                    </div>
                    
                    {/* Content */}
                    <div className="border-l border-zinc-900 pl-6 lg:border-l-0 lg:pl-0">
                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                        <p className="text-zinc-500 text-sm leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default ServiceProcess;
