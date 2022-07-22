import React from "react";
import { useDispatch } from "react-redux";

import { remove } from "../data/usersSlice";

function User({ name, id }) {
  const dispatch = useDispatch();

  return (
    <div>
      <p>{name}</p>
      <div>
        <input />
      </div>
      <button onClick={() => dispatch(remove({ id }))}>Delete</button>
      <button onClick={() => {}}>Update</button>
    </div>
  );
}

export default User;
