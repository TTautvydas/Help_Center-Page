import React from "react";
import styles from "../Footer/Footer.module.css";
import FooterList from "../FooterList/FooterList.tsx";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div>
        <FooterList listName={"Abstract"} item1={"Branches"} />
      </div>
      <div>
        <FooterList
          listName={"Resources"}
          item1={"Blog"}
          item2={"Help Center"}
          item3={"Release Notes"}
          item4={"Status"}
        />
      </div>
      <div>
        <FooterList
          listName={"Community"}
          item1={"Twitter"}
          item2={"LinkedIn"}
          item3={"Facebook"}
          item4={"Dribble"}
          item5={"Podcast"}
        />
      </div>
      <div>
        <FooterList
          listName={"Company"}
          item1={"About Us"}
          item2={"Careers"}
          item3={"Legal"}
          item4={<br></br>}
          item5={"Contact Us"}
          item6={"info@gmail.com"}
        />
      </div>
      <div className={styles.copyrightContainer}>
        <h1>
          <i className="fa-brands fa-react"></i>
        </h1>
        <p>
          &#169; Copyright 2024 <br></br> Tautvydas Studio Design, Inc.{" "}
          <br></br>All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
