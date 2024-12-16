
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const initialValues = {
  date: "",
  voucherno: "",
  payee: "",
  paymentDetails: "",
  accountCode: "",
  beneficiaryCode: "",
  budgetCode: "",
  exchangerate: "",
  amountInFigures: "",
  amountInWords: "",
  status: "",
  document: null,
};

const validationSchema = Yup.object({
  date: Yup.date().required("Date is required"),
  voucherno: Yup.number()
    .typeError("Voucher No. must be a number")
    .required("Voucher No. is required"),
  payee: Yup.string().required("Payee is required"),
  paymentDetails: Yup.string().required("Payment details are required"),
  accountCode: Yup.string().required("Account code is required"),
  beneficiaryCode: Yup.string().required("Beneficiary code is required"),
  budgetCode: Yup.string().required("Budget code is required"),
  exchangerate: Yup.number()
    .typeError("Exchange rate must be a number")
    .required("Exchange rate is required"),
  amountInFigures: Yup.number()
    .typeError("Amount in figures must be a number")
    .required("Amount in figures is required"),
  amountInWords: Yup.string().required("Amount in words is required"),
  status: Yup.string().required("Status is required"),
  document: Yup.mixed().required("Document is required"),
});

function AddPayment() {
  const navigate = useNavigate();

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const formData = new FormData();
      Object.keys(values).forEach((key) => {
        formData.append(key, values[key]);
      });

      const response = await axios.post(
        "http://localhost:3000/api/v1/payments/create-payment",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Payment added successfully:", response.data);
      toast.success("Payment successfully added!");
      resetForm();
      navigate("/");
    } catch (error) {
      console.error("Error creating payment:", error);
      toast.error("Error creating payment");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
    
      <section className="flex justify-center items-center min-h-screen bg-gray-100">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form className="w-full max-w-2xl p-6 bg-white shadow-lg rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">
                Add Payment
              </h2>

              {/* Payment Details Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Date
                  </label>
                  <Field
                    id="date"
                    type="date"
                    name="date"
                    className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <ErrorMessage
                    name="date"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="voucherno"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Voucher No.
                  </label>
                  <Field
                    id="voucherno"
                    type="number"
                    name="voucherno"
                    className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <ErrorMessage
                    name="voucherno"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="payee"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Payee
                  </label>
                  <Field
                    id="payee"
                    type="text"
                    name="payee"
                    className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <ErrorMessage
                    name="payee"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              {/* Additional Details Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="accountCode"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Account Code
                  </label>
                  <Field
                    id="accountCode"
                    type="text"
                    name="accountCode"
                    className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <ErrorMessage
                    name="accountCode"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="beneficiaryCode"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Beneficiary Code
                  </label>
                  <Field
                    id="beneficiaryCode"
                    type="text"
                    name="beneficiaryCode"
                    className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <ErrorMessage
                    name="beneficiaryCode"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="budgetCode"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Budget Code
                  </label>
                  <Field
                    id="budgetCode"
                    type="text"
                    name="budgetCode"
                    className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <ErrorMessage
                    name="budgetCode"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              {/* Amount and Status Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="exchangerate"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Exchange Rate
                  </label>
                  <Field
                    id="exchangerate"
                    type="number"
                    name="exchangerate"
                    className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <ErrorMessage
                    name="exchangerate"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="amountInFigures"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Amount in Figures
                  </label>
                  <Field
                    id="amountInFigures"
                    type="number"
                    name="amountInFigures"
                    className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <ErrorMessage
                    name="amountInFigures"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="amountInWords"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Amount in Words
                  </label>
                  <Field
                    id="amountInWords"
                    type="text"
                    name="amountInWords"
                    className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <ErrorMessage
                    name="amountInWords"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
  <label
    htmlFor="status"
    className="block text-sm font-medium text-gray-700 mb-1"
  >
    Status
  </label>
  <Field
    as="select"
    id="status"
    name="status"
    className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
  >
    <option value="" disabled>
      Select Status
    </option>
    <option value="INITIATED">INITIATED</option>
    <option value="REVIEWED">REVIEWED</option>
    <option value="APPROVED">APPROVED</option>
    <option value="PROCESSED">PROCESSED</option>
  </Field>
  <ErrorMessage
    name="status"
    component="div"
    className="text-red-500 text-sm"
  />
</div>

              </div>

              {/* Document Upload */}
              <div className="mb-4">
                <label
                  htmlFor="document"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Upload Document
                </label>
                <input
                  id="document"
                  name="document"
                  type="file"
                  className="block w-full text-gray-900 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  onChange={(event) =>
                    setFieldValue("document", event.currentTarget.files[0])
                  }
                />
                <ErrorMessage
                  name="document"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Add Payment"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <ToastContainer />
      </section>
     
    </>
  );
}

export default AddPayment;