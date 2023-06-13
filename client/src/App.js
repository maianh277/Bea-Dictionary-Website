import "./App.css";
import "./font/Manrope-VariableFont_wght.ttf";
import HeaderBefore from "./layout/header/HeaderBefore";
import Footer from "./layout/Footer";
import MyRoutes from "./route/MyRoutes";

function App() {
  return (
    <div className="bg-white-100">
      <HeaderBefore></HeaderBefore>
      <MyRoutes></MyRoutes>
      <Footer></Footer>
    </div>
  );
}
export default App;
