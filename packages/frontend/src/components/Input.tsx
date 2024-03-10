import React, { forwardRef } from 'react';

interface Props extends React.ComponentPropsWithoutRef<'input'> {
  label?: string;
}

// eslint-disable-next-line react/display-name
export const Input: React.FC<Props> = forwardRef<HTMLInputElement, Props>(
  ({ label, ...props }, ref) => {
    return (
      <>
        {label && (
          <label htmlFor={props.name} className="font-semibold text-sm text-gray-600 pb-1 block">
            {label}
          </label>
        )}
        <input
          {...props}
          ref={ref}
          className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
        />
      </>
    );
  },
);
