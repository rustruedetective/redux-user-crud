import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: { list: [] },
  reducers: {
    create(state, action) {
      const el = {
        name: action.payload.name,
        id: state.list.length ? state.list[state.list.length - 1].id + 1 : 0,
      };
      state.list.push(el);
    },
    read(state, action) {
      return state.list.find((el) => el.id === action.payload.id);
    },
    update(state, action) {
      state.list.map((el) =>
        el.id === action.payload.id ? action.payload : el
      );
    },
    remove(state, action) {
      state.list = state.list.filter((el) => el.id !== action.payload.id);
    },
  },
});

export const { create, read, update, remove } = userSlice.actions;
export default userSlice.reducer;
