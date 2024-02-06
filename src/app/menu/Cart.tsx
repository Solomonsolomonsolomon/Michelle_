import styles from "./Cart.module.css";
import Button from "../component/Button";
import foods from "./food";
import * as Fa from "react-icons/fa";
import * as Fi from "react-icons/fi";
import Link from "next/link";

type cartType = {
  onClose?: () => void;
};

const Cart: React.FC<cartType> = ({ onClose }) => {
  let order = foods;

  if (order.length < 1) {
    return (
      <div className={styles.cardContainer}>
        <div className={styles.iconXContainer}>
          <img
            className={styles.iconX}
            alt=""
            src="/iconx.svg"
            onClick={onClose}
          />
        </div>

        <div className={styles.cart}>
          <div className={styles.imgAndCart}>
            <div>
              <img
                className={styles.cartImage}
                src="./Emptycart.png"
                alt="Empty-Cart"
              />
            </div>
            <div>
              <p>Your Shopping cart is empty</p>
            </div>
          </div>
          <div>
            <Button width={180}>Checkout</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.cardContainer}>
      <div className={styles.iconXContainer}>
        <img
          className={styles.iconX}
          alt=""
          src="/iconx.svg"
          onClick={onClose}
        />
      </div>

      <div className={styles.cart1}>
        <div className={styles.orderItemsWrapper}>
          <div className={styles.orderItem}>
            <div className={styles.orderItemTitle}>
              <div className={styles.close}>
                <Fa.FaTimes />
              </div>
              <div className={styles.titleContainer}>
                <div className={styles.title}>Jollof rice with sauce</div>
                <div className={styles.quantityContainer}>
                  <div className={styles.addQuantity}>
                    <Fi.FiPlusCircle />
                  </div>
                  <div className={styles.quantity}>2</div>
                  <div className={styles.reduceQuantity}>
                    <Fi.FiMinusCircle />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.orderItemAmount}>#5000</div>
          </div>
        </div>
        <div>
          <hr />
        </div>
        <div className={styles.fullPriceContainer}>
          <div className={styles.totalContainer}>
            <div> Subtotal</div>
            <div> #5000</div>
          </div>
          <div className={styles.totalContainer}>
            <div> Delivery Fees</div>
            <div> #450</div>
          </div>
          <div className={styles.totalContainer}>
            <div>Including VAT</div>
            <div> #355.48</div>
          </div>
          <div className={styles.totalContainer}>
            <div> Total </div>
            <div> #11558.9</div>
          </div>
        </div>
        <div className={styles.button}>
          {/* <Link
            href="/reviewOrder"
            onClick={(e) => {
              e.preventDefault();
              console.log("cart clicked");
            }}
          > */}
          <Button width={180}>Checkout</Button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Cart;
