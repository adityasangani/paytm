export const Balance = ({ value }) => {
  return (
    <div className="flex">
      <div className="font-bold text-base">Your balance: </div>
      <div className="font-semibold ml-4 text-base">Rs {value}</div>
    </div>
  );
};
