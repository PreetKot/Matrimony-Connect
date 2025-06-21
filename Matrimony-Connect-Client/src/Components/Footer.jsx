import ThemeContext from "@/context/ThemeContext";
import { useContext } from "react";
import { FaLocationDot, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6";
import { IoMdMailOpen } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";

const FooterLink = ({ href, children }) => (
  <li>
    <a href={href} className="hover:underline hover:text-red-500 transition duration-200">
      {children}
    </a>
  </li>
);

const Footer = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <footer className={`${isDarkMode ? "bg-[#111827] text-gray-300" : "bg-gray-100 text-gray-900"} pt-16 pb-8 px-6`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-sm">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-red-500">Matrimony Connect</h2>
          <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            Matrimony Connect is a secure, modern, and culturally aligned matchmaking platform helping individuals find their life partners with ease.
          </p>
        </div>

        {/* Help & Support */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Help & Support</h3>
          <ul className="space-y-2">
            <FooterLink href="/register">How to Get Started</FooterLink>
            <FooterLink href="/membership">Membership Plans</FooterLink>
            <FooterLink href="/contact-us">Contact Us</FooterLink>
            <FooterLink href="/faq">FAQ</FooterLink>
            <FooterLink href="/sitemap">Sitemap</FooterLink>
          </ul>
        </div>

        {/* Corporate */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Corporate</h3>
          <ul className="space-y-2">
            <FooterLink href="/about-us">About Us</FooterLink>
            <FooterLink href="/mission-vision">Mission & Vision</FooterLink>
            <FooterLink href="/affiliates-b2b">Affiliates & B2B</FooterLink>
            <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
            <FooterLink href="/terms-and-conditions">Terms & Conditions</FooterLink>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="flex items-center gap-2 mb-2">
            <FaLocationDot className="text-red-500" /> 42 Street, New York, USA
          </p>
          <p className="flex items-center gap-2 mb-2">
            <IoCallOutline className="text-red-500" /> +1 777 123 456
          </p>
          <p className="flex items-center gap-2 mb-4">
            <IoMdMailOpen className="text-red-500" /> support@matrimonyconnect.com
          </p>
          <div className="flex gap-4 text-xl">
            <a href="https://facebook.com/wispwerofnahid" target="_blank" rel="noreferrer" className="hover:text-red-500">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com/@xahid_420" target="_blank" rel="noreferrer" className="hover:text-red-500">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com/in/ajnahid" target="_blank" rel="noreferrer" className="hover:text-red-500">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={`mt-10 text-center text-xs ${isDarkMode ? "text-gray-500" : "text-gray-600"}`}>
        &copy; {new Date().getFullYear()} Matrimony Connect — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
