import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { create } from "../data/usersSlice";

function NewUser() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input onChange={(e) => setName(e.target.value)} />
      <button onClick={() => dispatch(create({ name }))}>Add</button>
    </div>
  );
}

export default NewUser;
