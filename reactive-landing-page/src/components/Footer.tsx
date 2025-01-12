import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-darkBackground py-6 text-center text-white">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-4">
          <p className="text-neonCyan text-xl font-semibold">Reactive</p>
          <p className="text-gray-400 text-sm">
            Visualizing React component trees made easy.
          </p>
        </div>
        <div className="mt-4 flex justify-center space-x-8">
          <a
            href="https://github.com/oslabs-beta/reactive"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neonPink hover:text-neonCyan text-sm"
          >
            GitHub
          </a>
          <a
            href="https://reactive-docs.example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neonPink hover:text-neonCyan text-sm"
          >
            Documentation
          </a>
          <a
            href="mailto:support@reactive.com"
            className="text-neonPink hover:text-neonCyan text-sm"
          >
            Support
          </a>
        </div>
        <p className="mt-6 text-gray-500 text-xs">
          Licensed under the <a href="/LICENSE" className="text-neonPink hover:text-neonCyan">MIT License</a>. 
          Contributions welcome!
        </p>

      </div>
    </footer>
  );
};

export default Footer;
