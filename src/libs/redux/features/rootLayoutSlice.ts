import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { envRootLayoutConfig } from "@/libs/configs/config.env";
const URL = envRootLayoutConfig.rootLayoutAPI as string;

export const fetchRootLayout = createAsyncThunk(
  "rootLayout/fetchRootLayout",
  async () => {
    const response = await axios.get(URL, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      withCredentials: true,
    });
    return response.data;
  }
);

type stateType = {
  rootLayoutData: rootLayoutData | null;
  headerData: HeaderData | null;
  footerData: FooterData | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: Error | null;
};

const initialState: stateType = {
  rootLayoutData: null,
  headerData: null,
  footerData: null,
  status: "idle",
  error: null,
};

const rootLayoutSlice = createSlice({
  name: "rootLayout",
  initialState,
  reducers: {
    setRootLayoutData: (state, action) => {
      if (action.payload) {
        state.rootLayoutData = action.payload;
      }
    },
    setHeaderData: (state, action) => {
      if (action.payload) {
        state.headerData = action.payload;
      }
    },
    setFooterData: (state, action) => {
      if (action.payload) {
        state.footerData = action.payload;
      }
    },
  },
  extraReducers: async (builder) => {
    if (!URL) {
      return builder;
    }
    builder
      .addCase(fetchRootLayout.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRootLayout.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.rootLayoutData = action.payload.rootLayoutData;
        state.headerData = action.payload.rootLayoutData.HeaderData;
        state.footerData = action.payload.rootLayoutData.FooterData;
      })
      .addCase(fetchRootLayout.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error as Error;
        console.error("Error fetching root layout data:", action.error);
      });
  },
});

export const { setRootLayoutData, setHeaderData, setFooterData } =
  rootLayoutSlice.actions;

export default rootLayoutSlice.reducer;
