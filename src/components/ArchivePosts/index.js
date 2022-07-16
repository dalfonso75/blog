import { useState, useEffect } from "react";
import UseAllPosts from "../../hooks/useAllPosts";

export default function ArchivePosts() {
  const [posts, setPosts] = useState([]);
  const { get, dataGet } = UseAllPosts();
  useEffect(() => {
    get();
  }, [get]);
  return (
    <div className="c-archive-posts">
      <ul>
        {}
      </ul>
    </div>
  );
}
