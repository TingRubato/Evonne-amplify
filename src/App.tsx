import { useState } from "react";
import Home from "./Pages/Home";
import Menu from "./Components/Menu/Menu";
import Nav from "./Components/Nav/Nav";

function App() {
  const [showMenu, setShowMenu] = useState(""); // 控制菜单显示状态

  const toggleMenu = () => {
    setShowMenu(showMenu === "active" ? "" : "active");
  };

  return (
    <main>
      <Nav showMenu="" toggleMenu={toggleMenu} />
       <Menu showMenu={showMenu} toggleMenu={toggleMenu} />
      <Home />
    </main>
  );
}

export default App;
