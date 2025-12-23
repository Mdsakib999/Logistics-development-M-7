import { contactDetails, socialLinks } from "@/public/data";
import Badge from "@/components/ui/Badge";
import H2 from "@/components/ui/H2";
import P from "@/components/ui/P";
import Link from "next/link";

const ContactInfo = () => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-[20px]">
      {/* Header */}
      <div className="mb-6">
        <Badge>Contact Us</Badge>
        <H2 color="primary">Let&apos;s Talk!</H2>
        <P>
          Freight Forward is a leading name in the logistics industry, we ensure
          your shipments are always on time and secure.
        </P>
      </div>

      {/* Contact Details */}
      <div className="space-y-6 my-12">
        {contactDetails.map((detail, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary border-2 border-primary rounded-full flex items-center justify-center shrink-0">
              <detail.icon className="w-6 h-6 text-foreground" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-secondary mb-1">
                {detail.label}
              </h4>
              <p className="text-sm text-secondary/70">{detail.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Social Media Links */}
      <div className="flex gap-4">
        {socialLinks.map((social, index) => (
          <Link
            key={index}
            href={social.href}
            aria-label={social.label}
            className="w-10 h-10 group bg-foreground border border-primary rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
          >
            <social.icon className="w-5 h-5 text-primary group-hover:text-white" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
