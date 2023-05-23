import React from "react";

import styles from "./SearchContent.module.css";

import SearchPopUp from "./SearchPopUp";
import SearchList from "./SearchList";

const SearchContent = (props) => {
  return (
    <div className={styles.searchContainer}>
      <SearchPopUp />
      <SearchList />
      
    </div>
  );
};

export default SearchContent;
