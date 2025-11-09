import { PROJECTS } from "@/lib/constants";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

export const Projects: FC = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-linear-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured{" "}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-linear-to-br from-blue-500 to-purple-600 h-48 flex items-center justify-center text-6xl">
                {project.image}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.link || project.github}
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:gap-4 transition-all"
                >
                  View Project <ExternalLink size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
