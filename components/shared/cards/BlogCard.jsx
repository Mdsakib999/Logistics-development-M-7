import ImageOverlay from "@/components/ui/ImageOverlay";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const BlogCard = ({src,title,subtitle,date}) => {
  return (
    <div className="rounded-xl overflow-hidden bg-foreground border-2 border-gray-300">
      <div className="w-full h-[250px] overflow-hidden relative">
        <ImageOverlay
          src={src}
          alt={title}
          title="Read Article"
          description={title}
          className="w-full h-full"
          width={400}
          height={250}
        />
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg text-sm font-medium text-secondary flex items-center gap-3 z-20">
          <h6>{date}</h6>
        </div>
      </div>
      <div className="p-[30px]">
        <h3 className="text-2xl font-bold leading-relaxed text-primary mb-3">
          {title}
        </h3>
        <p className="text-lg font-normal leading-[1.21] text-secondary/80">
          {subtitle}
        </p>
      </div>
     <Link href="/service" className="text-primary disabled flex gap-1 font-medium opacity-70 text-lg leading-[1.21] px-6 pb-6 hover:underline">
        Learn More <span> <ArrowUpRight /> </span>
      </Link>
    </div>
  );
};

export default BlogCard;
