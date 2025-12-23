import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import H2 from "@/components/ui/H2";
import ImageOverlay from "@/components/ui/ImageOverlay";
import { Globe, TrendingUp, Users } from "lucide-react";

const AboutUs = () => {
  const stats = [
    { label: "Years Experience", value: "16+", icon: TrendingUp },
    { label: "Global Partners", value: "80+", icon: Globe },
    { label: "Team Members", value: "200+", icon: Users },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Content Section - Left */}
          <div className="w-full lg:w-1/2">
            <Badge>About Co.</Badge>
            <H2 color="secondary" className="text-4xl sm:text-5xl lg:text-6xl mb-6">
              Logistics Solutions <br/>
              <span className="text-primary">That Deliver</span>
            </H2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              We are more than just a logistics company; we are your strategic partner in global trade. With over 16 years of experience, we&apos;ve built a network that ensures your cargo reaches its destination safely and on time.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 mb-10 border-y border-gray-100 py-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                      <Icon className="w-5 h-5 text-primary" />
                      <span className="text-3xl font-bold text-secondary">{stat.value}</span>
                    </div>
                    <div className="text-sm font-medium text-muted">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-4">
              <Button type="primary" href="/about">
                Our Story
              </Button>
              <Button type="outline" href="/contact">
                Contact Us
              </Button>
            </div>
          </div>

          {/* Image Section - Right */}
          <div className="w-full lg:w-1/2 relative">
            {/* Main Image */}
            <div className="relative rounded-[40px] overflow-hidden shadow-prominent-xl">
              <ImageOverlay
                src="/images/truck.jpg"
                alt="Global logistics operations"
                title="Global Network"
                description="Connecting the world"
                className="h-[500px] w-full object-cover transform hover:scale-105 transition-transform duration-700"
                width={700}
                height={500}
              />
            </div>
            
            {/* Decorative Elements - Clean & Geometric */}
            <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-primary/20 rounded-[40px]"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
