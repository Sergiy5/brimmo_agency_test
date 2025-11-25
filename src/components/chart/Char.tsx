'use client';

import { cn } from '@/utils/cn';
import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
  ReferenceLine,
  Legend,
} from 'recharts';
import { ChartTooltip } from './chartComponents/ChartTooltip';
import { useTheme } from '@/context/ThemeContext';

interface ISinusoidOptions {
  amplitude: number;
  baseline: number;
  phase: number;
  frequency: number;
  pointsPerMonth: number;
}

// Generate sinusoid data
export const generateMonthlySinusoid = (options: ISinusoidOptions) => {
  const { amplitude = 30, baseline = 50, phase = 0, frequency = 2, pointsPerMonth = 10 } = options;

  

  const totalPoints = 12 * pointsPerMonth;
  const data = [];

  for (let i = 0; i < totalPoints; i++) {
    const monthPosition = (i / totalPoints) * 12;
    const angle = frequency * monthPosition * ((2 * Math.PI) / 12) + phase;
    const value = baseline + amplitude * Math.sin(angle);
    data.push(Math.round(value * 100) / 100);
  }

  return data;
};

// Create chart data
const salesData = generateMonthlySinusoid({
  amplitude: 30,
  baseline: 75,
  frequency: 2,
  pointsPerMonth: 10,
  phase: 0,
});

const revenueData = generateMonthlySinusoid({
  amplitude: 28,
  baseline: 75,
  frequency: 2,
  phase: Math.PI / 4,
  pointsPerMonth: 10,
});

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Combine data
const chartData = salesData.map((sales, index) => {
  const monthIndex = Math.floor((index / salesData.length) * 12);
  return {
    index,
    month: monthIndex < 12 ? months[monthIndex] : '',
    sales,
    revenue: revenueData[index],
  };
});

export const Chart = () => {
  const { theme } = useTheme();

  const isDark = theme === 'dark';
  return (
    <div className="flex h-full w-full flex-col gap-6 rounded-2xl bg-white p-6 dark:bg-white/10">
      <div className="flex w-full items-start justify-between">
        <div className="flex w-[356px] flex-col items-start justify-start gap-1">
          <p className="text-left text-lg font-semibold text-black dark:text-white">
            Inventory Coverage (90 days)
          </p>
          <p className="text-description">Optimized inventory projections with upcoming POs</p>
        </div>
        {/* Right part */}
        <div className="flex items-start justify-center gap-6">
          <div className="flex items-center justify-start gap-2 text-black dark:text-white">
            <div className="flex items-center justify-center gap-2">
              <div className="h-1 w-2.5 bg-black/70 dark:bg-white" />
              <p className="text-left text-xs">Projected Inventory</p>
            </div>
            <div className="flex items-center justify-start gap-2">
              <div className="h-1 w-2.5 overflow-hidden bg-blue/50" />
              <p className="text-left text-xs">Demand</p>
            </div>
            <div className="flex items-center justify-center gap-1">
              <ul className="flex items-center justify-center gap-0.5">
                {Array.from({ length: 5 }).map((_, index, arr) => {
                  const isLast = index === arr.length - 1;
                  return (
                    <div
                      key={index}
                      className={cn('h-0.5 w-1 overflow-hidden bg-[#7FCB87]/50', {
                        'w-[0.5px]': index === 0 || isLast,
                      })}
                    />
                  );
                })}
              </ul>
              <p className="text-left text-xs">Safety Stock Level</p>
            </div>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={chartData}>
          <defs>
            {/* Gradient for Sales (Area chart) */}
            <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0E64EE" stopOpacity={0.55} />
              <stop offset="95%" stopColor="#0E64EE" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="0" stroke="#f0f0f0" vertical={false} />

          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: `${isDark ? '#ffffff' : 'rgba(7, 20, 41, 0.5)'}`, fontSize: 12 }}
            interval="preserveStartEnd"
            ticks={months}
          />

          <YAxis
            domain={[0, 100]}
            ticks={[0, 25, 50, 75, 100]}
            axisLine={false}
            tickLine={false}
            tick={{ fill: `${isDark ? '#ffffff' : 'rgba(7, 20, 41, 0.5)'}`, fontSize: 12 }}
          />
          <ReferenceLine y={35} stroke="#7FCB87" strokeDasharray="3 3" />
          <Tooltip content={<ChartTooltip />} />
          {/* Sales with gradient (Area) */}
          <Area
            type="monotone"
            dataKey="sales"
            stroke="#0E64EE"
            strokeWidth={2}
            fill="url(#salesGradient)"
            dot={false}
            activeDot={{ r: 6, stroke: 'none', strokeWidth: 0 }}
          />

          {/* Revenue without gradient (Line) */}
          <Line
            type="monotone"
            dataKey="revenue"
            stroke={theme === 'dark' ? '#ffffff' : '#071429'}
            strokeWidth={2}
            dot={false}
            activeDot={false}
            fill="none"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
