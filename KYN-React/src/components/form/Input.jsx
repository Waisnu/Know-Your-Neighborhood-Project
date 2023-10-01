import React from "react";

const Input = ({
  label,
  name,
  register,
  type,
  placeholder,
  validation,
  errors,
  emailTaken,
}) => {
  const errorMessage = (
    <p className="flex items-end text-red-400 font-normal">
      {errors[name]?.message}
    </p>
  );

  let invalid;

  invalid =
    errors &&
    (errors[name]?.type === "required" ||
      errors[name]?.type === "minLength" ||
      errors[name]?.type === "pattern" ||
      errors[name]?.type === "maxLength");

  if (emailTaken) {
    invalid = true;
  }

  return (
    <div className="mb-2">
      <label htmlFor={name} className="block font-normal mb-1 text-lg">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={`py-2 px-3 rounded w-full text-primary mb-1 ${
          invalid ? "bg-red-200 border-red-200" : ""
        }`}
        {...register(name, { ...validation })}
      />
      {errors && errors[name]?.type === "required" && errorMessage}
      {errors && errors[name]?.type === "pattern" && errorMessage}
      {errors && errors[name]?.type === "minLength" && errorMessage}
      {errors && errors[name]?.type === "maxLength" && errorMessage}
      {errors && errors[name]?.type === "valueAsNumber" && errorMessage}
    </div>
  );
};
export default Input;
