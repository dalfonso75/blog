import { useEffect } from "react";
import UseCommentsPost from "../../hooks/useCommentPost";

import styles from "./styles.module.css";

export default function InnerPost({ postId }) {
  const { getComments, dataGet, isLoadingGet } = UseCommentsPost();
  useEffect(() => {
    getComments(postId);
  }, [postId]);
  console.log(dataGet);
  return (
    <div className={styles["c-inner-post"]}>
      <h1>Comentarios</h1>
      {(dataGet?.data?.length > 0 ) ? (
        <ul>
          {dataGet?.data?.map((comment) => (
            <li className={styles["inner-post__comment"]} key={comment.id}>
              <p>{comment.message}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>{isLoadingGet ? "Cargando..." : "No hay comentarios"}</p>
      )}
      
    </div>
  );
}
