import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import ValidationSchema from "../validation/Validate";
import "./Form.css";

const Form = () => {
  const initialValues = {
    First_name: "",
    Last_name: "",
    Gender: "",
    Dob: "",
    Mobile: "",
    Email: "",
    Address: "",
    terms: false,
  };

  const handlerChange = async (values) => {
    try {
      const formData = new FormData();
      formData.append("First_name", values.First_name);
      formData.append("Last_name", values.Last_name);
      formData.append("Gender", values.Gender);
      formData.append("Dob", values.Dob);
      formData.append("Mobile", values.Mobile);
      formData.append("Email", values.Email);
      formData.append("Address", values.Address);
      formData.append("terms", values.terms);
      const response = await axios.post(
        "https://script.google.com/macros/s/AKfycbyzZqfLOCoGij1VDr6Ezj4CwTtEqAMHRhYlsx8fceGFsWFw0Ni3Uk_Qdv2pQAOW8K0z/exec",
        formData
      );
      console.log(response.data);
      toast.success("Form submitted successfully!");
      handleReset();
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    handleReset,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: ValidationSchema,
    onSubmit: () => handlerChange(values),
  });

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="card p-5 bg">
        <h1 className="text-center mb-5">Employee Registration Form</h1>
        <form onSubmit={handleSubmit} className="row mx-auto " noValidate>
          <div className="form-group  col-md-6 mb-3 ">
            <label htmlFor="firstName" className="form-label fw-bold text-dark">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              name="First_name"
              placeholder="Enter your first name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.First_name}
              autoComplete="off"
            />
            {errors.First_name && touched.First_name ? (
              <div className="text-danger">{errors.First_name}</div>
            ) : null}
          </div>
          <div className="form-group col-md-6 mb-3">
            <label htmlFor="lastName" className="form-label fw-bold text-dark">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              name="Last_name"
              placeholder="Enter your last name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.Last_name}
              autoComplete="off"
            />
            {errors.Last_name && touched.Last_name ? (
              <div className="text-danger">{errors.Last_name}</div>
            ) : null}
          </div>
          <div className="form-group  col-md-4 mb-3">
            <label htmlFor="gender" className="form-label fw-bold text-dark">
              Gender
            </label>
            <select
              className="form-control"
              name="Gender"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.Gender}
            >
              <option value="" disabled>
                -Select your gender-
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.Gender && touched.Gender ? (
              <div className="text-danger">{errors.Gender}</div>
            ) : null}
          </div>
          <div className="form-group  col-md-4 mb-3">
            <label
              htmlFor="dateOfbirth"
              className="form-label fw-bold text-dark"
            >
              Date of Birth
            </label>
            <input
              type="date"
              className="form-control"
              name="Dob"
              placeholder="DD-MM-YYYY"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.Dob}
            />
            {errors.Dob && touched.Dob ? (
              <div className="text-danger">{errors.Dob}</div>
            ) : null}
          </div>
          <div className="form-group  col-md-4 mb-3">
            <label
              htmlFor="phonenumber"
              className="form-label fw-bold text-dark"
            >
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              name="Mobile"
              placeholder="123-456-7890"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.Mobile}
            />
            {errors.Mobile && touched.Mobile ? (
              <div className="text-danger">{errors.Mobile}</div>
            ) : null}
          </div>
          <div className="form-group col-md-12 mb-3">
            <label htmlFor="email" className="form-label fw-bold text-dark">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="Email"
              placeholder="Enter your email address"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.Email}
              autoComplete="off"
            />
            {errors.Email && touched.Email ? (
              <div className="text-danger">{errors.Email}</div>
            ) : null}
          </div>
          <div className="form-group  col-md-12 mb-3">
            <label htmlFor="address" className="form-label fw-bold text-dark">
              Address
            </label>
            <textarea
              className="form-control"
              name="Address"
              placeholder="Enter your address"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.Address}
              rows="3"
            ></textarea>
            {errors.Address && touched.Address ? (
              <div className="text-danger">{errors.Address}</div>
            ) : null}
          </div>
          <div className="form-group  col-12 mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="terms"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.terms}
              />
              <label
                className="form-check-label text-dark"
                htmlFor="agreeCheck"
              >
                Agree to terms and conditions
              </label>
              {errors.terms && touched.terms ? (
                <div className="text-danger">{errors.terms}</div>
              ) : null}
            </div>
            <button
              className="btn btn-secondary w-100 mt-4 fw-bold"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
