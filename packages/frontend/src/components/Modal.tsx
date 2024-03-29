interface Props {
  header?: React.ReactNode;
  children?: React.ReactNode;
  onClose?: () => void;
}

export const Modal: React.FC<Props> = ({ header, children, onClose }) => {
  return (
    <div className="fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster bg-gray-800/75">
      <div className="border shadow-lg bg-white w-11/12 md:max-w-md mx-auto rounded z-50 overflow-y-auto">
        <div className=" py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            {header ? header : <p className="text-2xl font-bold">Header</p>}
            <div className="cursor-pointer z-50" onClick={onClose}>
              <svg
                className="fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
              </svg>
            </div>
          </div>
          <div className="my-5">{children}</div>
        </div>
      </div>
    </div>
  );
};
