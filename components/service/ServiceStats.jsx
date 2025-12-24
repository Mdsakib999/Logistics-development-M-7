const ServiceStats = () => {
  const stats = [
    { value: "99.9%", label: "Uptime Guaranteed" },
    { value: "24/7", label: "Support Coverage" },
    { value: "50+", label: "Warehouses" },
    { value: "1M+", label: "Parcels Handled" },
  ];

  return (
    <section className="py-20 bg-black border-y border-zinc-900">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group cursor-default">
              <div className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600 mb-3 group-hover:from-primary group-hover:to-zinc-800 transition-all duration-300">
                {stat.value}
              </div>
              <div className="text-zinc-500 font-medium uppercase tracking-widest text-xs md:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceStats;
