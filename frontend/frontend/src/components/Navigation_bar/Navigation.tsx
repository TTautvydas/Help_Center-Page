import React from "react";
import { Button } from "../Button/Button.tsx";
import styles from "../Navigation_bar/Navigation.module.css";
import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("Login clicked");
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.textContainer}>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAApRJREFUSEvF1UuolWUUBuBHy7CadBETyaIiM5NUCkmxwhBBKwcVODCUSpQwqahAB0XgJCpTjILKCjKkQTQQmpRSUGKIYUSRNSkiLQyCHJml9b2yNvxtz5ZzBgcX7MH+1uVd612Xf4xRljGjHN+ZAK7CVvyK17G/L5lb8CAuw6P4aahkzwSwDy9gIlbiezyCc/FaA52Md/E7Hse8kQBMwg7cUU5jsQlLMQ7v4Gn8W/o9WNKA/uwHGVTBNZX9PR2H8fgBJxv4VBzv6D7C/TgyXIBL8CHmlkMSeR+fVwU3YVkn2AGkJ38NFyB24Tw0zMK9uKgF/a4CTMcf+ABft6qeQd5Ok36KzsMqPIwr8CY+aZltwG34pyKk0V9gIxbggTZRP+OV8vm7h9QFuBq7sL1lu6UFvh1344L2ex6hYX05Poc5eKJoeQ978RTuq+H4JbZdgPCbef6ygmRafsRXbQfuwjY8VLpUlko/xjRkZ3rVzS/KFvUDZEIyHV3J26dYjc9ahXGOJJlbG41v1SBc33FK0ulVgP9XQcqfUHyHw2S1s95uLMqy0ZEABiSgGdfF1YP08MXa6pf6AfJ/TTkn60uLnmOYWY3vVpfs07Ns9A04WhW+Wo0+ZTvUoiWLjGXu0LeV4YziOz2JZBFDUUY59tGvrbHt9WIgQBQ5DWn2bGSD72wVvYzHSre5AmYZs1yZsNieJoNOxeV10BK4JwuL33Owrprf0434VGQnQlHGsydT6mTnFt2MQx3dbizHb/0lDKrg/OL3uupBLuUbtbnhPBO3op3oZH4hDuLKdlpODBcgds/WVmZK8m14sv3/pgLk2KUP19ZNervoG3YPeoYJlC/a4aEaWFlfXOM8pMlZ/SYPSHpkz6NewX+ZKoAZ+/DQ/AAAAABJRU5ErkJggg=="
          alt="react logo"
        />
        <p id="companyName">Abstract |</p>
        <p id="helpCenter">Help Center</p>
      </div>
      <div className={styles.buttonContainer}>
        <Button
          buttonName={"Submit a request"}
          onClick={() => navigate("/submit")}
        />
        <Button buttonName={"Login "} onClick={handleClick} />
      </div>
    </div>
  );
}
