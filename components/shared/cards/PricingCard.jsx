import { Check } from "lucide-react";
import Button from "@/components/ui/Button";

const PricingCard = ({ tier, price, period, features, highlighted = false }) => {
  return (
    <div
      className={`bg-white rounded-[20px] p-6 md:p-8 border-2 transition-all duration-300 hover:shadow-xl ${
        highlighted ? "border-primary" : "border-gray-200"
      }`}
    >
      {/* Tier Name */}
      <div className="text-center mb-6">
        <h4 className="text-lg font-semibold text-secondary uppercase mb-2">
          {tier}
        </h4>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl md:text-5xl my-2 font-bold text-primary">
            ${price}
          </span>
          <span className="text-base text-secondary/60">/{period}</span>
        </div>
      </div>

      {/* Features List */}
      <div className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <Check
              size={20}
              className="shrink-0 text-secondary mt-0.5"
              strokeWidth={2.5}
            />
            <span className="text-base text-secondary/80">{feature}</span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <Button type="primary" href="/contact">
        Choose Plan
      </Button>
    </div>
  );
};

export default PricingCard;
