import { FaPhone, FaEnvelope, FaTwitter, FaFacebookF, FaFlickr, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#3B4A52] text-white text-center py-8 px-4">
      <div className="space-y-4">
        {/* Contact Info */}
        <div className="space-y-2">
          <div className="flex justify-center items-center gap-2">
            <FaPhone className="text-white" />
            <span>+91 7905842461</span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <FaEnvelope className="text-white" />
            <span> support@parasprem.com</span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <FaTwitter className="text-white" />
            <span>@ parasprem</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-4 text-white text-lg">
          <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
          <FaFlickr className="hover:text-gray-300 cursor-pointer" />
          <FaLinkedinIn className="hover:text-gray-300 cursor-pointer" />
        </div>

        {/* Divider */}
        <hr className="border-gray-400 my-4 w-2/3 mx-auto" />

       
      </div>
    </footer>
  );
}
