import React from "react";
import styles from "../styles/createPost.module.css";
import CreatePost from "./createPost";

const Content = () => {
  return (
    <div className={styles.content}>
      <CreatePost />
    </div>
  );
};

export default Content;