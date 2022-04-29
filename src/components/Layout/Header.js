import React, { Fragment } from "react";
import styles from "./Header.module.css";
import heroImage from "../../assets/hero.jpeg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Just Food</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles["hero-image"]}>
        <img src={heroImage} alt="Table full of food" />
      </div>
    </Fragment>
  );
};

export default Header;
