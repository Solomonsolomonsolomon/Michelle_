import styles from "./Card.module.css";
import Button from "./Button";

interface ProductCardProps {
  title: string;
  image: string;
  cardType: "price1" | "price2",
  descriptionList: string[];
  price: string;
}

const Card: React.FC<ProductCardProps> = ({
  title,
  image,
  descriptionList,
  price,
  cardType
}) => {
  const priceClass1 = [styles.price]
  const priceClass2 = [styles.price]

  if (cardType === "price1"){
    priceClass1.push(styles.price1)
  }else if(cardType === "price2"){
    priceClass2.push(styles.price2)
  }

  return (
    <div className={styles.foodCard}>
      <div className={styles.fullCard}>
        <div className={styles.cardImage}>
          <img src={image} alt={title} className={styles.image} />
          <div className={priceClass1.join(" ")}>
            <span className={styles.priceText}>{price}</span>
          </div>
        </div>
        <div className={styles.description}>
          <h2 className={styles.title}>{title}</h2>
          <ul className={styles.foodList}>
            {descriptionList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div className={styles.optionalPrice}>
            <div className={priceClass2.join(" ")}>
            <p>{price}</p>
            </div>
            <Button width={120}>ORDER NOW</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
