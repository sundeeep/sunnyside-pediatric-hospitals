import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProvidersSection from "@/components/ProvidersSection";
import ServicesSection from "@/components/ServicesSection";
import OfficeHoursSection from "@/components/OfficeHoursSection";
import LocationSection from "@/components/LocationSection";
import DocumentsSection from "@/components/DocumentsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <ProvidersSection />
        <ServicesSection />
        <OfficeHoursSection />
        <LocationSection />
        <DocumentsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
