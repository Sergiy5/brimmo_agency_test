import { IconEye } from '@/assets/icons';
import Link from 'next/link';

export const ForecastingHeader: React.FC = () => {
  return (
    <div className="flex w-full items-center justify-between">
      {/* Title */}
      <div className="relative flex flex-col items-start justify-start gap-2">
        <h2 className="text-left text-4xl text-black dark:text-white/80">
          Location-Based Forecasting
        </h2>
        <p className=" text-description">
          Robust Rate of Sale forecasting with location-aware calculations
        </p>
      </div>
      {/* Buttons */}
      <div className="flex items-center justify-start gap-6">
        <Link href="#" className="relative flex items-start justify-start gap-2">
          <IconEye className="text-blue size-[18px] dark:text-white" />

          <span className="text-blue text-left font-[fixelDisplay] text-[15px] font-medium">
            View Forecast Accuracy
          </span>
        </Link>
        <button className="flex items-center justify-center rounded-[99999px] bg-[#0e64ee] px-5 py-[11px]">
          <p className="text-left font-[fixelDisplay] text-[15px] font-medium text-white">
            Adjust Forecast Settings
          </p>
        </button>
      </div>
    </div>
  );
};
