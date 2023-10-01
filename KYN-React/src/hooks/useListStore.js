import { useContext, useEffect, useState } from "react";
import { getListStoreAPI } from "../api/store-api";
import AuthContext from "../context/auth-context";

const useListStore = () => {
  const [stores, setStores] = useState([]);
  const [error, setError] = useState();
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    getListStoreAPI(authCtx.token)
      .then((res) => {
        setStores(res.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, [authCtx]);
  return { stores, error };
};

export default useListStore;
