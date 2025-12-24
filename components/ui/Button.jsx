import Link from "next/link";

export default function Button({ children, href, type = "primary", className = "" }) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 ease-in-out px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg hover:shadow-prominent-lg transform hover:scale-105";
  
  const typeStyles = {
    primary: "bg-primary text-white hover:bg-primary/90 shadow-prominent",
    secondary: "bg-secondary text-accent hover:bg-secondary/90 shadow-prominent",
    outline: "bg-transparent text-secondary border-2 border-secondary hover:bg-secondary hover:text-accent",
    accent: "bg-accent text-background hover:bg-accent/90 shadow-prominent",
  };

  return (
    <Link
      href={href || "#"}
      className={`${baseStyles} ${typeStyles[type] || typeStyles.primary} ${className}`}
    >
      {children}
    </Link>
  );
}
