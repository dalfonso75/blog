import { useState, useEffect } from "react";

import UseAllPosts from "../../hooks/useAllPosts";

import Posts from "../Posts";
import Tags from "../Tags";
import Pagination from "../Pagination";

import styles from "./styles.module.css";
export default function ArchivePosts() {
  const { get, dataGet } = UseAllPosts();
  const [posts, setPosts] = useState([]);

  const [numberCurrentPage, setNumberCurrentPage] = useState(0);

  useEffect(() => {
    get(numberCurrentPage);
  }, [get, numberCurrentPage]);

  useEffect(() => {
    if (dataGet) setPosts(dataGet);
  }, [dataGet]);

  return (
    <div className={styles["c-archive-posts"]}>
      <Tags setPosts={setPosts}/>
      <Posts posts={posts} />
      <Pagination
        total={posts.total}
        numberCurrentPage={numberCurrentPage}
        setNumberCurrentPage={setNumberCurrentPage}
        limit={posts.limit}
      />
    </div>
  );
}
