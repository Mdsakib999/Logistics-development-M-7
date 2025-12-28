"use client";
import Badge from "@/components/ui/Badge";
import H2 from "@/components/ui/H2";
import ImageOverlay from "@/components/ui/ImageOverlay";
import {
    Activity,
    Box,
    ChevronLeft,
    ChevronRight,
    ClipboardCheck,
    Clock,
    Globe2,
    MapPin,
    PackageCheck,
    Truck
} from "lucide-react";
import { useState } from "react";

const workStages = [
    {
        id: 1,
        stage: "Stage 01",
        title: "Consultation & Planning",
        badge: "Initiation",
        description: "We begin by analyzing your logistics requirements, cargo specifications, and timeline constraints. Our experts design a custom shipping strategy optimized for cost and efficiency.",
        image: "/images/service-1.jpg",
        metrics: [
            { label: "Response Time", value: "< 2 Hrs", icon: Clock },
            { label: "Strategy", value: "Custom", icon: Activity }
        ]
    },
    {
        id: 2,
        stage: "Stage 02",
        title: "Route Optimization",
        badge: "Strategy",
        description: "Advanced algorithms determine the most efficient transit routes. We factor in weather patterns, port congestion, and carrier availability to ensure minimal delays.",
        image: "/images/service-2.jpg",
        metrics: [
            { label: "Routes Analysed", value: "50+", icon: MapPin },
            { label: "Efficiency", value: "99%", icon: Activity }
        ]
    },
    {
        id: 3,
        stage: "Stage 03",
        title: "Documentation & Customs",
        badge: "Compliance",
        description: "Our dedicated team handles all regulatory paperwork, customs declarations, and insurance documentation to ensure zero friction at border crossings.",
        image: "/images/service-3.jpg",
        metrics: [
            { label: "Compliance", value: "100%", icon: ClipboardCheck },
            { label: "Clearance", value: "24 Hrs", icon: Clock }
        ]
    },
    {
        id: 4,
        stage: "Stage 04",
        title: "Secure Transit",
        badge: "In Motion",
        description: "Your cargo is on the move with real-time tracking and constant monitoring. We maintain direct communication with carriers to proactively manage any exceptions.",
        image: "/images/project-1.jpg",
        metrics: [
            { label: "Tracking", value: "Real-time", icon: Globe2 },
            { label: "Carriers", value: "Verified", icon: Truck }
        ]
    },
    {
        id: 5,
        stage: "Stage 05",
        title: "Delivery & Handover",
        badge: "Completion",
        description: "We coordinate the final mile delivery and perform a thorough handover process. Proof of delivery is instantly verified and digital documentation is archived.",
        image: "/images/project-3.jpg",
        metrics: [
            { label: "Satisfaction", value: "Guaranteed", icon: PackageCheck },
            { label: "Handover", value: "Verified", icon: Box }
        ]
    }
];

const TeamSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % workStages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + workStages.length) % workStages.length
    );
  };

  const currentStage = workStages[currentSlide];

  return (
    <section className="py-24 bg-zinc-950 overflow-hidden relative border-b border-zinc-900">

      <div className="container-custom relative z-10">
        <div className="flex justify-between items-end mb-16">
            <div>
                 <Badge>WORKFLOW</Badge>
                 <H2 className="text-white mt-4">Operational Roadmap</H2>
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                className="w-14 h-14 border border-zinc-800 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-black hover:scale-110 transition-all duration-300 backdrop-blur-sm group"
              >
                <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
              </button>
              <button
                onClick={nextSlide}
                className="w-14 h-14 border border-zinc-800 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-black hover:scale-110 transition-all duration-300 backdrop-blur-sm group"
              >
                <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
        </div>

        <div className="relative">
            {/* Main Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Image Section - Glitch Effect Aesthetic */}
                <div className="lg:col-span-5 relative group cursor-pointer">
                    <div className="relative h-[500px] w-full rounded-none overflow-hidden border-2 border-zinc-800 group-hover:border-primary/50 transition-colors duration-300">
                        {/* Grayscale to Color on Hover */}
                        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <ImageOverlay
                            src={currentStage.image}
                            alt={currentStage.title}
                            title={currentStage.title}
                            description={currentStage.stage}
                            fill
                            className="w-full h-full object-cover filter grayscale-25 group-hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                    {/* Decorative Frame */}
                    <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-primary z-20"></div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-primary z-20"></div>
                </div>

                {/* Info Section */}
                <div className="lg:col-span-7 lg:pl-16">
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="inline-block px-3 py-1 bg-primary text-black font-bold text-xs tracking-widest uppercase">
                                {currentStage.stage}
                            </div>
                            <div className="inline-block px-3 py-1 border border-zinc-700 text-zinc-400 font-mono text-xs tracking-widest uppercase rounded-full">
                                {currentStage.badge}
                            </div>
                        </div>

                        <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
                            {currentStage.title}
                        </h3>
                        
                        <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl border-l-4 border-primary pl-6">
                             {currentStage.description}
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-zinc-800">
                             {currentStage.metrics.map((metric, idx) => (
                                 <div key={idx} className="flex items-center gap-4 group">
                                     <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                                         <metric.icon size={20} className="text-primary" />
                                     </div>
                                     <div>
                                         <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">{metric.label}</p>
                                         <p className="text-white font-bold font-mono">{metric.value}</p>
                                     </div>
                                 </div>
                             ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
