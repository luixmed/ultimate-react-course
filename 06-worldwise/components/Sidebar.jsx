import { Outlet } from "react-router-dom";
import AppNavigation from "./AppNavigation";
import Logo from "./Logo";
import Footer from "./Footer";
import { SidebarStyles } from "./SidebarStyles";

function Sidebar() {
  return (
    <SidebarStyles>
      <Logo />
      <AppNavigation />
      <Outlet />
      <Footer />
    </SidebarStyles>
  );
}

export default Sidebar;
