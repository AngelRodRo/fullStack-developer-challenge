"use client"
import cn from 'classnames';
import Link from 'next/link'
import { useCallback, useState } from 'react';
import { AUTH_TOKEN } from '@/constants';
import { navigate } from '@/utils/actions';

interface Props {
  className?: string;
}

type SidebarSubItem = {
  label: string;
  path: string;
}

interface SidebarItems {
  group: string;
  items: SidebarSubItem[]
}

export const Sidebar: React.FC<Props> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const items: SidebarItems[] = [
    {
      group: "Analytics",
      items: [
        {
          label: "Home",
          path: "/dashboard"
        }
      ]
    },
    {
      group: "Content",
      items: [
        {
          label: "User",
          path: "/dashboard/users"
        }
      ]
    }
  ]

  const handleLogout = useCallback(() => {
    localStorage.setItem(AUTH_TOKEN, "");
    navigate("/")
  }, []);

  return (
    <>
      <div className="fixed w-20 block md:hidden z-10 m-2" onClick={() => setIsOpen(!isOpen)}>
        <button className="relative group">
          <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 ring-opacity-30 duration-200 shadow-md">
            <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden ">
              <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left delay-150"></div>
              <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-300 "></div>
              <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left delay-150"></div>
            </div>
          </div>
        </button>
      </div>
      <aside
        className={cn(
          'md:flex md:flex-col md:pt-0 absolute md:relative w-40 md:w-64 h-screen px-5 pt-12 pb-8 overflow-y-auto bg-white border-r dark:bg-gray-900 dark:border-gray-700',
          {
            hidden: !isOpen,
          },
          className,
        )}
      >
        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav className="-mx-3 space-y-6 ">
            {items.map((item, idx) => {
              return (
                <div className="space-y-3 " key={idx}>
                  <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
                    {item.group}
                  </label>
                  {item.items.map((navbarItem, idx1) => (
                    <Link
                      key={idx1}
                      className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                      href={navbarItem.path}
                    >
                      <span className="mx-2 text-sm font-medium">
                        {navbarItem.label}
                      </span>
                    </Link>
                  ))}
                </div>
              );
            })}

            <div className="space-y-10">
              <a
                onClick={handleLogout}
                className="flex cursor-pointer items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              >
                <span className="mx-2 text-sm font-medium">Logout</span>
              </a>
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
};
