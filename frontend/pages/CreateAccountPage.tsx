// import React from "react";
import styles from "../styles/createAcc.module.css";
import Link from "next/link";
import React, { useState } from 'react';
import axios from 'axios';


export default function CreateAccountPage() {

  const [values, setValues] = useState ({
    name: "",
    lastName: "",
    emailAddress: "",
    password: "",
  });

  const handleChange = (event: { target: { name: any; value: any; }; }) => {
    setValues({...values, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    console.log("Values: ", values);
    axios.post('http://localhost:8080/signup', values)
    .then(res => console.log("Registered Successfully!"))
    .catch(err => console.log(err))
  }

  return (
      <div className={styles.backgroundImage}>
        <div className={styles.topRightButtons}>
          <button className={styles.topLogInButton}>Sign Up</button>
        </div>
        <div className={styles.box}>
          <div className={styles.wrapper}>
            <form onSubmit={handleSubmit}>
              <h1 className={styles.loginTitle}>Create Account</h1>
              <div className={styles.namesContainer}>
                <div className={styles.firstNameBox}>
                  {" "}
                  {/* Updated class name for first name */}
                  <input type="text" placeholder="First Name" required name="name" onChange={handleChange}/>
                </div>
                <div className={styles.lastNameBox}>
                  {" "}
                  {/* Existing class name for last name */}
                  <input type="text" 
                  placeholder="Last Name" 
                  required name="lastName" 
                  onChange={handleChange}/>
                </div>
              </div>
              <div className={styles.emailBox}>
                <input type="email" placeholder="Email Address" required name="emailAddress" onChange={handleChange}/>
              </div>
              <div className={styles.passwordsContainer}>
                <div className={styles.passwordBox}>
                  <input type="password" name= "password" placeholder="Password" required onChange={handleChange}/>

                </div>
                <div className={styles.verifyPasswordBox}>
                  <input type="password" name= "confirmPassword" placeholder="Verify Password" required onChange={handleChange}/>

                </div>
              </div>

              <h2 className={styles.passwordDescription}>
                Use 10 or more characters with a mix of letters, numbers & symbols
              </h2>

              <div className={styles.registerLink}>
                <p>
                  Have an account?<Link href="/LogIn"> Log In</Link>
                </p>
              </div>
              <button type="submit" className={styles.logInButton}>
              <Link href="/AboutMe">Sign Up</Link>
            </button>
              <h3 className={styles.RommieConnect}>RommieConnect</h3>
            </form>
          </div>
        </div>
      </div>
  );
}
