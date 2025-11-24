import type { Metadata } from 'next';
import { EcommerceMetrics } from '@/components/ecommerce/EcommerceMetrics';
import StatisticsChart from '@/components/ecommerce/StatisticsChart';

export const metadata: Metadata = {
  title: 'Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template',
  description: 'This is Next.js Home for TailAdmin Dashboard Template',
};

export default function Ecommerce() {
  // grid grid-cols-12
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <div className="col-span-12 space-y-6 xl:col-span-7">
        <EcommerceMetrics />
      </div>

      <div className="col-span-12">
        <StatisticsChart />
      </div>
    </div>
  );
}
