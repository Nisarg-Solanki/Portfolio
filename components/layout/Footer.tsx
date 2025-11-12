import { FC } from "react";
import { FiGithub, FiMail, FiLinkedin } from "react-icons/fi";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants";
import Link from "next/link";

export const Footer: FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 dark:text-gray-300">
            © 2025 {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              prefetch={false}
              href={SOCIAL_LINKS.github}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FiGithub size={24} />
            </Link>
            <Link
              prefetch={false}
              href={SOCIAL_LINKS.linkedin}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FiLinkedin size={24} />
            </Link>
            <Link
              prefetch={false}
              href={SOCIAL_LINKS.email}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FiMail size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
