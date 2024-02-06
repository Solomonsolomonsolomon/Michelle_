import styles from "./Fourth-Section.module.css";
import Card from "../component/Card";
import Button from "../component/Button";

const FourthSection: React.FC = () => {
  return (
    <>
      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <div className={styles.top}>
            <Card
              cardType="price1"
              title="Ofada with Ofada Sauce"
              image="/Ofadawithsauce.jpg"
              descriptionList={[
                "Ofada Rice with Ofada Sauce",
                "Ofada Sauce Assorted with Beef and Ponmo",
                "Comes with a chilled Drink ",
              ]}
              price="# 2800"
            />
            <Card
              cardType="price1"
              title="Ofada with Ofada Sauce"
              image="/Ofadawithsauce.jpg"
              descriptionList={[
                "Ofada Rice with Ofada Sauce",
                "Ofada Sauce Assorted with Beef and Ponmo",
                "Comes with a chilled Drink ",
              ]}
              price="# 2800"
            />
          </div>
          <div className={styles.bottom}>
            <Card
              cardType="price1"
              title="Ofada with Ofada Sauce"
              image="/Ofadawithsauce.jpg"
              descriptionList={[
                "Ofada Rice with Ofada Sauce",
                "Ofada Sauce Assorted with Beef and Ponmo",
                "Comes with a chilled Drink ",
              ]}
              price="# 2800"
            />
            <Card
              cardType="price1"
              title="Ofada with Ofada Sauce"
              image="/Ofadawithsauce.jpg"
              descriptionList={[
                "Ofada Rice with Ofada Sauce",
                "Ofada Sauce Assorted with Beef and Ponmo",
                "Comes with a chilled Drink ",
              ]}
              price="# 2800"
            />
          </div>
          <div className={styles.moreButton}>
            <Button>More</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FourthSection;
