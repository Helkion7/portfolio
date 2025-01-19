import React from "react";
import { GraduationCap, Briefcase } from "lucide-react";

const Experience = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "University of Oslo",
      period: "2020 - 2022",
      description: "Specialized in Web Technologies and Software Engineering",
    },
    {
      degree: "Bachelor of Engineering",
      institution: "Oslo Metropolitan University",
      period: "2017 - 2020",
      description: "Focus on Software Development and System Architecture",
    },
  ];

  const workExperience = [
    {
      position: "Senior Web Developer",
      company: "Tech Company AS",
      period: "2022 - Present",
      description:
        "Lead developer for enterprise web applications using React and Node.js",
    },
    {
      position: "Full Stack Developer",
      company: "Digital Solutions Norway",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client web applications",
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
    <div className="bg-zinc-900 p-6 text-white w-full max-w-3xl">
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
