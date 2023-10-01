import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { searchStoreAPI } from "../../api/store-api";
import SearchForm from "../../components/form/SearchForm";
import StoreLayout from "../../components/layout/StoreLayout";
import StoreCard from "../../components/stores/StoreCard";
import AuthContext from "../../context/auth-context";
import useListStore from "../../hooks/useListStore";

const StoresPage = () => {
  const authCtx = useContext(AuthContext);
  const [listStore, setListStore] = useState([]);
  const [searchParams] = useSearchParams();

  const { stores } = useListStore();

  useEffect(() => {
    if (searchParams.get("search") === null) {
      setListStore(stores);
    }

    if (searchParams.get("search") !== null) {
      searchStoreAPI(searchParams.get("search"), authCtx.token)
        .then((res) => {
          setListStore(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, [authCtx.token, searchParams, stores]);

 
  

  return (
    <StoreLayout>
      <div className="flex justify-between flex-col sm:flex-row my-5 py-5">
        <Link
          to="/stores/add"
          className="btn btn-accent flex items-center space-x-2  font-medium text-primary text-lg mb-3 ml-1 sm:mb-0 sm:ml-0"
        >
          <p>Add Store</p> <i className="fa-solid fa-plus"></i>
        </Link>
        <SearchForm />
      </div>
      {listStore && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-1 py-5 gap-8">
          {listStore.map((store) => (
            <StoreCard key={store.storeId} store={store} />
          ))}
        </div>
      )}
      {listStore.length <= 0 && (
        <h2 className=" text-red-500 font-large text-xl">We can't find what you are looking for, sorry</h2>
      )}
    </StoreLayout>
  );
};

export default StoresPage;
