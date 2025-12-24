import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-vibrant relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat"></div>
      
      {/* Floating Shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -ml-32 -mb-32"></div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
          
          <div className="max-w-2xl">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground leading-[0.9] mb-6 tracking-tighter">
              READY TO MOVE <br/>
              YOUR CARGO?
            </h2>
            <p className="text-foreground/70 text-xl font-medium max-w-lg">
              Experience the future of logistics with our premium freight services. 
              Get your quote in under 2 minutes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
             <Button 
                href="/contact" 
                type="primary" 
                className=""
             >
                Get Quote Now <ArrowRight className="ml-2" />
             </Button>
             <Button 
                href="/service" 
                type="outline" 
                className=""
             >
                Explore Services
             </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;
