'use client'

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import isAuth from '@/components/isAuth';

const Page = () => {
  return (
    <DashboardLayout>
      <div>This is the dashboard</div>
    </DashboardLayout>
  );
}

export default isAuth(Page);

