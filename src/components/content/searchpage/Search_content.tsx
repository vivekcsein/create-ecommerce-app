"use client";
import { startSearching } from "@/libs/redux/features/searchFeatureSlice";
import { RootState } from "@/libs/redux/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Productpage from "../Productpage/Productpage";
import ProductsList from "../Productpage/ProductsList";
import { ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";

interface Search_contentProps {
  query: string;
}
const Search_content = ({ query }: Search_contentProps) => {
  const searchFeature = useSelector((state: RootState) => state.searchFeature);
  const data = searchFeature.outputSearchData;
  type AppDispatch = ThunkDispatch<RootState, string[], UnknownAction>;
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(startSearching(query));
    return () => {};
  }, [query, dispatch]);

  if (searchFeature.searchStatus === "querying") {
    return <>Loading data...</>;
  }

  if (!data?.length) {
    return <h3>No data found related your query {query}</h3>;
  }

  if (data.length == 1) {
    return <Productpage item={data[0]} />;
  }

  return <ProductsList productList={data} />;
};
export default Search_content;
