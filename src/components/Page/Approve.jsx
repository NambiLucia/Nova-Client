import { useState, useEffect } from "react";
import Display from "../Page/Display";

function Approve() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all payments
  useEffect(() => {
    const fetchPayments = async () => {
        setLoading(true);
        try {
          const token = localStorage.getItem("userToken");
          if (!token) {
            throw new Error("Authentication token missing. Please log in.");
          }
      
          const response = await fetch("http://localhost:3000/api/v1/payments", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
      
          if (!response.ok) {
            throw new Error(`Error fetching payments: ${response.statusText}`);
          }
      
          const data = await response.json();
          console.log("Fetched payments:", data); // Log the data for debugging
          setPayments(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      

    fetchPayments();
  }, []);

  // Approve a payment
  const approvePayment = async (paymentId) => {
    try {
      const token = localStorage.getItem("userToken");
      if (!token) {
        throw new Error("Authentication token missing. Please log in.");
      }

      const response = await fetch(`http://localhost:3000/api/v1/payments/${paymentId}/approve`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Error approving payment: ${response.statusText}`);
      }

      const updatedPayment = await response.json();
      // Update the local state with the approved payment
      setPayments((prevPayments) =>
        prevPayments.map((payment) =>
          payment.id === updatedPayment.payment.id
            ? { ...payment, status: updatedPayment.payment.status }
            : payment
        )
      );
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">Error: {error}</div>;

  return (
    <div className="bg-gray-100 min-h-screen p-6">
          <Display />
      <h1 className="text-2xl font-semibold mb-6 text-center">Admin Dashboard - Payments</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        {Array.isArray(payments) && payments.length > 0 ? (
          <table className="min-w-full table-auto border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2 text-left">#</th>
                <th className="border px-4 py-2 text-left">User ID</th>
                <th className="border px-4 py-2 text-left">Amount</th>
                <th className="border px-4 py-2 text-left">Status</th>
                <th className="border px-4 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={payment.id} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{payment.user?.fullname}</td>
                  <td className="border px-4 py-2">${payment.amountFigures}</td>
                  <td className="border px-4 py-2">
                    <span
                      className={`px-2 py-1 text-sm rounded ${
                        payment.status === "APPROVED"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {payment.status}
                    </span>
                  </td>
                  <td className="border px-4 py-2 text-center">
                    {payment.status !== "APPROVED" && (
                      <button
                        onClick={() => approvePayment(payment.id)}
                        className="px-4 py-2 text-white bg-green-600 hover:bg-green-700 rounded"
                      >
                        Approve
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
            <div className="text-center text-gray-500">No payments found.</div>
          )}
      </div>
    </div>
  );
}

export default Approve;
