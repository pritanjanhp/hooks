// let idx = 0;
// function handleClick() {
//     idx = idx + 1
// }

// ! The handleClick event handler is updating a local variable, index. But two things prevent that change from being visible:
// i.  Local variables don’t persist between renders. When React renders this component a second time, it renders it from scratch—it doesn’t consider any changes to the local variables.
// ii. Changes to local variables won’t trigger renders. React doesn’t realize it needs to render the component again with the new data.

// ! To update a component with new data, two things need to happen:
// Retain the data between renders.
// Trigger React to render the component with new data(re - rendering).

// ! The useState Hook provides those two things:
// A state variable to retain the data between renders.
// A state setter function to update the variable and trigger React to render the component again.

// ! Every time component renders, useState gives us an array containing two values:
// i.  The state variable (index) with the value you stored.
// ii. The state setter function (setIndex) which can update the state variable and trigger React to render the component again.

// let [idx, setIdx] = useState(0); // change with let idx = 0;
// let handleClick = () => {
//   setIdx(idx + 1);
// };
