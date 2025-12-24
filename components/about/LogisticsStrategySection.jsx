import H2 from "@/components/ui/H2";
import ImageOverlay from "@/components/ui/ImageOverlay";
import { Eye, Flag, Target, TrendingUp } from "lucide-react";

const LogisticsStrategySection = () => {
  const strategies = [
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the leading logistics provider recognized for innovation and excellence.",
      image: "/images/pexels-alexander-bobrov-390088-3278012.jpg"
    },
    {
      icon: Flag,
      title: "Our Mission",
      description: "Delivering exceptional services through cutting-edge technology and sustainability.",
      image: "/images/global-shipping-international-logistics-illustration.jpg"
    }
  ];

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                <Target size={14} /> Strategic Direction
            </div>
            <H2 className="text-5xl md:text-6xl text-white mb-6">
                Tailored for <span className="text-primary">Success</span>
            </H2>
            <p className="text-gray-400 text-lg">
                Our strategic roadmap is built on a foundation of innovation, sustainability, and customer-centricity.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {strategies.map((item, index) => (
                <div key={index} className="group relative bg-black border border-zinc-800 rounded-3xl overflow-hidden hover:border-primary/50 transition-colors duration-500">
                    
                    {/* Top Image Section */}
                    <div className="relative h-64 overflow-hidden">
                         <ImageOverlay
                            src={item.image}
                            alt={item.title}
                            title={item.title}
                            description="Strategic Goal"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
                            width={600}
                            height={300}
                        />
                    </div>

                    {/* Content Section */}
                    <div className="pt-12 px-8 pb-8">
                        <div className="flex justify-between items-start mb-4">
                             <h3 className="text-3xl font-bold text-white group-hover:text-primary transition-colors">{item.title}</h3>
                        </div>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            {item.description}
                        </p>
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-3xl -mr-10 -mt-10 rounded-full"></div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default LogisticsStrategySection;
