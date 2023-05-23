import React from "react";

import styles from "./Type.module.css";

const Type = (props) => {
  const typeData = [
    {
      name: "Hotels",
      count: 233,
      image: "./images/type_1.webp",
    },
    {
      name: "Apartments",
      count: 2331,
      image: "./images/type_2.jpg",
    },
    {
      name: "Resorts",
      count: 2331,
      image: "./images/type_3.jpg",
    },
    {
      name: "Villas",
      count: 2331,
      image: "./images/type_4.jpg",
    },
    {
      name: "Cabins",
      count: 2331,
      image: "./images/type_5.jpg",
    },
  ];
  return (
    <div className={styles.type}>
      <h3>Browse by property type</h3>
      <div className={styles.typeList}>
        {typeData.map((e) => {
          return (
            <div>
              <img src={e.image}></img>
              <p>{e.name}</p>
              <p>{e.count}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Type;
