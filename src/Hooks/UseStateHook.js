import React, { useState } from "react";

function UseStateHook() {
  const [Count, setCount] = useState(0);
  return (
    <div>
      {/* useState hook is use to storte data and variable. */}

      <h1> UseStateHook</h1>
      <button onClick={() => setCount((pre) => pre + 1)}>Count {Count}</button>
    </div>
  );
}

export default UseStateHook;
