import React from "react";
import "../../styles/sass/components/Header.scss";
import { MobileHeader } from "@/components/ui/tailwindcss/Navbar/Mobile/Navbar_mobile";
import { AppSidebar } from "../ui/tailwindcss/Navbar/Mobile/Navbar_mobile_sidebar";
import { SidebarProvider } from "../ui/shadcn/sidebar";
import Navbar_desktop from "../ui/tailwindcss/Navbar/Desktop/Navbar_desktop";
import Navbar_logo from "../ui/tailwindcss/Navbar/Navbar_logo";

interface HeaderProps {
  isMobile: boolean;
  headerData: HeaderData;
  refObject: React.RefObject<HTMLDivElement | null>;
}
const Header = ({ refObject, isMobile, headerData }: HeaderProps) => {
  return (
    <header className="Header" ref={refObject}>
      {isMobile ? (
        // Phone version
        // Phone version
        // Phone version
        <div className="Header__phone">
          <SidebarProvider defaultOpen={false} className="relative">
            <AppSidebar headerData={headerData} />
            <MobileHeader />
          </SidebarProvider>
        </div>
      ) : (
        // Desktop version
        // Desktop version
        // Desktop version
        <div className="Header__desktop z-100 bg-border">
          <Navbar_logo
            alt={headerData.header_Logo.alt}
            href={headerData.header_Logo.href}
          />

          <Navbar_desktop
            navbarData={headerData.navbar}
            isAuthenticated={true}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
