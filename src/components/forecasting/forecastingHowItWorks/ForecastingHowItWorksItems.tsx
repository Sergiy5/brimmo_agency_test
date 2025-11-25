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
    <div className="h-full w-full overflow-hidden rounded-xl dark:bg-black">
      <div className="flex h-full w-full flex-col items-start justify-between bg-white/80 p-[18px] dark:bg-blue/5">
        <Icon className="size-10.5" />
        <div className="mt-4 flex w-full flex-col items-start justify-start gap-2.5">
          <h3 className="text-left text-lg font-semibold text-black dark:text-white">{title}</h3>
          <p className="text-description w-full text-left text-xs">{description}</p>
        </div>
      </div>
    </div>
  );
};
