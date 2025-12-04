import ProviderCardPremium from "./ProviderCardPremium";
import drChandana from "@/assets/providers/dr-chandana-prabhudev.png";
import drJose from "@/assets/providers/dr-jose-rios.png";

const providers = [
  {
    name: "Dr. Chandana Prabhudev",
    credentials: "MD - Pediatrics",
    specialty: "General Pediatrics & Developmental Care",
    department: "General Pediatrics & Developmental Care",
    bio: "Dr. Chandana Prabhudev is a board-certified pediatrician with over 12 years of experience caring for children from newborns through adolescence. She completed her medical degree at a top-tier institution and her pediatric residency at a leading children's hospital. Dr. Prabhudev has a special interest in developmental screenings and early childhood wellness. She believes in building lasting relationships with families and providing personalized, compassionate care. Her warm and patient approach helps children feel comfortable during visits. Outside of medicine, she enjoys spending time with her own family and exploring nature trails.",
    image: drChandana,
    accentColor: "primary" as const,
  },
  {
    name: "Dr. Jose Rios",
    credentials: "MD - Pediatrics",
    specialty: "Pediatric Wellness & Preventive Care",
    department: "Pediatric Wellness & Preventive Care",
    bio: "Dr. Jose Rios is a dedicated pediatrician passionate about preventive care and helping families establish healthy habits from an early age. He earned his medical degree with honors and completed his residency training at a renowned pediatric medical center. With over 10 years of clinical experience, Dr. Rios specializes in wellness exams, immunizations, and managing chronic conditions in children. He is fluent in both English and Spanish, allowing him to connect with a diverse patient population. Dr. Rios takes pride in educating parents and empowering them to make informed decisions about their child's health. In his free time, he enjoys coaching youth soccer and volunteering in the community.",
    image: drJose,
    accentColor: "secondary" as const,
  },
];

const ProvidersSection = () => {
  return (
    <section id="providers" className="py-20 bg-cream-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-heading text-section-title text-foreground mb-4">
            Meet Our Providers
          </h2>
          <p className="font-body text-body text-muted-foreground max-w-2xl mx-auto">
            Our dedicated team of pediatric specialists is committed to
            providing exceptional care for your children.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {providers.map((provider, index) => (
            <ProviderCardPremium
              key={provider.name}
              name={provider.name}
              credentials={provider.credentials}
              specialty={provider.specialty}
              department={provider.department}
              bio={provider.bio}
              image={provider.image}
              accentColor={provider.accentColor}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvidersSection;
