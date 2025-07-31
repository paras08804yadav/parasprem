import { FaPhone, FaEnvelope, FaTwitter, FaFacebookF, FaFlickr, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#3B4A52] text-white text-center py-8 px-4">
      <div className="space-y-4">
        {/* Contact Info */}
        <div className="space-y-2">
          <div className="flex justify-center items-center gap-2">
            <FaPhone className="text-white" />
            <span>+1 (289) 389-6776</span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <FaEnvelope className="text-white" />
            <span>info@peapod.ca</span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <FaTwitter className="text-white" />
            <span>@ Paras Prem</span>
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

        {/* PodSupport & Copyright */}
        <div>
          <div className="text-sm italic mb-1">📌  Paras Prem</div>
          <div className="text-xs">
            © 2025 Paras Prem.<br />
            All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
