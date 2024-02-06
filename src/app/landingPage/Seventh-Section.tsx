import styles from "./Seventh-Section.module.css";
import Button from "../component/Button";

const SeventhSection: React.FC = () => {
  return (
    <div className={styles.seventhSection}>
      <div className={styles.pagePicture}>
        <div className={styles.mainText}>
          <h1>LIKE WHAT YOU SEE?</h1>
        </div>
        <div className={styles.secondaryText}>
          <h3>THEN BE THE FIRST TO KNOW WHAT'S ON THE MENU</h3>
        </div>
        <div>
          <div className={styles.search}>
            <input
              className={styles.searchBar}
              type="text"
              placeholder="Email Address" 
            />
            <Button>Send</Button> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeventhSection;
