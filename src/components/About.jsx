import NavBar from "./Nav";
import Footer from "./Footer";
import { motion, useSpring, useScroll } from "framer-motion";

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
        id="scroll-indicator"
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "#3F51B5",
          zIndex: 1000,
        }}
      />
      <NavBar />
      
      <div className="flex-grow p-4 md:p-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Scroll Section 1 */}
          <section className="scroll-section">
            <h1 className="text-3xl md:text-4xl font-semibold text-[#3F51B5] mb-6 font-Roboto">
              Welcome to <span className="text-[#3F51B5] italic font-Bubblegum">Nova</span>
            </h1>
          </section>
          
          {/* Scroll Section 2 */}
          <section className="scroll-section">
            <p className="text-base md:text-lg text-gray-700 mb-6 font-Roboto text-left">
           <span className="text-[#3F51B5] text-2xl font-semibold">A Payment Voucher Management System (PVMS) </span> that helps businesses, accounting firms, and organizations streamline the creation, approval, tracking, and reporting of payment vouchers. It ensures transparency, efficiency, and proper record-keeping for financial transactions.
            </p>
          </section>

          {/* Scroll Section 3 */}
          <section className="scroll-section">
            <h2 className="text-2xl font-semibold text-[#3F51B5] mb-4 font-Roboto">Key Features</h2>
            <ul className="list-decimal pl-6 text-gray-600 mb-6 font-Roboto text-base md:text-lg text-left space-y-2">
  <li>
    <strong className="text-[#3F51B5]">User Authentication & Access Control</strong>
    <ul className="list-disc pl-6">
      <li>Role-based access (Initiator, Admin)</li>
      <li>Secure login</li>
    </ul>
  </li>
  
  <li>
    <strong className="text-[#3F51B5]">Voucher Creation & Processing</strong>
    <ul className="list-disc pl-6">
      <li>Generate payment vouchers with unique serial numbers</li>
      <li>Attach supporting documents (invoices, receipts)</li>
      <li>Automatic numbering and tracking</li>
    </ul>
  </li>

  <li>
    <strong className="text-[#3F51B5]">Approval Workflow</strong>
    <ul className="list-disc pl-6">
      <li>Multi-level approval (e.g., Initiator → Admin)</li>
    </ul>
  </li>

  <li>
    <strong className="text-[#3F51B5]">Expense & Budget Tracking</strong>
    <ul className="list-disc pl-6">
      <li>Link vouchers to specific budget categories</li>
      <li>Real-time monitoring of approved and pending payments</li>
    </ul>
  </li>

  <li>
    <strong className="text-[#3F51B5]">Reporting & Auditing</strong>
    <ul className="list-disc pl-6">
      <li>View initiated and approved vouchers</li>
      <li>Export payment vouchers in PDF format</li>
    </ul>
  </li>

  <li>
    <strong className="text-[#3F51B5]">Vendor & Beneficiary Management</strong>
    <ul className="list-disc pl-6">
      <li>Maintain a database of vendors and payees</li>
    </ul>
  </li>
</ul>

          </section>

          {/* Scroll Section 4 */}
          <section className="scroll-section">
            <h2 className="text-2xl font-semibold text-[#3F51B5] mb-4 font-Roboto">Why Choose <span className="text-[#3F51B5] italic font-Bubblegum">Nova</span>?</h2>
            <p className="text-base md:text-lg text-gray-600 mb-6 font-Roboto text-left">
            Nova is the ideal solution for businesses, accounting firms, and organizations aiming to modernize their payment voucher processes. By automating tasks,<span className="text-[#3F51B5]">it reduces manual errors and paperwork, enhances financial transparency and accountability, and improves efficiency with automated approvals.</span>  With <span className="text-[#3F51B5]">real-time insights into company expenses and strong compliance with financial regulations.</span> Nova ensures secure, accurate, and streamlined transactions—helping you manage payments effortlessly.
            </p>
          </section>

          {/* Scroll Section 5 */}
          <section className="scroll-section">
            <h2 className="text-2xl font-semibold text-[#3F51B5] mb-4 font-Roboto">Our Vision</h2>
            <p className="text-base md:text-lg text-gray-600 mb-6 font-Roboto text-left">
              Nova aims to empower small organizations to operate with the efficiency of large enterprises, simplifying operations and helping businesses grow in a digital world, all while eliminating the need for excessive paperwork.
            </p>
          </section>

        </div>
      </div>

      <Footer />

      

    
    </div>
  );
}

export default About;
