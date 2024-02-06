import styles from "./Third-section.module.css";
import Button from "../component/Button";
import Link from "next/link";

const ThirdSection: React.FC = () => {
  return (
    <div className={styles.body}>
      <div className={styles.firstText}>
        <h3>THE BEST OF THE BEST</h3>
      </div>
      <div className={styles.secondText}>
        <h1>ALL DAY AND EVERDAY</h1>
      </div>
      <div className={styles.thirdText}>
        <p>
          Delight in our food delivery service, ranked among the country's
          finest.
        </p>
        <p>
          Experience the Platter, savor the Rice Royale, and refresh with the
          Drinks Fiesta.
        </p>
      </div>
      <div className={styles.button}>
        {/* <Link href={"/menu"} >
          {" "} */}
          <Button children="CHECK OUT OUR MENU" />{" "}
        {/* </Link> */}
      </div>
    </div>
  );
};

export default ThirdSection;
