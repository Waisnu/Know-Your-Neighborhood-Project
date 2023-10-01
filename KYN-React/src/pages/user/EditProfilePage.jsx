import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { editProfileAPI } from "../../api/user-api";
import Input from "../../components/form/Input";
import MainLayout from "../../components/layout/MainLayout";
import AuthContext from "../../context/auth-context";

const EditProfilePage = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const { userId, name, address, phoneNumber } = authCtx.profile;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
    values: {
      userId,
      name,
      address,
      phoneNumber,
    },
  });

  const onSubmitHandler = (data) => {
    editProfileAPI(data, authCtx.token)
      .then((res) => {
        authCtx.refresh();
        navigate("/profile");
      })
      .catch((err) => {
        console.log(err.message);
        navigate("/profile");
      });
  };

  return (
    <MainLayout>
      <div className="flex justify-center mt-10 text-white">
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="p-[50px] bg-base-300 w-full max-w-[500px] rounded-lg shadow-md shadow-primary"
        >
          <h2 className="text-center font-semibold text-3xl mb-3">
            Edit Profile
          </h2>

          <Input
            label="Name*"
            name="name"
            type="text"
            errors={errors}
            placeholder="Enter your name"
            register={register}
            validation={{
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be atleast 3 characters long",
              },
            }}
          />

          <Input
            label="Address"
            name="address"
            type="text"
            errors={errors}
            placeholder="Enter your address"
            register={register}
          />

          <Input
            label="Phone Number"
            name="phoneNumber"
            type="text"
            errors={errors}
            placeholder="Enter your phone number"
            register={register}
          />

          <button
            type="submit"
            className="py-3 mt-3 rounded-md border border-secondary text-primary bg-color1 w-full"
          >
            Save
          </button>
        </form>
      </div>
    </MainLayout>
  );
};

export default EditProfilePage;
