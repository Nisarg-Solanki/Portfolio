import { Download, Github, Linkedin, Mail, Send } from "lucide-react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20"
    >
      <div className="container lg:max-w-[75%] mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                Welcome to my Portfolio
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">Hi, I'm </span>
              <br />
              <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {PERSONAL_INFO.name}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              {PERSONAL_INFO.bio}
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <Link
                href="#contact"
                className="px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <Send size={20} />
                Get In Touch
              </Link>
              <Link
                href="/resume.pdf"
                target="_blank"
                className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 border-2 border-gray-200 dark:border-gray-700"
              >
                <Download size={20} />
                Download CV
              </Link>
            </div>
            <div className="flex gap-4 justify-center lg:justify-start">
              <Link
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-xl hover:scale-110"
              >
                <Github size={24} />
              </Link>
              <Link
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-xl hover:scale-110"
              >
                <Linkedin size={24} />
              </Link>
              <Link
                href={SOCIAL_LINKS.email}
                className="p-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-xl hover:scale-110"
              >
                <Mail size={24} />
              </Link>
            </div>
          </div>
          <div className="max-md:flex-1 max-lg:pb-10 flex justify-center">
            <div className="relative">
              {PERSONAL_INFO?.avatar?.startsWith("/") ? (
                <Image
                  src={PERSONAL_INFO.avatar}
                  alt="profile"
                  height={100}
                  width={100}
                  sizes="100vh"
                  className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full"
                ></Image>
              ) : (
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-linear-to-br from-blue-400 via-purple-500 to-pink-500 p-1 animate-pulse">
                  <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-6xl font-bold text-gray-400 dark:text-gray-600">
                    {PERSONAL_INFO.avatar}
                  </div>
                </div>
              )}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500 rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
