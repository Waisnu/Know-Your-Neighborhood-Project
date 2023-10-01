import { useContext, useEffect, useState } from "react";
import { getStoreAPI } from "../api/store-api";
import AuthContext from "../context/auth-context";

const useStore = (storeId) => {
  const [store, setStore] = useState({});
  const [user, setUser] = useState({});
  const [editPermission, setEditPermission] = useState(false);
  const [error, setError] = useState();
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    getStoreAPI(storeId, authCtx.token)
      .then((res) => {
        setStore(res.data);
        setUser(res.data.user);

        if (res.data.user.userId === authCtx.userId) {
          setEditPermission(true);
        }
      })
      .catch((err) => {
        setError(err);
      });
  }, [storeId, authCtx]);

  return { store, editPermission, user, error };
};

export default useStore;
