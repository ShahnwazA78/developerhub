import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./Signin.css";
const Signin = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const login = async () => {
    try {
      const body = {
        userName: userName,
        password: password,
      };

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      };

      const resp = await fetch("http://localhost:3302/Login", requestOptions);

      if (resp.status === 200) {
        // alert("login success");
        navigate("/admin/dashboard");
      } else if (resp.status === 401) {
        alert("Please Enter Details for Login");
      } else if (resp.status === 402) {
        alert("Incorrect Details");
      } else if (resp.status === 403) {
        alert("Incorrect Password");
      }
    } catch (error) {
      console.log("error=>", error);
      alert("error");
    }
  };

  return (
    <section
      className=" signContainer h-screen "
      style={{ background: "white" }}
    >
      <div className="container px-6 py-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image"
            />
          </div>
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <form>
              {/* Email input */}
              <div className="mb-6">
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="User Name"
                />
              </div>
              {/* Password input */}
              <div className="mb-6">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                />
              </div>
              <div className="flex justify-between items-center mb-6">
                {/* <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" id="exampleCheck3" defaultChecked />
                    <label className="form-check-label inline-block text-gray-800">Remember me</label>
                  </div> */}
                <Link to="/forgot">
                  {" "}
                  <a className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out">
                    Forgot password?
                  </a>
                </Link>
                <Link to="/form">
                  {" "}
                  <a className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out">
                    Sign Up
                  </a>
                </Link>
              </div>
              {/* Submit button */}
              <Button onClick={() => login()} variant="contained" fullWidth>
                Sign In
              </Button>
              <div className="justify-center flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
