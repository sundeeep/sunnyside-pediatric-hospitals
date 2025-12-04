import { FileText, TestTube2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

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

          {/* 3 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Healow Patient Portal */}
            <div className="bg-card rounded-xl p-5 shadow-soft border border-border hover:border-primary/30 hover:shadow-md transition-all duration-200">
              <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center mb-3">
                <ExternalLink className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="font-heading text-sm font-semibold text-foreground mb-1">
                Healow Patient Portal
              </h3>
              <p className="font-body text-xs text-muted-foreground mb-3">
                Appointments, messages & refills
              </p>
              <Button variant="default" size="sm" className="w-full">
                Sign In
              </Button>
            </div>

            {/* Medical Records */}
            <button className="group bg-card rounded-xl p-5 shadow-soft border border-border hover:border-primary/30 hover:shadow-md transition-all duration-200 text-left">
              <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center mb-3">
                <FileText className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-heading text-sm font-semibold text-foreground mb-1">
                Medical Records
              </h3>
              <p className="font-body text-xs text-muted-foreground mb-2">
                Request copies of your records
              </p>
              <span className="font-body text-xs text-primary font-medium group-hover:underline">
                Request →
              </span>
            </button>

            {/* Lab Results */}
            <button className="group bg-card rounded-xl p-5 shadow-soft border border-border hover:border-primary/30 hover:shadow-md transition-all duration-200 text-left">
              <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center mb-3">
                <TestTube2 className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-heading text-sm font-semibold text-foreground mb-1">
                Lab Results
              </h3>
              <p className="font-body text-xs text-muted-foreground mb-2">
                View test results online
              </p>
              <span className="font-body text-xs text-primary font-medium group-hover:underline">
                View →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;
