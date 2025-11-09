import { SKILL_CATEGORIES } from "@/lib/constants";
import { FC } from "react";

export const Skills: FC = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-linear-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My{" "}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div
                        className={`${skill.color} h-full rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
