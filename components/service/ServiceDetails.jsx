import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import H2 from "@/components/ui/H2";
import { ArrowRight } from "lucide-react";
import ServiceFeatures from "./ServiceFeatures";
import ServiceHero from "./ServiceHero";
import ServiceProcess from "./ServiceProcess";


const ServiceDetails = ({ service }) => {
  return (
    <>
      <ServiceHero 
        heading={service.title}
        description={service.description}
        image={service.image} 
      />

      <div className="bg-black text-white relative z-10">
        <div className="container-custom py-16 lg:py-24">
            
            {/* Main Content Centered */}
            <div className="max-w-4xl mx-auto space-y-20">
              
              {/* Overview */}
              <section className="text-center">
                <Badge variant="outline" className="mb-6 mx-auto">Overview</Badge>
                <H2 className="text-4xl md:text-5xl mb-8 text-white">
                  Comprehensive <span className="text-zinc-500">Solutions.</span>
                </H2>
                <div className="space-y-6 text-lg text-zinc-400 leading-relaxed font-light text-left md:text-center">
                   {service.fullDescription.split("\n\n").map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                   ))}
                </div>
              </section>

              {/* Features */}
              <section>
                <div className="flex items-center gap-3 mb-8 justify-center">
                   <div className="h-px w-12 bg-zinc-800"></div>
                   <span className="text-zinc-500 text-sm font-mono uppercase tracking-widest">Key Benefits</span>
                   <div className="h-px w-12 bg-zinc-800"></div>
                </div>
                <ServiceFeatures features={service.features} />
              </section>

              {/* Process */}
              <section>
                 <div className="flex items-center gap-3 mb-8 justify-center">
                   <div className="h-px w-12 bg-zinc-800"></div>
                   <span className="text-zinc-500 text-sm font-mono uppercase tracking-widest">Our Process</span>
                   <div className="h-px w-12 bg-zinc-800"></div>
                </div>
                <ServiceProcess process={service.process} />
              </section>

               {/* CTA Section (Replaces Sidebar CTA) */}
               <section className="mt-20">
                  <div className="p-8 md:p-12 rounded-3xl bg-zinc-900 border border-zinc-800 text-center relative overflow-hidden group">
                     {/* Background Glow */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>

                     <h3 className="text-3xl font-bold text-white mb-4 relative z-10">Ready to optimize your logistics?</h3>
                     <p className="text-zinc-400 mb-8 max-w-xl mx-auto relative z-10">
                       Get a custom quote for your {service.title.toLowerCase()} needs. Our team is ready to help you streamline your supply chain.
                     </p>
                     
                     <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                        <Button type="primary" className="justify-center">
                           Request Custom Quote <ArrowRight size={16} className="ml-2" />
                        </Button>
                        <Button type="outline" className="justify-center border-zinc-700 hover:bg-zinc-800 text-white">
                           Contact Support
                        </Button>
                     </div>
                  </div>
               </section>

            </div>

        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
