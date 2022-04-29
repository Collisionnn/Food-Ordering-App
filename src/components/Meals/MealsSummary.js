import React from "react";
import styles from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={styles.summary}>
      <h2>Delicious Food, Delivered to you...</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu interdum
        velit, in convallis metus. Duis odio lectus, rhoncus eget purus et,
        blandit vehicula est.
      </p>
      <p>
        Donec lobortis vel risus nec sagittis. Orci varius natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Integer malesuada
        nunc leo, vel varius arcu fringilla vitae.
      </p>
    </section>
  );
};

export default MealsSummary;
