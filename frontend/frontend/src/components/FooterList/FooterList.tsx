import React from "react";
import styles from "../FooterList/FooterList.module.css";

interface Props {
  listName: string;
  item1: any;
  item2?: any;
  item3?: any;
  item4?: any;
  item5?: any;
  item6?: any;
}

const FooterList: React.FC<Props> = ({
  listName,
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
}: Props): JSX.Element => {
  return (
    <ul className={styles.footerList}>
      <h5>{listName}</h5>
      <li>{item1}</li>
      <li>{item2}</li>
      <li>{item3}</li>
      <li>{item4}</li>
      <li>{item5}</li>
      <li>{item6}</li>
    </ul>
  );
};

export default FooterList;
