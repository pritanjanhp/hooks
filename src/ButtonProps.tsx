import React from "react";

const ButtonProps = ({
  title,
  disabled
}: {
  title: String;
  disabled: boolean;
}) =>
  {
    return (
      <>
        <h5>ButtonProps</h5>
        <button disabled={disabled}> {title} </button>
      </>
    );
  };

export default ButtonProps;
