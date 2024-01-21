import React from "react";
import styles from "../ArticleCard/ArticleCard.module.css";

export default function ArticleCard({ logo }) {
  return (
    <div className={styles.articleContainer}>
      <img src={logo} alt="logo" />
      <div>
        <h6>Title</h6>
        <p>
          Lorem ipsum
          aasdsgsgdasdasdgadfgaergaergwegwasdasdasdasdasdasdergwearga
        </p>
        <a href="https://google.com"> Learn More &#x2192;</a>
      </div>
    </div>
  );
}
