import styles from "./Sixth-Section.module.css";
import Card from "../component/Card";

const SixthSection: React.FC = () => {
  return (
    <div className={styles.sixthSection}>
      <div className={styles.header}>
        <h1>Indulge in <span>perfection</span> and sip on liquid <span>bliss</span> that'will make your taste buds dance!</h1>
      </div>
      <div className={styles.sectionItems}>
        <Card
          cardType="price2"
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
          cardType="price2"
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
    </div>
  );
};

export default SixthSection;
