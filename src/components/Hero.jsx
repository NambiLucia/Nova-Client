import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion, useSpring, useScroll } from "framer-motion";

function Hero() {
  const containerVariants = {
    hidden: { x: "100vw", opacity: 0 }, // Initial position off-screen to the right
    visible: { x: 0, opacity: 1 }, // Final position on-screen
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
     <div className="bg-[#f5f5f5] text-[#5c5c5c] min-h-screen flex items-center flex-col py-20">

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
      
      <motion.div
        className="container mx-auto px-8 lg:px-20 max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      >
        {/* Text Content */}
        <div className="text-center md:text-left space-y-8 leading-loose mt-16">
          <h1 className="text-3xl md:text-5xl font-bold font-Roboto leading-relaxed tracking-wide">
            <span className="text-[#3F51B5] italic font-Bubblegum">NOVA</span>{" "}
            Payment Management System
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold font-Bubblegum italic text-[#3F51B5] tracking-wide">
            Pay Anywhere, Anytime.
          </h2>
          <p className="text-lg md:text-xl font-Roboto tracking-wide">
            Experience the future of payments: seamless, secure, and paperless
            transactions.
          </p>
          <div className="flex justify-center items-center">
            <Link to="/login">
              <button className="flex items-center font-Roboto font-semibold text-[#3F51B5] leading-9 mt-4">
                GET STARTED
                <FaArrowRightLong className="ml-2" />
              </button>
            </Link>
          </div>
        </div>

        {/* Image on Left */}
        <div className="flex justify-center px-4 md:px-0 order-first md:order-none">
          <motion.img
            src="/undraw_online_transactions_-02-ka.svg"
            alt="Online Transactions"
            className="w-full max-w-md md:max-w-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {/* Second Section */}
      <div className="container mx-auto px-8 lg:px-20 max-w-screen-xl flex flex-col md:flex-row items-center gap-16 text-center md:text-left mt-24">
        <motion.img
          src="/undraw_online-payments_p97e.svg"
          alt="Online Payments"
          className="w-full max-w-md md:max-w-lg"
          
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
        <div className="space-y-6 max-w-md">
          <h2 className="text-2xl md:text-3xl font-semibold font-Bubblegum italic text-[#3F51B5] tracking-wide">
            Secure & Fast Transactions
          </h2>
          <p className="text-lg md:text-xl font-Roboto tracking-wide">
            Our platform ensures that your payments are processed quickly and securely,
            allowing you to focus on what matters most.
          </p>
        </div>
      </div>

      {/* Final Image Section */}
      <div className="container mx-auto px-8 lg:px-20 max-w-screen-xl text-center mt-24 pb-20">
        <motion.img
          src="\undraw_secure-files_32ll.svg"
          alt="Secure Data"
          className="w-full max-w-lg mx-auto"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
        <h2 className="text-2xl md:text-3xl font-semibold font-Bubblegum italic text-[#3F51B5] tracking-wide mt-8">
          Your Security, Our Priority
        </h2>
        <p className="text-lg md:text-xl font-Roboto tracking-wide mt-4">
          We prioritize data protection, ensuring your transactions are safe.
        </p>
      </div>
    </div>
  );
}

export default Hero;
