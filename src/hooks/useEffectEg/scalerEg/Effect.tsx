import React, { useState, useEffect } from "react";

const Effect = () => {
  const [msg, setMsg] = useState("Hi how are you");

  useEffect(() => {
    console.log("trigger use effect hook");
    setTimeout(() => {
      setMsg("I am fine");
    });
  }, 100);

  return (
    <>
      <h1>{msg}</h1>
    </>
  );
};

export default Effect;

