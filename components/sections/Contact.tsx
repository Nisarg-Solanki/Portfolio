import { PERSONAL_INFO } from "@/lib/constants";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FC } from "react";
import { GetInTouch } from "../forms/GetInTouch";

export const Contact: FC = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In{" "}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your visions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-linear-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
              <div className="p-3 bg-blue-600 rounded-full text-white">
                <FiMail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                  Email
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {PERSONAL_INFO.email}
                </p>
              </div>
            </div>
            {PERSONAL_INFO?.phone && (
              <div className="flex items-start gap-4 p-6 bg-linear-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
                <div className="p-3 bg-purple-600 rounded-full text-white">
                  <FiPhone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                    Phone
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {PERSONAL_INFO.phone}
                  </p>
                </div>
              </div>
            )}
            {PERSONAL_INFO.location && (
              <div className="flex items-start gap-4 p-6 bg-linear-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
                <div className="p-3 bg-pink-600 rounded-full text-white">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                    Location
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>
            )}
          </div>

          <GetInTouch />
        </div>
      </div>
    </section>
  );
};
