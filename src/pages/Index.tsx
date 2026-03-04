import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import CourseModules from "@/components/landing/CourseModules";
import CourseBenefits from "@/components/landing/CourseBenefits";
import GallerySection from "@/components/landing/GallerySection";
import CTASection from "@/components/landing/CTASection";
import FAQSection from "@/components/landing/FAQSection";
import SocialSection from "@/components/landing/SocialSection";
import ContactSection from "@/components/landing/ContactSection";
import MapSection from "@/components/landing/MapSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CourseModules />
      <CourseBenefits />
      <GallerySection />
      <CTASection />
      <FAQSection />
      <SocialSection />
      <ContactSection />
      <MapSection />
      <Footer />
    </div>
  );
};

export default Index;
