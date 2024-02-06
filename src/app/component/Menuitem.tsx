import styles from "./Menuitem.module.css";
import Button from "./Button";

type menuItemProps = {
  image: string;
  title: string;
  description: string;
  price: number;
};

const Menuitem: React.FC<menuItemProps> = ({
  image,
  title,
  description,
  price,
}) => {
  return (
    <div className={styles.page}>
      <div className={styles.menuItem}>
        <div className={styles.imageAndDescription}>
          <div className={styles.image}>
            <img className={styles.foodImage} src={image} alt="Jollofrice" />
          </div>
          <div className={styles.description}>
            <div className={styles.titleAndDescription}>
              <div>{title}</div>
              <div className={styles.secondaryText}>{description}</div>
            </div>
            <div className={styles.priceAndButton}>
              <div className={styles.price}>#{price}</div>
              <div className={styles.button2}>
                <Button width={130} height={30}>
                  Add to cart <img src="./Shoppingcart.png" alt="" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.button1}>
          <Button width={130} height={30}>
            {" "}
            Add to cart <img src="./Shoppingcart.png" alt="" />
          </Button>
        </div>
      </div>
      <hr className={styles.dash} />
    </div>
  );
};

export default Menuitem;
