import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import usersSlice from "./usersSlice";

const store = configureStore({
  reducer: { users: usersSlice },
});

function ReduxStore({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default ReduxStore;
