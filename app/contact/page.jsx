import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactInfo from "@/components/contact/ContactInfo";
import PageHero from "@/components/shared/PageHero";

const ContactPage = () => {
  return (
    <>
      <PageHero
        heading="Contact Us"
        description="We're here to assist you with all your logistics needs. Reach out
              to us for reliable and efficient freight forwarding services."
        image="/images/pexels-chanaka-906494.jpg"
      />

      {/* Contact Content Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-foreground">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Info */}
            <ContactInfo />

            {/* Contact Form */}
            <ContactFormSection />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
