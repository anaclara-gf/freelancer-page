import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import data from "../data/freelancers.json";

interface DataState {
  freelancers: Freelancer[];
  searchInput: string;
}

const initialState: DataState = {
  freelancers: data.freelancers,
  searchInput: "",
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    defineFreelancers: (state, action: PayloadAction<Freelancer[]>) => {
      state.freelancers = action.payload;
    },
    defineSearchInput: (state, action: PayloadAction<string>) => {
      state.searchInput = action.payload;
    },
    resetState: (state) => {
      state.freelancers = initialState.freelancers;
      state.searchInput = initialState.searchInput;
    },
  },
});

export const { defineFreelancers, defineSearchInput, resetState } =
  dataSlice.actions;

export default dataSlice.reducer;
