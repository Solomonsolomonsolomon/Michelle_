import { type } from "os";
import styles from "./step.module.css";

type stepProps = {
  page: "reviewOrder" | "placeOrder";
};

function Step({ page }: stepProps) {
  const stepClass = [styles.three];

  if (page === "reviewOrder") {
    stepClass.push(styles.white);
  } else if (page === "placeOrder") {
    stepClass.push(styles.red);
  }

  return (
    <div className={styles.step}>
      <div className={styles.stepItem}> 
        <div className={styles.number}>1</div>
        <div className={styles.text}>Cart</div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.stepItem}>
        <div className={styles.number}>2</div>
        <div className={styles.text}>Review Order</div>
      </div>
      <div className={styles.stepItem}>
        <div className={stepClass.join(" ")}>3</div>
        <div className={styles.text}>Place Order</div>
      </div>
    </div>
  );
}

export default Step;
