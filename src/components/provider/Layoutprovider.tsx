"use client";

import { useDispatch } from "react-redux";
import React, { useEffect, useRef } from "react";
import { useIsMobile } from "@/libs/hooks/use-mobile";
import Animate_header from "../animations/Animate_header";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { ProductDetails } from "@/types/products";
import { setHomepageProductsData } from "@/libs/redux/features/productsSlice";

import {
  setFooterData,
  setHeaderData,
  setRootLayoutData,
} from "@/libs/redux/features/rootLayoutSlice";
import { AnimationProvider } from "./Animationprovider";

const Layoutprovider = ({
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
        isAuthenticated={true}
      />
      <AnimationProvider>
        <main className="flex-1 overflow-hidden min-h-screen">
          <div className="mx-auto ">{children}</div>
        </main>
      </AnimationProvider>
      <Footer isMobile={isMobile} footerData={FooterData} />
      <Animate_header refObject={headerRef}></Animate_header>
    </>
  );
};

export default Layoutprovider;
