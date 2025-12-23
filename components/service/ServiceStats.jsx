import { Clock, Globe, TrendingUp } from "lucide-react";

const ServiceStats = ({ stats }) => {
  const statsConfig = [
    {
      key: "deliveryTime",
      label: "Delivery Time",
      icon: Clock,
      value: stats.deliveryTime,
    },
    {
      key: "coverage",
      label: "Coverage",
      icon: Globe,
      value: stats.coverage,
    },
    {
      key: "reliability",
      label: "Reliability",
      icon: TrendingUp,
      value: stats.reliability,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {statsConfig.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.key}
            className="bg-gradient-to-br from-primary to-primary/80 p-6 rounded-xl shadow-lg text-foreground hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="bg-foreground/20 p-3 rounded-lg">
                <Icon size={32} className="text-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium opacity-90">{stat.label}</p>
                <p className="text-2xl md:text-3xl font-bold mt-1">
                  {stat.value}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceStats;
