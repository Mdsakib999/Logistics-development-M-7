import PricingSection from "@/components/home/PricingSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import ServiceStats from "@/components/home/ServiceStats";
import PageHero from "@/components/shared/PageHero";

const ServicePage = () => {
  return (
    <>
      <PageHero heading="Service" description="Freight Forward is a leading name in the logistics industry, we
              ensure your shipments are always on time and secure."
        image="/images/bernd-dittrich-eCc7FjMoR74-unsplash.jpg"
              />
      <ServicesGrid />
      <ServiceStats />
      <PricingSection />
    </>
  );
};

export default ServicePage;
