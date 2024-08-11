import React, { useContext } from "react";
// import { AppContext } from "./ContextCase1";
import { AppContext } from "..";

function Logins() {
  const { setUsername } = useContext(AppContext);

  return (
    <div>
      <input
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
    </div>
  );
}

export default Logins;