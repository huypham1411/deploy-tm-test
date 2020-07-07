import React, { lazy, Suspense } from "react";
// import Forget_pass from "../components/Forget_pass/Forget_pass";

const Forgetpass = lazy(()=>import('../components/Forget pass/ForgetPass'));
const ForgetPass = () => {
  return (
    <div className="Forgot_pass">
      <Suspense fallback={<div/>}>
      <Forgetpass />
      </Suspense>
    </div>
  );
};

export default ForgetPass;
