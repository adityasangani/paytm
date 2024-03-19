import { Profile } from "./Profile";

export const Appbar = ({ heading, message, profile }) => {
  return (
    <div className="flex h-14 shadow  justify-between">
      <div className="flex flex-col justify-center h-full ml-4">{heading}</div>
      <div className=" flex gap-3 justify-center items-center">
        <div className="inline">{message}</div>
        <Profile initial={"A"} />
      </div>
    </div>
  );
};
