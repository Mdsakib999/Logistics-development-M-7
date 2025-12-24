import Badge from "@/components/ui/Badge";
import H2 from "@/components/ui/H2";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO",
    company: "TechFlow Inc",
    logo: "TF",
    image: "/images/testimonial-1.png",
    rating: 5,
    text: "Freight Forward transformed our supply chain. On-time delivery every single time, with exceptional tracking and support.",
  },
  {
    name: "Michael Rodriguez",
    role: "Operations Director",
    company: "GlobalRetail",
    logo: "GR",
    image: "/images/testimonial-2.png",
    rating: 5,
    text: "We've reduced shipping costs by 30% while improving delivery speed. The team's expertise is unmatched in the industry.",
  },
];

// Simulated company logos
const companies = [
  { name: "TechFlow", abbr: "TF" },
  { name: "GlobalRetail", abbr: "GR" },
  { name: "FastShip Co", abbr: "FS" },
  { name: "LogiPro", abbr: "LP" },
  { name: "CargoMax", abbr: "CM" },
  { name: "SwiftMove", abbr: "SM" },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-zinc-800 hover:shadow-prominent-xl transition-all duration-300 rounded-3xl p-8 border border-zinc-700 hover-scale relative overflow-hidden">
    {/* Company Logo Badge */}
    <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
      <span className="text-primary font-bold text-sm">{testimonial.logo}</span>
    </div>

    {/* Star Rating */}
    <div className="flex gap-1 mb-6">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star
          key={i}
          fill="#FBBF24"
          stroke="#FBBF24"
          strokeWidth={1.5}
          size={20}
        />
      ))}
    </div>

    {/* Testimonial Text */}
    <Quote className="w-10 h-10 text-primary/20 mb-4" />
    <p className="text-secondary text-lg leading-relaxed mb-6 font-medium">
      {testimonial.text}
    </p>

    {/* Author Info */}
    <div className="flex items-center gap-4">
      <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-primary/20">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          className="w-full h-full object-cover"
          width={56}
          height={56}
        />
      </div>
      <div>
        <h4 className="text-lg font-bold leading-tight text-secondary">
          {testimonial.name}
        </h4>
        <p className="text-sm font-medium text-muted">
          {testimonial.role}, {testimonial.company}
        </p>
      </div>
    </div>
  </div>
);

const Testomonial = () => {
  return (
    <section className="py-20 md:py-28 bg-black">
      <div className="container-custom">
        {/* Logo Wall */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <Badge>Trusted Partners</Badge>
            <H2 color="secondary" className="text-4xl sm:text-5xl">
              Trusted by 50+ Businesses
            </H2>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testomonial;
