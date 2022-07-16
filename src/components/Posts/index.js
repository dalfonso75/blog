import Post from "../Post";

import styles from "./styles.module.css";

export default function Posts({ posts, setShowModal, setPostID }) {
  return (
    <ul className={styles["c-posts"]}>
      {posts?.data?.map((post) => (
        <li
          key={post.id}
          className={styles["loop-posts__post"]}
          onClick={() => {
            setShowModal(true);
            setPostID(post.id);
          }}
        >
          <Post
            postId={post.id}
            postImage={post.image}
            postTitle={post.text}
            postAuthor={post.owner}
            postTags={post.tags}
          />
        </li>
      ))}
    </ul>
  );
}
