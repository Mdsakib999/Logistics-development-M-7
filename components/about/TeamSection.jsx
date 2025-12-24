"use client";
import Badge from "@/components/ui/Badge";
import H2 from "@/components/ui/H2";
import ImageOverlay from "@/components/ui/ImageOverlay";
import { teamMembers } from "@/public/data";
import {
    ChevronLeft,
    ChevronRight,
    Linkedin,
    Twitter
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const TeamSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length
    );
  };

  const currentMember = teamMembers[currentSlide];

  return (
    <section className="py-24 bg-zinc-950 overflow-hidden relative border-b border-zinc-900">

      <div className="container-custom relative z-10">
        <div className="flex justify-between items-end mb-16">
            <div>
                 <Badge>THE SQUAD</Badge>
                 <H2 className="text-white mt-4">Leadership Team</H2>
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                className="w-14 h-14 border border-zinc-800 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-black hover:scale-110 transition-all duration-300 backdrop-blur-sm"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="w-14 h-14 border border-zinc-800 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-black hover:scale-110 transition-all duration-300 backdrop-blur-sm"
              >
                <ChevronRight size={24} />
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
                            src={currentMember.image}
                            alt={currentMember.name}
                            title={currentMember.name}
                            description={currentMember.role}
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
                    <div className="space-y-6">
                        <div className="inline-block px-3 py-1 bg-primary text-black font-bold text-xs tracking-widest uppercase">
                            {currentMember.role}
                        </div>
                        <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
                            {currentMember.name}
                        </h3>
                        <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl border-l-4 border-primary pl-6">
                             {currentMember.description}
                        </p>
                        
                        <div className="flex gap-6 pt-8 border-t border-zinc-800">
                             <Link href={currentMember?.social.linkedin || "#"} className="text-gray-500 hover:text-primary transition-colors flex items-center gap-2 group">
                                <Linkedin size={24} />
                             </Link>
                             <Link href={currentMember?.social.twitter || "#"} className="text-gray-500 hover:text-primary transition-colors flex items-center gap-2 group">
                                <Twitter size={24} />
                             </Link>
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
