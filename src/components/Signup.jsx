import NavBar from "./Nav";
import Footer from "./Footer";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  fullname: "",
  email: "",
  password: "",
  role: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  fullname: Yup.string().required("Required!!!"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Required"),
  password: Yup.string().required("Required"),
  role: Yup.string().required("Required"),
});

function Signup() {
  return (
    <>
    <NavBar />
    <section className="flex justify-center items-center min-h-screen bg-gray-50">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {() => (
          <Form className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">
              Sign Up
            </h2>
            {/* Fullname */}
            <div>
              <label
                htmlFor="fullname"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Fullname
              </label>
              <Field
                id="fullname"
                type="text"
                name="fullname"
                placeholder="Enter your fullname"
                className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage name="fullname" />
            </div>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <Field
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage name="email" />
            </div>
            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <Field
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
                className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage name="password" />
            </div>
            {/* Role */}
            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Role
              </label>
              <Field
                as="select"
                id="role"
                name="role"
                className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Select a role</option>
                <option value="INITIATOR">INITIATOR</option>
                <option value="REVIEWER">REVIEWER</option>
                <option value="APPROVER">APPROVER</option>
                <option value="ADMIN">ADMIN</option>
              </Field>
              <ErrorMessage name="role" />
            </div>
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Register
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
    <Footer />
    </>
  );
}

export default Signup;
