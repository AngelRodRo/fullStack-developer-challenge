interface Props {
  label?: string;
}

export const Input: React.FC<Props> = ({ label }) => {
  return (
    <>
      {label && (
        <label className="font-semibold text-sm text-gray-600 pb-1 block">
          {label}
        </label>
      )}
      <input
        type="text"
        className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
      />
    </>
  );
};
