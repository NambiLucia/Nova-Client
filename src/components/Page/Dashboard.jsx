import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import Alerts from "./Alerts";
import Display from "../Page/Display";
import {jwtDecode} from "jwt-decode";

// Colors for the PieChart
const COLORS = ["#0088FE", "#00C49F"];
const RADIAN = Math.PI / 180;

// Customized Label for PieChart
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function Dashboard() {
  const [data, setData] = useState([]);
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPaymentData = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("userToken");
        if (!token) {
          throw new Error("Authentication token missing. Cannot fetch data.");
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

        const response = await fetch(`https://nova-server-hk8n.onrender.com/api/v1/payments/payment-status/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 401) {
          throw new Error("Unauthorized. Displaying fallback data.");
        }

        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }

        const paymentStatus = await response.json();

        // Filter and format the data for the PieChart
        const filteredData = paymentStatus
          .filter((item) => item.status === "INITIATED" || item.status === "APPROVED")
          .map((item) => ({
            name: item.status,
            value: item.count,
          }));

        setData(filteredData);
        setPayments(filteredData); 
      } catch (error) {
        setError(error.message);

        // If unauthorized, fallback data for the charts
        if (error.message.includes("Unauthorized")) {
          const fallbackData = [
            { name: "INITIATED", value: 0 },
            { name: "APPROVED", value: 0 },
          ];
          setData(fallbackData);
          setPayments([]);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentData();
  }, []);

  if (loading) return <div className="text-center">Loading...</div>;

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <Display />

      {/* Payment Status Section */}
      <h1 className="text-2xl font-semibold mb-4 text-center">Payment Status</h1>
      <div className="bg-gray-200 p-6 w-full rounded-lg shadow-md">
        {error && !error.includes("Unauthorized") ? (
          <div className="text-center text-red-500">Error: {error}</div>
        ) : (
          <>
            <div className="flex flex-col sm:flex-row justify-around items-center">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 m-2 rounded-lg shadow text-center w-40"
                >
                  <h2 className="text-lg font-semibold text-gray-700">{item.name}</h2>
                  <p className="text-2xl font-bold">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Pie Chart Section */}
            <div className="min-w-full h-80 mt-6">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </>
        )}
      </div>

      {/* Alerts Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-8">
        <h1 className="text-2xl font-bold text-center mb-4">Alerts</h1>
        <Alerts payments={payments} />
      </div>
    </div>
  );
}

export default Dashboard;
