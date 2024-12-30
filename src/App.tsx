import React from "react";
import ButtonProps from "./ButtonProps.tsx";
import UseEffectEg from "./UseEffectEg.tsx";
import ChatApp from "./chatt/ChatApp.jsx";
import Browser from "./browserEvent/Browser.jsx";

const App = () => {
  return (
    <>
      <h1>App</h1>
      {/* <h1 className="text-3xl font-bold underline text-red-600">
        Simple React TypeScript Tailwind Sample
      </h1> */}
      {/* <ButtonProps title="typescript" disabled={true} /> */}
      {/* <UseEffectEg /> */}

      {/* connecting to chat server */}
      <ChatApp />

      {/* {Listening to a global browser event } */}
      <Browser />

      {/* Triggering animanation */}
        {/* useRef is used */}

    </>
  );
};

export default App;

