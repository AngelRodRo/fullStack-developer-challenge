import { Sidebar } from '@/components/Sidebar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="h-screen bg-gray-100 w-full">
        <div className="mt-10 md:mt-2 w-full mx-auto px-4 sm:px-8">
          {children}
        </div>
      </div>
    </div>
  );
}
