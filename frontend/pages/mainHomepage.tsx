import React, { useState } from "react";
import Sidebar from "./sideBar";
import Image from "next/image";
import styles from "../styles/mainHomepage.module.css";

const MainHomepage = () => {
  const [dummyLocation, setDummyLocation] = useState("LittleField, Texas");
  // useState to declare func comp
  // "littleField is what dummyLocation will be initialized to for now (state variable)"
  //setDummyLocation func call to update the value of dummyLocation, when you call this func
  //with a new value the component will show the new value.

  const [dummyGender, setDummyGender] = useState("Female");
  const [dummyPetFriendly, setDummyPetFriendly] = useState("Yes");
  const [dummyRent, setDummyRent] = useState("$1000");
  const [dummyRoom, setDummyRoom] = useState("1 Bedroom with Bathroom");
  const [dummyInfo, setDummyInfo] = useState(
    "Fortnite"
  );

  const [showDropdown, setShowDropdown] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Ignore this for now");
  };

  const toggleDropdown = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); //from not submit??
    setShowDropdown(!showDropdown);
  };

  return (
    <div className={styles.pageBackground}>
      <Sidebar />
      <div className={styles.mainContent}>
        <div className={styles.searchContainer}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search..."
              className={styles.searchBar}
            />
            <button
              type="button"
              onClick={toggleDropdown}
              className={styles.dropdownButton}
            >
              Filter
            </button>
            {showDropdown && (
              <div className={styles.dropdownMenu}>
                <input
                  placeholder="Rent"
                  name="rent"
                  className={styles.dropdownInput}
                />
                <input
                  placeholder="Floor Plan"
                  name="floorPlan"
                  className={styles.dropdownInput}
                />
                <input
                  placeholder="Pet Friendly"
                  name="petFriendly"
                  className={styles.dropdownInput}
                />
                <input
                  placeholder="Gender"
                  name="gender"
                  className={styles.dropdownInput}
                />
                <button type="submit" className={styles.submitButton}>
                  Submit
                </button>
              </div>
            )}
          </form>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.whiteBox}>
            <div className={styles.profileSection}>
              <Image
                src="/profileIcon.png"
                alt="Profile Icon"
                width={50}
                height={50}
                className={styles.profileIcon}
              />
              <a href="/profile" className={styles.profileName}>
                BillyBobJoe
              </a>
            </div>
            <hr className={styles.horizontalLineOne} />
            <hr className={styles.horizontalLineTwo} />

            <div className={styles.infoRow}>
              <div className={`${styles.infoItem} ${styles.location}`}>
                <Image
                  src="/location.png"
                  alt="Location Icon"
                  width={24}
                  height={24}
                />
                <span>Location: {dummyLocation}</span> {}
              </div>
              <div className={`${styles.infoItem} ${styles.gender}`}>
                <Image
                  src="/man.png"
                  alt="Gender Icon"
                  width={24}
                  height={24}
                />
                <span>Gender: {dummyGender}</span>
              </div>
              <div className={`${styles.infoItem} ${styles.petFriendly}`}>
                <Image
                  src="/pet.png"
                  alt="Pet Friendly Icon"
                  width={24}
                  height={24}
                />
                Pet Friendly: {dummyPetFriendly}
              </div>
            </div>

            <div className={styles.infoRow}>
              <div className={`${styles.infoItem} ${styles.rent}`}>
                <Image
                  src="/money.png"
                  alt="Rent Icon"
                  width={24}
                  height={24}
                />
                <span>Rent: {dummyRent}</span>
              </div>
            </div>
            <div className={`${styles.infoItem} ${styles.room}`}>
              <Image src="/home.png" alt="Room Icon" width={24} height={24} />
              <span>Room: {dummyRoom}</span>
            </div>
            <div className={styles.additionalInfo}>
              <span>Additional Information: {dummyInfo}</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MainHomepage;