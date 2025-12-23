import ServiceCard from "@/components/shared/cards/ServiceCard";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import H2 from "@/components/ui/H2";
import P from "@/components/ui/P";
import { getRelatedServices } from "@/lib/serviceUtils";

const RelatedServices = ({ serviceId }) => {
  const relatedServices = getRelatedServices(serviceId, 3);

  if (relatedServices.length === 0) {
    return null;
  }

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-foreground">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center flex flex-col items-center justify-center mb-8 md:mb-12">
          <Badge>Related Services</Badge>
          <H2 color="primary">You May Also Like</H2>
          <P>
            Explore our other logistics solutions that complement this service
          </P>
        </div>

        {/* Related Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
          {relatedServices.map((service) => (
            <ServiceCard
              key={service.id}
              image={service.image}
              icon={service.icon}
              info={service.info}
              title={service.title}
              description={service.description}
              link={`/service/${service.id}`}
            />
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center">
          <Button type="primary" href="/service">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
