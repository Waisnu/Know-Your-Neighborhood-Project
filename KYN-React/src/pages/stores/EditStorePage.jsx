import React from "react";
import { useParams } from "react-router-dom";
import NoPermission from "../../components/form/NoPermission";
import MainLayout from "../../components/layout/MainLayout";
import useStore from "../../hooks/useStore";
import EditForm from "./EditForm";

// EDIT PAGE
const EditStorePage = () => {
  const { storeId } = useParams();
  const { store, editPermission } = useStore(storeId);

  return (
    <MainLayout>
      {editPermission ? (
        <EditForm
          storeId={storeId}
          storeName={store.storeName}
          country={store.country}
          city={store.city}
          storeEmail={store.storeEmail}
          phoneNumber={store.phoneNumber}
          description={store.description}
        />
      ) : (
        <NoPermission />
      )}
    </MainLayout>
  );
};

export default EditStorePage;
