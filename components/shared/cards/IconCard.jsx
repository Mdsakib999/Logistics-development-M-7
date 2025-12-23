import H3 from "@/components/ui/H3";

const IconCard = ({ icon: Icon, title, subtitle }) => {
  return (
    <div className="bg-gradient-happy p-6 rounded-3xl border border-primary/10 hover-scale hover:shadow-prominent-lg transition-all duration-300">
      <div className="w-14 h-14 bg-gradient-vibrant rounded-full flex items-center justify-center mb-4 shadow-prominent">
        <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
      </div>
      <div>
        <H3 color="secondary" className="mb-2 text-xl">{title}</H3>
        <p className="text-muted text-sm font-medium">{subtitle}</p>
      </div>
    </div>
  );
};

export default IconCard;
