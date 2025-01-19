import React from "react";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Project Name 1",
      description:
        "A brief description of your project. Explain what it does and what technologies you used.",
      technologies: ["React", "Node.js", "MongoDB"],
      githubLink: "https://github.com/yourusername/project1",
      liveLink: "https://project1-demo.com",
      image: "/api/placeholder/400/200",
    },
    {
      title: "Project Name 2",
      description:
        "Another project description. Keep it concise but informative about the key features.",
      technologies: ["JavaScript", "Express", "PostgreSQL"],
      githubLink: "https://github.com/yourusername/project2",
      liveLink: "https://project2-demo.com",
      image: "/api/placeholder/400/200",
    },
    // Add more projects as needed
  ];

  return (
    <div className="bg-zinc-900 p-6 text-white">
      <h1 className="text-2xl font-bold mb-6">Projects</h1>
      <div className="flex flex-wrap gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex-1 min-w-[300px] max-w-[400px] bg-zinc-800 rounded-lg overflow-hidden hover:transition-transform"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

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
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-300 hover:text-white"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
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
