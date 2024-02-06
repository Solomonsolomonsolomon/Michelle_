import styles from "./Menucomp.module.css";
import Menuitem from "../component/Menuitem";
import foods from "./food";

let meal = foods.filter((food) => food.category === "meal");
let protein = foods.filter((food) => food.category === "protein");
let swallow = foods.filter((food) => food.category === "swallow");
let salad = foods.filter((food) => food.category === "salad");
let peppersoup = foods.filter((food) => food.category === "Pepper Soup");
let drink = foods.filter((food) => food.category === "Drinks");

const Menucomp: React.FC = () => {
  return (
    <div>
      <div className={styles.categories}>
        <div id="Meals" className={styles.gap}></div>
        <h1>~ Meals ~</h1>
        {meal.map((item, index) => (
          <Menuitem
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
      <div className={styles.categories}>
        <div id="Swallow" className={styles.gap}></div>
        <h1>~ Swallow ~</h1>
        {swallow.map((item, index) => (
          <Menuitem
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
      <div className={styles.categories}>
        <div id="Salad" className={styles.gap}></div>
        <h1>~ Salad ~</h1>
        {salad.map((item, index) => (
          <Menuitem
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
      <div className={styles.categories}>
        <div id="Protein" className={styles.gap}></div>
        <h1> ~ Protein ~</h1>
        {protein.map((item, index) => (
          <Menuitem
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
      <div className={styles.categories}>
        <div id="Pepper Soup" className={styles.gap}></div>
        <h1> ~ Peppersoup ~</h1>
        {peppersoup.map((item, index) => (
          <Menuitem
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
      <div className={styles.categories}>
        <div id="Drinks" className={styles.gap}></div>
        <h1> ~ Drinks ~</h1>
        {drink.map((item, index) => (
          <Menuitem
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Menucomp;
