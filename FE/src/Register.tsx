import React, { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { createUser } from "./api/userAPI";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-200">
      <div className="flex justify-center bg-white p-10 border-[0px] shadow-lg">
        <Card
          className="flex justify-center"
          color="transparent"
          shadow={false}
        >
          <Typography variant="h4" color="blue-gray">
            Sign Up
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Nice to meet you! Enter your details to register.
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Email
              </Typography>
              <Input
                crossOrigin={1}
                size="lg"
                placeholder="name@mail.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 py-2 pl-2 rounded-md"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>

            <div className="flex gap-5 my-10">
              <Checkbox
                crossOrigin={1}
                //   label={}
                containerProps={{ className: "-ml-2.5" }}
              />
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal "
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            </div>

            <Button
              className="mt-6 text-black border py-2"
              onClick={() => {
                createUser({ email }).then((res) => {
                  console.log(res);

                  localStorage.setItem("email", JSON.stringify(res?.email));

                  navigate("/upgrade");
                });
              }}
              fullWidth
            >
              Register
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <a href="#" className="cursor-pointer font-medium text-gray-900">
                Sign In
              </a>
            </Typography>
          </form>
        </Card>
      </div>
    </div>
  );
};
