import { useState, useEffect } from "react";

import UseAllPosts from "../../hooks/useAllPosts";

import Posts from "../Posts";

import styles from "./styles.module.css";

export default function ArchivePosts() {
  const [posts, setPosts] = useState([])
  const { get, dataGet } = UseAllPosts();
  useEffect(() => {
    get();
    setPosts(dataGet);
  }, [get]);
  return (
    <div className={styles["c-archive-posts"]}>
      {/*Componente tags */}
      <Posts posts={posts}/>
    </div>
  );
}
