import NavBar from "../menu/Navbar";
import Menucomp from "./Menucomp";
import styles from "./page.module.css";
import Cart from "./Cart";

const Menu: React.FC = () => {
  return (
    <div className={styles.menuContainer}>
      <div>
        <div className={styles.menucomp}>
          <Menucomp /> 
        </div>
      </div>

    </div>
  );
};

export default Menu;
