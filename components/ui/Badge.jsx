const Badge = ({ children }) => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
      <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
      <span className="text-sm sm:text-base font-bold uppercase tracking-wide text-primary">
        {children}
      </span>
    </div>
  );
};

export default Badge;
