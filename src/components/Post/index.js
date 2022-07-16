import Author from "../Author";

import styles from "./styles.module.css";

export default function Post({
  postId,
  postImage,
  postTitle,
  postAuthor,
  postTags,
}) {
  const openComments = () =>{
    
  }
  return (
    <article className={styles["c-post"]}>
      <header>
        <img
          className={styles["post__image"]}
          src={postImage}
          alt={postTitle}
        />
        <ul className={styles["post__tags"]}>
          {postTags?.map((tag) => (
            <li key={"key-" + tag} className={styles["post__tag"]}>
              -{tag}
            </li>
          ))}
        </ul>
      </header>
      <footer className={styles["post__content"]}>
        <h3 className={styles["post__title"]}>{postTitle}</h3>
        <Author
          authorIMage={postAuthor.picture}
          authorName={postAuthor.firstName + " " + postAuthor.lastName}
        />
        <button className={styles["post__read-more"]} onClick={() => openComments}>
          Leer más
        </button>
      </footer>
    </article>
  );
}
