import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";

export const Signup = () => {
  return (
    <>
      <div className="flex h-screen justify-center items-center bg-slate-500">
        <div className="bg-white rounded-md w-80 px-4  ">
          <div className="flex flex-col">
            <Heading label={"Sign up"} />
            <SubHeading text={"Enter your information to create an account"} />

            <InputBox label={"First Name"} placeholder={"John"} />
            <InputBox label={"Last Name"} placeholder={"Doe"} />
            <InputBox label={"Email"} placeholder={"johndoe@gmail.com"} />
            <InputBox label={"Password"} placeholder={""} />
            <Button text={"Sign up"} />
            <BottomWarning
              label={"Already have an account?"}
              linkText={"Sign in"}
              to={"/signin"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
