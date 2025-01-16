import React from "react";
import { FileText, Linkedin, Github } from "lucide-react";

const ProfileHeader = () => {
  return (
    <div className="bg-zinc-900 p-6 text-white">
      <h1 className="text-4xl font-bold mb-2">Brynjar Berg Ødegaard</h1>

      <div className="space-y-1 mb-4">
        <p className="text-gray-400 text-xl">Web developer</p>
        <p className="text-gray-400 text-xl">Tech enthusiast</p>
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

      <div className="flex gap-4">
        <button className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-md">
          <FileText size={20} />
          <span>CV</span>
        </button>

        <div className="flex gap-4">
          <button className="p-2 hover:bg-zinc-800 rounded-md">
            <Linkedin size={24} />
          </button>
          <button className="p-2 hover:bg-zinc-800 rounded-md">
            <span className="text-2xl">𝕏</span>
          </button>
          <button className="p-2 hover:bg-zinc-800 rounded-md">
            <Github size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
