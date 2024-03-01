import "./App.css";
import AppRoutes from "./routes/routes";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Sidebar } from "./Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className="sideBar">
        <Sidebar></Sidebar>
        <AppRoutes></AppRoutes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
