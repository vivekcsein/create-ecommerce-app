"use client";

import {
  setFooterData,
  setHeaderData,
  setRootLayoutData,
} from "@/libs/redux/features/rootLayoutSlice";
import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { useIsMobile } from "@/libs/shadcn/hooks/use-mobile";
import Header_animation from "../animations/Header_animation";

const LayoutProvider = ({
  rootLayoutData,
  children,
}: {
  rootLayoutData: rootLayoutData;
  children: React.ReactNode;
}) => {
  const isMobile = useIsMobile();
  const dispatch = useDispatch();
  const headerRef = useRef<HTMLDivElement>(null);
  const { HeaderData, FooterData } = rootLayoutData;
  useEffect(() => {
    dispatch(setRootLayoutData(rootLayoutData));
    dispatch(setHeaderData(HeaderData));
    dispatch(setFooterData(FooterData));
    return () => {};
  }, [dispatch, rootLayoutData, HeaderData, FooterData]);

  return (
    <>
      <Header
        isMobile={isMobile}
        headerData={HeaderData}
        refObject={headerRef}
      />
      {children}
      <Footer isMobile={isMobile} />
      <Header_animation refObject={headerRef}></Header_animation>
    </>
  );
};

export default LayoutProvider;
