import { ForecastingHowItWorksItem } from './ForecastingHowItWorksItems';
import {
  IconRobustRate,
  IconLocation,
  IconManual,
  IconEllipse,
  IconEllipse_12,
} from '@/assets/icons';

export const ForecastingHowItWorks: React.FC = () => {
  const features = [
    {
      iconName: IconRobustRate,
      title: 'Robust Rate of Sale',
      description:
        'Consistent forecasting methodology that considers location-specific demand patterns and provides reliable predictions across all inventory items.',
    },
    {
      iconName: IconLocation,
      title: 'Location Awareness',
      description:
        'Forecasts are generated per location, allowing for accurate inventory projections that account for location-specific demand variations.',
    },
    {
      iconName: IconManual,
      title: 'Manual Overrides',
      description:
        'When automatic forecasting needs adjustment, manual overrides can be applied at the variant level for specific time periods.',
    },
  ];

  return (
    <div className="card-bg relative flex w-full flex-col items-center justify-start gap-[22px] overflow-hidden rounded-3xl px-3.5 pt-5 pb-3.5 2xl:max-w-[440px]">
      <div className="flex w-full flex-col items-center justify-start gap-2 px-1.5">
        <h4 className="dynamic-h4 w-full text-left font-semibold">How Forecasting Works</h4>
        <p className="text-description w-full text-left text-sm">
          The forecasting system has been streamlined to use the robust rate of sale method across
          all locations for improved consistency and reliability.
        </p>
      </div>

      <ul className="relative z-20 flex h-full w-full flex-col items-start justify-center gap-3 lg:flex-row 2xl:flex-col">
        {features.map((feature) => (
          <li key={feature.title} className="w-full flex-1">
            <ForecastingHowItWorksItem {...feature} />
          </li>
        ))}
      </ul>
      <IconEllipse className="absolute bottom-[-131px] left-[-65px] -z-10 h-auto w-[528px] dark:hidden" />
      <IconEllipse_12 className="absolute top-[210px] right-[-60px] -z-10 h-auto w-[352px] dark:hidden" />
    </div>
  );
};
