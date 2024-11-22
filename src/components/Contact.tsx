import { FaEnvelope, FaPhone, FaHome, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="bg-black sm:ml-10 text-white sm:p-8 p-4 rounded-lg max-w-2xl">
      {/* Title */}
      <h1 className="text-2xl font-bold mb-6 font-helvetica">Contact Us</h1>

      {/* Contact Details */}
      <div className="space-y-6">
        {/* Email */}
        <div className="flex items-center space-x-4">
          <FaEnvelope className=" text-xl" />
          <span className="text-gray-300 text-sm">Manthan</span>
        </div>

        {/* Phone */}
        <div className="flex items-center space-x-4">
          <FaPhone className=" text-xl" />
          <span className="text-gray-300 text-sm">8347855047</span>
        </div>

        {/* Address */}
        <div className="flex flex-col sm:flex-row items-center justify-center">
         <div className="flex space-x-4 items-center justify-center">
         <FaHome width={25} height={25} className="h-12 w-12 sm:h-6 sm:w-6" />
          <p className="text-gray-300 text-sm">
            Bring AI telecaller to the forefront. Our solution supports seamless
            interactions for businesses.
          </p>
         </div>
         <div className="flex mt-4 items-center sm:w-32 justify-around w-full">
         <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-xl" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl" />
            </a>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
