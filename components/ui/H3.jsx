const colorClasses = {
  foreground: "text-foreground",
  secondary: "text-secondary",
  primary: "text-primary",
  background: "text-background",
  accent: "text-accent",
};

const H3 = ({ children, color = "secondary", className = "" }) => {
  return (
    <h3 className={`text-xl sm:text-2xl lg:text-3xl font-semibold leading-snug ${colorClasses[color]} mb-3 ${className}`}>
      {children}
    </h3>
  );
};

export default H3;