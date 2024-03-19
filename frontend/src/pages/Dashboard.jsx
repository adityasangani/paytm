import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";

export const Dashboard = () => {
  return (
    <>
      <Appbar heading={"Paytm App"} message={"Hello"} profile={"U"} />
      <div className="m-8">
        <Balance value={"12,300"} />
        <Users />
      </div>
    </>
  );
};
