import { SidebarTrigger } from "@/components/ui/shadcn/sidebar";
import Navbar_logo from "../Navbar_logo";

export function MobileHeader() {
  return (
    <div className="w-full h-[8vh] flex items-center justify-between bg-black text-white z-50">
      <Navbar_logo />
      <SidebarTrigger className="mr-5 z-10 cursor-pointer" />
    </div>
  );
}
