import { useEffect, useRef } from "react";
import useTag from "../../hooks/useTag";

import styles from "./styles.module.css";

export default function Tags({ setPosts }) {
  const selectTag = useRef();
  const { get, dataGet: tags, getByTag, dataGetByTag } = useTag([]);
  useEffect(() => {
    get();
  }, [get]);

  useEffect(() => {
    if (dataGetByTag) setPosts(dataGetByTag);
  }, [dataGetByTag]);

  const onChangeTag = (evt) => {
    evt.preventDefault();
    const tagFilter = selectTag.current.value;
    getByTag(tagFilter.trim(), 0);
  };

  return (
    <div className={styles["c-tags"]}>
      <label className={styles["tags__label"]} htmlFor="">
        Filter By tags:
      </label>
      <select
        className={styles["tags__select"]}
        ref={selectTag}
        name="selectTag"
        onChange={onChangeTag}
      >
        {tags?.data?.map(
          (tag) =>
            tag &&
            tag.length >= 0 &&
            tag.length <= 25 && (
              <option
                className={styles["tags__select-option"]}
                key={"key-tag-" + tag}
                value={tag}
              >
                {tag}
              </option>
            )
        )}
      </select>
    </div>
  );
}
