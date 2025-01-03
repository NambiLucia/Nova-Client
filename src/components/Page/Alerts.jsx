import { PieChart, Pie, ResponsiveContainer, Tooltip } from "recharts";
import { useState, useEffect } from "react"; 

const COLORS = ["#0088FE", "#00C49F"];

function Alerts() {
  
  const [initiatedCount, setInitiatedCount] = useState(0);
  const [approvedCount, setApprovedCount] = useState(0);

  useEffect(() => {
    const fetchPaymentStatus = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/v1/payments/payment-status");
        const data = await response.json();
        
        // Map through the data and get the count for each status
        const initiatedData = data.find(payment => payment.status === "INITIATED");
        const approvedData = data.find(payment => payment.status === "APPROVED");

        // Set the counts, defaulting to 0 if the status is not found
        setInitiatedCount(initiatedData ? initiatedData.count : 0);
        setApprovedCount(approvedData ? approvedData.count : 0);
      } catch (error) {
        console.error("Error fetching payment status data:", error);
      }
    };

    fetchPaymentStatus();
  }, []); 

  // Data for charts
  const initiatedData = [{ name: "Initiated", value: initiatedCount }];
  const approvedData = [{ name: "Approved", value: approvedCount }];

  return (
    <div className="bg-gray-200 p-4 flex flex-col md:flex-row gap-8 justify-center items-center">
      {/* Initiated Card */}
      <div className="bg-blue-50 p-4 rounded-lg shadow-md text-center">
        <h2 className="text-md font-semibold text-blue-700">Initiated Payments</h2>
        <p className="text-xl font-bold">{initiatedCount}</p>
        <p className="text-gray-600 mb-2 text-sm">Payments awaiting processing.</p>
        <div className="h-32">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={initiatedData}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={40}
                fill={COLORS[0]}
                label
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Approved Card */}
      <div className="bg-green-50 p-4 rounded-lg shadow-md text-center">
        <h2 className="text-md font-semibold text-green-700">Approved Payments</h2>
        <p className="text-xl font-bold">{approvedCount}</p>
        <p className="text-gray-600 mb-2 text-sm">Payments successfully processed.</p>
        <div className="h-32">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={approvedData}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={40}
                fill={COLORS[1]}
                label
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}



export default Alerts;
