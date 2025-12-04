import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceFlipCard from "@/components/ServiceFlipCard";
import ServiceCardPremium from "@/components/ServiceCardPremium";
import primaryCareImage from "@/assets/services/primary-care.png";
import newbornCareImage from "@/assets/services/newborn-care.png";
import wellChecksImage from "@/assets/services/well-checks.png";
import sickVisitsImage from "@/assets/services/sick-visits.png";
import behavioralIssuesImage from "@/assets/services/behavioral-issues.png";
import immunizationsImage from "@/assets/services/immunizations.png";
import sportsPhysicalsImage from "@/assets/services/sports-physicals.png";
import chronicDiseaseCareImage from "@/assets/services/chronic-disease-care.png";
import developmentalScreeningImage from "@/assets/services/developmental-screening.png";

// Premium services with full content
const premiumServices = [
  {
    title: "Primary Care",
    tagline: "Comprehensive care for growing kids.",
    description: "We provide routine and preventive health care for all children. Growth, development and wellness are monitored in each visit. We build a long-term health partnership between family and pediatrician.",
    thumbnail: primaryCareImage,
  },
  {
    title: "Newborn Care",
    tagline: "Gentle care from day one.",
    description: "Our newborn care includes assessments of growth, feeding, reflexes and general health. We support parents with guidance on feeding, sleep, and early developmental milestones. Your baby's first days get careful attention and warmth.",
    thumbnail: newbornCareImage,
  },
  {
    title: "Well Checks",
    tagline: "Check-ups for healthy growth.",
    description: "Well-check visits track your child's physical growth, hearing, vision and developmental milestones. Regular wellness exams help catch issues early and reinforce healthy habits. Immunizations and preventive guidance are part of each visit.",
    thumbnail: wellChecksImage,
  },
  {
    title: "Sick Visits",
    tagline: "Quick care when illness strikes.",
    description: "For fevers, colds, infections or minor injuries, we provide prompt evaluation and treatment. Our team acts fast to relieve symptoms and prevent complications. Parents get clear advice for home care and follow-up.",
    thumbnail: sickVisitsImage,
  },
  {
    title: "Behavioral Issues",
    tagline: "Support for emotional growth.",
    description: "We help assess and manage emotional or behavioral concerns like anxiety, attention issues, or mood changes. Early support and guidance help children navigate challenges. We partner with families for wellbeing and development.",
    thumbnail: behavioralIssuesImage,
  },
  {
    title: "Immunizations",
    tagline: "Protection through vaccines.",
    description: "We follow recommended vaccination schedules to protect children from serious diseases. Safe administration and clear guidance help families stay on track. Immunizations also help build community health and prevention.",
    thumbnail: immunizationsImage,
  },
  {
    title: "Sports Physicals",
    tagline: "Clearance for school and sports.",
    description: "Before school sports or physical activities, we assess a child's overall health, heart, lungs, and fitness. We ensure safety and readiness for sports participation. Parents receive guidance to support healthy activity.",
    thumbnail: sportsPhysicalsImage,
  },
  {
    title: "Chronic Disease Care",
    tagline: "Continuous care for ongoing conditions.",
    description: "We manage long-term pediatric conditions such as asthma or diabetes with regular check-ups and tailored care plans. Our team monitors health, coordinates treatment, and supports families through chronic care. We aim for stability and quality of life.",
    thumbnail: chronicDiseaseCareImage,
  },
  {
    title: "Developmental Screening",
    tagline: "Early checks for healthy development.",
    description: "Through developmental screenings we check motor, speech, hearing, and social milestones in children. Early detection helps ensure timely support if issues arise. We guide parents and refer to specialists when needed.",
    thumbnail: developmentalScreeningImage,
  },
];

// Other services with simple flip cards
const services = [
  {
    icon: "🔬",
    title: "Lab Services",
    subtitle: "Onsite testing available",
    summary: "Onsite tests and quick diagnostics.",
  },
  {
    icon: "📱",
    title: "TeleVisits",
    subtitle: "Virtual care from home",
    summary: "Virtual appointments for non-urgent care needs.",
  },
  {
    icon: "🏥",
    title: "Referrals to Specialists",
    subtitle: "Connected care network",
    summary: "Guidance and referral to pediatric specialists.",
  },
  {
    icon: "📖",
    title: "Parent Education",
    subtitle: "Guidance at every stage",
    summary: "Practical advice for each developmental stage.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          {/* Page Title Section */}
          <div className="text-center mb-16">
            <h1 className="font-heading text-page-title text-foreground mb-4">
              Our Services
            </h1>
            <p className="font-body text-body text-muted-foreground max-w-xl mx-auto">
              Quick descriptions of pediatric care options for your child's health at every stage.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Premium Service Cards */}
            {premiumServices.map((service, index) => (
              <ServiceCardPremium
                key={service.title}
                title={service.title}
                tagline={service.tagline}
                description={service.description}
                thumbnail={service.thumbnail}
                index={index}
              />
            ))}
            
            {/* Other Service Cards */}
            {services.map((service, index) => (
              <ServiceFlipCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                subtitle={service.subtitle}
                summary={service.summary}
                index={index + premiumServices.length}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
