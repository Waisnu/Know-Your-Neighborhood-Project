import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getAllStoresWithoutAuthAPI, searchStoreAPI } from "../../api/store-api";
import SearchForm from "../../components/form/SearchForm";
import StoreLayout from "../../components/layout/StoreLayout";
import StoreCard from "../../components/stores/StoreCard";

const ViewStorePage = () => {
  const [listStore, setListStore] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchParams.get("search") === null) {
          // Fetch and display all stores without authentication
          const allStoresResponse = await getAllStoresWithoutAuthAPI();
          const allStores = allStoresResponse.data; // Extract data from the response
          console.log("All Stores Data:", allStores); // Log the data
          setListStore(allStores);
        } else {
          // Handle search with or without authentication
          const searchResultResponse = await searchStoreAPI(searchParams.get("search"));
          const searchResult = searchResultResponse.data; // Extract data from the response
          console.log("Search Result Data:", searchResult); // Log the data
          setListStore(searchResult);
        }
      } catch (error) {
        console.error("Error fetching stores:", error);
      }
    };

    fetchData();
  }, [searchParams]);

  return (
    <StoreLayout>
      <div className="flex justify-between flex-col sm:flex-row my-5 py-5">
        <Link
          to="/stores/add"
          className="btn btn-accent flex items-center space-x-2 font-medium text-primary text-lg mb-3 ml-1 sm:mb-0 sm:ml-0"
        >
          <p>Add your own store</p> <i className="fa-solid fa-plus"></i>
        </Link>
        <SearchForm />
      </div>
      {listStore.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-1 py-5 gap-8">
          {listStore.map((store) => (
            <StoreCard key={store.storeId} store={store} />
          ))}
        </div>
      ) : (
        <h2 className="text-red-500 font-large text-xl">
          We can't find what you are looking for, sorry
        </h2>
      )}
    </StoreLayout>
  );
};

export default ViewStorePage;
