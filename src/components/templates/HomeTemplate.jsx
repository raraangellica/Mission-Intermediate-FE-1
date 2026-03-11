import Header from "../organisms/HeaderHome";
import HeroSection from "../organisms/HeroSection";
import ContinueSection, {
  Section2,
  Section3,
  Section4,
} from "../organisms/ContinueSection";
import Footer from "../organisms/Footer";

const HomeTemplate = () => {
  return (
    <div className="bg-[#121212] min-h-screen text-white">
      <Header />
      <HeroSection />
      <ContinueSection />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
};

export default HomeTemplate;
