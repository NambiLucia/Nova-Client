import { useEffect, useState } from "react";
import Display from "./Display";
import {jwtDecode} from "jwt-decode";
import axios from "axios";

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
      const userId = decoded.id;

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
        setList(response.data); 
        console.log("View payment:", response.data);
      } catch (err) {
        setError("Failed to fetch payments. Please try again.");
        console.error(err);
      }
    };

    fetchPayments();
  }, []);

  return (
    <>
      <div className="flex">
        <Display />

        <main className="flex-grow p-6 mt-14">
          <h1 className="text-2xl font-bold text-gray-700 mb-6 text-center">
            View All Payments
          </h1>

          {error && (
            <div className="mb-4 p-4 text-red-600 bg-red-100 border border-red-200 rounded">
              {error}
            </div>
          )}

          <div className="overflow-x-auto">
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
                    Amount
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
                        ${payment.amountFigures.toFixed(2)}
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
                        <button className="text-blue-500 hover:underline">
                          View
                        </button>
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
