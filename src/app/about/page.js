"use client";

import React, { useState } from "react";

const page = () => {
  const [counter, setcounter] = useState(0);

  const handdleAdd = () => {};
  const handllSubtract = () => {};

  return (
    <div>
      git add <p>Our new page route.</p>
      <p>{0}</p>
      <button onClick={handdleAdd}>Increment +</button>
      <button onClick={handllSubtract}>Decrement -</button>
    </div>
  );
};

export default page;
