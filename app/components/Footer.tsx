import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaInfoCircle, FaTools, FaEnvelopeOpenText, FaShieldAlt } from "react-icons/fa";

const FooterR254: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between gap-8">
        {/* Logo, Location Card, and Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-2xl font-bold">BrandName</h1>
          <p className="text-sm text-gray-400 mb-4">© 2025 All rights reserved</p>
          
          {/* Google Maps Card */}
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full max-w-sm">
        <iframe
  src="https://www.google.com/maps?q=Lietzenburger+Str+77,10719+Berlin&output=embed"
  width="100%"
  height="200"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>


            <div className="p-4">
              <h3 className="text-lg font-semibold">Our Location</h3>
              <p className="text-sm text-gray-400 mt-1">Lietzenburger Str. 77, 10719 Berlin</p>
            </div>
          </div>
        </div>

        {/* Links with Icons */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <span className="font-semibold">Quick Links</span>
          <a href="#" className="hover:text-gray-300 flex items-center space-x-2">
            <FaInfoCircle />
            <span>About</span>
          </a>
          <a href="#" className="hover:text-gray-300 flex items-center space-x-2">
            <FaTools />
            <span>Services</span>
          </a>
          <a href="#" className="hover:text-gray-300 flex items-center space-x-2">
            <FaEnvelopeOpenText />
            <span>Contact</span>
          </a>
          <a href="#" className="hover:text-gray-300 flex items-center space-x-2">
            <FaShieldAlt />
            <span>Privacy</span>
          </a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <span className="font-semibold">Contact Us</span>
          <div className="flex items-center space-x-2">
            <FaPhone />
            <span>+49 30 30 80 80 34</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope />
            <span>support@onnoplus.de</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt />
            <span>Lietzenburger Str. 77, 10719 Berlin</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaClock />
            <span>Montag - Freitag von 9 bis 19 Uhr</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <span className="font-semibold">Follow Us</span>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-300"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-300"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterS: React.FC = () => {
  return (
    <footer className="bg-white text-gray-900 py-6 border-t border-gray-200">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between gap-6">
        {/* Logo / Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-xl font-semibold">BrandName S</h1>
          <p className="text-xs text-gray-500">© 2025 All rights reserved</p>
        </div>

        {/* Links with Icons */}
        <div className="flex flex-col items-center md:items-start space-y-1 text-sm text-gray-700">
          <span className="font-semibold text-gray-900">Quick Links</span>
          <a href="#" className="hover:text-gray-700 flex items-center space-x-2">
            <FaInfoCircle size={12} />
            <span>About</span>
          </a>
          <a href="#" className="hover:text-gray-700 flex items-center space-x-2">
            <FaTools size={12} />
            <span>Services</span>
          </a>
          <a href="#" className="hover:text-gray-700 flex items-center space-x-2">
            <FaEnvelopeOpenText size={12} />
            <span>Contact</span>
          </a>
          <a href="#" className="hover:text-gray-700 flex items-center space-x-2">
            <FaShieldAlt size={12} />
            <span>Privacy</span>
          </a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start space-y-1 text-sm text-gray-700">
          <span className="font-semibold text-gray-900">Contact Us</span>
          <div className="flex items-center space-x-2">
            <FaPhone size={12} />
            <span>+49 30 30 80 80 34</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope size={12} />
            <span>support@onnoplus.de</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt size={12} />
            <span>Lietzenburger Str. 77, 10719 Berlin</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaClock size={12} />
            <span>Montag - Freitag von 9 bis 19 Uhr</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center md:items-start space-y-1">
          <span className="font-semibold">Follow Us</span>
          <div className="flex space-x-3">
            <a href="#" className="hover:text-gray-700"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-700"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-700"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-700"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { FooterR254, FooterS };