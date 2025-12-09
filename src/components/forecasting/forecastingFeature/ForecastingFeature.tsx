import { ForecastingFeatureItem } from './ForecastingFeatureItem';
import { IconRobust, IconMultilocation, IconAvailable } from '@/assets/icons';

export const ForecastingFeature: React.FC = () => {
  const arrayFeatures = [
    {
      shortDescription: 'Forecasting Method',
      title: 'ROBUST_ROS',
      icon: IconRobust,
      description:
        'A forecasting method that uses sales velocity and demand smoothing to deliver consistent, location-aware predictions across all SKUs.',
    },
    {
      shortDescription: 'Location Support',
      title: 'IconMultiLocation',
      icon: IconMultilocation,
      description:
        'Each location is forecasted independently to prevent overstock and align supply with demand.',
    },
    {
      shortDescription: 'Override Support',
      title: 'Available',
      icon: IconAvailable,
      description:
        'Manual edits can be applied per SKU to adjust forecasts when deviations occur, ensuring more accurate and responsive inventory planning.',
    },
  ];
  // flex flex-col items-center justify-between gap-2 lg:h-[220px] lg:flex-row
  return (
    <ul className="4xl:max-h-auto grid h-full w-full gap-2 lg:grid-cols-3">
      {arrayFeatures.map((feature) => (
        <li key={feature.title} className="flex w-full flex-1 flex-col">
          <ForecastingFeatureItem {...feature} />
        </li>
      ))}
    </ul>
  );
};
