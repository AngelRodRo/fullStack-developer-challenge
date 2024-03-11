'use client'

import isAuth from '@/components/isAuth';
import { Analytics } from '@/components/DashboardHome/Analytics';

const Page = () => {
  return (
    <Analytics />
  );
}

export default isAuth(Page);

