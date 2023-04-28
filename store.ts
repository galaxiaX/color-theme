import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ColorState {
  value: string;
}

const initialState: ColorState = {
  value: "#3766ff",
};

const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    setColor: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setColor } = colorSlice.actions;

export const store = configureStore({
  reducer: {
    color: colorSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
