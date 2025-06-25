"use client";

import {
  setFooterData,
  setHeaderData,
  setRootLayoutData,
} from "@/libs/redux/features/rootLayoutSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
const LayoutProvider = ({
  rootLayoutData,
  children,
}: {
  rootLayoutData: rootLayoutData;
  children: React.ReactNode;
}) => {
  const dispatch = useDispatch();
  const { HeaderData, FooterData } = rootLayoutData;
  useEffect(() => {
    dispatch(setRootLayoutData(rootLayoutData));
    dispatch(setHeaderData(HeaderData));
    dispatch(setFooterData(FooterData));
    return () => {};
  }, [dispatch, rootLayoutData, HeaderData, FooterData]);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LayoutProvider;
