import NavBar from "./Nav";
import Footer from "./Footer";


function About() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <NavBar />
      
      <div className="flex-grow p-4 md:p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-[#3F51B5] mb-6 font-Roboto">
            Welcome to <span className="text-[#3F51B5] italic font-Bubblegum">Nova</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6 font-Roboto">
          Nova is a revolutionary system designed to simplify organizational payments by eliminating paperwork. It helps businesses, particularly small organizations, streamline their payment processes, making them more efficient, secure, and effortless. With Nova, you can automate payment tracking, processing, and approval, replacing the cumbersome manual tasks with a seamless digital experience. Say goodbye to paperwork and hello to a smarter way of managing payments
          </p>

          

          <h2 className="text-2xl font-semibold font-semibold text-[#3F51B5] mb-4 font-Roboto">Key Features:</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-6 font-Roboto text-base md:text-lg">
            <li>Paperless Transactions:  Process payments digitally, eliminating the need for physical paperwork.</li>
            <li>Simplified Payment Tracking: Easily track payment statuses in real-time.</li>
            <li>User-Friendly Interface:Intuitive design, no technical experience required..</li>
            <li>Customizable for Any Organization: Adapts to the needs of any organization, big or small.</li>
           
          </ul>

          <h2 className="text-2xl font-semibold text-[#3F51B5] mb-4 font-Roboto">Why Choose <span className="text-[#3F51B5] italic font-Bubblegum">Nova</span>?</h2>
          <p className="text-base md:text-lg text-gray-600 mb-6 font-Roboto">
          Nova is perfect for small organizations looking to modernize their payment processes. It increases efficiency by automating tasks, reduces costs by eliminating paperwork, and improves accuracy with secure, transparent transactions.
          </p>
         

          <h2 className="text-2xl font-semibold text-[#3F51B5] mb-4 font-Roboto">Our Vision</h2>
          <p className="text-base md:text-lg text-gray-600 mb-6 font-Roboto">
          Nova aims to empower small organizations to operate with the efficiency of large enterprises, simplifying operations and helping businesses grow in a digital world, all while eliminating the need for excessive paperwork.
          </p>

        
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
