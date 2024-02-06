import { ReactNode } from "react";
import NavBar from "./Navbar";
import Cart from "./Cart";

interface MenuLayout {
  children?: ReactNode;
}
const Layout: React.FC<MenuLayout> = ({ children }) => {
  return (
    <>
      <div className="menuContainer">
        <div className="menuContent">
          <div className="nav-wrapper">
            <NavBar />
          </div>
          <main>{children}</main>
        </div>
        <div className="cartContainer">
          <Cart />
        </div>
      </div>
    </>
  );
};

export default Layout;
