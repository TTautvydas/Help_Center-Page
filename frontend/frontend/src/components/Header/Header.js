import React from "react";
import styles from "../Header/Header.module.css";

export default function Header() {
  return (
    <div className={styles.mainContainer}>
      <h1>How can we help?</h1>
      <input placeholder="Search"></input>
    </div>
  );
}
