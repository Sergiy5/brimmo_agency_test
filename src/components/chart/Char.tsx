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
} from 'recharts';
import { ChartTooltip } from './CustomTooltip';
import { useTheme } from '@/context/ThemeContext';
import { CustomCursor } from './CustomCursor';

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

// Create chart data with 4 points per month (weekly)
const inventoryData = generateMonthlySinusoid({
  amplitude: 25,
  baseline: 55,
  frequency: 2,
  pointsPerMonth: 4,
  phase: 0,
});

const demandData = generateMonthlySinusoid({
  amplitude: 22,
  baseline: 55,
  frequency: 2,
  phase: Math.PI / 4,
  pointsPerMonth: 4,
});

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Generate dates for each week (approximately 7 days apart)
const generateWeeklyDates = (startYear: number = 2024) => {
  const dates = [];
  const startDate = new Date(startYear, 0, 1); // January 1st

  for (let i = 0; i < 48; i++) {
    // 12 months × 4 weeks
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i * 7); // Add 7 days for each week
    dates.push(date);
  }

  return dates;
};

const weeklyDates = generateWeeklyDates(2024);

// Combine data
const chartData = inventoryData.map((inventory, index) => {
  const date = weeklyDates[index];
  const monthIndex = date.getMonth();
  const day = date.getDate();

  return {
    index,
    month: months[monthIndex],
    date: date.toISOString().split('T')[0], // YYYY-MM-DD format
    label: `${months[monthIndex]} ${day}`,
    fullDate: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    inventory,
    inventoryFill: inventory - 5,
    revenue: demandData[index],
  };
});

// const data = [{ index: -1, inventory: null, revenue: null }, ...chartData];

export const Chart = () => {
  const { theme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <div className="flex h-[400px] 2xl:flex-1 lg:h-[500px] 4xl:max-h-full w-full flex-col gap-6 rounded-2xl bg-white py-4 pr-3.5 dark:bg-white/8">
      <div className="flex w-full flex-col items-start justify-between gap-2 pl-4 lg:flex-row lg:items-center">
        <div className="flex flex-col items-start justify-start gap-1">
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
              <div className="bg-blue/50 h-1 w-2.5 overflow-hidden" />
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

      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData}>
          <CartesianGrid strokeDasharray="0" stroke="#f0f0f0" vertical={false} />

          <XAxis
            dataKey="index"
            axisLine={false}
            tickLine={false}
            tick={{ fill: `${isDark ? '#ffffff' : 'rgba(7, 20, 41, 0.5)'}`, fontSize: 12 }}
            height={30}
            ticks={[0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44]}
            tickFormatter={(value) => {
              const monthIndex = Math.floor(value / 4);
              return months[monthIndex] || '';
            }}
            padding={{ left: 20, right: 0 }}
          />

          <YAxis
            domain={[0, 100]}
            ticks={[0, 25, 50, 75, 100]}
            axisLine={false}
            tickLine={false}
            tick={{ fill: `${isDark ? '#ffffff' : 'rgba(7, 20, 41, 0.5)'}`, fontSize: 12 }}
          />

          <ReferenceLine y={40} stroke="#7FCB87" strokeDasharray="3 3" />

          <Tooltip cursor={<CustomCursor isDrak={isDark} />} content={<ChartTooltip />} />
          <Area
            type="monotone"
            dataKey="inventory"
            stroke="#0E64EE"
            strokeWidth={2}
            fill="none"
            dot={false}
            activeDot={{ r: 6, stroke: 'none', strokeWidth: 0 }}
            // connectNulls={false}
          />
          {/* With gradient (Area) */}
          <Area
            type="monotone"
            dataKey="inventoryFill"
            strokeWidth={0}
            fill="url(#salesGradient)"
            dot={false}
            activeDot={false}
          />
          <defs>
            {/* Gradient for Sales (Area chart) */}
            <linearGradient id="salesGradient" x1="0" y1="0" x2="0.5" y2="1">
              <stop offset="5%" stopColor="#0E64EE" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#0E64EE" stopOpacity={0} />
            </linearGradient>
          </defs>

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
