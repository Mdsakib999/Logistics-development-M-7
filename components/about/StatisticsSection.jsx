
const StatisticsSection = () => {
  const stats = [
    { value: "200+", label: "Partnars" },
    { value: "1200+", label: "Packages Sent" },
    { value: "100+", label: "Professional Team" },
    { value: "4.5K", label: "Rating" },
  ];

  return (
    <section className="py-12 mt-32 mb-16 lg:py-16 bg-primary">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-2">
                {stat.value}
              </h3>
              <p className="text-foreground opacity-90 text-base lg:text-lg font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
