import { FaArrowRightLong } from "react-icons/fa6";

function Hero() {
  return (
    <div className="bg-[#f5f5f5] text-[#5c5c5c] min-h-screen flex items-center">
      <div className="container mx-auto px-8 lg:px-20 max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left space-y-6 leading-loose">
          <h1 className="text-3xl md:text-5xl font-bold font-Roboto leading-relaxed tracking-wide">
            <span className="text-[#3F51B5] italic font-Bubblegum">NOVA</span> Payment Manangement System
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold font-Bubblegum italic text-[#3F51B5] tracking-wide">
            Pay Anywhere, Anytime.
          </h2>
          <p className="text-lg md:text-xl font-Roboto tracking-wide">
            Experience the future of payments: seamless, secure, and paperless transactions.
          </p>

          <div className="flex justify-center items-center">
            <button className="flex items-center font-Roboto font-semibold text-[#3F51B5] leading-9 mt-4">
              GET STARTED
              <FaArrowRightLong className="ml-2" />
            </button>
          </div>
        </div>

        <div className="flex justify-center px-4 md:px-0">
          <img
            src="/undraw_online_transactions_-02-ka.svg"
            alt="Online Transactions"
            className="w-full max-w-md md:max-w-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
