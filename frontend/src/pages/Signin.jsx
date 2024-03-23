import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function submitSignin() {
    await axios.post("http://localhost:3000/api/v1/user/signin", {
      username,
      password,
    });
    navigate("/dashboard");
  }

  return (
    <>
      <div className="flex h-screen justify-center items-center bg-slate-500">
        <div className="bg-white rounded-md w-80 px-4  ">
          <div className="flex flex-col">
            <Heading label={"Sign in"} />
            <SubHeading
              text={"Enter your information to sign in to your account"}
            />

            <InputBox
              label={"Email"}
              placeholder={"johndoe@gmail.com"}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <InputBox
              label={"Password"}
              placeholder={""}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Button text={"Sign in"} onClick={submitSignin} />
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
