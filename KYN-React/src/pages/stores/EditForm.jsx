import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { editStoreAPI } from "../../api/store-api";
import FailedMessage from "../../components/form/FailedMessage";
import Input from "../../components/form/Input";
import AuthContext from "../../context/auth-context";

const EditForm = ({
  storeId,
  storeName,
  country,
  city,
  storeEmail,
  phoneNumber,
  description,
}) => {
  const [status, setStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
    values: {
      storeId,
      storeName,
      country,
      city,
      storeEmail,
      phoneNumber,
      description,
    },
  });

  const onSubmitHandler = (data) => {
    editStoreAPI(data, authCtx.token)
      .then((res) => {
        authCtx.refresh();
        navigate(`/stores/${res.data.storeName}/${res.data.storeId}`);
      })
      .catch((err) => {
        console.log(err);
        setStatus("FAILED");
        setErrorMessage(err.message);
      });
  };

  return (
    <div className="flex justify-center mt-10 text-white">
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="p-[30px] bg-base-300 w-full max-w-[500px] rounded-lg shadow-md shadow-primary"
      >
        <h2 className="text-center font-semibold text-3xl mb-3">
          Edit Store Detail
        </h2>

        {status === "FAILED" && (
          <FailedMessage onClose={() => setStatus("")}>
            {errorMessage}
          </FailedMessage>
        )}

        <Input
          label="Store Name*"
          name="storeName"
          type="text"
          errors={errors}
          placeholder="Enter store name"
          register={register}
          validation={{
            required: "Store name is required",
          }}
        />
        <Input
          label="Country*"
          name="country"
          type="text"
          errors={errors}
          placeholder="Enter country"
          register={register}
          validation={{
            required: "Country is required",
          }}
        />

        <Input
          label="City*"
          name="city"
          type="text"
          errors={errors}
          placeholder="Enter city"
          register={register}
          validation={{
            required: "City is required",
          }}
        />
        <Input
          label="Email*"
          name="storeEmail"
          type="text"
          errors={errors}
          placeholder="Enter store email"
          register={register}
          validation={{
            required: "Store email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Please enter valid email",
            },
          }}
        />
        <Input
          label="Phone Number*"
          name="phoneNumber"
          type="text"
          errors={errors}
          placeholder="Enter phone number"
          register={register}
          validation={{
            required: "Phone number is required",
          }}
        />

        <Input
          label="Description"
          name="description"
          errors={errors}
          type="text"
          placeholder="Enter store description"
          register={register}
        />

        <button
          type="submit"
          className="btn py-3 mt-3 rounded-md border border-accent bg-base-100 text-primary bg-color1 w-full"
        >
          Save Edit
        </button>
      </form>
    </div>
  );
};

export default EditForm;
