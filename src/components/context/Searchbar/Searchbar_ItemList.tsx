"use client";
import { RootState } from "@/libs/redux/store";
import { Command } from "cmdk";
import React, { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Searchbar_Item from "./Searchbar_Item";
import { ThunkDispatch } from "redux-thunk";
import { UnknownAction } from "@reduxjs/toolkit";

import { fetchAllSearchData } from "@/libs/redux/features/searchFeatureSlice";

const Searchbar_ItemList = () => {
  const searchFeature = useSelector((state: RootState) => state.searchFeature);
  // const dispatch = useDispatch();
  type AppDispatch = ThunkDispatch<RootState, string[], UnknownAction>;
  const dispatch: AppDispatch = useDispatch();
  const searchQuery = searchFeature.searchQuery || "";
  const searchStatus = searchFeature.searchStatus;

  useLayoutEffect(() => {
    if (!searchFeature.fetchSearchData?.length) {
      dispatch(fetchAllSearchData());
    }

    return () => {};
  }, [dispatch, searchFeature.fetchSearchData?.length]);

  if (!searchFeature.fetchSearchData?.length) {
    return null;
  }

  return (
    <Command.List className="px-3 text-foreground">
      {searchStatus === "typing" && searchQuery.trim() ? (
        <>
          <Command.Empty className="text-center">
            No results found.
          </Command.Empty>
          <Command.Group
            heading="You Search..."
            className=" text-center my-2 rounded-md"
          >
            {searchFeature.fetchSearchData.slice(0, 5).map((item, index) => (
              <Searchbar_Item key={index} item={item} />
            ))}
          </Command.Group>
        </>
      ) : null}
    </Command.List>
  );
};

export default Searchbar_ItemList;
