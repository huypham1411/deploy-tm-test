import React, { lazy, Suspense } from "react";
// import Forget_pass from "../components/Forget_pass/Forget_pass";

const Forget_pass = lazy(()=>import('../components/Forget_pass/Forget_pass'));
const ForgetPass = () => {
  return (
    <div className="Forgot_pass">
      <Suspense fallback={<div/>}>
      <Forget_pass />
      </Suspense>
    </div>
  );
};

export default ForgetPass;
