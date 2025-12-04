import { FileText, Download, ClipboardList, TestTube2, Syringe, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const documentCategories = [
  {
    icon: ClipboardList,
    title: "New Patient Forms",
    description: "Registration & health history forms",
    action: "Download",
    primary: true,
  },
  {
    icon: FileText,
    title: "Medical Records",
    description: "Request copies of your records",
    action: "Request",
    primary: false,
  },
  {
    icon: TestTube2,
    title: "Lab Results",
    description: "View test results online",
    action: "View",
    primary: false,
  },
  {
    icon: Syringe,
    title: "Immunization Records",
    description: "Vaccination history & schedules",
    action: "View",
    primary: false,
  },
];

const DocumentsSection = () => {
  return (
    <section id="documents" className="py-16 bg-background">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-2">
              Patient Portal
            </h2>
            <p className="font-body text-muted-foreground">
              Access your health information securely online
            </p>
          </div>

          {/* Document Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {documentCategories.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.title}
                  className="group bg-card rounded-xl p-4 shadow-soft border border-border hover:border-primary/30 hover:shadow-md transition-all duration-200 text-left"
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
                    item.primary ? "bg-primary/15" : "bg-muted"
                  }`}>
                    <Icon className={`w-5 h-5 ${item.primary ? "text-primary" : "text-muted-foreground group-hover:text-primary"} transition-colors`} />
                  </div>
                  <h3 className="font-heading text-sm font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="font-body text-xs text-muted-foreground mb-2">
                    {item.description}
                  </p>
                  <span className="font-body text-xs text-primary font-medium group-hover:underline">
                    {item.action} →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Healow Patient Portal CTA */}
          <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <ExternalLink className="w-6 h-6 text-secondary" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-heading text-base font-semibold text-foreground">
                  Healow Patient Portal
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  View appointments, message your provider, request refills, and access complete health records
                </p>
              </div>
              <Button variant="default" className="flex-shrink-0">
                <ExternalLink className="w-4 h-4" />
                Sign In to Portal
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;
