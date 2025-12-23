import H2 from "@/components/ui/H2";
import ImageOverlay from "@/components/ui/ImageOverlay";
import P from "@/components/ui/P";

const LogisticsStrategySection = () => {
  return (
    <section className="pb-16 pt-32 lg:py-20 bg-foreground">
      <div className="container-custom">
        {/* left side div */}
        <div className="bg-primary relative z-1 w-full lg:w-3/4 rounded-2xl p-12 h-max">
          <div className="flex items-center gap-2 mb-[11px]">
            <div className="w-1 h-[33px] bg-secondary"></div>
            <span className="text-lg uppercase font-semibold leading-[1.21] text-foreground">
              Our Strategy
            </span>
          </div>
          <div className="lg:max-w-md">
                      <H2 color="foreground">
            Logistics Strategy Tailored for Your Success
          </H2>
          </div>
          <div className="">
            <div className="flex items-center gap-4 mt-8">
              <div className="w-4 h-4 bg-foreground"></div>
              <h5 className="text-white font-semibold text-xl">Our Vision</h5>
            </div>
            <div className="pl-8 pt-2 lg:max-w-md">
              <P color="foreground">
                Our vision is to be the leading logistics provider recognized
                for our innovative solutions, operational excellence, and
                unwavering commitment to customer satisfaction.
              </P>
            </div>
          </div>
          {/* second div for our mission */}
          <div className="">
            <div className="flex items-center gap-4 mt-8">
              <div className="w-4 h-4 bg-foreground"></div>
              <h5 className="text-white font-semibold text-xl">Our Mission</h5>
            </div>
            <div className="pl-8 pt-2 lg:max-w-md">
              <P color="foreground">
                Our mission is to deliver exceptional logistics services that
                exceed our client&apos;s expectations through cutting-edge
                technology, dedicated customer service, and a commitment to
                sustainability.
              </P>
            </div>
          </div>
          <div className="absolute h-40 w-70 rounded-2xl border-4 border-background bg-white -top-32 sm:-top-24 lg:top-12 right-6 lg:-right-40 shadow-lg overflow-hidden">
            <ImageOverlay
              src="/images/pexels-alexander-bobrov-390088-3278012.jpg"
              alt="Logistics Strategy"
              title="Logistics Strategy"
              description="Tailored for Success"
              width={320}
              height={120}
              className="h-full w-full rounded-2xl"
            />
          </div>
          <div className="absolute shadow-lg hidden lg:block h-auto w-96 bottom-4 rounded-2xl border-white border -right-54">
            <ImageOverlay
              src="/images/global-shipping-international-logistics-illustration.jpg"
              alt="Logistics Illustration"
              title="Global Shipping"
              description="International Logistics"
              className="w-full h-full rounded-2xl"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogisticsStrategySection;
