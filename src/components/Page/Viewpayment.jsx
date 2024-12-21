import { useEffect, useState } from "react";
import Display from "./Display";
import {jwtDecode} from "jwt-decode";
import axios from "axios";
import { Link } from "react-router-dom";
import Pdfview from "./Pdfview";

function Viewpayment() {
  const [list, setList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (!token) {
      setError("User token not found. Please log in.");
      return;
    }
  
    let userId; 
  
    try {
      const decoded = jwtDecode(token);
      userId = decoded.id;
  
      if (!userId) throw new Error("Invalid token structure.");
    } catch (err) {
      setError("Invalid token. Please log in again.");
      console.error(err);
      return;
    }
  
    const fetchPayments = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/payments/user-payments/${userId}`
        );
        setList(response.data.payments); 
        console.log("View payment:", response.data.payments);
      } catch (err) {
        setError("Failed to fetch payments. Please try again.");
        console.error(err);
      }
    };
  
    fetchPayments();
  }, []);
  

  return (
    <>
     <div className="flex flex-col sm:flex-row">
  <Display />

  <main className="flex-grow p-4 sm:p-6 mt-14 overflow-auto">
    <h1 className="text-xl sm:text-2xl font-bold text-gray-700 mb-4 sm:mb-6 text-center">
      View All Payments
    </h1>

    {error && (
      <div className="mb-4 p-4 text-red-600 bg-red-100 border border-red-200 rounded">
        {error}
      </div>
    )}

    <div className="overflow-auto max-w-full">
      <table className="min-w-full bg-white border border-gray-200 rounded-2xl shadow-md">
        <thead className="bg-[#F5F5F5]">
          <tr>
            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600 border-b">
              Payment ID
            </th>
            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600 border-b">
              Date
            </th>
            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600 border-b">
              Payee
            </th>
            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600 border-b">
              Amount(UGX)
            </th>
            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600 border-b">
              Status
            </th>
            <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600 border-b">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {list.length > 0 ? (
            list.map((payment) => (
              <tr key={payment.id}>
                <td className="py-2 px-4 text-sm text-gray-600 border-b">
                  {payment.id}
                </td>
                <td className="py-2 px-4 text-sm text-gray-600 border-b">
                  {new Date(payment.date).toLocaleDateString()}
                </td>
                <td className="py-2 px-4 text-sm text-gray-600 border-b">
                  {payment.payee}
                </td>
                <td className="py-2 px-4 text-sm text-gray-600 border-b">
                  {payment.amountFigures}
                </td>
                <td
                  className={`py-2 px-4 text-sm border-b ${
                    payment.status === "Approved"
                      ? "text-green-500"
                      : "text-gray-600"
                  }`}
                >
                  {payment.status}
                </td>
                <td className="py-2 px-4 text-sm text-blue-600 border-b">
                <Link to='/viewpdf'> <button onClick={Pdfview} className="text-blue-500 hover:underline">
                    View PDF
                  </button></Link> 
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                className="py-2 px-4 text-center text-gray-600 border-b"
                colSpan="6"
              >
                No payments found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </main>
</div>

    </>
  );
}

export default Viewpayment;
