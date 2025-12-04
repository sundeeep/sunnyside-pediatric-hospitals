import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Providers", href: "#providers" },
  { name: "Patient Documents", href: "#documents" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-soft">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
              <Sun className="w-7 h-7 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-heading font-bold text-xl text-foreground leading-tight">
                Sunnyside
              </h1>
              <p className="font-body text-sm text-muted-foreground -mt-1">
                Pediatrics
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-heading font-semibold text-foreground/80 hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="default">Book Appointment</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-heading font-semibold text-foreground/80 hover:text-primary hover:bg-muted px-4 py-3 rounded-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-4 pt-2">
                <Button variant="default" className="w-full">
                  Book Appointment
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
