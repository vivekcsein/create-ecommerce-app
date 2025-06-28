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
import { ProductDetails } from "@/types/products";
import { setHomepageProductsData } from "@/libs/redux/features/productsSlice";

const LayoutProvider = ({
  rootLayoutData,
  homepageProductsData,
  children,
}: {
  rootLayoutData: rootLayoutData;
  homepageProductsData: ProductDetails[];
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

  useEffect(() => {
    dispatch(setHomepageProductsData(homepageProductsData));
    return () => {};
  }, [dispatch, homepageProductsData]);

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
