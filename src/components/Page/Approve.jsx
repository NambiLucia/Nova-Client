import { useState, useEffect } from "react";
import Display from "../Page/Display";

function Approve() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userRole, setUserRole] = useState(null); // Store user role

  useEffect(() => {
    // Get user role from localStorage
    const storedUserDetails = localStorage.getItem("userDetails");

    if (storedUserDetails) {
      const userDetails = JSON.parse(storedUserDetails);
      setUserRole(userDetails.role); // Set role in state
    }

    const fetchPayments = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("userToken");
        if (!token) {
          throw new Error("Authentication token missing. Please log in.");
        }

        const response = await fetch("https://nova-server-hk8n.onrender.com/api/v1/payments", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Error fetching payments: ${response.statusText}`);
        }

        const data = await response.json();
        setPayments(data.payments);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  const approvePayment = async (paymentId) => {
    try {
      const token = localStorage.getItem("userToken");
      if (!token) {
        throw new Error("Authentication token missing. Please log in.");
      }

      const response = await fetch(
        `https://nova-server-hk8n.onrender.com/api/v1/payments/approve-payment/${paymentId}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error approving payment: ${response.statusText}`);
      }

      const updatedPayment = await response.json();
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
    <div className="bg-gray-100 min-h-screen p-6 lg:ml-56">
      <Display />
      <h1 className="text-xl sm:text-2xl font-semibold mb-6 text-center ml-4">
        Admin Dashboard - Payments
      </h1>
      <div className="bg-white rounded-lg shadow-lg p-6 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        {Array.isArray(payments) && payments.length > 0 ? (
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-max border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2 text-left">Number</th>
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
                    <td className="border px-4 py-2">Ugx{payment.amountFigures}</td>
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
                      {/* Only show the Approve button if the user is an ADMIN */}
                      {userRole === "ADMIN" && payment.status !== "APPROVED" && (
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
          </div>
        ) : (
          <div className="text-center text-gray-500">No payments found.</div>
        )}
      </div>
    </div>
  );
}

export default Approve;
