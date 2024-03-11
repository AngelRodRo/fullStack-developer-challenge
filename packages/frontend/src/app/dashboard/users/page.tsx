'use client';

import { UsersTable } from '@/components/UserManagement/UsersTable';
import isAuth from '@/components/isAuth';

const Page = () => {
  return <UsersTable />;
};

export default isAuth(Page);
