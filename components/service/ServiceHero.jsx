import H1 from "@/components/ui/H1";
import { ChevronRight, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ServiceHero = ({ service }) => {
  const Icon = service.icon;

  return (
    <section className="relative bg-primary/70 py-16 lg:py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 to-secondary/80"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-sm mb-6 text-gray-300">
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-primary transition-colors"
          >
            <Home size={16} />
            <span>Home</span>
          </Link>
          <ChevronRight size={16} />
          <Link
            href="/service"
            className="hover:text-primary transition-colors"
          >
            Services
          </Link>
          <ChevronRight size={16} />
          <span className="text-foreground">{service.title}</span>
        </nav>

        {/* Hero Content */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          {/* Icon Badge */}
          <div className="bg-primary p-6 rounded-2xl shadow-lg">
            <Icon size={48} className="text-foreground" />
          </div>

          {/* Title and Info */}
          <div className="flex-1">
            <H1 color="primary">{service.title}</H1>
            <p className="text-lg md:text-xl text-gray-300 mt-2 font-medium">
              {service.info}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
