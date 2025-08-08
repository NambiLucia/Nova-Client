import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion, useSpring, useScroll } from "framer-motion";

function Hero() {
  const containerVariants = {
    hidden: { x: "100vw", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="bg-gradient-to-br from-[#F8FAFC] via-[#E3F2FD] to-[#F1F8FF] text-[#333] min-h-screen flex flex-col items-center py-20">

      {/* Scroll Indicator */}
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 8,
          originX: 0,
          backgroundColor: "#00B8D9",
          zIndex: 1000,
        }}
      />

      {/* Main Hero Section */}
      <motion.div
        className="container mx-auto px-8 lg:px-20 max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      >
        {/* Text Content */}
        <div className="text-center md:text-left space-y-8 mt-10">
          <h1 className="text-4xl md:text-5xl font-bold leading-snug tracking-wide">
            <span className="text-[#00B8D9] italic font-Bubblegum">NOVA</span>{" "}
            Payment Voucher <br /> Management System
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold font-Bubblegum italic text-[#3F51B5] tracking-wide">
            Create Payment Vouchers Anytime, Anywhere!
          </h2>
          <p className="text-lg md:text-xl font-Roboto tracking-wide text-gray-700">
            Experience the future of payment vouchers: Seamless, secure, smart, and paperless.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link to="/login">
              <button className="flex items-center gap-2 bg-gradient-to-r from-[#00B8D9] to-[#00D4FF] text-white px-6 py-3 rounded-full shadow-lg hover:shadow-[#00D4FF]/50 transition-all duration-300 font-semibold">
                GET STARTED
                <FaArrowRightLong />
              </button>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center px-4 md:px-0 order-first md:order-none">
          <motion.img
            src="/undraw_online_transactions_-02-ka.svg"
            alt="Online Transactions"
            className="w-full max-w-md md:max-w-lg drop-shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {/* Second Section */}
      <div className="container mx-auto px-8 lg:px-20 max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-40 items-center mt-28">
        <motion.img
          src="/undraw_done-checking_ra6c.svg"
          alt="Secure Payments"
          className="w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto drop-shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
        <div className="space-y-6 max-w-md">
          <h2 className="text-2xl md:text-3xl font-semibold font-Bubblegum italic text-[#3F51B5] tracking-wide">
            Seamless, Secure, and Smart Transactions
          </h2>
          <p className="text-lg md:text-xl font-Roboto tracking-wider text-gray-700">
            Our platform boosts accountability by streamlining payments, keeping accurate records, minimizing manual errors, and eliminating paperwork — all while enhancing efficiency.
          </p>
        </div>
      </div>

      {/* Final Section */}
      <div className="container mx-auto px-8 lg:px-20 max-w-screen-xl text-center mt-28 pb-20">
        <motion.img
          src="/undraw_secure-files_32ll.svg"
          alt="Secure Data"
          className="w-full max-w-lg mx-auto drop-shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
        <h2 className="text-2xl md:text-3xl font-semibold font-Bubblegum italic text-[#3F51B5] tracking-wide mt-8">
          Your Security, Our Priority
        </h2>
        <p className="text-lg md:text-xl font-Roboto tracking-wide text-gray-700 mt-4">
          We prioritize data protection, ensuring your payment vouchers remain safe and secure.
        </p>
      </div>
    </div>
  );
}

export default Hero;
