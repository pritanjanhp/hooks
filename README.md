# Getting Started with Create React App

## useState() > useEffect() > useRef() >  useReducer() > useContext() > useCallback > useMemo() > customHooks()


## useEffect()

In React, useEffect is a Hook that allows you to perform side effects in function components. /
It is a part of the React API and is used to handle operations like data fetching, subscriptions, or manual DOM manipulation. /
It is similar to lifecycle methods in class components, such as componentDidMount, componentDidUpdate, and componentWillUnmount.

### Syntax of useEffec

useEffect(() => { \
 // Code to run on component mount, update, or unmount \
}, [dependencies]); \

Effect function: The function inside useEffect runs after the component renders. It's where side effects are performed. \

Dependency array (optional): The second argument is an optional array of dependencies. The effect will only run when the values inside the dependency array change. If the array is empty, the effect only runs once, similar to componentDidMount. \

## Examples:
### 1.Running an effect on component mount:

import React, { useEffect } from 'react'; \

const MyComponent = () => { \ 
  useEffect(() => {  \
    console.log('Component mounted!'); \
  }, []); // Empty array means this effect runs once when the component mounts \

  return <div>Welcome to my component!</div>; \
}; \


### 2. Running an effect on state or props change:

import React, { useState, useEffect } from 'react'; \

const MyComponent = () => { \
  const [count, setCount] = useState(0); \

  useEffect(() => { \
    console.log(`Count changed: ${count}`); \
  }, [count]); // Runs every time `count` changes \

  return ( \
    <div> \
      <button onClick={() => setCount(count + 1)}>Increment</button> \
    </div> \
  ); \
}; \

### 3. Cleaning up side effects:
When side effects involve subscriptions or timers, it's important to clean them up to prevent memory leaks. This can be done by returning a cleanup function from within the useEffect \

import React, { useState, useEffect } from 'react'; \

const TimerComponent = () => { \
  const [time, setTime] = useState(0);\
 
  useEffect(() => { \
    const interval = setInterval(() => {    \
      setTime(prevTime => prevTime + 1);    \
    }, 1000); \

    // Cleanup function: clear the interval when component unmounts \
    return () => clearInterval(interval);\
  }, []); // Empty array means effect runs once on mount\

  return <div>Time: {time}</div>;\
};\


#### Summary of useEffect Behavior:
Without dependencies (useEffect(() => {...})): Effect runs after every render. \
With empty dependencies (useEffect(() => {...}, [])): Effect runs only once after the initial render, like componentDidMount. \
With dependencies (useEffect(() => {...}, [dep])): Effect runs when any value in the dependency array changes, like componentDidUpdate. \

### hooks