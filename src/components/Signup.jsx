import NavBar from "./Nav";
import Footer from "./Footer";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";

const initialValues = {
  fullname: "",
  email: "",
  password: "",
  role: "",
};

const validationSchema = Yup.object({
  fullname: Yup.string().required("Full name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(3, "Must be at least 3 characters long")
    .required("Password is required"),
  role: Yup.string().required("Role is required"),
});

function Signup() {
  const navigate = useNavigate();

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post(
        "https://nova-server-hk8n.onrender.com/api/v1/users/register",
        values
      );
      console.log("Registration successful:", response.data);
      toast.success("Registration successful! Redirecting to login...");
      resetForm();
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      console.error("Error signing up:", error);
      toast.error(error.response?.data?.message || "Error signing up");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <NavBar />

      <section className="flex min-h-screen bg-gray-50">
        {/* Left Panel - Branding */}
        <div className="hidden lg:flex w-1/2 bg-[#3F51B5] text-white items-center justify-center p-12">
          <div className="max-w-md text-center space-y-6">
            <h1 className="text-4xl font-bold">Join Nova</h1>
            <p className="text-lg text-gray-200">
              Create your account in minutes and start streamlining your
              financial workflows with secure, smart payment management.
            </p>
                    
          </div>
        </div>

        {/* Right Panel - Signup Form */}
        <div className="flex w-full lg:w-1/2 items-center justify-center p-8 md:p-12">
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {() => (
              <Form className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">
                {/* Title */}
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-800">Sign Up</h2>
                  <p className="text-sm text-gray-500 mt-2">
                    Fill in your details to create an account
                  </p>
                </div>

                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullname"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <Field
                    id="fullname"
                    type="text"
                    name="fullname"
                    placeholder="Enter your full name"
                    className="block w-full rounded-lg border border-gray-300 py-2 px-3 text-gray-900 shadow-sm focus:ring-[#3F51B5] focus:border-[#3F51B5] sm:text-sm"
                  />
                  <ErrorMessage
                    name="fullname"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <Field
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="block w-full rounded-lg border border-gray-300 py-2 px-3 text-gray-900 shadow-sm focus:ring-[#3F51B5] focus:border-[#3F51B5] sm:text-sm"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Password
                  </label>
                  <Field
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="block w-full rounded-lg border border-gray-300 py-2 px-3 text-gray-900 shadow-sm focus:ring-[#3F51B5] focus:border-[#3F51B5] sm:text-sm"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Role */}
                <div>
                  <label
                    htmlFor="role"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Role
                  </label>
                  <Field
                    as="select"
                    id="role"
                    name="role"
                    className="block w-full rounded-lg border border-gray-300 py-2 px-3 text-gray-900 shadow-sm focus:ring-[#3F51B5] focus:border-[#3F51B5] sm:text-sm"
                  >
                    <option value="">Select a role</option>
                    <option value="INITIATOR">Initiator</option>
                    {/* <option value="REVIEWER">Reviewer</option>
                    <option value="APPROVER">Approver</option> */}
                    <option value="ADMIN">Admin</option>
                  </Field>
                  <ErrorMessage
                    name="role"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-[#3F51B5] text-white py-2.5 px-4 rounded-lg font-medium shadow-md hover:bg-[#334296] transition-all"
                  >
                    Register
                  </button>
                </div>

                {/* Login Link */}
                <p className="text-center text-gray-600 text-sm">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-[#3F51B5] font-medium hover:underline"
                  >
                    Login here
                  </Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </section>

      <ToastContainer />
      <Footer />
    </>
  );
}

export default Signup;
