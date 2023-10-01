import React from "react";
import { Link, useParams } from "react-router-dom";
import { store2, userDefault } from "../../assets";
import StoreLayout from "../../components/layout/StoreLayout";
import Breadcrumbs from "../../components/stores/Breadcrumbs";
import useStore from "../../hooks/useStore";

const StoreDetailPage = () => {
  const { storeId } = useParams();
  const { store, user, editPermission, error } = useStore(storeId);

  const profilePicture = user.imageUrl;

  return (
    <StoreLayout>
      {!error && (
        <>
          <Breadcrumbs storeName={store.storeName} />
          <div className="grid grid-cols-1 md:grid-cols-7 mt-3 gap-5">
            <img
              src={store2}
              alt="store"
              className="md:col-span-4 w-full rounded-md shadow aspect-video object-cover"
            />


            <div className=" md:col-span-3 text-white font-medium">
              <h2 className="text-primary font-semibold text-2xl mb-3">
                {store.storeName}
              </h2>

<div className="bg-base-200 text-center px-5 gap-4 py-5  rounded-lg">
             
      <i className="fa-sharp fa-solid fa-location-dot text-lg w-7" />
      <p>
        {store.country}, {store.city}
      </p>
   
 
              <div className="">
                <i className="fa-regular fa-envelope text-lg w-7" />
                <p>{store.storeEmail}</p>
              </div>
       


              <div className="">
                <i className="fa-solid fa-phone text-lg w-7" />
                <p>{store.phoneNumber}</p>
              </div>
              </div>
  

              <div className="flex mt-5 bg-base-100 rounded-lg py-2 justify-center  text-slate-100 px-3 md:w-[630px] shadow py-5  ">
                <Link to={`/profile/${user.name}/${user.userId}`}>
                  <img
                    src={profilePicture ? profilePicture : userDefault}
                    alt="profile_picture"
                    className="w-[64px] h-[64px] rounded-full mr-4 hover:opacity-80 transition duration-150"
                  />
                </Link>
                <div>
                  <Link to={`/profile/${user.name}/${user.userId}`}>
                    <p className="text-primary text-xl hover:text-color1 transition duration-150">
                      {user.name}
                    </p>
                  </Link>
                  <p className="text-md">{user.email}</p>
                </div>
              </div>

              {editPermission && (
                <Link
                to="edit"
                className="block mx-auto text-center text-base-300 py-2 text-primary mt-5 rounded bg-yellow-500 sm:w-[150px]"
              >
                Edit Store
              </Link>
              )}
            </div>
          </div>

          <div className="mt-3">
            <p className="text-slate-100 font-semibold text-xl px-5 py-5">Description:</p>
            <p className="text-gray-500 font-medium py-5 px-5">
              {store.description ? store.description : "No description"}
            </p>
          </div>
        </>
      )}

      {error && <p className="text-red-500">Store not found!!</p>}
    </StoreLayout>
  );
};

export default StoreDetailPage;
