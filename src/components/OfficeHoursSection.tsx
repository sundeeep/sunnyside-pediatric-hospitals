import { Clock } from "lucide-react";

const schedule = [
  { day: "Monday", hours: "8:00 AM – 5:00 PM" },
  { day: "Tuesday", hours: "8:00 AM – 5:00 PM" },
  { day: "Wednesday", hours: "8:00 AM – 5:00 PM" },
  { day: "Thursday", hours: "8:00 AM – 5:00 PM" },
  { day: "Friday", hours: "8:00 AM – 4:00 PM" },
  { day: "Saturday", hours: "9:00 AM – 12:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

const OfficeHoursSection = () => {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Clock className="w-5 h-5 text-primary" />
              <span className="font-heading font-semibold text-foreground">
                Office Hours
              </span>
            </div>
            <h2 className="font-heading text-section-title text-foreground">
              When We're Here for You
            </h2>
          </div>

          <div className="bg-background rounded-xl shadow-soft overflow-hidden">
            {schedule.map((item, index) => {
              const isToday = item.day === today;
              const isClosed = item.hours === "Closed";

              return (
                <div
                  key={item.day}
                  className={`flex items-center justify-between px-6 py-4 border-b border-border last:border-b-0 transition-colors ${
                    isToday
                      ? "bg-primary/10"
                      : "hover:bg-muted/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {isToday && (
                      <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    )}
                    <span
                      className={`font-heading font-semibold ${
                        isToday ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {item.day}
                      {isToday && (
                        <span className="ml-2 text-xs font-body text-primary/80">
                          (Today)
                        </span>
                      )}
                    </span>
                  </div>
                  <span
                    className={`font-body ${
                      isClosed
                        ? "text-muted-foreground"
                        : isToday
                        ? "text-primary font-medium"
                        : "text-foreground"
                    }`}
                  >
                    {item.hours}
                  </span>
                </div>
              );
            })}
          </div>

          <p className="text-center mt-6 font-body text-sm text-muted-foreground">
            For after-hours emergencies, please call{" "}
            <a
              href="tel:555-123-4567"
              className="text-primary hover:underline font-semibold"
            >
              (555) 123-4567
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfficeHoursSection;
