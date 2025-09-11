import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaInfoCircle, FaTools, FaEnvelopeOpenText, FaShieldAlt } from "react-icons/fa";

const FooterR254: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between gap-8">
        {/* Logo, Location Card, and Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-2xl font-bold">Ecommerce</h1>
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
          <span className="font-semibold">Schnellzugriff</span>
          <a href="#" className="hover:text-gray-300 flex items-center space-x-2">
            <FaInfoCircle className="text-base" />
            <span>Über Uns</span>
          </a>
          <a href="#" className="hover:text-gray-300 flex items-center space-x-2">
            <FaTools className="text-base" />
            <span>Dienstleistungen</span>
          </a>
          <a href="#" className="hover:text-gray-300 flex items-center space-x-2">
            <FaEnvelopeOpenText className="text-base" />
            <span>Kontakt</span>
          </a>
          <a href="#" className="hover:text-gray-300 flex items-center space-x-2">
            <FaShieldAlt className="text-base" />
            <span>Datenschutzerklärung</span>
          </a>
          <a href="#" className="hover:text-gray-300 flex items-center space-x-2">
            <FaInfoCircle className="text-base" />
            <span>Karriere</span>
          </a>
          <a href="#" className="hover:text-gray-300 flex items-center space-x-2">
            <FaInfoCircle className="text-base" />
            <span>FAQ</span>
          </a>
        </div>

        {/* Additional Links */}
        <div className="flex flex-col items-center md:items-start space-y-2 mt-7">
          <a href="#" className="hover:text-gray-300 flex items-center space-x-2">
            <FaInfoCircle className="text-base" />
            <span>Impressum</span>
          </a>
          <a href="#" className="hover:text-gray-300 flex items-center space-x-2">
            <FaInfoCircle className="text-base" />
            <span>Disclaimer</span>
          </a>
          <a href="#" className="hover:text-gray-300 flex items-center space-x-2">
            <FaInfoCircle className="text-base" />
            <span>Google Bewertungen löschen</span>
          </a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <span className="font-semibold">Contact Us</span>
          <div className="flex items-center space-x-2">
            <FaPhone className="text-base" />
            <span>+49 30 30 80 80 34</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-base" />
            <span>support@onnoplus.de</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-base" />
            <span>Lietzenburger Str. 77, 10719 Berlin</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaClock className="text-base" />
            <span>Montag - Freitag von 9 bis 19 Uhr</span>
          </div>
        </div>

        {/* Social Icons Column */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <span className="font-semibold">Follow Us</span>
          <div className="flex flex-col space-y-4">
            <a href="#" className="hover:text-gray-300 flex items-center space-x-3 text-lg">
              <FaFacebookF className="text-xl" />
              <span>Facebook</span>
            </a>
            <a href="#" className="hover:text-gray-300 flex items-center space-x-3 text-lg">
              <FaInstagram className="text-xl" />
              <span>Instagram</span>
            </a>
            <a href="#" className="hover:text-gray-300 flex items-center space-x-3 text-lg">
              <FaLinkedinIn className="text-xl" />
              <span>LinkedIn</span>
            </a>
            <a href="#" className="hover:text-gray-300 flex items-center space-x-3 text-lg">
              <FaTwitter className="text-xl" />
              <span>Twitter</span>
            </a>
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
            <FaInfoCircle size={14} />
            <span>About</span>
          </a>
          <a href="#" className="hover:text-gray-700 flex items-center space-x-2">
            <FaTools size={14} />
            <span>Services</span>
          </a>
          <a href="#" className="hover:text-gray-700 flex items-center space-x-2">
            <FaEnvelopeOpenText size={14} />
            <span>Contact</span>
          </a>
          <a href="#" className="hover:text-gray-700 flex items-center space-x-2">
            <FaShieldAlt size={14} />
            <span>Privacy</span>
          </a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start space-y-1 text-sm text-gray-700">
          <span className="font-semibold text-gray-900">Contact Us</span>
          <div className="flex items-center space-x-2">
            <FaPhone size={14} />
            <span>+49 30 30 80 80 34</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope size={14} />
            <span>support@onnoplus.de</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt size={14} />
            <span>Lietzenburger Str. 77, 10719 Berlin</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaClock size={14} />
            <span>Montag - Freitag von 9 bis 19 Uhr</span>
          </div>
        </div>

        {/* Social Icons Column */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <span className="font-semibold">Follow Us</span>
          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:text-gray-700 flex items-center space-x-2 text-sm">
              <FaFacebookF size={16} />
              <span>Facebook</span>
            </a>
            <a href="#" className="hover:text-gray-700 flex items-center space-x-2 text-sm">
              <FaInstagram size={16} />
              <span>Instagram</span>
            </a>
            <a href="#" className="hover:text-gray-700 flex items-center space-x-2 text-sm">
              <FaLinkedinIn size={16} />
              <span>LinkedIn</span>
            </a>
            <a href="#" className="hover:text-gray-700 flex items-center space-x-2 text-sm">
              <FaTwitter size={16} />
              <span>Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { FooterR254, FooterS };