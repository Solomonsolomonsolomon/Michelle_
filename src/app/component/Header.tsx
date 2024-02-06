/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./Header.module.css";
import Button from "./Button";
import {FaBars} from "react-icons/fa"
import {FaPhone, FaCartPlus} from "react-icons/fa"

const Header: React.FC = () => {
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.phoneNumber}>
          <Button >09012345678</Button>
        </div>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src="/logo.png" alt="logo" />
        </div>
        <div className={styles.buttonContainer}>
          <Button type="button" version="outlined">
            Login
          </Button>
        </div>
        <div className={styles.hamBurger}>
         <FaBars/>
        </div>
      
      </div>
    </header>
  );
};

export default Header;
