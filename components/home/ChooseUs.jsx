import Badge from "@/components/ui/Badge";
import H2 from "@/components/ui/H2";
import ImageOverlay from "@/components/ui/ImageOverlay";
import { Award, Clock, ShieldCheck, Users } from "lucide-react";

const ChooseUs = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "100% Secure",
      description: "Full value insurance coverage for peace of mind",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Dedicated specialists for every industry",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Real-time tracking and round-the-clock service",
    },
    {
      icon: Award,
      title: "Top Quality",
      description: "ISO certified processes and standards",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-foreground">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Left Side - Content */}
          <div className="w-full lg:w-1/2">
            <Badge>Why Choose Us</Badge>
            <H2 color="secondary" className="text-4xl sm:text-5xl mb-6">
              Excellence in <br/>Every Shipment
            </H2>
            <p className="text-muted text-lg mb-10 leading-relaxed">
              We combine industry expertise with cutting-edge technology to deliver superior logistics solutions tailored to your unique needs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex flex-col gap-3 group">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center border border-gray-100 shadow-sm group-hover:scale-110 group-hover:shadow-prominent transition-all duration-300">
                      <Icon className="w-6 h-6 text-primary" strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-muted text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Contained Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-prominent-xl group">
              <ImageOverlay
                src="/images/why-choose.jpg"
                alt="Logistics excellence"
                title="Why Choose Us"
                description="Leading the Industry"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                width={600}
                height={500}
              />
              {/* Decorative Border */}
              <div className="absolute inset-0 border-[6px] border-white/10 pointer-events-none rounded-3xl"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
