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
    <div className="w-full overflow-hidden rounded-xl">
      <div className="card-bg flex h-[190px] w-full flex-col items-start justify-between p-[18px] xl:h-full">
        <Icon className="size-10.5" />
        <div className="mt-4 flex w-full flex-col items-start justify-start gap-2.5">
          <h3 className="text-left text-lg font-semibold text-black dark:text-white">{title}</h3>
          <p className="text-description w-full text-left text-xs">{description}</p>
        </div>
      </div>
    </div>
  );
};
