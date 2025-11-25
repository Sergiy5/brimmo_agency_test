import { Chart } from '../chart/Char';
import { ForecastingFeature } from './forecastingFeature/ForecastingFeature';
import { ForecastingHeader } from './forecastingHeader/ForecastingHeader';
import { ForecastingHowItWorks } from './forecastingHowItWorks/ForecastingHowItWorks';
// import StatisticsChart from './StatisticsChart';

export const Forecasting: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 pt-3.5 pr-4 md:gap-6">
      <ForecastingHeader />
      <div className="flex gap-3">
        <div className="flex flex-col gap-4">
          {/* Features */}
          <div className="col-span-12 space-y-6 xl:col-span-7">
            <ForecastingFeature />
          </div>
          {/* Chart */}
          <div className="col-span-12">
            <Chart />
            {/* <StatisticsChart /> */}
          </div>
        </div>
        {/* How It Works */}
        <ForecastingHowItWorks />
      </div>
    </div>
  );
};
