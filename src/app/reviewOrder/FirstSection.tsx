import styles from "./FirstSection.module.css";
import * as Fa from "react-icons/fa";
import * as Fi from "react-icons/fi";
import Button from "../component/Button";

const cart = [
  {
    image: "/Ofadawithsauce.jpg",
    title: "Ofada with sauce",
    price: "#8000",
    quantity: "2",
  },
  {
    image: "/Ofadawithsauce.jpg",
    title: "Ofada with sauce",
    price: "#8000",
    quantity: "2",
  },
];

const FirstSection = () => {
  return (
    <div className={styles.firstSection}>
      <div>
        {cart.map((item, index) => {
          return (
            <div key={index} className={styles.cartItem}>
              <div className={styles.foodDetail}>
                <div>
                  <Fa.FaTimes />
                </div>
                <div className={styles.image}>
                  <img src={item.image} alt="Ofadawithsauce" />
                </div>
                <div className={styles.title}>
                  <p>{item.title}</p>
                </div>
                <div className={styles.price}>
                  <p>{item.price}</p>
                </div>
              </div>
              <div>
                <div className={styles.quantityContainer}>
                  <div className={styles.addQuantity}>
                    <Fi.FiPlusCircle />
                  </div>
                  <div className={styles.quantity}>{item.quantity}</div>
                  <div className={styles.reduceQuantity}>
                    <Fi.FiMinusCircle />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <hr />
      </div>
      <div className={styles.fees}>
        <div className={styles.feesWrapper}>
          <div className={styles.feesContainer}>
            <div>Subtotal</div>
            <div>#8000</div>
          </div>
          <div className={styles.feesContainer}>
            <div>Delivery fees</div>
            <div>#450</div>
          </div>
          <div className={styles.feesContainer}>
            <div>Including VAT</div>
            <div>#355.81</div>
          </div>
          <div className={styles.feesContainer}>
            <div>Total</div>
            <div>#11432.99</div>
          </div>
        </div>
        <div className={styles.voucherWrapper}>
          <div className={styles.inputWrapper}>
            <input type="text" placeholder="Voucher" />
          </div>
          <div>
            <Button>APPLY</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
