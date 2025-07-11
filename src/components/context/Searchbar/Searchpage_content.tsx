"use client";
import React, { useEffect } from "react";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "@/libs/redux/store";
import { UnknownAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { startSearching } from "@/libs/redux/features/searchFeatureSlice";

interface Searchpage_contentProps {
  query: string;
}

const Searchpage_content = ({ query }: Searchpage_contentProps) => {
  const searchFeature = useSelector((state: RootState) => state.searchFeature);
  const data = searchFeature.outputSearchData;
  type AppDispatch = ThunkDispatch<RootState, string, UnknownAction>;
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

  // if (data.length == 1) {
  //   return <Product_mainPage item={data[0]} />;
  // }

  // return <Product_searchList itemList={data} />;
};

export default Searchpage_content;
