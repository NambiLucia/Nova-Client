import { useState } from "react";
import Display from "./Display"
import { toast, ToastContainer } from "react-toastify";
import { useRef } from "react";

function Addpayment() {
  const fileInputRef = useRef(null); // Add a reference for the file input
  const initialFormData = {
    date: "",
    voucherNo: "",
    payee: "",
    paymentDetails: "",
    accountCode: "",
    beneficiaryCode: "",
    budgetCode: "",
    exchangeRate: "",
    amountFigures: "",
    amountWords: "",
    status: "",
    document: null,
  };

  const [formData, setFormData] = useState(initialFormData);

  // Handle input changes for text fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 5 * 1024 * 1024) {
      setFormData({ ...formData, document: file });
    } else {
      toast.error("File size exceeds 5MB");
      e.target.value = null;
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("userToken");

    console.log("userToken", token);

    if (!token) {
      alert("No authentication token found");
      return;
    }

    const {
      date,
      voucherNo,
      payee,
      paymentDetails,
      accountCode,
      beneficiaryCode,
      budgetCode,
      exchangeRate,
      amountFigures,
      amountWords,
      status,
      document,
    } = formData;

    if (
      !date ||
      !voucherNo ||
      !payee ||
      !paymentDetails ||
      !accountCode ||
      !beneficiaryCode ||
      !budgetCode ||
      !exchangeRate ||
      !amountFigures ||
      !amountWords ||
      !status ||
      !document
    ) {
      toast.error("Please fill out all required fields.");
      return;
    }

 // Convert date to ISO-8601 format
 const formattedDate = new Date(date).toISOString();


    // Prepare FormData
    const payload = new FormData();
    payload.append("date", formattedDate);
    payload.append("voucherNo", voucherNo);
    payload.append("payee", payee);
    payload.append("paymentDetails", paymentDetails);
    payload.append("accountCode", accountCode);
    payload.append("beneficiaryCode", beneficiaryCode);
    payload.append("budgetCode", budgetCode);
    payload.append("exchangeRate", exchangeRate);
    payload.append("amountFigures", amountFigures);
    payload.append("amountWords", amountWords);
    payload.append("status", status);

    // Append file if exists
    if (document) {
      payload.append("document", document);
    }

    const apiUrl = "https://nova-server-hk8n.onrender.com/api/v1/payments/create-payment";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: payload,
      });
   console.log(payload)
      const data = await response.json();

      if (response.ok) {
     
        toast.success("Payment successfully created!");
        console.log("Payment successfully created:", data);

        setFormData(initialFormData); 
        if (fileInputRef.current) {
          fileInputRef.current.value = ""; // Clear the file input
        }
      } else {
        toast.error(data.message || "Failed to create payment.");
        console.error("Error response:", data);
      }
    } catch (error) {
      console.error("Error creating payment:", error);
      toast.error("An unexpected error occurred. Please try again later.");
    }
  };








  return (
   <>
    <ToastContainer />
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">
            <Display />
            <div className="bg-white rounded-lg shadow-md p-20 md:p-8 w-full max-w-2xl m-auto">
                <h2 className="text-2xl font-semibold mb-4 text-center">Add Payment</h2>
                <form  onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="date" className="block text-gray-700 font-medium mb-1">Date</label>
                            <input type="date" id="date" name="date" 
                            value={formData.date} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        </div>
                        <div>
                            <label htmlFor="voucherNo" className="block text-gray-700 font-medium mb-1">Voucher No</label>
                            <input type="text" id="voucherNo" name="voucherNo"  value={formData.voucherNo} onChange={handleChange}  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        </div>
                        <div>
                            <label htmlFor="payee" className="block text-gray-700 font-medium mb-1">Payee</label>


                            <textarea id="payee" name="payee" value={formData.payee} onChange={handleChange}   className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" rows="3"></textarea>
                        </div>
                        <div>
                            <label htmlFor="paymentDetails" className="block text-gray-700 font-medium mb-1">Payment Details</label>
                            <textarea id="paymentDetails" name="paymentDetails" value={formData.paymentDetails} onChange={handleChange}   className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" rows="3"></textarea>
                        </div>
                         <div>
                         <label htmlFor="accountCode" className="block text-gray-700 font-medium mb-1">Account code</label>
                         <select
  id="accountCode"
  name="accountCode"
  value={formData.accountCode}
  onChange={handleChange}
  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
>
  <option value="">Select Account</option>
  <option value="ACC-01">ACC-01</option>
 
</select>
                        </div>
                        <div>
                        <label htmlFor="beneficiaryCode" className="block text-gray-700 font-medium mb-1">Beneficiary code</label>
                        <select
  id="beneficiaryCode"
  name="beneficiaryCode"
  value={formData.beneficiaryCode}
  onChange={handleChange}
  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
>
  <option value="">Select Beneficiary</option>
  <option value="BEN-01">BEN-01</option>
 
</select>

                        </div>
                         <div>
                            <label htmlFor="budgetCode" className="block text-gray-700 font-medium mb-1">Budget Code</label>
                            
                         <select
  id="budgetCode"
  name="budgetCode"
  value={formData.budgetCode}
  onChange={handleChange}
  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
>
  <option value="">Select Account</option>
  <option value="BUD-01">BUD-01</option>
 
</select>
                        </div>
                        <div>
                            <label htmlFor="exchangeRate" className="block text-gray-700 font-medium mb-1">Exchange Rate</label>
                            <input type="number" id="exchangeRate" name="exchangeRate" value={formData.exchangeRate} onChange={handleChange}  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="amountFigures" className="block text-gray-700 font-medium mb-1">Amount (Figures)</label>
                            <input type="number" id="amountFigures" name="amountFigures" value={formData.amountFigures} onChange={handleChange}  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        </div>
                        <div>
                            <label htmlFor="amountWords" className="block text-gray-700 font-medium mb-1">Amount (Words)</label>
                            <input type="text" id="amountWords" name="amountWords" value={formData.amountWords} onChange={handleChange}  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        </div>
                        <div>
                            <label htmlFor="status" className="block text-gray-700 font-medium mb-1">Status</label>
                            <select id="status" name="status" value={formData.status} onChange={handleChange}  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option value="" >Select Status</option>
                                <option value="INITIATED">INITIATED</option>
              {/* <option value="REVIEWED">REVIEWED</option> */}
              <option value="APPROVED">APPROVED</option>
              {/* <option value="PROCESSED">PROCESSED</option> */}

                            </select>
                        </div>
                        <div>
                            <label htmlFor="document" className="block text-gray-700 font-medium mb-1">Attach Document (Max 5MB)</label>
                            <input type="file" id="document" name="document"onChange={handleFileChange} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" accept=".pdf" />
                        </div>
                    </div>

                    <button type="submit" className="w-full bg-[#3F51B5] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300">
                        Add Payment
                    </button>
                </form>
            </div>
        </div>
   
   
   
   </>
  )
}
export default Addpayment;