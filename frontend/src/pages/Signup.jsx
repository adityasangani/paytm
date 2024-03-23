import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <div className="flex h-screen justify-center items-center bg-slate-500">
        <div className="bg-white rounded-md w-80 px-4  ">
          <div className="flex flex-col">
            <Heading label={"Sign up"} />
            <SubHeading text={"Enter your information to create an account"} />

            <InputBox
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              label={"First Name"}
              placeholder={"John"}
            />
            <InputBox
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              label={"Last Name"}
              placeholder={"Doe"}
            />
            <InputBox
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              label={"Email"}
              placeholder={"johndoe@gmail.com"}
            />
            <InputBox
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              label={"Password"}
              placeholder={""}
            />
            <Button
              onClick={async () => {
                const response = await axios.post(
                  "http://localhost:3000/api/v1/user/signup",
                  {
                    firstName,
                    lastName,
                    username,
                    password,
                  }
                );
                localStorage.setItem("token", response.data.token);
                navigate("/dashboard");
              }}
              text={"Sign up"}
            />
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
