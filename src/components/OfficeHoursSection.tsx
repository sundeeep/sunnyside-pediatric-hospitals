import { Clock } from "lucide-react";
import { useState, useEffect } from "react";

const schedule = [
  { day: "Sunday", hours: "Closed", open: null, close: null },
  { day: "Monday", hours: "8:00 AM – 5:00 PM", open: 8, close: 17 },
  { day: "Tuesday", hours: "8:00 AM – 5:00 PM", open: 8, close: 17 },
  { day: "Wednesday", hours: "8:00 AM – 5:00 PM", open: 8, close: 17 },
  { day: "Thursday", hours: "8:00 AM – 5:00 PM", open: 8, close: 17 },
  { day: "Friday", hours: "8:00 AM – 4:00 PM", open: 8, close: 16 },
  { day: "Saturday", hours: "9:00 AM – 12:00 PM", open: 9, close: 12 },
];

const dayOrder = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const OfficeHoursSection = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const today = currentTime.toLocaleDateString("en-US", { weekday: "long" });
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();
  const dayIndex = currentTime.getDay(); // 0 = Sunday

  const todaySchedule = schedule[dayIndex];

  const getTimeRemaining = () => {
    if (!todaySchedule.open || !todaySchedule.close) return null;

    const now = currentHour + currentMinute / 60;

    if (now < todaySchedule.open) {
      // Office not yet open
      const minutesUntilOpen = (todaySchedule.open - currentHour) * 60 - currentMinute;
      const hours = Math.floor(minutesUntilOpen / 60);
      const mins = minutesUntilOpen % 60;
      return { type: "opening", hours, mins };
    }

    if (now >= todaySchedule.open && now < todaySchedule.close) {
      // Office is open
      const minutesUntilClose = (todaySchedule.close - currentHour) * 60 - currentMinute;
      const hours = Math.floor(minutesUntilClose / 60);
      const mins = minutesUntilClose % 60;
      return { type: "closing", hours, mins };
    }

    return { type: "closed", hours: 0, mins: 0 };
  };

  const timeRemaining = getTimeRemaining();

  const formatTimeRemaining = () => {
    if (!timeRemaining) return "Closed today";
    
    if (timeRemaining.type === "closed") return "Closed for today";
    
    const hoursText = timeRemaining.hours > 0 ? `${timeRemaining.hours}h ` : "";
    const minsText = `${timeRemaining.mins}m`;
    
    if (timeRemaining.type === "opening") {
      return `Opens in ${hoursText}${minsText}`;
    }
    
    return `${hoursText}${minsText} until closing`;
  };

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
            {dayOrder.map((dayName) => {
              const item = schedule.find((s) => s.day === dayName)!;
              const isToday = dayName === today;
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
                  <div className="flex items-center gap-4">
                    {isToday && timeRemaining && (
                      <span className="text-xs font-body text-foreground bg-primary/20 px-2 py-1 rounded-full">
                        {formatTimeRemaining()}
                      </span>
                    )}
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
