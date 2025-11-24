'use client';

import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
import ChartTab from '../chart/chartComponents/ChartTab';
import { options } from '../chart/options';

// Dynamically import the ReactApexChart component
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

export default function StatisticsChart() {
  //min-w-[1000px] xl:min-
  const series = [
    {
      name: 'Sales',
      data: [180, 190, 170, 160, 175, 165, 170, 205, 230, 210, 240, 235],
    },
    {
      name: 'Revenue',
      data: [40, 30, 50, 40, 55, 40, 70, 100, 110, 120, 150, 140],
    },
  ];
  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 pt-5 pb-5 sm:px-6 sm:pt-6 dark:border-gray-800 dark:bg-white/3">
      <div className="mb-6 flex flex-col gap-5 sm:flex-row sm:justify-between">
        <div className="w-full">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">Statistics</h3>
          <p className="text-theme-sm mt-1 text-gray-500 dark:text-gray-400">
            Target you’ve set for each month
          </p>
        </div>
        <div className="flex w-full items-start gap-3 sm:justify-end">
          <ChartTab />
        </div>
      </div>

      <div className="custom-scrollbar w-full">
        <div className="w-full">
          <ReactApexChart options={options} series={series} type="area" height={500} />
        </div>
      </div>
    </div>
  );
}
