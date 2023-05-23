import React from "react";

import styles from "./EmailForm.module.css";
import Button from "../UI/Button";

const EmailForm = (props) => {
  return (
    <div className={styles.formContainer}>
      <h1>Save time, save money !</h1>
      <p>Sign up and we send the best deal to you</p>
      <form>
        <input type="Email" id="mail" placeholder="Your Email"></input>
        <label htmlFor="mail"></label>
        <Button>Subscribe</Button>
      </form>
    </div>
  );
};

export default EmailForm;
