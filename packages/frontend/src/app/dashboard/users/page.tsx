'use client'

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { UsersTable } from '@/components/UserManagement/UsersTable';
import isAuth from '@/components/isAuth';

const Page = () => {
  return (
    <DashboardLayout>
      <UsersTable />
    </DashboardLayout>
  );
}

export default isAuth(Page);
