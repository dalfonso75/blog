import styles from "./styles.module.css";

export default function Author({ authorIMage, authorName }) {
  return (
    <section className={styles["c-author"]}>
      <img
        height="30px"
        width="30px"
        className={styles["author__image"]}
        src={authorIMage}
        alt={authorName}
      />
      <p className={styles["author__name"]}>{authorName}</p>
    </section>
  );
}
