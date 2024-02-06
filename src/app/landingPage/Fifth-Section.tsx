import styles from "./Fifth-Section.module.css";

const FifthSection: React.FC = () => {
  return (
    <div className={styles.fifthSection}>
      <div className={styles.header}>
        <h2>Services</h2>
      </div>
      <div className={styles.sectionItems}>
        <div className={styles.item}>
          <div className={styles.icons}>
            <img src="/Delivery.png" alt="Delivery" className={styles.icon} />
          </div>
          <div className={styles.title}>
            <h3>Fast and Reliable Delivery Service</h3>
          </div>
          <div className={styles.mainText}>
            <p>Enjoy swift and reliable delivery for ultimate convenience.</p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.icons}>
            <img src="/menu.png" alt="menu" className={styles.icon} />
          </div>
          <div className={styles.title}>
            <h3>Extensive Menu Variety</h3>
          </div>
          <div className={styles.mainText}>
            <p>
              Discover a diverse menu for all-day cravings, from breakfast to
              dinner delights.
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.icons}>
            <img
              src="/natural-ingredients.png"
              alt="natural-ingredients"
              className={styles.icon}
            />
          </div>
          <div className={styles.title}>
            <h3>Quality Ingredients and Freshness</h3>
          </div>
          <div className={styles.mainText}>
            <p>
              Savor exceptional flavors with fresh, high-quality ingredients
              sourced locally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
