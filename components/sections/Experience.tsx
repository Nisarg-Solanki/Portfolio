import { EXPERIENCES } from "@/lib/constants";
import { Calendar } from "lucide-react";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Work{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block"></div>

            <div className="space-y-12">
              {EXPERIENCES.map((exp, index) => (
                <div key={index} className="relative pl-0 md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 hidden md:block"></div>

                  <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{exp?.icon}</div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                              {exp.position}
                            </h3>
                            <p className="text-blue-600 dark:text-blue-400 font-medium">
                              {exp.company}
                            </p>
                          </div>
                          <span className="text-gray-600 dark:text-gray-400 flex items-center gap-2 mt-2 md:mt-0">
                            <Calendar size={16} />
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
