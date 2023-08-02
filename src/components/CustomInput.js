import { useField } from "formik";
import React from "react";
import "../App.css";

function CustomInput({ label, ...props }) {
  const [field, meta] = useField({ ...props });
  console.log(field);
  console.log(meta);
  return (
    <div>
      <label>{label}</label>
      <input
        {...field}
        {...props}
        className={meta.error ? "input-error" : ""}
      ></input>
      {meta.error && <div className="error">{meta.error}</div>}
    </div>
  );
}

export default CustomInput;
