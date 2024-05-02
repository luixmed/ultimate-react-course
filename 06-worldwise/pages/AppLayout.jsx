import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import { AppLayoutStyled } from "./AppLayoutStyled";

function AppLayout() {
  return (
    <AppLayoutStyled>
      <Sidebar />
      <Map />
    </AppLayoutStyled>
  );
}

export default AppLayout;
