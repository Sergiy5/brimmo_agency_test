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
    <div className="flex h-[180px] flex-col items-start justify-between rounded-[20px] bg-white/50 py-5 pr-5 pl-[18px]">
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col items-start justify-start gap-1">
          <p className="text-left text-sm text-black">{shortDescription}</p>
          <h4 className="text-left text-2xl font-semibold text-black">{title}</h4>
        </div>
        {/* Icon */}
        <Icon className="size-10.5" />
      </div>
      <p className="text-description text-left">{description}</p>
    </div>
  );
};
