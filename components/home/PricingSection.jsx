import PricingCard from "@/components/shared/cards/PricingCard";
import { pricingPlans } from "@/public/data";
import Badge from "@/components/ui/Badge";
import H2 from "@/components/ui/H2";

const PricingSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center flex flex-col justify-center items-center mb-8 md:mb-12">
          <Badge>Pricing Plans</Badge>
          <H2 color="primary">Standard Pricing Packages</H2>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              tier={plan.tier}
              price={plan.price}
              period={plan.period}
              features={plan.features}
              highlighted={plan.highlighted}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
