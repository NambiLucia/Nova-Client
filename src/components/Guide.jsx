import NavBar from "./Nav";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { motion, useSpring, useScroll } from "framer-motion";

function Guide() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    });


  return (
    <>
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
    <div className="bg-gray-100 min-h-screen p-6 md:p-12">
       
      <div className="max-w-4xl mx-auto bg-gray-200 shadow-lg rounded-lg p-6 md:p-12 space-y-8">
        <h1 className="text-2xl md:text-3xl font-bold text-[#3F51B5] text-center font-Roboto">
          Quick Start Guide: <span className="italic font-Bubblegum">Nova</span>
        </h1>

        {/* Step 1 */}
        <div className="space-y-4">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 font-Roboto">
            Step 1: Register Your Account
          </h2>
          <p className="text-gray-600 text-sm md:text-base font-Roboto">
            Begin by signing up on Nova. Provide your fullname, email,password and role to access the platform.
          </p>
        </div>

        {/* Step 2 */}
        <div className="space-y-4">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 font-Roboto">
            Step 2: Create a Payment Voucher
          </h2>
          <p className="text-gray-600 text-sm md:text-base font-Roboto">
            Go to <span className="italic text-[#3F51B5]">Add Payment</span> and fill in the payment details, 
            including date,amount, payee details etc.
          </p>
        </div>

        {/* Step 3 */}
        <div className="space-y-4">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 font-Roboto">
            Step 3: Review and Approve Payments
          </h2>
          <p className="text-gray-600 text-sm md:text-base font-Roboto">
            Payment vouchers initiated and approved will appear in the dashboard.
          </p>
        </div>

        {/* Step 4 */}
        <div className="space-y-4">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 font-Roboto">
            Step 4: Track and Manage Payments
          </h2>
          <p className="text-gray-600 text-sm md:text-base font-Roboto">
            Monitor payment voucher status in real-time under the Dashboard.
          </p>
        </div>

        {/* Call to action */}
        <div className="text-center">
         <Link to="/login"> <button className="bg-[#3F51B5] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#334296] transition font-Roboto">
            Get Started Now
          </button> </Link>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
  
}


export default Guide;
