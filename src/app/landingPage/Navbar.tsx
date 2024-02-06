import Link from "next/link";
import styles from "./Navbar.module.css";

const NavBar: React.FC = () => {
  return (
    <nav className={styles.menu}>
      <div className={styles.menuList}>
        <ul>
          <li className={styles.menuItem}>
            <a href={"/"}>
              <div className={styles.menuItemContent}>
                <div className={styles.itemIcon}>
                  <img
                    className={styles.icon}
                    src="/rice-bowl.png"
                    alt="rice-bowl"
                  />
                </div>
                <span className={styles.itemTitle}>Meals</span>
              </div>
            </a>
          </li>
          <li className={styles.menuItem}>
            <a href={"/"}>
              <div className={styles.menuItemContent}>
                <div className={styles.itemIcon}>
                  <img
                    className={styles.icon}
                    src="/Mandazi.png"
                    alt="swallow"
                  />
                </div>
                <span className={styles.itemTitle}>Swallow</span>
              </div>
            </a>
          </li>
          <li className={styles.menuItem}>
            <a href={"/"}>
              <div className={styles.menuItemContent}>
                <div className={styles.itemIcon}>
                  <img
                    className={styles.icon}
                    src="/Barbecue.png"
                    alt="protein"
                  />
                </div>
                <span className={styles.itemTitle}>Protein</span>
              </div>
            </a>
          </li>

          <li className={styles.menuItem}>
            <a href={"/"}>
              <div className={styles.menuItemContent}>
                <div className={styles.itemIcon}>
                  <img className={styles.icon} src="/Salad.png" alt="salad" />
                </div>
                <span className={styles.itemTitle}>Salad</span>
              </div>
            </a>
          </li>

          <li className={styles.menuItem}>
            <a href={"/"}>
              <div className={styles.menuItemContent}>
                <div className={styles.itemIcon}>
                  <img className={styles.icon} src="/Soup.png" alt="soup" />
                </div>
                <span className={styles.itemTitle}>Pepper Soup</span>
              </div>
            </a>
          </li>

          <li className={styles.menuItem}>
            <a href={"/"}>
              <div className={styles.menuItemContent}>
                <div className={styles.itemIcon}>
                  <img className={styles.icon} src="/beer.png" alt="drink" />
                </div>
                <span className={styles.itemTitle}>Drinks</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
