import React, { useState } from "react";

const FormCrach = () => {
  const [isSent, setIsSent] = useState(false);
  const [msg, setMsg] = useState("");

  if (isSent)
    return (
      <>
        <h1>{msg}</h1>
        <h3>THank you!</h3>
      </>
    );
    
  else {
    return (
      <>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert(`Sending: "${msg}"`);
            setIsSent(true);
          }}
        >
          <textarea
            placeholder="enter your message here"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          <br />
          <button type="submit">click here</button>
        </form>
      </>
    );
  }
};

export default FormCrach;
