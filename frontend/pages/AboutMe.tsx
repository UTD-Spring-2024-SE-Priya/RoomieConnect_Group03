import React from "react";
import styles from "../styles/aboutMe.module.css";
import { useState } from "react";
import axios from 'axios';
import Link from "next/link";

export default function AboutMe() {




  const [values, setValues] = useState ({
    gender: "",
    age: "",
    hobbies: "",
    extroverted_introverted: "",
    nightowl_earlybird: "",
    cleanliness: "",
    extra_information: "",
  });

  const handleChange = (event: { target: { name: any; value: any; }; }) => {
    setValues({...values, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Values: ", values);
    console.log(nightOwlValue);
    axios.post('http://localhost:8080/editaboutme', values)
    .then(res => console.log("Inputted Successfully!"))
    .catch(err => console.log(err))
  }





  const [gender, setGender] = useState<string>("");

  const [extroversionValue, setExtroversionValue] = useState<number | null>(
    null
  );
  const [nightOwlValue, setNightOwlValue] = useState<number | null>(null);
  const [cleanlinessValue, setCleanlinessValue] = useState<number | null>(null);

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
    setValues({...values, [event.target.name]: event.target.value})
  };

  return (
    <div className={styles.backgroundImage}>
      <form onSubmit={handleSubmit}>
      <div className={styles.box}>
        <div className={styles.wrapper}>
          <h1 className={styles.welcomeTitle}>Welcome to RoomieConnect!</h1>
          <h1 className={styles.welcomeMessage}>
            Please fill out this survey to let us know more about yourself.
          </h1>
          <h1 className={styles.genderQuestion}>1. Choose your gender.</h1>
          <div className={styles.inputGenderBox}>
            {" "}
            {}
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={gender === "Male"}
                onChange={handleGenderChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={gender === "Female"}
                onChange={handleGenderChange}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Other"
                checked={gender === "Other"}
                onChange={handleGenderChange}
              />
              Prefer not to say
            </label>
          </div>
          <h1 className={styles.ageQuestion}>2. Enter your Age.</h1>
          <div className={styles.inputAgeBox}>
            <input type="text" placeholder="Enter a digit" name="age" required onChange={handleChange}/>
          </div>
          <h1 className={styles.locationQuestion}>3. Enter your Location.</h1>
          <div className={styles.inputLocationBox}>
            <input type="text" placeholder="Lakeward, Texas" required name="location" onChange={handleChange}/>
          </div>
          <h1 className={styles.hobbiesQuestion}>4. What are your hobbies.</h1>
          <div className={styles.inputHobbiesBox}>
            <input type="text" placeholder=" " required name="hobbies" onChange={handleChange}/>
          </div>
        </div>
      </div>
      <div className={styles.boxTwo}>
        <div className={styles.wrapperTwo}>
          <h1 className={styles.extrovertedQuestion}>
            5. Extroverted vs. Introverted.
          </h1>
          <div className={styles.surveyScale}>
            <h3 className={styles.scaleQuestion}>
              1 = Extroverted, 5 = Introverted;
            </h3>
            <div className={styles.scaleButtonGroupOne} >
              {[1, 2, 3, 4, 5].map((number) => (
                <button
                  name="extroverted_introverted"
                  key={number}
                  className={styles.scaleButton}
                  onClick={() => setExtroversionValue(number)}
                  style={{
                    backgroundColor:
                      extroversionValue === number ? "#53a165" : "#f0f0f0",
                  }}
                  onChange={handleChange}
                >
                  {number}
                </button>
              ))}
            </div>
          </div>

          <h2 className={styles.nightOwlQuestion}>
            6. Night Owl vs. Early Bird.
          </h2>
          <div className={styles.surveyScale}>
            <h3 className={styles.scaleTwoQuestion}>
              1 = Night Owl, 5 = Early Bird;
            </h3>

            <div className={styles.scaleButtonGroupTwo}>
              {[1, 2, 3, 4, 5].map((number) => (
                <button
                  key={number}
                  name="nightowl_earlybird"
                  className={styles.scaleButton}
                  onClick={() => setNightOwlValue(number)}
                  style={{
                    backgroundColor:
                      nightOwlValue === number ? "#53a165" : "#f0f0f0",
                  }}
                  onChange={handleChange}
                >
                  {number}
                </button>
              ))}
            </div>
          </div>

          <h3 className={styles.cleanQuestion}>7. Cleanliness.</h3>
          <div className={styles.surveyScale}>
            <h3 className={styles.scaleThreeQuestion}>
              1 = Messy, 5 = Neat Freak;
            </h3>
            <div className={styles.scaleButtonGroupThree}>
              {[1, 2, 3, 4, 5].map((number) => (
                <button
                  key={number}
                  name="cleanliness"
                  className={styles.scaleButton}
                  onClick={() => setCleanlinessValue(number)}
                  style={{
                    backgroundColor:
                      cleanlinessValue === number ? "#53a165" : "#f0f0f0",
                  }}
                  onChange={handleChange}
                >
                  {number}
                </button>
              ))}
            </div>
          </div>
          <h3 className={styles.extraInfo}>
            8. Add any extra information you would like others to know.
          </h3>
          <div className={styles.inputextraInfoBox}>
            <input type="text" placeholder=" " required onChange={handleChange} name="extra_information"/>
          </div>
        </div>
      </div>
      <button type="submit" className={styles.logInButton}>
        <Link href="/mainHomepage">Continue!</Link>
      </button>
      </form>
    </div>
  );
}