import ServiceCard from "@/components/shared/cards/ServiceCard";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import H2 from "@/components/ui/H2";
import { services } from "@/public/data";

const ServicesGrid = ({ limit = "1000" }) => {
  const displayedServices = services.slice(0, Number(limit));

  return (
    <section className="py-20 md:py-28 bg-zinc-900">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <Badge>Our Services</Badge>
            <H2 color="secondary" className="text-4xl sm:text-5xl lg:text-6xl mb-4">
              Logistics Solutions
            </H2>
            <p className="text-muted text-xl">
              Tailored transportation services designed for speed and reliability.
            </p>
          </div>
          <Button href="/service" type="outline" className="hidden md:inline-flex">
            View All Services
          </Button>
        </div>

        {/* Uniform Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service) => (
            <div key={service.id} className="h-full">
              <ServiceCard
                image={service.image}
                icon={service.icon}
                info={service.info}
                title={service.title}
                description={service.description}
                link={`/service/${service.id}`}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
           <Button href="/service" type="outline">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
