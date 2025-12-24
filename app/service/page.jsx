import ServiceHero from "@/components/service/ServiceHero";
import ServiceListing from "@/components/service/ServiceListing";
import ServicePricing from "@/components/service/ServicePricing";
import ServiceStats from "@/components/service/ServiceStats";

const ServicePage = () => {
  return (
    <>
      <ServiceHero 
          heading="Services" 
          description="We provide comprehensive logistics solutions tailored to meet your global supply chain needs with precision and reliability."
          image="/images/bernd-dittrich-eCc7FjMoR74-unsplash.jpg"
      />
      <ServiceStats />
      <ServiceListing />
      <ServicePricing />
    </>
  );
};

export default ServicePage;
