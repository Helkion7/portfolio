import React from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-white w-full mt-auto">
      <div className="max-w-6xl mx-auto p-4 sm:p-6">
        <div className="flex flex-col gap-4">
          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-2 text-gray-300">
              <Mail size={16} />
              <a
                href="mailto:brynjarbodegaard@gmail.com"
                className="hover:text-white transition-colors text-sm sm:text-base"
              >
                brynjarbodegaard@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Phone size={16} />
              <a
                href="tel:+4748401453"
                className="hover:text-white transition-colors text-sm sm:text-base"
              >
                +47 48401453
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center sm:justify-start">
            <a
              href="https://www.linkedin.com/in/brynjar-berg-%C3%B8degaard-789962326/"
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
