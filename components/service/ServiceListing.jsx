"use client";
import ImageOverlay from "@/components/ui/ImageOverlay";
import { services } from "@/public/data";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const ServiceListing = () => {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link 
                href={`/service/${service.id}`} 
                key={service.id}
                className="group relative bg-black border border-zinc-800 rounded-3xl overflow-hidden hover:border-primary/50 transition-colors duration-500"
            >
                {/* Top Image Section */}
                <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent z-10"></div>
                     <ImageOverlay
                        src={service.image || "/images/pexels-pixabay-209251.jpg"}
                        alt={service.title}
                        title={service.title}
                        description="View Details"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
                        width={600}
                        height={300}
                    />
                     {/* Floating Action */}
                    <div className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                         <ArrowUpRight className="w-5 h-5" />
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed mb-6 line-clamp-2">
                        {service.description}
                    </p>
                    <span className="text-sm font-bold text-primary uppercase tracking-wider group-hover:underline decoration-primary underline-offset-4">
                        Discover Service
                    </span>
                </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceListing;
