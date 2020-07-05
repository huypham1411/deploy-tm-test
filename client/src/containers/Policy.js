import React, { lazy, Suspense } from "react";
// import Text from "../../src/components/Policy/Text.js";

const Text = lazy (()=> import('../../src/components/Policy/Text.js'));
const Policy = () => {
    return (
      <div className="Policy">
        <Suspense fallback={<div/>}>
          <Text/>
        </Suspense>
      </div>
    );
  };

  export default Policy;