"use client";
import Badge from "@/components/ui/Badge";
import H2 from "@/components/ui/H2";
import H3 from "@/components/ui/H3";
import ImageOverlay from "@/components/ui/ImageOverlay";
import P from "@/components/ui/P";
import { teamMembers } from "@/public/data";
import {
    ChevronLeft,
    ChevronRight,
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
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
    <section className="py-16 lg:py-20 bg-foreground">
      <div className="container-custom">
        <div className="text-center max-w-sm mx-auto flex flex-col items-center mb-12">
          <Badge>
            <span className="">OUR PEOPLE</span>
          </Badge>
          <H2 color="primary">Meet Our Logistics Dream Team</H2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center rounded-2xl  bg-[#f1f1f1] relative md:p-4 border-2 border-gray-200 lg:p-0">
            {/* Left - Team Member Info */}
            <div className="flex-1 px-8 py-8">
              <H3 color="primary">{currentMember.name}</H3>
              <p className="text-secondary font-semibold mb-4">
                {currentMember.role}
              </p>
              <P color="secondary">{currentMember.description}</P>

              {/* Social Links */}
              <div className="flex gap-[15px] mt-6">
                <Link
                  href={currentMember?.social.facebook}
                  className="block group"
                >
                  <Facebook className="w-12 h-12 text-primary p-3 bg-foreground rounded-[10px] transition-all duration-300 ease-in-out group-hover:bg-white group-hover:text-primary group-hover:scale-110" />
                </Link>
                <Link
                  href={currentMember?.social.twitter}
                  className="block group"
                >
                  <Twitter className="w-12 h-12 text-primary p-3 bg-foreground rounded-[10px] transition-all duration-300 ease-in-out group-hover:bg-white group-hover:text-primary group-hover:scale-110" />
                </Link>
                <Link
                  href={currentMember?.social.linkedin}
                  className="block group"
                >
                  <Linkedin className="w-12 h-12 text-primary p-3 bg-foreground rounded-[10px] transition-all duration-300 ease-in-out group-hover:bg-white group-hover:text-primary group-hover:scale-110" />
                </Link>
                <Link
                  href={currentMember?.social.instagram}
                  className="block group"
                >
                  <Instagram className="w-12 h-12 text-primary p-3 bg-foreground rounded-[10px] transition-all duration-300 ease-in-out group-hover:bg-white group-hover:text-primary group-hover:scale-110" />
                </Link>
              </div>
            </div>

            {/* Right - Team Member Photo */}
            <div className="">
              <div className="relative mb-8 md:mb-0 w-64 h-80 md:w-80 md:h-96 rounded-xl lg:rounded-r-xl overflow-hidden">
                <ImageOverlay
                  src={currentMember.image}
                  alt={currentMember.name}
                  title={currentMember.name}
                  description={currentMember.role}
                  fill
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute bottom-92 sm:top-8 right-10 md:right-90 flex gap-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-colors duration-300"
                aria-label="Previous team member"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-colors duration-300"
                aria-label="Next team member"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
