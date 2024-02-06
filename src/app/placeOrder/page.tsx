import styles from "./page.module.css";
import Step from "../component/step";
import DeliveryAddress from "./DeliveryAddress";
import ContactDetails from "./ContactDetails";

const placeOrder = () => {
  return (
    <div className={styles.placeOrder}>
      <div className={styles.step}>
        <Step page="placeOrder"></Step>
      </div>
      <div className={styles.deliveryAddress}>
        <DeliveryAddress/>
      </div>
      <div>
        <ContactDetails/>
      </div>
    </div>
  );
};

export default placeOrder;
