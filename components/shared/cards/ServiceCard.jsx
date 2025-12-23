import H3 from "@/components/ui/H3";
import ImageOverlay from "@/components/ui/ImageOverlay";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const ServiceCard = ({
  image,
  icon: Icon,
  info,
  title,
  description,
  link = "/service",
}) => {
  const truncatedDesc = description.length > 80 
    ? description.substring(0, 80) + "..." 
    : description;

  return (
    <div className="bg-foreground rounded-3xl overflow-hidden hover:shadow-prominent-xl transition-all duration-300 hover-scale group h-full flex flex-col relative border border-gray-100">
      {/* Service Image */}
      <Link
        href={link}
        className="relative w-full h-[260px] overflow-hidden block cursor-pointer flex-shrink-0 order-first"
      >
        <ImageOverlay
          src={image}
          alt={title}
          title={title}
          description="View Details"
          className="w-full h-full"
          width={400}
          height={300}
        />
        {/* Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full z-20 shadow-sm border border-white/50">
          <span className="text-sm font-bold text-secondary">{info}</span>
        </div>
      </Link>

      {/* Card Content */}
      <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
        <div>
           <div className="mb-3 flex items-center justify-between">
             <H3 color="secondary" className="text-2xl transition-colors group-hover:text-primary">{title}</H3>
             <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm transform translate-y-2 group-hover:translate-y-0">
                <ArrowUpRight size={20} className="text-primary" />
             </div>
           </div>
           
           <p className="text-muted text-base leading-relaxed">
             {truncatedDesc}
           </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
