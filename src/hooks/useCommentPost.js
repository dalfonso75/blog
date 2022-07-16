import { useCallback, useState } from "react";
import commentPostService from "../services/commentPostService";

export default function UseCommentsPost() {
  const [stateGet, setStateGet] = useState({
    loadingGet: false,
    errorGet: null,
    dataGet: null,
  });

  const getComments = useCallback((numberPage) => {
    setStateGet({ loadingGet: true, errorGet: null });
    commentPostService
      .getComments(numberPage)
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
    getComments,
  };
}
