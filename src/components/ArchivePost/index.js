import { useState, useEffect } from "react";

import UseAllPosts from "../../hooks/useAllPosts";

import Posts from "../Posts";
import Tags from "../Tags";
import Pagination from "../Pagination";
import Modal from "../ModalContent";
import InnerPost from "../InnerPost";
import styles from "./styles.module.css";
export default function ArchivePosts() {
  const { get, dataGet } = UseAllPosts();
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [postID, setPostID] = useState();

  const [numberCurrentPage, setNumberCurrentPage] = useState(0);

  useEffect(() => {
    get(numberCurrentPage);
  }, [get, numberCurrentPage]);

  useEffect(() => {
    if (dataGet) setPosts(dataGet);
  }, [dataGet]);

  const onClose = () => {
    setShowModal(false);
  }
  return (
    <>
      <div className={styles["c-archive-posts"]}>
        <Tags setPosts={setPosts}/>
        <Posts posts={posts} setShowModal={setShowModal} setPostID={setPostID}/>
        <Pagination
          total={posts.total}
          numberCurrentPage={numberCurrentPage}
          setNumberCurrentPage={setNumberCurrentPage}
          limit={posts.limit}
        />
      </div>
      <Modal show={showModal} onClose={onClose}>
        <InnerPost postId={postID}/>
      </Modal>
    </>
  );
}
