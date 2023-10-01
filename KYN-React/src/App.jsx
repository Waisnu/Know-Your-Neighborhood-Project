import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthContext from "./context/auth-context";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import FacebookLogin from "./pages/FacebookLogin";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AddStorePage from "./pages/stores/AddStorePage";
import EditStorePage from "./pages/stores/EditStorePage";
import StoreDetailPage from "./pages/stores/StoreDetailPage";
import StoresPage from "./pages/stores/StoresPage";
import EditProfilePage from "./pages/user/EditProfilePage";
import ProfilePage from "./pages/user/ProfilePage";
import ViewerStoragePage from "./pages/stores/ViewStorePage"; // Update the path accordingly


function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/viewer-stores" element={<ViewerStoragePage />} />



      {!isLoggedIn && (
        <>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/oauth2/redirect" element={<FacebookLogin />} />

          <Route path="/stores/*" element={<Navigate to="/login" />} />
          <Route path="/profile/*" element={<Navigate to="/login" />} />
        </>
      )}

      {isLoggedIn && (
        <>
        
          <Route path="/stores" element={<StoresPage />} />
          <Route path="/login" element={<AddStorePage />} />
          <Route path="/stores/add" element={<AddStorePage />} />
          <Route
            path="/stores/:storeName/:storeId"
            element={<StoreDetailPage />}
          />
          <Route
            path="/stores/:storeName/:storeId/edit"
            element={<EditStorePage />}
          />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/edit" element={<EditProfilePage />} />
          <Route path="/profile/:name/:userId" element={<ProfilePage />} />
        </>
      )}
      {/* <Route path="*" element={<Navigate to="/" />} /> */}
    </Routes>
  );
}

export default App;
