import * as Yup from "yup";

const ValidationSchema = Yup.object({
  First_name: Yup.string()
    .min(3)
    .max(25)
    .required("Please enter your first name"),
  Last_name: Yup.string().min(3).max(25).required("Please enter your last name"),
  Gender: Yup.string()
    .matches(/^(male|female|other)$/i, "Invalid gender format")
    .required("Gender is required"),
  Dob: Yup.string()
    .matches(
      /^(19|20)\d{2}[- /.](0[1-9]|1[0-2])[- /.](0[1-9]|[12][0-9]|3[01])$/,
      "Invalid date of birth format"
    )
    .test("age", "You must be at least 18 years old", function (value) {
      const dateOfBirth = new Date(value);
      const ageInMs = Date.now() - dateOfBirth.getTime();
      const ageInYears = ageInMs / (1000 * 60 * 60 * 24 * 365.25);
      return ageInYears >= 18;
    })
    .required("Date of birth is required"),
  Mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Invalid mobile number number")
    .required("Enter your mobile number."),
  Email: Yup.string()
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Invalid email format")
    .required("Please enter a valid email"),
  Address: Yup.string().required("Address is required"),
  terms: Yup.boolean().oneOf(
    [true],
    "You must accept the terms and conditions"
  ),
});

export default ValidationSchema;




