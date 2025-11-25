// 'use client';

// import dynamic from 'next/dynamic';
// import { ApexOptions } from 'apexcharts';
// import ChartTab from '../chart/chartComponents/ChartTab';
// import { options } from '../chart/options';
// import { generateMonthlySinusoid } from '@/utils/generateSinusoid';

// // Dynamically import the ReactApexChart component
// const ReactApexChart = dynamic(() => import('react-apexcharts'), {
//   ssr: false,
// });

// function generateSmoothWave(points: number, min: number, max: number) {
//   const amplitude = (max - min) / 2;
//   const center = min + amplitude;
//   const data = [];

//   for (let i = 0; i < points; i++) {
//     const sin = Math.sin((i / points) * Math.PI * 2);
//     data.push(Number((center + sin * amplitude ).toFixed(2)));
//   }

//   return data;
// }

// export default function StatisticsChart() {
//   const series = [
//     {
//       name: 'Sales',
//       data: generateMonthlySinusoid({
//         amplitude: 20,
//         baseline: 50,
//         phase: 1,
//         frequency: 2,
//         pointsPerMonth: 10,
//       }), //generateSmoothWave(12, 30, 75), // 50 points, amplitude=200, frequency=3
//       type: 'area', // gradient
//     },
//     {
//       name: 'Revenue',
//       data: generateMonthlySinusoid({
//         amplitude: 20,
//         baseline: 50,
//         phase: 1.5,
//         frequency: 2,
//         pointsPerMonth: 10,
//       }), // smaller amplitude
//       type: 'area', // gradient
//     },
//   ];
//   console.log(series[0].data[0]);
//   // const series = [
//   //   {
//   //     name: 'Sales',
//   //     data: [180, 190, 170, 160, 175, 165, 170, 205, 230, 210, 240, 235],
//   //   },
//   //   {
//   //     name: 'Revenue',
//   //     data: [40, 30, 50, 40, 55, 40, 70, 100, 110, 120, 150, 140],
//   //   },
//   // ];
//   return (
//     <div className="rounded-2xl border border-gray-200 bg-white px-5 pt-5 pb-5 sm:px-6 sm:pt-6 dark:border-gray-800 dark:bg-white/3">
//       <div className="mb-6 flex flex-col gap-5 sm:flex-row sm:justify-between">
//         <div className="w-full">
//           <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">Statistics</h3>
//           <p className="text-theme-sm mt-1 text-gray-500 dark:text-gray-400">
//             Target you’ve set for each month
//           </p>
//         </div>
//         <div className="flex w-full items-start gap-3 sm:justify-end">
//           <ChartTab />
//         </div>
//       </div>

//       <div className="custom-scrollbar w-full">
//         <div className="w-full">
//           <ReactApexChart options={options} series={series} type="area" height={500} />
//         </div>
//       </div>
//     </div>
//   );
// }
