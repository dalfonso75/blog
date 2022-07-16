import { useCallback, useState } from "react";
import allPostsService from "../services/allPostsService";

export default function UseAllPosts() {
  const [stateGet, setStateGet] = useState({
    loadingGet: false,
    errorGet: null,
    dataGet: null,
  });

  const get = useCallback(() => {
    setStateGet({ loadingGet: true, errorGet: null });
    allPostsService
      .getAllPosts()
      .then((data) => {
        setStateGet({
          loadingGet: false,
          errorGet: null,
          dataGet: data,
        });
      })
      .catch((err) => {
        setStateGet({ loadingGet: false, errorGet: err, dataGet: null });
      });
  }, []);

  return {
    isLoadingGet: stateGet.loadingGet,
    hasErrorGet: stateGet.errorGet,
    dataGet: stateGet.dataGet,
    successGet: Boolean(stateGet.dataGet),
    get,
  };
}
