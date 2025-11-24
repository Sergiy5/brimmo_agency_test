'use client';

import { Header } from '@/layout/header/Header';
import { Sidebar } from '@/layout/sidebar/Sidebar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      {/* Sidebar and Backdrop */}
      <Sidebar />

      <div className="mx-auto h-full w-full">
        {/* Header */}
        <Header />

        {/* Main Content */}
        {children}
      </div>
    </div>
  );
}
