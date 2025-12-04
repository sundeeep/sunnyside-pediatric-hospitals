import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img 
                src={logo} 
                alt="Sunnyside Pediatrics" 
                className="h-12 w-auto"
              />
            </div>
            <p className="font-body text-sm text-primary/70 leading-relaxed">
              Providing compassionate, expert pediatric care for families in our
              community since 2005.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-primary mb-4">
              Quick Links
            </h4>
            <nav className="space-y-2">
              {["Home", "Services", "Providers", "Patient Documents"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="block font-body text-sm text-primary/70 hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                )
              )}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-primary mb-4">
              Contact Us
            </h4>
            <div className="space-y-3">
              <a
                href="tel:555-123-4567"
                className="flex items-center gap-3 font-body text-sm text-primary/70 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                (555) 123-4567
              </a>
              <a
                href="mailto:info@sunnysidepeds.com"
                className="flex items-center gap-3 font-body text-sm text-primary/70 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@sunnysidepeds.com
              </a>
              <div className="flex items-start gap-3 font-body text-sm text-primary/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  123 Sunshine Blvd, Suite 200
                  <br />
                  Sunnyville, CA 90210
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-6">
          <p className="font-body text-sm text-primary/50 text-center">
            © {currentYear} Sunnyside Pediatrics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
