import { Chart } from '../chart/Char';
import { ForecastingFeature } from './forecastingFeature/ForecastingFeature';
import { ForecastingHeader } from './forecastingHeader/ForecastingHeader';
import { ForecastingHowItWorks } from './forecastingHowItWorks/ForecastingHowItWorks';

export const Forecasting: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 pt-3.5 pr-4 pb-4 pl-4 md:gap-6 md:pl-0">
      <ForecastingHeader />
      <div className="flex flex-col gap-3 2xl:flex-row">
        <div className="flex flex-col gap-4">
          {/* Features */}
          <div className="col-span-12 space-y-6 xl:col-span-7">
            <ForecastingFeature />
          </div>
          {/* Chart */}
          <Chart />
        </div>
        {/* How It Works */}
        <ForecastingHowItWorks />
      </div>
    </div>
  );
};
