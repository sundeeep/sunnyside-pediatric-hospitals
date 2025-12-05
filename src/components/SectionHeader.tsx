interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
}

const SectionHeader = ({ badge, title, description }: SectionHeaderProps) => {
  return (
    <div className="text-center mb-12 md:mb-16 px-4">
      {badge && (
        <span className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary font-heading font-semibold rounded-full text-xs sm:text-sm mb-4 md:mb-5">
          {badge}
        </span>
      )}
      <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-foreground mb-3 md:mb-4 leading-tight tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="font-body text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
