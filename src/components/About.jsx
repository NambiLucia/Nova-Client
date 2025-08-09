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

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Scroll Indicator */}
      <motion.div
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 6,
          originX: 0,
          backgroundColor: "#1E3A8A",
          zIndex: 1000,
        }}
      />

      <NavBar />

      {/* Added spacing between NavBar and content */}
      <div className="py-10" />

      <div className="flex-grow p-6 md:p-10">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Why Choose Nova */}
          <section className="bg-white rounded-xl shadow-md p-8 flex flex-col md:flex-row items-center gap-8">
            <FaChartLine className="text-[#1E3A8A] text-5xl" />
            <div>
              <h2 className="text-2xl font-bold text-[#1E3A8A] mb-3">
                Why Choose Nova?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Nova streamlines your payment voucher process with automation,
                transparency, and security. Reduce manual errors, cut
                paperwork, and access real-time financial data from anywhere.
                Designed for businesses, accountants, and finance teams seeking
                efficiency without complexity.
              </p>
            </div>
          </section>

          {/* Our Vision */}
          <section className="bg-white rounded-xl shadow-md p-8 flex flex-col md:flex-row items-center gap-8">
            <FaBullseye className="text-[#1E3A8A] text-5xl" />
            <div>
              <h2 className="text-2xl font-bold text-[#1E3A8A] mb-3">
                Our Vision
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To empower organizations — big or small — to operate with
                enterprise-level efficiency. Nova eliminates paperwork,
                simplifies financial workflows, and ensures your payment process
                is ready for the digital future.
              </p>
            </div>
          </section>

          {/* Nova Payment Overview */}
          <section className="bg-white rounded-xl shadow-md p-8 flex flex-col md:flex-row items-center gap-8">
            <FaFileInvoiceDollar className="text-[#1E3A8A] text-5xl" />
            <div>
              <h2 className="text-2xl font-bold text-[#1E3A8A] mb-3">
                Nova Payment Voucher Management
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Nova is a secure, cloud-based platform for creating, approving,
                tracking, and reporting payment vouchers. It ensures accuracy,
                compliance, and a clear audit trail while providing powerful
                insights into your company’s financial activities.
              </p>
            </div>
          </section>
        </div>

        {/* Key Features */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-[#1E3A8A] mb-8 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "User Authentication & Access Control",
                points: ["Role-based access", "Secure login"],
              },
              {
                title: "Voucher Creation & Processing",
                points: [
                  "Unique serial numbers",
                  "Attach invoices & receipts",
                ],
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
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1 hover:scale-[1.02]"
              >
                <h3 className="text-lg font-bold text-[#1E3A8A] mb-3">
                  {feature.title}
                </h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  {feature.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default About;
