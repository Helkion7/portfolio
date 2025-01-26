import React from "react";
import { FileText, Linkedin, Github } from "lucide-react";

const ProfileHeader = () => {
  return (
    <div className="bg-zinc-900 p-4 sm:p-6 text-white w-full">
      <h1 className="text-3xl sm:text-4xl font-bold mb-2">
        Brynjar Berg Ødegaard
      </h1>

      <div className="space-y-1 mb-4">
        <p className="text-gray-400 text-lg sm:text-xl">
          Full-stack web developer
        </p>
        <p className="text-gray-400 text-lg sm:text-xl">Tech enthusiast</p>
      </div>

      <div className="flex items-center text-gray-400 mb-6">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
          </svg>
          <span>Asker, Akershus</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <a target="_-blank" href="./CV_Brynjar.pdf">
          <button className="flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-md">
            <FileText size={20} />
          </button>
        </a>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/brynjar-berg-%C3%B8degaard-789962326/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-zinc-800 rounded-md"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/Helkion7"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-zinc-800 rounded-md"
          >
            <Github size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
