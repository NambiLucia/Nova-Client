import NavBar from "./Nav";
import Footer from "./Footer";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";


const initialValues = {
  fullname: "",
  email: "",
  password: "",
  role: "",
};



const validationSchema = Yup.object({
  fullname: Yup.string().required("Required!!!"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Required"),
  password: Yup.string()
  .min(3, 'Must be at least 3 characters long')
  .required("Required"),
  role: Yup.string().required("Required"),
});

function Signup() {
  const navigate = useNavigate();

  const onSubmit = async(values,{setSubmitting,resetForm}) => {
    try{
     
      const response =await axios.post("http://localhost:3000/api/v1/users/register",values);
      console.log("Registration successful:", response.data);
      toast.success("Registration successful!Redirecting to login...")
resetForm();
setTimeout(()=>navigate('/login'),2000)


    }
    catch(error){
      console.error('Error signing up:', error);
      toast.error('Error signing up');
    }
    finally{
      setSubmitting(false);
    }
};



  return (
    <>
    <NavBar />
    <section className="flex justify-center items-center min-h-screen bg-[#f5f4f1]">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {() => (
          <Form className="w-full max-w-md p-6 bg-[#f5f4f1] shadow-2xl rounded-lg">
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
                className="w-full bg-[#3F51B5] text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Register
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </section>
    <Footer />
    </>
  );
}

export default Signup;
