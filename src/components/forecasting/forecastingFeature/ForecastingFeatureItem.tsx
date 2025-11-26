import React from 'react';

interface ForecastingFeatureItemProps {
  description: string;
  title: string;
  shortDescription: string;
  icon: React.ElementType;
}
export const ForecastingFeatureItem: React.FC<ForecastingFeatureItemProps> = ({
  title,
  icon: Icon,
  description,
  shortDescription,
}) => {
  return (
    <div className="card-bg flex min-h-[180px] flex-col items-start justify-between rounded-[20px] py-5 pr-5 pl-[18px]">
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col items-start justify-start gap-1">
          <p className="text-left text-sm text-black dark:text-white/80">{shortDescription}</p>
          <h4 className="text-left text-2xl font-semibold text-black dark:text-white/90">
            {title}
          </h4>
        </div>
        {/* Icon */}
        <Icon className="size-10.5" />
      </div>
      <p className="text-description text-left">{description}</p>
    </div>
  );
};
