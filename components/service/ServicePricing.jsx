import Button from "@/components/ui/Button";
import { Check } from "lucide-react";

const ServicePricing = () => {
  const pricingPlans = [
    {
      tier: "Beginner",
      price: 10,
      period: "Month",
      features: [
        "Basic domestic freight shipping services",
        "Real-time shipment tracking available",
        "Email support and documentation assistance",
        "Standard warehouse storage up to one month",
        "Monthly performance reports and analytics",
      ],
    },
    {
      tier: "Standard",
      price: 28,
      period: "Month",
      features: [
        "Domestic and international freight coverage",
        "Priority customer support with dedicated agent",
        "Advanced inventory management system integration",
        "Three months secure warehouse storage included",
        "Custom reporting and shipment optimization analysis",
      ],
      isPopular: true,
    },
    {
      tier: "Premium",
      price: 40,
      period: "Month",
      features: [
        "Global freight solutions with route optimization",
        "24/7 dedicated premium support team available",
        "Unlimited warehouse storage with climate control",
        "AI-powered predictive analytics and insights",
        "White-label solutions and custom integration support",
      ],
    },
  ];

  return (
    <section className="py-24 bg-black border-t border-zinc-900">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Transparent Pricing
          </h2>
          <p className="text-zinc-500">
            Flexible models designed to scale with your logistics needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-zinc-950 border ${
                plan.isPopular ? "border-primary" : "border-zinc-800"
              } rounded-3xl p-8 flex flex-col hover:shadow-2xl transition-all duration-300 group`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-primary text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8 text-center border-b border-zinc-900 pb-8">
                <div className="text-zinc-500 font-bold uppercase tracking-widest text-xs mb-4">
                  {plan.tier}
                </div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl md:text-5xl my-2 font-bold text-primary">
                    ${plan.price}
                  </span>
                  <span className="text-base text-secondary/60">/{plan.period}</span>
                </div>
              </div>

              <div className="flex-1 mb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-sm text-zinc-300"
                    >
                      <div className="w-5 h-5 rounded-full bg-zinc-900 flex items-center justify-center text-primary border border-zinc-800">
                        <Check size={12} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                type={plan.isPopular ? "primary" : "outline"}
              >
                Choose Plan
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePricing;
