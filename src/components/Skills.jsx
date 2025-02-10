import React from "react";

export default function Skills() {
  const skills = [
    "Javascript",
    "ReactJS",
    "MongoDB",
    "SQL",
    "HTML",
    "CSS",
    "EJS",
    "Node.js",
    "Express.js",
    "Figma",
    "Git",
    "Github",
  ];

  return (
    <div className="bg-zinc-900 p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Skills</h1>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm bg-zinc-800 rounded-s hover:bg-zinc-700 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
