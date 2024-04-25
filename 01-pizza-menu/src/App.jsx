import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import { Div } from "./AppStyled";

function App() {
  return (
    <Div className="container">
      <Header />
      <Menu />
      <Footer />
    </Div>
  );
}

export default App;
