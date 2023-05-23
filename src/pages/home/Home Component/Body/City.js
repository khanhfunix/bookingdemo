import React from "react";
import styles from "./City.module.css";

const City = (props) => {
  const cityData = [
    {
      name: "Dublin",
      subText: "123 properties",
      image: "../../../../images/city_1.webp",
    },
    {
      name: "Reno",
      subText: "533 properties",
      image: "../../../../images/city_2.webp",
    },
    {
      name: "Austin",
      subText: "532 properties",
      image: "../../../../images/city_3.webp",
    },
  ];

  return (
    <div className={styles.city}>
      {cityData.map((e) => {
        return (
          <div>
            <img src={e.image}></img>
            <div className={styles.cityText}>
              <h3>{e.name}</h3>
              <h3>{e.subText}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default City;
