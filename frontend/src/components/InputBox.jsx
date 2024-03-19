export const InputBox = ({ label, placeholder }) => {
  return (
    <div className=" my-2">
      <div className="text-sm  font-medium text-left py-2">{label}</div>
      <input
        className="w-full px-2 py-1 border rounded border-slate-200"
        placeholder={placeholder}
      />
    </div>
  );
};
