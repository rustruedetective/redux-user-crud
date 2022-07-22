import React from "react";
import { useSelector } from "react-redux";
import User from "./User";

function Users() {
  const users = useSelector((state) => state?.users?.list);

  return (
    <div>
      {users.map((el) => (
        <div key={el.id}>
          <User name={el?.name} id={el.id} />
        </div>
      ))}
    </div>
  );
}

export default Users;
