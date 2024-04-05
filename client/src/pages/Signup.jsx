import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="min-h-screen mt-20">
      <div className=" gap-5 flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className=" font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Ashim's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            You can sign up with your email and password or with Google
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4 ">
            <div >
              <Label value="Your Username"/>
              <TextInput placeholder="Username" type="text" id="username" />
            </div>
            <div >
              <Label value="Your Email"/>
              <TextInput placeholder="Email" type="text" id="email" />
            </div>
            <div >
              <Label value="Your Password"/>
              <TextInput placeholder="Password" type="text" id="password" />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit'>SignUp</Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            Already have an account?;
            <Link to="/signin">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
