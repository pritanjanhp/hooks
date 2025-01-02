import React from "react";
import ButtonProps from "./ButtonProps.tsx";
import UseEffectEg from "./UseEffectEg.tsx";
import ChatApp from "./hooks/useEffectEg/chatt/ChatApp.jsx";
import Browser from "./hooks/useEffectEg/browserEvent/Browser.jsx";
import Scultpure from "./hooks/useStateEg/scultpure/Scultpure.jsx";
import FormInput from "./hooks/useStateEg/formInput/FormInput.js";
import FormCrach from "./hooks/useStateEg/formInput/FormCrach.tsx";
import Effect from "./hooks/useEffectEg/scalerEg/Effect.tsx";
import FetchBio from "./hooks/useEffectEg/fetchbio/FetchBio.jsx";
import Counter from "./hooks/useEffectEg/Counter.jsx";
import CounterRef from "./hooks/useRefEg/CounterRef.jsx";
import Stopwatch from "./hooks/useRefEg/Stopwatch.tsx";
import FocusText from "./hooks/useRefEg/domManipulationEg/FocusText.tsx";
import ImageScroll from "./hooks/useRefEg/domManipulationEg/ImageScroll.tsx";
import PlayPause from "./hooks/useRefEg/domManipulationEg/PlayPause.tsx";

const App = () => {
  return (
    <>
      <h1>App</h1>

      {/* useState Eg */}

      {/* <Scultpure /> */}
      {/* <FormInput /> */}
      {/* <FormCrach /> */}

      {/* <h1 className="text-3xl font-bold underline text-red-600">
        Simple React TypeScript Tailwind Sample
      </h1> */}
      {/* <ButtonProps title="typescript" disabled={true} /> */}

      {/* <UseEffectEg /> */}

      {/* connecting to chat server */}
      {/* <ChatApp /> */}

      {/* {Listening to a global browser event } */}
      {/* <Browser /> */}

      {/* Triggering animanation */}
      {/* useRef is used */}

      {/* <Effect /> */}

      {/* <FetchBio /> */}
      {/* <Counter /> */}

      {/* useRef */}
      {/* <CounterRef /> */}
      {/* <Stopwatch /> */}
      {/* <FocusText /> */}
      {/* <ImageScroll /> */}
      {/* <PlayPause /> */}
    </>
  );
};

export default App;
