import Badge from "@/components/ui/Badge";
import H2 from "@/components/ui/H2";
import ImageOverlay from "@/components/ui/ImageOverlay";
import P from "@/components/ui/P";
import { Award, LaptopMinimal, Store } from "lucide-react";

const DigitalLogisticsSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-foreground">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left - Image Grid */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 gap-4">
              {/* Large Image */}
              <div className="col-span-2 lg:col-span-1 lg:row-span-2">
                <ImageOverlay
                  src="/images/pexels-pixabay-209251.jpg"
                  alt="Industrial warehouse"
                  title="Industrial Warehouse"
                  description="Large Scale Storage"
                  width={400}
                  height={500}
                  className="w-full h-[150px] sm:h-[300px] lg:h-full rounded-lg"
                />
              </div>

              {/* Top Right Image */}
              <div className="col-span-1">
                <ImageOverlay
                  src="/images/blog-2.png"
                  alt="Warehouse interior"
                  title="Warehouse Interior"
                  description="Organized Inventory"
                  width={300}
                  height={240}
                  className="w-full h-full rounded-lg"
                />
              </div>

              {/* Bottom Right - Red Card */}
              <div className="col-span-1 bg-primary rounded-lg p-6 flex items-center justify-center">
                <div className="text-center">
                  <Award
                    className="w-12 h-12 text-foreground mx-auto mb-3"
                    strokeWidth={1.5}
                  />
                  <p className="text-foreground font-semibold text-lg">
                    High Quality
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex-1">
            <div className="mx-4 lg:mx-0">
              <Badge>FREIGHT AND CARRIER</Badge>
              <H2 color="primary">
                Digital Logistics Solution For Your Business
              </H2>
              <P color="secondary">
                At Freight Forward, we understand that in today&apos;s fast-paced
                world, efficiency and reliability are paramount. Our
                comprehensive logistics solutions are designed to streamline
                your supply chain, reduce costs, and ensure timely delivery of
                your goods. Whether you&apos;re a small business or a large
                corporation, we have the expertise and resources to meet your
                unique needs.
              </P>
            </div>

            {/* Stats */}
            <div className="flex mx-4 gap-4 flex-wrap sm:flex-nowrap">
              <div className="flex gap-6 my-2 flex-wrap border rounded-lg shadow-lg border-primary p-6 w-full sm:w-max">
                <div className="flex gap-3 items-center justify-center">
                  <LaptopMinimal size={28} />
                  <h5 className="text-xl font-semibold text-secondary">
                    Using New Technology
                  </h5>
                </div>
              </div>
              <div className="flex gap-6 my-2 flex-wrap border rounded-lg shadow-lg border-primary p-6 w-full sm:w-max">
                <div className="flex gap-3 items-center justify-center">
                  <Store size={28} />
                  <h5 className="text-xl font-semibold text-secondary">
                    Wider Market Reach
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalLogisticsSection;
