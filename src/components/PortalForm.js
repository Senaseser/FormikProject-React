import React from "react";
import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";
import "../App.css";
import { advancedSchema } from "../schemas";
import { Link } from "react-router-dom";

function PortalForm() {
  const onSubmit = async (values, actions) => {
    console.log(actions);
    console.log(values);

    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });

    actions.resetForm();
  };
  return (
    <>
      <Formik
        initialValues={{ username: "", university: "", isAccepted: false }}
        onSubmit={onSubmit}
        validationSchema={advancedSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <CustomInput
              label="Kullanıcı Adı"
              name="username"
              type="text"
              placeholder="Kullanıcı Adınızı Giriniz"
            />
            <CustomSelect
              label="Okulunuz"
              name="university"
              placeholder="Lütfen üniversitenizi seçiniz"
            >
              <option value="">Lütfen üniversitenizi seçiniz</option>
              <option value="boğaziçi">Boğaziçi Üniversitesi</option>
              <option value="ytü">Yıldız Teknik Üniversitesi</option>
              <option value="odtü">Orta Doğu Teknik Üniversitesi</option>
              <option value="itü">İstanbul Teknik Üniversitesi</option>
            </CustomSelect>
            <CustomCheckbox type="checkbox" name="isAccepted"></CustomCheckbox>
            <button disabled={isSubmitting} type="submit">
              Kaydet
            </button>
            <Link className="link" to="/">
              Ana Forma Git
            </Link>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default PortalForm;
