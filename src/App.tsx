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
import CounterRed from "./hooks/useReducerEg/CounterRed.tsx";
import Form from "./hooks/useReducerEg/Form.tsx";
import TodoArray from "./hooks/useReducerEg/todoListArray/TodoArray.tsx";
import TodoInitializaer from "./hooks/useReducerEg/TodoInitializaer.jsx";
import MyApp from "./hooks/usecontext/myApp/tmp.tsx";
import Eg2 from "./hooks/usecontext/Eg2.jsx";
import TaskApp from "./hooks/usecontext/Eg/TaskApp.jsx";
import ToggleTheme from "./hooks/usecontext/toggleTheme/ToggleTheme.jsx";
import CounterCustom from "./hooks/customhooks/CounterCustom.jsx";

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

      {/* useReducer */}
      {/* <CounterRed /> */}
      {/* <Form /> */}
      {/* <TodoArray /> */}
      {/* <TodoInitializaer username={"Ram"} /> */}

      {/* useContext */}
      {/* <MyApp /> */}
      {/* <Eg2 /> */}
      {/* <TaskApp /> */}
      {/* <ToggleTheme /> */}

      {/* custom hooks */}
      <CounterCustom />
    </>
  );
};

export default App;
