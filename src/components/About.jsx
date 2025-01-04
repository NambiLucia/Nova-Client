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
              Nova is a revolutionary system designed to simplify organizational payments by eliminating paperwork. It helps businesses, particularly small organizations, streamline their payment processes, making them more efficient, secure, and effortless. With Nova, you can automate payment tracking, processing, and approval, replacing the cumbersome manual tasks with a seamless digital experience. Say goodbye to paperwork and hello to a smarter way of managing payments!
            </p>
          </section>

          {/* Scroll Section 3 */}
          <section className="scroll-section">
            <h2 className="text-2xl font-semibold text-[#3F51B5] mb-4 font-Roboto">Key Features</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6 font-Roboto text-base md:text-lg text-left">
              <li>Paperless Transactions: Process payments digitally, eliminating the need for physical paperwork.</li>
              <li>Simplified Payment Tracking: Easily track payment statuses in real-time.</li>
              <li>User-Friendly Interface: Intuitive design, no technical experience required.</li>
              <li>Customizable for Any Organization: Adapts to the needs of any organization, big or small.</li>
            </ul>
          </section>

          {/* Scroll Section 4 */}
          <section className="scroll-section">
            <h2 className="text-2xl font-semibold text-[#3F51B5] mb-4 font-Roboto">Why Choose <span className="text-[#3F51B5] italic font-Bubblegum">Nova</span>?</h2>
            <p className="text-base md:text-lg text-gray-600 mb-6 font-Roboto text-left">
              Nova is perfect for small organizations looking to modernize their payment processes. It increases efficiency by automating tasks, reduces costs by eliminating paperwork, and improves accuracy with secure, transparent transactions.
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
