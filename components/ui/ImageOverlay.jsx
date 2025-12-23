import { cn } from "@/lib/utils";
import Image from "next/image";

const ImageOverlay = ({
  src,
  alt,
  width,
  height,
  className,
  imageClassName,
  title,
  description,
  priority = false,
  fill = false,
  sizes,
}) => {
  return (
    <div className={cn("relative group overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt || title || "Image"}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        fill={fill}
        sizes={sizes}
        priority={priority}
        className={cn(
          "w-full h-full object-cover transition-all duration-500",
          imageClassName
        )}
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4 z-10">
        {title && (
          <h3 className="text-white font-bold text-lg md:text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-white text-sm md:text-base mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default ImageOverlay;
