import React from "react";
import { GraduationCap, Briefcase } from "lucide-react";

const Experience = () => {
  const education = [
    {
      degree: "Informasjonsteknologi",
      institution: "Bleiker Videregående Skole",
      period: "2024 - present",
      description:
        "During my second year of Information Technology, I deepened my knowledge of JavaScript while learning new technologies such as React, Tailwind, and more. I also gained more experience with networking through Cisco Packet Tracer. I applied this new knowledge to create multiple projects, including a Make It Meme-inspired group project, where users can create, join, and play a meme battle game online. This project involved implementing real-time features using socket.io and designing a responsive UI with React and Tailwind.",
    },
    {
      degree: "Informasjonsteknologi og Medieproduksjon",
      institution: "Bleiker Videregående Skole",
      period: "2023 - 2024",
      description:
        "During my first year of Information Technology and Media Production, I gained a foundation in information technology, with complementing insight into media production. I learned about web development using HTML, CSS, and JavaScript, as well as backend technologies like Node.js. I also have experience with networking through Cisco Packet Tracer. In Media Production, I learned to use a wide variety of apps like Photoshop and Illustrator from the Adobe Suite.",
    },
  ];

  const workExperience = [
    {
      position: "IT Praktikant",
      company: "HENT AS",
      period: "2024 - Present",
      description:
        "Lead developer for enterprise web applications using React and Node.js",
    },
  ];

  const ExperienceCard = ({ title, items, icon: Icon }) => (
    <div className="bg-zinc-800 rounded-lg p-6 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <Icon size={24} />
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="border-l-2 border-zinc-600 pl-4">
            <h3 className="text-xl font-semibold">
              {item.position || item.degree}
            </h3>
            <p className="text-gray-400">{item.company || item.institution}</p>
            <p className="text-gray-400 text-sm mb-2">{item.period}</p>
            <p className="text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col-reverse bg-zinc-900 p-6 text-white w-full max-w-3xl">
      <ExperienceCard
        title="Education"
        items={education}
        icon={GraduationCap}
      />
      <ExperienceCard
        title="Work Experience"
        items={workExperience}
        icon={Briefcase}
      />
    </div>
  );
};

export default Experience;
