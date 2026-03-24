import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white m-4 rounded-xl shadow border border-gray-100">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center flex items-center gap-1">
            © {new Date().getFullYear()} CloudSimplify by <Heart className="w-4 h-4 text-red-500 mx-1" />  DevOps Learners
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
              <li>
                  <a href="#" className="hover:underline me-4 md:me-6">About</a>
              </li>
              <li>
                  <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
              </li>
              <li>
                  <a href="#" className="hover:underline">Contact</a>
              </li>
          </ul>
        </div>
    </footer>
  );
};

export default Footer;
