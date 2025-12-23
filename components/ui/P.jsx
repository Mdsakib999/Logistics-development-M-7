const colorClasses = {
  foreground: "text-foreground",
  secondary: "text-secondary",
  primary: "text-primary",
  background: "text-background",
  muted: "text-muted",
};

const P = ({ children, color = "secondary", className = "" }) => {
  return (
    <p className={`text-base sm:text-lg font-normal leading-relaxed tracking-normal ${colorClasses[color]} mb-4 opacity-90 ${className}`}>
      {children}
    </p>
  );
};

export default P;