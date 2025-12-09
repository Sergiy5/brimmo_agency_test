interface ForecastingHowItWorksProps {
  iconName: React.ElementType;
  title: string;
  description: string;
}
export const ForecastingHowItWorksItem: React.FC<ForecastingHowItWorksProps> = ({
  iconName: Icon,
  title,
  description,
}) => {
  return (
    <div className="flex w-full h-full overflow-hidden rounded-xl">
      <div className="bg-card-bg flex w-full flex-col items-start justify-between p-[18px] xl:h-full">
        <Icon className="size-10.5" />
        <div className="flex w-full flex-col items-start justify-between gap-2">
          <h3 className="dynamic-h4 text-left font-semibold text-black dark:text-white">{title}</h3>
          <p className="text-description dynamic-text-xs w-full text-left">{description}</p>
        </div>
      </div>
    </div>
  );
};
