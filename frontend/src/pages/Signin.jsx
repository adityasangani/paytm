import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";

export const Signin = () => {
  return (
    <>
      <div className="flex h-screen justify-center items-center bg-slate-500">
        <div className="bg-white rounded-md w-80 px-4  ">
          <div className="flex flex-col">
            <Heading label={"Sign in"} />
            <SubHeading
              text={"Enter your information to sign in to your account"}
            />

            <InputBox label={"Email"} placeholder={"johndoe@gmail.com"} />
            <InputBox label={"Password"} placeholder={""} />
            <Button text={"Sign in"} />
            <BottomWarning
              label={"Don't have an account?"}
              linkText={"Sign up"}
              to={"/signup"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
