import { useNavigate } from "react-router-dom";
export const BottomWarning = ({ label, linkText, to }) => {
  const navigate = useNavigate();
  return (
    <div className="p-2 m-2 text-center">
      {label}{" "}
      <span
        onClick={() => {
          navigate(to);
        }}
        className="underline text-blue-800 cursor-pointer hover:text-blue-700"
      >
        {linkText}
      </span>{" "}
    </div>
  );
};
