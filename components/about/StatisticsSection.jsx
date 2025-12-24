const StatisticsSection = () => {
  const stats = [
    { value: "15K+", label: "Happy Clients", symbol: "+" },
    { value: "98%", label: "On-Time Delivery", symbol: "%" },
    { value: "150+", label: "Countries Served", symbol: "+" },
    { value: "10M+", label: "Parcels Shipped", symbol: "+" },
  ];

  return (
    <section className="py-24 bg-black border-y border-zinc-900">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group cursor-default">
              <div className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-primary to-zinc-700 mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="h-0.5 w-12 bg-primary mx-auto mb-4 opacity-50 group-hover:w-24 transition-all duration-500"></div>
              <div className="text-gray-400 font-medium uppercase tracking-widest text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
