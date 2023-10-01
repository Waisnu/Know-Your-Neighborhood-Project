import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { registerAPI } from "../api/user-api";
import FailedMessage from "../components/form/FailedMessage";
import Input from "../components/form/Input";
import SuccessMessage from "../components/form/SuccessMessage";
import MainLayout from "../components/layout/MainLayout";

const RegisterPage = () => {
  const [status, setStatus] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ criteriaMode: "all" });

  const onSubmitHandler = (data) => {
    registerAPI({
      name: data.name,
      email: data.email,
      password: data.password,
      address: data.address,
      phoneNumber: data.phoneNumber,
    })
      .then((res) => {
        setSuccessMessage(res.data.message);
        setStatus("SUCCESS");
        reset();
      })
      .catch((err) => {
        setErrorMessage(err.response.data);
        setStatus("FAILED");
      });
  };

  return (
    <MainLayout>
      <div className="flex justify-center mt-10 text-white">
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="p-[30px] bg-secondary w-full max-w-[500px] rounded-lg shadow-md bg-slate-900 shadow-accent"
        >
          <h2 className="text-center font-semibold text-3xl mb-3">Register</h2>
          {status === "SUCCESS" && (
            <SuccessMessage onClose={() => setStatus("")}>
              {successMessage}
            </SuccessMessage>
          )}
          {status === "FAILED" && (
            <FailedMessage onClose={() => setStatus("")}>
              {errorMessage}
            </FailedMessage>
          )}

          <Input
            label="Email*"
            name="email"
            type="text"
            errors={errors}
            placeholder="Enter your email"
            register={register}
            validation={{
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Please enter valid email",
              },
            }}
            emailTaken={status === "FAILED" ? true : false}
          />

          <Input
            label="Password*"
            name="password"
            type="password"
            errors={errors}
            placeholder="Enter your password"
            register={register}
            validation={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be between 6-18 characters long",
              },
              maxLength: {
                value: 18,
                message: "Password can't be greater than 18 characters long",
              },
            }}
          />

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
            className="btn py-3 mt-3 rounded-md border text-slate-500 bg w-full"
          >
            Register
          </button>
        </form>
      </div>
    </MainLayout>
  );
};

export default RegisterPage;
