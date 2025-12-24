import { socialLinks } from "@/public/data";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Services", href: "/service" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Home", href: "/" },
  ];

  const legals = [
    { name: "Privacy Policy", href: "/about/policy" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ];

  return (
    <footer className="bg-black pt-20 pb-12 relative overflow-hidden">
      <div className="container-custom relative z-10">
        
        {/* Top Section: Navigation & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20 border-b border-white/10 pb-10">
          
          {/* Internal Links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-white/80 hover:text-accent transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-secondary hover:text-accent transition-all duration-300 group"
                >
                  <Icon size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Massive Brand Typographic Hero */}
        <div className="mb-20 select-none pointer-events-none">
          <h1 className="text-[12vw] leading-[0.8] font-bold text-white/5 tracking-tighter text-center">
            FREIGHT
          </h1>
        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40 font-medium">
          <div>
            &copy; {currentYear} Freight Forward. All rights reserved.
          </div>
          <div className="flex gap-6">
            {legals.map((item) => (
              <a key={item.name} href={item.href} className="hover:text-white transition-colors">
                {item.name}
              </a>
            ))}
          </div>
        </div>

      </div>
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-primary/10 to-transparent pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
