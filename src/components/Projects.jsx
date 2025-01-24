import React from "react";
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Memesters tournament",
      description:
        "A make it meme inspired meme battling game, where you and your friends can find out who makes the best memes and win the tournament.",
      technologies: ["React", "Node.js", "MongoDB", "tailwind", "socket.io"],
      githubLink: "https://github.com/EliasNeerbye/memesters-tournament",
      liveLink: "https://project1-demo.com",
      status: "Finished",
      image: "./MemestersTournament.png",
    },
    {
      title: "HelpDesk",
      description:
        "A user friendly website that provides a platform for people to see and create guides for all types of purposes",
      technologies: ["JavaScript", "EJS", "Node.js", "MongoDB"],
      githubLink: "https://github.com/Helkion7/brukerguide",
      liveLink: "https://project2-demo.com",
      status: "Finished",
      image: "./HelpDesk.png",
    },
    {
      title: "API kurs",
      description:
        "A project with three different websites using three different APIs [Weather app, Camera app and Movie app]. The project was solely to learn more about APIs and how to use them",
      technologies: ["JavaScript", "HTML", "CSS", "API"],
      githubLink: "https://github.com/Helkion7/apiKurs",
      liveLink: "https://project2-demo.com",
      status: "Finished",
      image: "./movieapp.png",
    },
  ];

  return (
    <div className="bg-zinc-900 p-4 sm:p-6 text-white">
      <h1 className="text-xl sm:text-2xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-zinc-800 rounded-lg overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 text-xs bg-zinc-700 rounded-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-300 hover:text-white"
                >
                  <Github size={16} />
                  <span>Code</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
