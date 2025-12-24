import { Mail, MapPin, Phone } from "lucide-react";

const ContactGrid = () => {
  const contactDetails = [
    {
      icon: Phone,
      title: "Call Us",
      info: "+1 (555) 123-4567",
      subInfo: "Mon-Fri from 8am to 5pm",
      delay: "0"
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "support@freightforward.com",
      subInfo: "Online support 24/7",
      delay: "100"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "123 Logistics Way, NY 10001",
      subInfo: "Global Headquarters",
      delay: "200"
    }
  ];

  return (
    <section className="py-20 bg-zinc-950 -mt-20 relative z-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactDetails.map((item, index) => (
            <div 
                key={index} 
                className="bg-black border border-zinc-900 p-8 rounded-3xl flex flex-col items-center text-center group hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 shadow-xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                <item.icon size={32} className="text-primary group-hover:text-black transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-primary font-mono text-lg mb-1">{item.info}</p>
              <p className="text-zinc-500 text-sm">{item.subInfo}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactGrid;
