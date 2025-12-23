import CTASection from "@/components/about/CTASection";
import DigitalLogisticsSection from "@/components/about/DigitalLogisticsSection";
import LogisticsStrategySection from "@/components/about/LogisticsStrategySection";
import StatisticsSection from "@/components/about/StatisticsSection";
import TeamSection from "@/components/about/TeamSection";
import PageHero from "@/components/shared/PageHero";

const About = () => {
  return (
    <>
      <PageHero
        heading="About Us"
        description="This is a premier provider of freight forwarding services, known
              for its exceptional customer service."
        image="/images/aboutus.jpg"
      />
      <DigitalLogisticsSection />
      <LogisticsStrategySection />
      <CTASection />
      <StatisticsSection />
      <TeamSection />
    </>
  );
};

export default About;
