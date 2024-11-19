"use client";

import React, { useState } from "react";

const page = () => {
  const [counter, setcounter] = useState(0);

  const handdleAdd = () => {
    setcounter(counter+1)
  };
  const handllSubtract = () => {
    setcounter(counter-1)
  };

  return (
    <div>
      git add <p>Our new page route.</p>
      <p>{counter}</p>
      <button onClick={handdleAdd}>Increment +</button>
      <button onClick={handllSubtract}>Decrement -</button>
    </div>
  );
};

export default page;
