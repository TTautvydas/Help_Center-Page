import React from "react";
import styles from "../ArticleCard/ArticleCard.module.css";

interface Props {
  logo: string;
}

const ArticleCard: React.FC<Props> = ({ logo }: Props): JSX.Element => {
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
};

export default ArticleCard;
