import Sidebar from "../components/Sidebar";
import { AppLayoutStyled } from "./AppLayoutStyled";

function AppLayout() {
  return (
    <AppLayoutStyled>
      <Sidebar />
    </AppLayoutStyled>
  );
}

export default AppLayout;
