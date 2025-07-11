"use client";
import { Command } from "cmdk";
import Searchbar_Item from "./Searchbar_Item";
import { RootState } from "@/libs/redux/store";
import React, { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
import { fetchTrendingSearches } from "@/libs/redux/features/searchFeatureSlice";

const Searchbar_TrendingList = () => {
  const searchFeature = useSelector((state: RootState) => state.searchFeature);
  type AppDispatch = ThunkDispatch<RootState, string[], UnknownAction>;
  const dispatch: AppDispatch = useDispatch();
  const searchQuery = searchFeature.searchQuery || "";
  const searchStatus = searchFeature.searchStatus;

  useLayoutEffect(() => {
    if (!searchFeature.trendingSearches?.length) {
      dispatch(fetchTrendingSearches());
    }

    return () => {};
  }, [dispatch, searchFeature.trendingSearches?.length]);

  if (!searchFeature.trendingSearches?.length) {
    return null;
  }
  return (
    <Command.List className="px-3">
      {searchStatus === "thinking" && !searchQuery.trim() ? (
        <>
          <Command.Empty className="text-center text-muted">
            No results found.
          </Command.Empty>
          <Command.Group
            heading="Recent Trends..."
            className=" text-center text-foreground  my-2 rounded-md "
          >
            {searchFeature.trendingSearches.slice(0, 5).map((item, index) => (
              <Searchbar_Item key={index} item={item} />
            ))}
          </Command.Group>
        </>
      ) : null}
    </Command.List>
  );
};

export default Searchbar_TrendingList;
