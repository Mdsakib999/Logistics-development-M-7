import H1 from "@/components/ui/H1";
import Image from "next/image";

const Hero = ({ heading, description, image }) => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={heading}
          fill
          className="object-cover opacity-40 grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 grayscale"></div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="inline-block mb-6 relative">
             <div className="absolute -inset-1 rounded-lg bg-primary/30 blur-md"></div>
             <span className="relative px-4 py-1.5 rounded-full border border-primary/50 bg-black/50 text-primary text-sm font-mono tracking-widest uppercase backdrop-blur-sm">
                Freight Forwarding
             </span>
        </div>
        
        <H1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8 font-black tracking-tighter text-white drop-shadow-2xl">
          {heading}
          <span className="text-primary">.</span>
        </H1>

        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed border-l-2 border-primary/50 pl-6 text-left md:text-center md:border-l-0 md:pl-0 font-light">
          {description}
        </p>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default Hero;
