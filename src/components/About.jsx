import NavBar from "./Nav";
import Footer from "./Footer";
import { motion, useSpring, useScroll } from "framer-motion";
import { FaBullseye, FaChartLine, FaFileInvoiceDollar } from "react-icons/fa";

function About() {
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

      <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Why Choose Nova */}
          <motion.section
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex-shrink-0">
              <FaChartLine className="text-emerald-600 text-6xl md:text-7xl" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Why Choose Nova?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Nova streamlines your payment voucher process with automation,
                transparency, and security. Reduce manual errors, cut paperwork,
                and access real-time financial data from anywhere. Designed for
                businesses, accountants, and finance teams seeking efficiency
                without complexity.
              </p>
            </div>
          </motion.section>

          {/* Our Vision */}
          <motion.section
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex-shrink-0">
              <FaBullseye className="text-emerald-600 text-6xl md:text-7xl" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To empower organizations — big or small — to operate with
                enterprise-level efficiency. Nova eliminates paperwork,
                simplifies financial workflows, and ensures your payment process
                is ready for the digital future.
              </p>
            </div>
          </motion.section>

          {/* Nova Payment Overview */}
          <motion.section
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex-shrink-0">
              <FaFileInvoiceDollar className="text-emerald-600 text-6xl md:text-7xl" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Nova Payment Voucher Management
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Nova is a secure, cloud-based platform for creating, approving,
                tracking, and reporting payment vouchers. It ensures accuracy,
                compliance, and a clear audit trail while providing powerful
                insights into your company’s financial activities.
              </p>
            </div>
          </motion.section>

          {/* Key Features */}
          <motion.section
            className="mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "User Authentication & Access Control",
                  points: ["Role-based access", "Secure login"],
                },
                {
                  title: "Voucher Creation & Processing",
                  points: ["Unique serial numbers", "Attach invoices & receipts"],
                },
                {
                  title: "Approval Workflow",
                  points: ["Multi-level approvals"],
                },
                {
                  title: "Expense & Budget Tracking",
                  points: ["Real-time monitoring", "Budget category linking"],
                },
                {
                  title: "Reporting & Auditing",
                  points: ["Track all vouchers", "Export to PDF"],
                },
                {
                  title: "Vendor Management",
                  points: ["Maintain vendor database"],
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.03]"
                  variants={fadeInUp}
                >
                  <h3 className="text-xl font-bold text-emerald-600 mb-4">{feature.title}</h3>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2 text-base">
                    {feature.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
