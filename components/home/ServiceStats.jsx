import H2 from "@/components/ui/H2";
import ImageOverlay from "@/components/ui/ImageOverlay";
import P from "@/components/ui/P";
import { stats } from "@/public/data";

const ServiceStats = () => {
  return (
    <section className="py-16 lg:py-20 ">
      <div className="container-custom">
        <div className="relative">
          {/* Left Side - Content with Stats */}
          <div className="bg-primary w-full lg:w-3/4 rounded-3xl p-8 md:p-12 lg:p-14 text-white  overflow-hidden">
            <div className="relative z-10">
              {/* Badge */}
              <div className="flex items-center gap-2 mb-[11px]">
                <div className="w-1 h-[33px] bg-secondary"></div>
                <span className="text-lg uppercase font-semibold leading-[1.21] text-foreground">
                  Why Choose Us
                </span>
              </div>

              {/* Heading */}
              <H2>Ensuring Seamless Cargo Delivery</H2>

              {/* Description */}
              <P color="foreground">
                Conveniently impact platforms for business systems, climate
                functional army comprehensive before diverse existing
                procedures, passionately integrate e-worldwide human capital
                whereas leading-edge prepared grow tactical e-services.
              </P>
              {/* Stats Progress Bars */}
              <div className="space-y-6 max-w-3xl mt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="relative">
                    {/* Label and Percentage */}
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm md:text-base font-medium">
                        {stat.label}
                      </span>
                      <div className="relative">
                        <span className="text-lg md:text-xl font-bold bg-background text-secondary px-3 py-1 rounded-md">
                          {stat.percentage}
                        </span>
                        {/* Arrow pointing down */}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-yellow-400"></div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-white rounded-full transition-all duration-1000 ease-out"
                        style={{ width: stat.percentage }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Right Side - Image */}
          <div className="absolute top-16 right-10 w-1/4 h-90 hidden lg:block  rounded-3xl overflow-hidden">
            <ImageOverlay
              src="/images/testomonial-3.jpg"
              alt="Service Stats"
              title="Service Excellence"
              description="Seamless Delivery"
              width={400}
              height={800}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceStats;
