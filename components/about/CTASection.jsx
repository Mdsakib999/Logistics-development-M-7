import Link from "next/link";

const CTASection = () => {
  return (
    <section
      className="py-16 lg:py-20 my-16 relative bg-primary z-20"
      style={{
        backgroundImage:
          'url("/images/scene-with-photorealistic-logistics-operations-proceedings.jpg")',
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute w-full h-full inset-0 bg-black/60 -z-10"></div>
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex justify-center items-center gap-2 mb-[11px]">
            <div className="w-1 h-[33px]  z-10  bg-primary"></div>
            <span className="text-lg  z-10 uppercase font-semibold leading-[1.21] text-foreground">
              READY TO MOVE?
            </span>
          </div>
          <div className="">
            <h2
              className={`text-[32px] max-w-lg mx-auto font-bold leading-[1.22] tracking-[0.02em] mb-4 text-foreground`}
            >
              Are Looking for the Best Quality Transport Services?
            </h2>
          </div>
          <div className="mx-auto max-w-lg">
            <p
              className={`text-md z-10 max-w-2xl font-normal leading-[1.39] tracking-[0.06em] text-white mb-[19px]`}
            >
              Experience seamless logistics solutions tailored to your business
              needs. Let&apos;s get your freight moving today.
            </p>
          </div>
          <div className="mt-8 lg:mt-12 flex z-50  justify-center gap-4 flex-wrap">
            <Link
              href="/service"
              className={`flex cursor-pointer text-secondary hover:bg-primary hover:text-foreground bg-foreground  items-center ease-in-out duration-300 transition-all text-md justify-center w-max sm:h-12 rounded-md  py-2 px-4 sm:py-5 sm:px-8`}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
