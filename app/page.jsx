import AboutUs from "@/components/home/AboutUs";
import ChooseUs from "@/components/home/ChooseUs";
import ContactUs from "@/components/home/ContactUs";
import HomeHero from "@/components/home/HomeHero";
import HowItWorks from "@/components/home/HowItWorks";
import ServicesGrid from "@/components/home/ServicesGrid";
import Testomonial from "@/components/home/Testomonial";

const Home = () => {
  return (
    <>
      <HomeHero />
      <AboutUs />
      <ServicesGrid limit="3" />
      <ChooseUs />
      <HowItWorks />
      <ContactUs />
      <Testomonial />
      {/* <Blog /> */}
    </>
  );
};

export default Home;
