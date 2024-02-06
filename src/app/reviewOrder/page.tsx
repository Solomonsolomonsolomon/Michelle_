import styles from "./page.module.css";
import Step from "../component/step";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";

const reviewOrder: React.FC = () => {
  return (
    <div className={styles.reviewOrder}>
      <div className={styles.step}>
        <Step page="reviewOrder"></Step>
      </div>
      <div>
        <FirstSection/>
      </div>
      <div>
        <SecondSection/>  
      </div>
    </div>
  );
};

export default reviewOrder;
