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
    <div className="card-bg flex h-[180px] w-full flex-col items-start justify-between rounded-[20px] py-4 px-[18px]">
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col items-start justify-start gap-1">
          <p className="dynamic-sm text-left text-black dark:text-white/80">{shortDescription}</p>
          <h3 className="dynamic-h3 text-left font-semibold text-black dark:text-white/90">
            {title}
          </h3>
        </div>
        {/* Icon */}
        <Icon className="size-10.5" />
      </div>
      <p className="text-description dynamic-text-sm text-left">{description}</p>
    </div>
  );
};
