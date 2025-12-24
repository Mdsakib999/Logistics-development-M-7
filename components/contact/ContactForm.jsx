"use client";
import Button from "@/components/ui/Button";

const ContactForm = () => {
  return (
    <section className="py-24 bg-black relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Content */}
          <div className="flex flex-col justify-between">
            <div>
                 <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">Let's Connect</span>
                 <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
                    HAVE A PROJECT <br />
                    IN <span className="text-zinc-800">MIND?</span>
                 </h2>
                 <p className="text-zinc-400 text-lg max-w-md leading-relaxed">
                    Our team of logistics experts is ready to help you optimize your supply chain. Send us a message and we'll get back to you within 24 hours.
                 </p>
            </div>
            
            <div className="hidden lg:block">
                 <div className="h-px w-full bg-zinc-800 mb-8"></div>
                 <div className="flex gap-8 text-zinc-500 font-mono text-xs uppercase cursor-pointer">
                    <span className="hover:text-primary transition-colors">Privacy Policy</span>
                    <span className="hover:text-primary transition-colors">Terms of Service</span>
                 </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-zinc-900 border border-zinc-800 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden">
             
             {/* Decorative Blur */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -mr-20 -mt-20"></div>

             <form className="relative z-10 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-mono text-zinc-500 uppercase ml-2">Your Name</label>
                        <input type="text" className="w-full bg-black border-b border-zinc-800 p-4 text-white focus:outline-none focus:border-primary transition-colors rounded-t-lg" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-mono text-zinc-500 uppercase ml-2">Email Address</label>
                        <input type="email" className="w-full bg-black border-b border-zinc-800 p-4 text-white focus:outline-none focus:border-primary transition-colors rounded-t-lg" placeholder="john@example.com" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-mono text-zinc-500 uppercase ml-2">Subject</label>
                    <select className="w-full bg-black border-b border-zinc-800 p-4 text-white focus:outline-none focus:border-primary transition-colors rounded-t-lg">
                        <option>General Inquiry</option>
                        <option>Freight Quote</option>
                        <option>Partnership</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-mono text-zinc-500 uppercase ml-2">Message</label>
                    <textarea rows="4" className="w-full bg-black border-b border-zinc-800 p-4 text-white focus:outline-none focus:border-primary transition-colors rounded-t-lg resize-none" placeholder="Tell us about your needs..."></textarea>
                </div>

                <Button type="primary" className="w-full justify-center mt-4">
                    Send Message
                </Button>
             </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
