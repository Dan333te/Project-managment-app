import React from "react";

const Input = ({ id, label, value, onChange, ...props }) => {
  return (
    <>
      <label className="text-lg uppercase text-gray-500" htmlFor={id}>
        {label}
      </label>
      <input
      required
        value={value}
        onChange={onChange}
        className="p-2 bg-slate-200"
        id={id}
        {...props}
      />
    </>
  );
};

export default Input;
