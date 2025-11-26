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

  return (
    <ul className="flex h-full w-full flex-1 flex-col items-center justify-between gap-2 lg:flex-row">
      {arrayFeatures.map((feature) => (
        <li key={feature.title} className="w-full">
          <ForecastingFeatureItem {...feature} />
        </li>
      ))}
    </ul>
  );
};
