import React, { useState } from "react";
import styles from "../styles/Login.module.css";
import Link from 'next/link';

export default function LogIn() {

  





  return (
    <div className={styles.backgroundImage}>
      <div className={styles.topRightButtons}>
        <button className={styles.topLogInButton}>Sign Up</button>
      </div>
      <div className={styles.box}>
        <div className={styles.wrapper}>
          <form >
            <h1 className={styles.loginTitle}>Log In</h1>
            <div className={styles.inputBox}>
              <input type="text" placeholder="Email Address" required name="emailAddress" />
            </div>
            <div className={styles.inputBox}>
              <input type="password" placeholder="Password" required name="password" />
            </div>

            <h2 className={styles.passwordDescription}>
              Use 8 or more characters with a mix of letters, numbers & symbols
            </h2>

            <div className={styles.registerLink}>
              <p>
                Do not have an account? <Link href="/CreateAccountPage">SignUp</Link>
              </p>
            </div>
            <button type="submit" className={styles.logInButton}>
              Log In
            </button>

            <h3 className={styles.RommieConnect}>RommieConnect</h3>
          </form>
        </div>
      </div>
    </div>
  );
}
