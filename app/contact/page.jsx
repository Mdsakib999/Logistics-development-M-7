import ContactForm from "@/components/contact/ContactForm";
import ContactGrid from "@/components/contact/ContactGrid";
import ContactHero from "@/components/contact/ContactHero";
import ContactMap from "@/components/contact/ContactMap";

const ContactPage = () => {
  return (
    <>
      <ContactHero
        heading="Contact Us"
        description="We're here to assist you with all your logistics needs. Reach out to us for reliable and efficient freight forwarding services."
        image="/images/pexels-chanaka-906494.jpg"
      />
      <ContactGrid />
      <ContactForm />
      <ContactMap />
    </>
  );
};

export default ContactPage;
