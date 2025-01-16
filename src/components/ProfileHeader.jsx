import React from 'react';
import { FileText, Linkedin, Github } from 'lucide-react';

const ProfileHeader = () => {
  return (
    <div className="bg-zinc-900 p-6 text-white">
      <h1 className="text-4xl font-bold mb-2">Brynjar Berg Ødegaard</h1>
      
      <div className="space-y-1 mb-4">
        <p className="text-gray-400 text-xl">Web developer</p>
        <p className="text-gray-400 text-xl">F1 Enthusiast</p>
      </div>
      
      <div className="flex items-center text-gray-400 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-gray-400" />
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