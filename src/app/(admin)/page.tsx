import type { Metadata } from 'next';
import { Forecasting } from '@/components/forecasting/Forecasting';

export const metadata: Metadata = {
  title: 'Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template',
  description: 'This is Next.js Home for TailAdmin Dashboard Template',
};

export default function Ecommerce() {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <Forecasting />
    </div>
  );
}
