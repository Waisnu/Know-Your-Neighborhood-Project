import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getUserAPI } from "../../api/user-api";
import { userDefault } from "../../assets";
import StoreLayout from "../../components/layout/StoreLayout";
import StoreCard from "../../components/stores/StoreCard";
import AuthContext from "../../context/auth-context";

const ProfilePage = () => {
  const { profile, stores, token } = useContext(AuthContext);
  const [userProfile, setUserProfile] = useState({});
  const [userStores, setUserStores] = useState([]);
  const [profilePicture, setProfilePicture] = useState("");
  const [isUser, setIsUser] = useState(false);

  const { userId } = useParams();

  useEffect(() => {
    if (userId === undefined) {
      setUserProfile(profile);
      setUserStores(stores);
      setProfilePicture(profile.imageUrl);
      setIsUser(profile.userId === userProfile.userId);
    }

    if (userId !== undefined && userId !== 0) {
      getUserAPI(userId, token)
        .then((res) => {
          setUserProfile(res.data.profile);
          setUserStores(res.data.stores);
          setProfilePicture(res.data.profile.imageUrl);
        })
        .catch((err) => {
          setUserProfile({ name: "User not found!!" });
        });
    }
  }, [userId, token, profile, stores, userProfile.userId]);

  return (
    <StoreLayout>
      <div className="flex justify-center w-full md:max-w-[700px] mt-8 py-4 px-5 rounded-lg bg-base-300 shadow shadow-gray-300">
        <img
          src={profilePicture ? profilePicture : userDefault}
          alt="profile_picture"
          className="rounded-full mask  ring ring-green-600 ring-offset-base-100 ring-offset-2
            w-24 h-24 sm:w-40 sm:h-40 mr-5"
        />
        <div className="mt-2 font-inter font-medium text-gray-400 w-full">
          <h3 className="text-2xl md:text-3xl text-primary mb-1 pb-2 border-b">
            {userProfile.name}
          </h3>
          <div className="grid grid-cols-1 gap-2">
            <div>
              <p className="text-secondary">Email</p>
              <p>{userProfile.email}</p>
            </div>
            <div>
              <p className="text-secondary">Address</p>
              <p>{userProfile.address}</p>
            </div>
            <div>
              <p className="text-secondary">Phone Number</p>
              <p>{userProfile.phoneNumber}</p>
            </div>
          </div>
        </div>
        {isUser && (
          <Link to="/profile/edit">
            <i className="fa-solid fa-pen-to-square text-2xl hover:text-color1 transition duration-100" />
          </Link>
        )}
      </div>
      <div className="mt-5 mb-10">
        <div className="flex justify-between border-b-2 border-gray-300 mb-3 pb-1">
          <h2 className="font-inter text-4xl font-bold drop-shadow ">Stores</h2>
          {isUser && (
            <Link
              to="/stores/add"
              className="flex items-center space-x-2 font-medium text-color1 text-lg"
            >
              <p>Add Store</p> <i className="fa-solid fa-plus"></i>
            </Link>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-1 gap-5">
          {userStores.map((store) => (
            <StoreCard key={store.storeId} store={store} />
          ))}
          {userStores.length <= 0 && (
            <p className="text-gray-500">No store available</p>
          )}
        </div>
      </div>
    </StoreLayout>
  );
};

export default ProfilePage;
