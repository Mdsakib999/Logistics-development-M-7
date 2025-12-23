import Badge from "@/components/ui/Badge";
import H2 from "@/components/ui/H2";
import P from "@/components/ui/P";
import ServiceFeatures from "./ServiceFeatures";
import ServiceHero from "./ServiceHero";
import ServiceProcess from "./ServiceProcess";

const ServiceDetails = ({ service }) => {
  return (
    <>
      {/* Hero Section */}
      <ServiceHero service={service} />

      {/* Overview Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container-custom">
          <div className="w-full">
            {/* Description */}
            <div className="w-full">
              <Badge>Overview</Badge>
              <H2 color="secondary" className="mt-4">
                About {service.title}
              </H2>
              <div className="mt-6 space-y-4">
                {service.fullDescription
                  .split("\n\n")
                  .map((paragraph, index) => (
                    <p key={index}
                      className={`text-md z-10  font-normal leading-[1.39] tracking-[0.06em] text-secondary mb-[19px] opacity-80`}
                    >
                      {paragraph}
                    </p>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center flex flex-col items-center mb-8 md:mb-12">
            <Badge>Features</Badge>
            <H2 color="primary">Key Benefits & Capabilities</H2>
            <P>
              Discover what makes our {service.title.toLowerCase()} service
              stand out
            </P>
          </div>
          <ServiceFeatures features={service.features} />
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container-custom">
          <div className="text-center flex flex-col items-center mb-8 md:mb-12">
            <Badge>How It Works</Badge>
            <H2 color="secondary">Our Process</H2>
            <P>
              A step-by-step guide to how we deliver exceptional{" "}
              {service.title.toLowerCase()} services
            </P>
          </div>
          <ServiceProcess process={service.process} />
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
