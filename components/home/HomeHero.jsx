import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ImageOverlay from "@/components/ui/ImageOverlay";
import { ArrowRight, Box, Globe, ShieldCheck, Zap } from "lucide-react";

const HomeHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden bg-gradient-happy">
      {/* Decorative Background Elements - Subtle */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -mr-20 animate-float opacity-50"></div>
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -ml-20 animate-float opacity-50"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Left */}
          <div className="order-2 lg:order-1 animate-fade-up">
            <Badge className="mb-6">Global Logistics Partner</Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-secondary mb-6 leading-[1.1] tracking-tight">
              Shipping Made <br />
              <span className="text-primary relative inline-block">
                Simple & Fast
                <svg
                  className="absolute w-full h-3 -bottom-1 left-0 text-accent"
                  viewBox="0 0 200 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.00025 6.99997C25.8033 4.54326 52.4807 2.99999 78.4326 2.05284C108.629 0.950669 139.728 1.63697 169.89 3.00392C179.99 3.46169 190.106 3.96639 200.088 5.02555"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted mb-10 leading-relaxed max-w-lg">
              Experience seamless global shipping with our advanced logistics
              solutions. We deliver reliability and speed for every cargo.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                type="primary"
                href="/quote"
                className="shadow-prominent h-14 px-8 text-lg"
              >
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                type="outline"
                href="/service"
                className="h-14 px-8 text-lg text-secondary bg-white/50 border-secondary/20"
              >
                View Services
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex items-center gap-8 text-sm font-semibold text-muted/80">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-success" /> Fully Insured
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" /> Global Network
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent" /> Fast Delivery
              </div>
            </div>
          </div>

          {/* Image/Visual Right - Restored but Clean (No Blur) */}
          <div className="order-1 lg:order-2 relative animate-scale-in">
            <div className="relative rounded-[50px] overflow-hidden shadow-prominent-xl border-4 border-white transform rotate-3 hover:rotate-0 transition-transform duration-700 bg-white">
              <ImageOverlay
                src="/images/scene-with-photorealistic-logistics-operations-proceedings (1).jpg"
                alt="Logistics Operations"
                title="Global Scale"
                description="Connecting markets"
                className="w-full h-[500px] lg:h-[600px] object-cover scale-105 hover:scale-110 transition-transform duration-1000"
                width={700}
                height={600}
              />

              {/* Floating Cards - Clean, Solid Shadows, No Backdrop Blur */}
              <div className="absolute top-10 right-10 bg-white p-4 rounded-2xl shadow-prominent-lg animate-float max-w-[160px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <Box size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">
                      Deliveries
                    </div>
                    <div className="text-lg font-bold text-gray-900">12k+</div>
                  </div>
                </div>
              </div>

              <div
                className="absolute bottom-10 left-10 bg-white p-4 rounded-2xl shadow-prominent-lg animate-float max-w-[180px]"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Globe size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">
                      Countries
                    </div>
                    <div className="text-lg font-bold text-gray-900">150+</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Blob behind image */}
            <div className="absolute inset-0 bg-gradient-vibrant rounded-[60px] transform -rotate-3 -z-10 translate-y-4 translate-x-4 opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
