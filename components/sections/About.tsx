import React from "react";
import { User, Phone, Mail, MapPin } from "lucide-react";
import { PERSONAL_INFO, STATS } from "@/lib/constants";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About{" "}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate Full Stack Developer with expertise in building
              modern web applications. I love turning complex problems into
              simple, beautiful and intuitive designs.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              With a strong foundation in both frontend and backend
              technologies, I create seamless user experiences that drive
              business growth and user satisfaction.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <User size={20} className="text-blue-600 shrink-0" />
                  <span className="font-medium">Name:</span>
                  <span className="text-sm">{PERSONAL_INFO.name}</span>
                </div>
                {PERSONAL_INFO.location && (
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <MapPin size={20} className="text-blue-600 shrink-0" />
                    <span className="font-medium">Location:</span>
                    <span className="text-sm">{PERSONAL_INFO.location}</span>
                  </div>
                )}
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <Mail size={20} className="text-blue-600 shrink-0" />
                  <span className="font-medium">Email:</span>
                  <span className="text-sm">{PERSONAL_INFO.email}</span>
                </div>
                {PERSONAL_INFO?.phone && (
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <Phone size={20} className="text-blue-600 shrink-0" />
                    <span className="font-medium">Phone:</span>
                    <span className="text-sm">{PERSONAL_INFO.phone}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {STATS?.experience && (
              <div className="bg-linear-to-br from-blue-500 to-purple-600 p-8 rounded-2xl text-white text-center hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold mb-2">
                  {STATS.experience}
                </div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
            )}
            {STATS?.projects && (
              <div className="bg-linear-to-br from-purple-500 to-pink-600 p-8 rounded-2xl text-white text-center hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold mb-2">{STATS.projects}</div>
                <div className="text-sm opacity-90">Projects Completed</div>
              </div>
            )}
            {STATS?.clients && (
              <div className="bg-linear-to-br from-pink-500 to-red-600 p-8 rounded-2xl text-white text-center hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold mb-2">{STATS.clients}</div>
                <div className="text-sm opacity-90">Happy Clients</div>
              </div>
            )}
            {STATS?.awards && (
              <div className="bg-linear-to-br from-green-500 to-teal-600 p-8 rounded-2xl text-white text-center hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold mb-2">{STATS.awards}</div>
                <div className="text-sm opacity-90">Awards Won</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
