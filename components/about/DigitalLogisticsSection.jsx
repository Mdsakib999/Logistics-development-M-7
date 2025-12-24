import H2 from "@/components/ui/H2";
import ImageOverlay from "@/components/ui/ImageOverlay";
import { Cpu, Globe, Rocket, Server } from "lucide-react";

const DigitalLogisticsSection = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Matrix Background Effect */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #22c55e 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Holographic Data Card */}
          <div className="relative group">
            {/* Holographic Border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-blue-500 to-primary rounded-3xl opacity-30 group-hover:opacity-70 blur-md transition-opacity duration-500 animate-pulse"></div>
            
            <div className="relative bg-zinc-900 border border-zinc-800 p-2 rounded-3xl shadow-2xl overflow-hidden">
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden">
                <ImageOverlay
                  src="/images/pexels-pixabay-209251.jpg"
                  alt="Digital Warehouse"
                  title="Digital Warehouse"
                  description="Automated Systems"
                  width={600}
                  height={500}
                  className="w-full h-full object-cover opacity-80"
                />
                
                {/* Overlay UI Elements */}
                <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                   <Rocket className="text-primary w-8 h-8 animate-bounce" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                <Cpu size={14} /> Digital Transformation
              </div>
              <H2 className="text-5xl md:text-6xl text-white mb-6 leading-tight">
                Logistics for the <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Digital Age</span>
              </H2>
              <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-zinc-800 pl-6">
                Revolutionize your supply chain with our AI-driven logistics platform. 
                We combine real-time data analytics, automated warehousing, and 
                smart route optimization to deliver unparalleled efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {[
                 { icon: Globe, title: "Global Reach", desc: "Connected network across 150+ countries" },
                 { icon: Server, title: "Smart Storage", desc: "Automated inventory management systems" }
               ].map((item, idx) => (
                 <div key={idx} className="bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800 hover:border-primary/50 p-6 rounded-2xl transition-all duration-300 group">
                   <item.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                   <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                   <p className="text-sm text-gray-400">{item.desc}</p>
                 </div>
               ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DigitalLogisticsSection;
