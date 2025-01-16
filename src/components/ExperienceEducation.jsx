import React from "react";
import { data } from "../../data/data";

const Portfolio = () => {
  return (
    <div className="flex justify-center flex-row-reverse gap-6 p-6 bg-zinc-900 text-zinc-100">
      <section className="w-1/4">
        <h2 className="text-2xl font-bold mb-6 text-zinc-100">Experience</h2>
        {data.experience.map((experience) => (
          <div
            key={experience.id}
            className="mb-8 bg-zinc-800 rounded-lg p-6 shadow-sm flex flex-col h-1/2"
          >
            <h3 className="text-xl font-semibold mb-2 text-zinc-100">
              {experience.role} at {experience.company}
            </h3>
            <p className="text-gray-400 mb-2">
              {experience.period} | {experience.location}
            </p>
            <p className="text-gray-300 mb-4">{experience.description}</p>
            <ul className="space-y-2 mb-4">
              {experience.responsibilities.map((task, index) => (
                <li
                  key={index}
                  className="text-gray-300 pl-4 before:content-['•'] before:mr-2 before:text-gray-500"
                >
                  {task}
                </li>
              ))}
            </ul>
            <div className="text-gray-300">
              <strong className="font-semibold text-zinc-100">
                Technologies:
              </strong>{" "}
              <span className="text-gray-400">
                {experience.technologies.join(", ")}
              </span>
            </div>
          </div>
        ))}
      </section>

      <section className="w-1/4">
        <h2 className="text-2xl font-bold mb-6 text-zinc-100">Education</h2>
        {data.education.map((edu) => (
          <div
            key={edu.id}
            className="mb-8 bg-zinc-800 rounded-lg p-6 shadow-sm flex flex-col h-1/2"
          >
            <h3 className="text-xl font-semibold mb-2 text-zinc-100">
              {edu.degree}
            </h3>
            <p className="text-gray-300 font-medium mb-1">{edu.school}</p>
            <p className="text-gray-400 mb-3">
              {edu.year} | {edu.location}
            </p>
            <p className="text-gray-300 mb-4">{edu.description}</p>
            <ul className="space-y-2">
              {edu.achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="text-gray-300 pl-4 before:content-['•'] before:mr-2 before:text-gray-500"
                >
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Portfolio;
