import { Fragment, useEffect } from "react";
import SignUpForm from "../Components/Auth/SignUpForm";
import SignInForm from "../Components/Auth/SignInForm";
import "./../assets/styles/Auth/Auth.scss";

const Auth = () => {
  return (
    <div className="auth-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Auth;
