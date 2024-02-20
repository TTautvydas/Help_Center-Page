import React from "react";
import ArticleCard from "../ArticleCard/ArticleCard.tsx";
import styles from "../Main_body/Main.module.css";
import branch from "../ArticleCard/branch.PNG";
import account from "../ArticleCard/account.PNG";
import chat from "../ArticleCard/chat.PNG";
import key from "../ArticleCard/key.PNG";
import money from "../ArticleCard/money.PNG";
import puzzle from "../ArticleCard/puzzle.PNG";

export default function Main() {
  return (
    <div className={styles.cardContainer}>
      <div>
        <ArticleCard logo={branch} />
        <ArticleCard logo={puzzle} />
        <ArticleCard logo={key} />
      </div>
      <div>
        <ArticleCard logo={account} />
        <ArticleCard logo={money} />
        <ArticleCard logo={chat} />
      </div>
    </div>
  );
}
