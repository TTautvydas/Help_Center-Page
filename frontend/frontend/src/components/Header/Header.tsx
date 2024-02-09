import React from "react";
import styles from "../Header/Header.module.css";

export default function Header() {
  return (
    <div className={styles.mainContainer}>
      <h1>How can we help?</h1>
      <div>
        <input className={styles.inputContainer} placeholder="Search"></input>
        <button id="arrowButton">&#x2192;</button>
      </div>
    </div>
  );
}
