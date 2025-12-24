import Button from "@/components/ui/Button";
import { Mail, Sparkles } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20 md:py-28 bg-black">
      <div className="container-custom">
        <div className="bg-gradient-happy rounded-[40px] p-8 md:p-16 shadow-prominent-xl flex flex-col items-center text-center relative overflow-hidden">
          
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -ml-20 -mb-20"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background shadow-sm mb-6 border border-gray-100">
              <Sparkles size={16} className="text-secondary" />
              <span className="text-sm font-bold text-foreground uppercase tracking-wider">Weekly Insights</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
              Join our network of <br/>
              <span className="text-primary">Global Logistics Leaders</span>
            </h2>
            
            <p className="text-muted text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Get the latest updates on supply chain trends, route optimizations, and exclusive industry reports delivered to your inbox.
            </p>

            <form className="flex flex-col sm:flex-row gap-3 w-full max-w-lg mx-auto">
              <div className="flex-1 relative">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full h-14 pl-12 pr-6 rounded-full bg-white border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-gray-400 text-secondary"
                />
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted w-5 h-5" />
              </div>
              <Button type="main" className="h-14 px-8 rounded-full text-lg shadow-prominent hover:shadow-prominent-lg shrink-0">
                Subscribe
              </Button>
            </form>
            
            <p className="mt-6 text-sm text-muted font-medium">
              Join 10,000+ subscribers. No spam, ever.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Newsletter;
