import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProvidersSection from "@/components/ProvidersSection";
import ServicesSection from "@/components/ServicesSection";
import DocumentsSection from "@/components/DocumentsSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProvidersSection />
        <ServicesSection />
        <DocumentsSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
