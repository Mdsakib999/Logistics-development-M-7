import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import H2 from "@/components/ui/H2";
import { Package, Shield, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Package,
      title: "Request Quote",
      description: "Share your shipping details",
    },
    {
      number: "02",
      icon: TrendingUp,
      title: "Get Pricing",
      description: "Receive instant quote",
    },
    {
      number: "03",
      icon: Shield,
      title: "Ship & Track",
      description: "Real-time delivery updates",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-zinc-900 relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Badge>How It Works</Badge>
          <H2 color="secondary" className="text-5xl sm:text-6xl mb-4">
            Simple 3-Step Process
          </H2>
          <p className="text-muted text-xl max-w-2xl mx-auto">
            Get started with seamless logistics in three easy steps
          </p>
        </div>

        {/* Horizontal Timeline */}
        <div className="max-w-5xl mx-auto">
          {/* Progress Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="relative h-1 bg-zinc-800 top-16">
              <div className="absolute h-full w-2/3 bg-gradient-vibrant rounded-full"></div>
            </div>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center group">
                  {/* Circular Node */}
                  <div className="relative z-10 w-32 h-32 rounded-full bg-gradient-vibrant flex items-center justify-center mb-6 shadow-prominent-xl group-hover:scale-110 transition-all duration-300">
                    <div className="absolute inset-2 rounded-full bg-zinc-900 flex items-center justify-center">
                      <Icon className="w-10 h-10 text-secondary" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="space-y-2">
                    <div className="text-sm font-bold text-primary uppercase tracking-wider">
                      Step {step.number}
                    </div>
                    <h3 className="text-2xl font-bold text-secondary">
                      {step.title}
                    </h3>
                    <p className="text-muted text-base max-w-xs mx-auto">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="flex justify-center gap-4 mt-16">
            <Button href="/contact" type="primary">
              Get Started Now
            </Button>
            <Button href="/service" type="outline">
              View All Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
