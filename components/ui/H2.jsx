const colorClasses = {
  foreground: "text-foreground",
  secondary: "text-secondary",
  primary: "text-primary",
  background: "text-background",
  accent: "text-accent",
};

const H2 = ({ children, color = "secondary", className = "" }) => {
  return (
    <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight ${colorClasses[color]} mb-4 ${className}`}>
      {children}
    </h2>
  );
};

export default H2;