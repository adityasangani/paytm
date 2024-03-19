import { Button } from "./Button";
import { InputBox } from "./InputBox";
import { Profile } from "./Profile";

export const Users = () => {
  return (
    <div className="flex flex-col mt-3">
      <div className="text-lg font-bold">Users</div>
      <InputBox label={""} placeholder={"Search users..."} />
      <div className="flex justify-between">
        <div className="flex justify-center items-center">
          <Profile initial={"B"} />
          <p>Bob Wilson</p>
        </div>
        <div>
          <Button text={"Send Money"} />
        </div>
      </div>
    </div>
  );
};
