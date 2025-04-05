import { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Menu from "./Components/Menu/Menu";
import SpeakingPage from "./Pages/SpeakingPage";
import UpsellPage from "./Pages/UpsellPage";
import Nav from "./Components/Nav/Nav";

function App() {
  const [showMenu, setShowMenu] = useState(""); // 控制菜单显示状态

  const toggleMenu = () => {
    setShowMenu(showMenu === "active" ? "" : "active");
  };

  return (
    <main>
      <BrowserRouter>
      <Nav showMenu="" toggleMenu={toggleMenu} />
      <Menu showMenu={showMenu} toggleMenu={toggleMenu} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/speakings" element={<SpeakingPage />} />
        <Route path="/upsell" element={<UpsellPage />} />
      </Routes>
      </BrowserRouter>
      </main>
  );
}

export default App;
