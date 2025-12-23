import Button from "@/components/ui/Button";
import Image from "next/image";

const ContactUs = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] overflow-hidden my-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full min-h-[600px] md:min-h-[700px]">
        {/* Left Side - Solid Gradient Background with CTA */}
        <div className="relative bg-gradient-vibrant flex items-center justify-center p-8 md:p-16 lg:p-20">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Ready to Ship?
            </h2>
            <p className="text-xl sm:text-2xl text-white/90 leading-relaxed mb-10">
              Get your instant quote and start shipping today with confidence.
            </p>
            <Button type="secondary" href="/contact" className="text-lg px-10 py-5">
              Get Quote Now
            </Button>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
        </div>

        {/* Right Side - Full Bleed Image */}
        <div className="relative min-h-[400px] lg:min-h-full">
          <Image
            src="/images/contact-1.jpg"
            alt="Logistics operations"
            fill
            className="object-cover"
          />
          {/* Gradient Overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
