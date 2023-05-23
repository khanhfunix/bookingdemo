import React from "react";

import NavBar from "./NavBar";
import HeaderContent from "./HeaderContent";

import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <span>Booking page</span>
      <NavBar />
      <HeaderContent />
    </div>
  );
};

export default Header;
