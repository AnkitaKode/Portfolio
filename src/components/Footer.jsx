import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 bg-gray-950/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <p className="text-gray-400 text-xs sm:text-sm">
          © {new Date().getFullYear()} Ankita Kumari. Built with React, Three.js & Tailwind CSS.
        </p>
        <p className="text-gray-500 text-xs">
          Designed for performance & responsiveness.
        </p>
      </div>
    </footer>
  );
}
