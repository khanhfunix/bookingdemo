import React, { useState } from "react";
import styles from "./NavBar.module.css";
const NavBar = (props) => {
  const dataNavBar = [
    {
      type: "Stays",
      icon: "fa-bed",
      active: true,
    },
    {
      type: "Flights",
      icon: "fa-plane",
      active: false,
    },
    {
      type: "Car rentals",
      icon: "fa-car",
      active: false,
    },
    {
      type: "Attractions",
      icon: "fa-bed",
      active: false,
    },
    {
      type: "Airport taxis",
      icon: "fa-taxi",
      active: false,
    },
  ];

  return (
    <div className={styles.NavBar}>
      {dataNavBar.map((e) => {
        return (
          <p className={e.active ? styles.active : ""}>
            <i className={[e.icon, "fa"].join(" ")}></i>
            <span>{e.type}</span>
          </p>
        );
      })}
    </div>
  );
};

export default NavBar;
