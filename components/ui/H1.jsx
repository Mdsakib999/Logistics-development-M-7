const colorClasses = {
  foreground: "text-foreground",
  secondary: "text-secondary",
  primary: "text-primary",
  background: "text-background",
  accent: "text-accent",
};

const H1 = ({ children, color = "secondary", className = "" }) => {
  return (
    <h1 className={`text-4xl sm:text-5xl lg:text-6xl  font-bold leading-tight mb-6 tracking-tight ${colorClasses[color]} ${className}`}>
      {children}
    </h1>
  );
};

export default H1;