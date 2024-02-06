import styles from "./SecondSection.module.css";
import Button from "../component/Button";

const SecondSection = () => {
  return (
    <div className={styles.SecondSection}>
      <form>
        <div className={styles.optionContainer}>
          <div className={styles.method}>
            <div className={styles.title}>
              <h2>Pick your payment methods</h2>
            </div>
            <div className={styles.options}>
              <div>
                <input
                  type="radio"
                  id="payWithCash"
                  name="payment_method"
                  value="Cash"
                />
                <label htmlFor="payWithCash">Pay with Cash</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="payWithPOS"
                  name="payment_method"
                  value="POS"
                />
                <label htmlFor="payWithPOS">Pay with POS</label>
              </div>
            </div>
          </div>
          <div>
            <hr />
          </div>
          <div className={styles.method}>
            <div className={styles.title}>
              <h2>Delivery or reserve</h2>
            </div>
            <div className={styles.options}>
              <div>
                <input
                  type="radio"
                  id="delivery"
                  name="delivery_or_reserve"
                  value="delivery"
                />
                <label htmlFor="delivery">Delivery</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="reserve"
                  name="delivery_or_reserve"
                  value="reserve"
                />
                <label htmlFor="reserve">Reserve</label>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.button}>
          <Button width={150}>CONFIRM ORDER</Button>
        </div>
      </form>
    </div>
  );
};

export default SecondSection;
