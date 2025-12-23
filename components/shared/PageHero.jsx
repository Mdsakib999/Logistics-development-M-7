import H1 from "@/components/ui/H1";
import Image from "next/image";
const Hero = ({ heading, description, image }) => {
  return (
    <section className="relative bg-primary/70 py-16 lg:py-0 overflow-hidden">
      {/* Background image only on small devices */}
      <div className="absolute inset-0 opacity-30 bg-[url('/images/bernd-dittrich-eCc7FjMoR74-unsplash.jpg')] bg-cover bg-center lg:bg-none"></div>

      {/* Overlay */}
      <div className="absolute inset-0  bg-secondary/50 lg:bg-transparent"></div>
      <div className="px-4 lg:px-0">
        <div className="flex relative flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="absolute hidden lg:block w-3/5 h-full z-20 bg-gradient-happy"></div>
          <div className="flex-1 ml-0 lg:ml-24 z-20">
            <H1>{heading}</H1>
            <p
              className={`text-md z-10 max-w-2xl font-semibold leading-[1.39] tracking-[0.06em] text-balance text-gray-500 mb-[19px]`}
            >
              {description}
            </p>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative w-full h-[400px]">
            <Image
              src={image}
              alt="Container ship at port"
              fill
              className="object-cover  opacity-50"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
