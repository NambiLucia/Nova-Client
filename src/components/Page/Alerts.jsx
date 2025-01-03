import PropTypes from "prop-types"; // Import PropTypes for validation
import { PieChart, Pie, ResponsiveContainer, Tooltip } from "recharts";

const COLORS = ["#0088FE", "#00C49F"];

function Alerts({ payments }) {
  // Count payments by status
  const initiatedCount = payments.filter((payment) => payment.status === "Initiated").length;
  const approvedCount = payments.filter((payment) => payment.status === "Approved").length;

  // Data for charts
  const initiatedData = [{ name: "Initiated", value: initiatedCount }];
  const approvedData = [{ name: "Approved", value: approvedCount }];

  return (
    <div className="bg-gray-200 p-4 flex flex-col md:flex-row gap-8 justify-center items-center ">
      {/* Initiated Payments Card */}
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

      {/* Approved Payments Card */}
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

// PropTypes validation
Alerts.propTypes = {
  payments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Alerts;
