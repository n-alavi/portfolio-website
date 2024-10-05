import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500 mt-28">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} .Fatemeh Alavi All rights reserved
      </small>
      <p className="text-xs">
        Built with React & Next.js (App Router), TypeScript, Tailwind CSS,
        Framer Motion
      </p>
      <span>
        {/* Phone Section */}
        <div className="flex items-center gap-2 justify-center ">
          <span className="text-gray-500 text-xs">09169346800</span>
          <FaPhone className="text-gray-500 text-sm" />
        </div>
        {/* Email Section */}
        <div className="flex items-center gap-2 justify-center">
          <span className="text-gray-500 text-xs">Alavi_n70@yahoo.com</span>
          <FaEnvelope className="text-gray-500 text-sm" />
        </div>
      </span>
    </footer>
  );
}
