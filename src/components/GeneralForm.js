import React from "react";
import { useFormik } from "formik";
import "../App.css";
import { basicSchema } from "../schemas";
import { Link } from "react-router-dom";

const onSubmit = async (values, actions) => {
  console.log(actions);
  console.log(values);

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  actions.resetForm();
};

function GeneralForm() {
  const { values, isSubmitting, handleChange, errors, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputDiv">
        <label>Email</label>
        <input
          type="email"
          value={values.email}
          id="email"
          onChange={handleChange}
          placeholder="Mail adresinizi giriniz"
          className={errors.email ? "input-error" : ""}
        ></input>
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div className="inputDiv">
        <label>Age</label>
        <input
          type="number"
          value={values.age}
          id="age"
          onChange={handleChange}
          placeholder="Yaşınızı giriniz"
          className={errors.age ? "input-error" : ""}
        ></input>
        {errors.age && <p className="error">{errors.age}</p>}
      </div>

      <div className="inputDiv">
        <label>Password</label>
        <input
          type="password"
          value={values.password}
          id="password"
          onChange={handleChange}
          placeholder="Şifrenizi giriniz"
          className={errors.password ? "input-error" : ""}
        ></input>
        {errors.password && <p className="error">{errors.password}</p>}
      </div>

      <div className="inputDiv">
        <label>Şifre Tekrar</label>
        <input
          type="password"
          value={values.confirmPassword}
          id="confirmPassword"
          onChange={handleChange}
          placeholder="Şifrenizi tekrar giriniz"
          className={errors.confirmPassword ? "input-error" : ""}
        ></input>
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
      </div>
      <button disabled={isSubmitting} type="submit">
        Kaydet
      </button>
      <Link className="link" to="/portal">
        Portala Git
      </Link>
    </form>
  );
}

export default GeneralForm;
