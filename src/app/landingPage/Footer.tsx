import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.firstRow}>
        <div className={styles.icons}>
          <img src="./facebook.png" alt="facebook" />
          <img src="./twitter.png" alt="twitter" />
          <img src="./instagram.png" alt="instagram " />
        </div>
        <div className={styles.terms}>
          <p>Terms and Condition</p>
          <p>Pricing</p>
        </div>
      </div>

      <div className={styles.secondRow}>
        <p>Location: Jinifa Plaza, Central Business District, Abuja</p>
        <div className={styles.Centrifuge}>
          <img src="./C.png" alt="C" />
          <p> Michelle Restaurant </p>
        </div>
        <p> Powered by:SOLOMON</p>
      </div>
    </div>
  );
};

export default Footer;
