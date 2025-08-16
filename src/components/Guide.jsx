import NavBar from "./Nav";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { motion, useSpring, useScroll } from "framer-motion";
import {
  FaUserPlus,
  FaFileInvoice,
  FaCheckCircle,
  FaChartBar,
} from "react-icons/fa";

function Guide() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  // Step color themes
  const steps = [
    {
      title: "Step 1: Register Your Account",
      desc: "Sign up on Nova by providing your full name, email, password, and role to access the platform.",
      icon: <FaUserPlus />,
      color: "blue",
    },
    {
      title: "Step 2: Create a Payment Voucher",
      desc: "Navigate to Add Payment and fill in payment details such as date, amount, and payee information.",
      icon: <FaFileInvoice />,
      color: "green",
    },
    {
      title: "Step 3: Review & Approve Payments",
      desc: "Once submitted, vouchers move through approval workflows and can be reviewed directly from the dashboard.",
      icon: <FaCheckCircle />,
      color: "purple",
    },
    {
      title: "Step 4: Track & Manage Payments",
      desc: "Monitor payment voucher statuses in real time under the dashboard, ensuring full visibility and control.",
      icon: <FaChartBar />,
      color: "orange",
    },
  ];

  // Tailwind color mapping
  const colorMap = {
    blue: "bg-blue-50 text-blue-700 border-blue-300",
    green: "bg-green-50 text-green-700 border-green-300",
    purple: "bg-purple-50 text-purple-700 border-purple-300",
    orange: "bg-orange-50 text-orange-700 border-orange-300",
  };

  const iconColorMap = {
    blue: "text-blue-600",
    green: "text-green-600",
    purple: "text-purple-600",
    orange: "text-orange-600",
  };

  return (
    <>
      {/* Scroll Progress Indicator */}
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 6,
          originX: 0,
          backgroundColor: "#3F51B5",
          zIndex: 1000,
        }}
      />

      <NavBar />

      <div className="bg-gray-50 min-h-screen p-6 md:p-12">
        <motion.div
          className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-6 md:p-12 space-y-10"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          {/* Title */}
          <motion.h1
            className="text-3xl md:text-4xl font-extrabold text-[#3F51B5] text-center"
            variants={fadeInUp}
          >
            Quick Start Guide:{" "}
            <span className="italic font-semibold text-gray-800">Nova</span>
          </motion.h1>

          {/* Steps */}
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`flex items-start gap-4 p-5 rounded-xl shadow-sm border ${colorMap[step.color]} hover:shadow-md transition`}
              variants={fadeInUp}
            >
              <div className={`text-3xl mt-1 ${iconColorMap[step.color]}`}>
                {step.icon}
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-semibold">
                  {step.title}
                </h2>
                <p className="text-sm md:text-base">{step.desc}</p>
              </div>
            </motion.div>
          ))}

          {/* Call to action */}
          <motion.div className="text-center" variants={fadeInUp}>
            <Link to="/login">
              <button className="bg-[#3F51B5] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-md hover:bg-[#334296] hover:scale-[1.03] transition-all">
                Get Started Now
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </>
  );
}

export default Guide;
