import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import Alerts from "./Alerts";
import Display from "../Page/Display";

// Colors for the PieChart
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
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

  // Fetch data from the backend API
  useEffect(() => {
    const fetchPaymentData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/v1/payments/payment-status");
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const paymentStatus = await response.json();

        // Format the data for the PieChart
        const formattedData = paymentStatus.map((item) => ({
          name: item.status,
          value: item.count,
        }));

        setData(formattedData);
        setPayments(paymentStatus); // Store raw payment data for Alerts
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPaymentData();
  }, []);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">Error: {error}</div>;

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <Display />

      {/* Payment Status Section */}
      <div className="bg-gray-200 p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4 text-center">Payment Status</h1>

        {/* Pie Chart Section */}
        <div className="min-w-full h-80">
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
      </div>

      {/* Alerts Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-8 m-auto">
        <h1 className="text-2xl font-bold text-center mb-4">Alerts</h1>
        <Alerts payments={payments} />
      </div>
    </div>
  );
}

export default Dashboard;
