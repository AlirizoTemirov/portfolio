import { FaGithub } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demo: string;
  github: string;
};

export default function ProjectsCard({ project }: { project: Project }) {
  return (
    <div className="w-75 border border-gray-800 bg-[#050E20] rounded-2xl mt-5 shrink-0">
      <img
        className="w-75 h-40 rounded-3xl p-2"
        src={project.image}
        alt={project.title}
      />
      <div className="px-4">
        <h1 className="text-white font-semibold text-xl mt-3">
          {project.title}
        </h1>
        <p className="text-gray-400 text-sm mt-1 h-15.5">
          {project.description}
        </p>

        <div className="flex gap-2 mt-3">
          {project.technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-[#0c162a] w-fit border border-gray-800 text-white text-sm px-3 py-1 rounded-lg"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>

      <div className="flex border-t border-gray-800 mt-4">
        <a
          target="_blank"
          className="w-1/2 py-2 border-r border-gray-800 text-blue-600 font-semibold rounded-bl-2xl hover:bg-gray-900 transition flex items-center gap-2 justify-center"
          href={project.demo}
        >
          Live Demo <TbExternalLink size={20} className="mt-px" />
        </a>
        <a
          target="_blank"
          className="w-1/2 py-2 text-blue-600 font-semibold rounded-br-2xl hover:bg-gray-900 transition flex items-center gap-2 justify-center"
          href={project.github}
        >
          GitHub <FaGithub size={18} className="mt-px" />
        </a>
      </div>
    </div>
  );
}
