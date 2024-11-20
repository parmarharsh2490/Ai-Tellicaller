import { FaEnvelope, FaPhone, FaHome, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="bg-black mt-20 sm:ml-10 text-white p-8 rounded-lg max-w-2xl">
      {/* Title */}
      <h1 className="text-2xl font-bold mb-6">Contact Us</h1>

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
        <div className="flex items-start space-x-4">
          <FaHome className=" text-xl mt-1" />
          <p className="text-gray-300 text-sm">
            Bring AI telecaller to the forefront. Our solution supports seamless
            interactions for businesses.
          </p>
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
  );
};

export default Contact;
