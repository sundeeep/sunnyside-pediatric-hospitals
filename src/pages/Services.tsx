import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceFlipCard from "@/components/ServiceFlipCard";
import ServiceCardPremium from "@/components/ServiceCardPremium";
import primaryCareImage from "@/assets/services/primary-care.png";
import newbornCareImage from "@/assets/services/newborn-care.png";
import wellChecksImage from "@/assets/services/well-checks.png";

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
];

// Other services with simple flip cards
const services = [
  {
    icon: "🤒",
    title: "Sick Visits",
    subtitle: "Same-day appointments available",
    summary: "Fast care for acute illnesses and symptoms.",
  },
  {
    icon: "🧠",
    title: "Behavioral Issues",
    subtitle: "Emotional & behavioral support",
    summary: "Support for emotional and behavioral concerns.",
  },
  {
    icon: "💉",
    title: "Immunizations",
    subtitle: "Safe, scheduled vaccines",
    summary: "Safe, scheduled vaccines for all age groups.",
  },
  {
    icon: "⚽",
    title: "Sports Physicals",
    subtitle: "Fitness & activity clearance",
    summary: "Fitness exams for school or team activities.",
  },
  {
    icon: "💊",
    title: "Chronic Disease Care",
    subtitle: "Long-term health management",
    summary: "Long-term care for conditions like asthma or diabetes.",
  },
  {
    icon: "📊",
    title: "Developmental Screening",
    subtitle: "Early detection & intervention",
    summary: "Early detection of speech, motor, and social delays.",
  },
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
