import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const DocumentsSection = () => {
  return (
    <section id="documents" className="py-16 bg-background">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto bg-card rounded-xl p-8 shadow-soft border border-border">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
              <FileText className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h2 className="font-heading text-card-title text-foreground">
                Patient Documents
              </h2>
              <p className="font-body text-sm text-muted-foreground">
                Save time by completing forms before your visit
              </p>
            </div>
          </div>

          <p className="font-body text-body text-muted-foreground mb-6">
            Download and complete our patient forms ahead of your appointment.
            New patient packets, medical history forms, and consent documents
            are all available here.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="outline" className="flex-1">
              <Download className="w-5 h-5" />
              New Patient Forms
            </Button>
            <Button variant="ghost" className="flex-1">
              <FileText className="w-5 h-5" />
              View All Documents
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;
