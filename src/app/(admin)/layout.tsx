'use client';

import { Header } from '@/layout/header/Header';
import { Sidebar } from '@/layout/sidebar/Sidebar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar and Backdrop */}
      <Sidebar />

      <div className="mx-auto flex flex-1 flex-col w-full">
        <Header />

        {/* Main Content */}
        {children}
      </div>
    </div>
  );
}
