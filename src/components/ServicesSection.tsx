import ServiceCardPremium from "@/components/ServiceCardPremium";
import SectionHeader from "@/components/SectionHeader";
import primaryCareImage from "@/assets/services/primary-care.png";
import newbornCareImage from "@/assets/services/newborn-care.png";
import wellChecksImage from "@/assets/services/well-checks.png";
import sickVisitsImage from "@/assets/services/sick-visits.png";
import behavioralIssuesImage from "@/assets/services/behavioral-issues.png";
import immunizationsImage from "@/assets/services/immunizations.png";
import sportsPhysicalsImage from "@/assets/services/sports-physicals.png";
import chronicDiseaseCareImage from "@/assets/services/chronic-disease-care.png";
import developmentalScreeningImage from "@/assets/services/developmental-screening.png";
import labServicesImage from "@/assets/services/lab-services.png";
import televisitsImage from "@/assets/services/televisits.png";
import referralsImage from "@/assets/services/referrals.png";
import parentEducationImage from "@/assets/services/parent-education.png";

const services = [
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
  {
    title: "Lab Services",
    tagline: "Fast diagnostics when needed.",
    description: "We provide basic lab testing onsite for quick screening or diagnosis. Results help guide treatment decisions without delay. This ensures efficient, coordinated care under one roof.",
    thumbnail: labServicesImage,
  },
  {
    title: "TeleVisits",
    tagline: "Care from home.",
    description: "TeleVisits let parents consult our pediatric team without coming to the clinic for non-urgent needs. It offers convenience and quick guidance. Ideal for follow-ups, minor concerns, or parental questions.",
    thumbnail: televisitsImage,
  },
  {
    title: "Referrals to Specialists",
    tagline: "Expert care when needed.",
    description: "If a child needs specialized evaluation or treatment, we coordinate referrals to trusted pediatric specialists. We support families through the process. We ensure continuity of care and follow-up.",
    thumbnail: referralsImage,
  },
  {
    title: "Parent Education & Guidance",
    tagline: "Support for parents at every step.",
    description: "We provide guidance on nutrition, safety, growth milestones, sleep, and parenting challenges. Our team offers resources to help families make informed decisions. We believe in empowering parents with knowledge for healthy child development.",
    thumbnail: parentEducationImage,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="What We Offer"
          title="Our Services"
          description="Comprehensive pediatric services designed to support your child's health at every stage."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCardPremium
              key={service.title}
              title={service.title}
              tagline={service.tagline}
              description={service.description}
              thumbnail={service.thumbnail}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
