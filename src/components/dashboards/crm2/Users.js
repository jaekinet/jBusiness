import React, { useContext } from "react";
// import { AppContext } from "./ContextCase1";
import { AppContext } from ".";

const Users = () => {
  const { username } = useContext(AppContext);

  return (
    <div>
      <h1>User: {username}</h1>
    </div>
  );
}

export default Users;