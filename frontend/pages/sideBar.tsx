// Sidebar.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/createPost.module.css";
const Sidebar = () => {
  const handleSignOut = () => {
    console.log("Sign Out Clicked!");
  };

  return (
    <div className={styles.sidebar}>
      <h2 className={styles.sidebarTitle}>RoomieConnect</h2>
      <ul className={styles.navList}>
        <li>
          <Link href="/create-post" passHref>
            <div className={styles.linkContent}>
              <Image
                src="/add.png"
                alt="Create Post"
                width={200}
                height={200}
                className={styles.icon}
              />
              Create Post
            </div>
          </Link>
        </li>
        <li>
          <Link href="/location" passHref>
            <div className={styles.linkContent}>
              <Image
                src="/location.png"
                alt="Location"
                width={24}
                height={24}
                className={styles.icon}
              />
              Location
            </div>
          </Link>
        </li>
        <li>
          <Link href="/" passHref>
            <div className={styles.linkContent}>
              <Image
                src="/home.png"
                alt="Home"
                width={24}
                height={24}
                className={styles.icon}
              />
              Homepage
            </div>
          </Link>
        </li>
        <li>
          <Link href="/profile" passHref>
            <div className={styles.linkContent}>
              <Image
                src="/profileIcon.png"
                alt="Profile"
                width={24}
                height={24}
                className={styles.icon}
              />
              Profile
            </div>
          </Link>
        </li>
      </ul>
      <button className={styles.signOutButton} onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
};

export default Sidebar;