import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { envAPI_LAYOUT_API } from "@/libs/configs/config.env";
import { ProductDetails } from "@/types/products";
const URL = envAPI_LAYOUT_API.homepageProuctsAPI as string;

export const fetchHomePageData = createAsyncThunk(
  "homepageProductsData/fetchHomePageData",
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
  homepageProductsData: Array<ProductDetails> | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: Error | null;
};

const initialState: stateType = {
  homepageProductsData: null,
  status: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "homepageProductsData",
  initialState,
  reducers: {
    setHomepageProductsData: (state, action) => {
      if (action.payload) {
        state.homepageProductsData = action.payload;
      }
    },
  },
  extraReducers: async (builder) => {
    if (!URL) {
      return builder;
    }
    builder
      .addCase(fetchHomePageData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchHomePageData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.homepageProductsData = action.payload.productList;
      })
      .addCase(fetchHomePageData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error as Error;
        console.error("Error fetching root layout data:", action.error);
      });
  },
});

export const { setHomepageProductsData } = productsSlice.actions;

export default productsSlice.reducer;
