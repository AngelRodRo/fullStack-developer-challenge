import cn from 'classnames';
import React from 'react';

interface Props extends React.ComponentPropsWithoutRef<'button'> {}

export const Button: React.FC<Props> = ({ className, children, ...props }) => {
  return (
    <button
      {...props}
      type="button"
      className={cn(
        'transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-fit px-5 py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block',
        className,
      )}
    >
      {children}
    </button>
  );
};
