"use client"
import { Sidebar } from '../Sidebar';

interface Props {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar className="mr-5" />
      {children}
    </div>
  );
};
