import { FaEnvelope, FaPhone, FaHome } from "react-icons/fa"; // Importing icons from react-icons

const Contact = () => {
  return (
    <div className="bg-gray-900 mt-20 text-white p-8 rounded-lg max-w-2xl mx-auto">
      {/* Title */}
      <h1 className="text-2xl font-bold mb-6">Contact Us</h1>

      {/* Contact Details */}
      <div className="space-y-6">
        {/* Email */}
        <div className="flex items-center space-x-4">
          <FaEnvelope className="text-teal-400 text-xl" />
          <span className="text-gray-300 text-sm">Manthan</span>
        </div>

        {/* Phone */}
        <div className="flex items-center space-x-4">
          <FaPhone className="text-teal-400 text-xl" />
          <span className="text-gray-300 text-sm">8347855047</span>
        </div>

        {/* Address */}
        <div className="flex items-start space-x-4">
          <FaHome className="text-teal-400 text-xl mt-1" />
          <p className="text-gray-300 text-sm">
            Bring AI telecaller to the forefront. Our solution supports seamless
            interactions for businesses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
