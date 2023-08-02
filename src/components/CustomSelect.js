import { useField } from "formik";
import React from "react";
import "../App.css";

function CustomSelect({ label, ...props }) {
  const [field, meta] = useField({ ...props });
  console.log(field);
  console.log(meta);
  return (
    <div>
      <label>{label}</label>
      <select
        {...field}
        {...props}
        className={meta.error ? "input-error" : ""}
      ></select>
      {meta.error && <div className="error">{meta.error}</div>}
    </div>
  );
}
export default CustomSelect;
