import NavBar from "./Nav";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { motion, useSpring, useScroll } from "framer-motion";
import {
  FaUserPlus,
  FaFileInvoiceDollar,
  FaCheckCircle,
  FaChartLine,
} from "react-icons/fa";

function Guide() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const steps = [
    {
      title: "Step 1: Register Your Account",
      desc: "Sign up on Nova with your full name, email, password, and role to access the platform.",
      icon: <FaUserPlus />,
      color: "emerald",
    },
    {
      title: "Step 2: Create a Payment Voucher",
      desc: "Navigate to Add Payment and fill in details such as date, amount, and payee information.",
      icon: <FaFileInvoiceDollar />,
      color: "teal",
    },
    {
      title: "Step 3: Review & Approve Payments",
      desc: "Once submitted, vouchers move through approval workflows and can be reviewed directly from your dashboard.",
      icon: <FaCheckCircle />,
      color: "cyan",
    },
    {
      title: "Step 4: Track & Manage Payments",
      desc: "Monitor voucher statuses in real time under the dashboard, ensuring full visibility and control.",
      icon: <FaChartLine />,
      color: "lime",
    },
  ];

  const colorMap = {
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-200",
    teal: "bg-teal-50 text-teal-700 border-teal-200",
    cyan: "bg-cyan-50 text-cyan-700 border-cyan-200",
    lime: "bg-lime-50 text-lime-700 border-lime-200",
  };

  const iconColorMap = {
    emerald: "text-emerald-600",
    teal: "text-teal-600",
    cyan: "text-cyan-600",
    lime: "text-lime-600",
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-gray-50 min-h-screen flex flex-col">
      {/* Scroll Progress Indicator */}
      <motion.div
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          originX: 0,
          background: "linear-gradient(90deg, #10b981 0%, #059669 100%)",
          zIndex: 1000,
        }}
      />

      <NavBar />

      <div className="flex-grow px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl p-8 md:p-12 space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {/* Title */}
          <motion.h1
            className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center"
            variants={fadeInUp}
          >
            Quick Start Guide:{" "}
            <span className="text-emerald-600 italic font-semibold">Nova</span>
          </motion.h1>

          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex items-start gap-5 p-6 md:p-8 rounded-2xl shadow-lg border ${colorMap[step.color]} hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300`}
                variants={fadeInUp}
              >
                <div
                  className={`text-4xl md:text-5xl mt-1 flex-shrink-0 ${iconColorMap[step.color]}`}
                >
                  {step.icon}
                </div>
                <div>
                  <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-1">
                    {step.title}
                  </h2>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to action */}
          <motion.div className="text-center mt-6" variants={fadeInUp}>
            <Link to="/login">
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-2xl hover:bg-emerald-500 hover:scale-[1.03] transition-all duration-300">
                Get Started Now
              </button>
            </Link>
            <p className="text-sm text-slate-500 mt-3">
              No credit card required • 14-day free trial
            </p>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}

export default Guide;
