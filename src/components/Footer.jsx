import React from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white w-full mt-auto">
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Contact Information */}
          <div className="flex flex-row">
            <div className="flex items-center gap-2  mr-5 text-gray-300">
              <Mail size={16} />
              <a
                href="mailto:brynjarbodegaard@gmail.com"
                className="hover:text-white transition-colors"
              >
                brynjarbodegaard@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Phone size={16} />
              <a
                href="tel:+4748401453"
                className="hover:text-white transition-colors"
              >
                +47 48401453
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/Helkion7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
