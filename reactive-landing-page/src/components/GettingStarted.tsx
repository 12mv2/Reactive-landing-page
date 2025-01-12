import React from 'react';

const steps = [
  {
    title: "Step 1: Download the Extension",
    description:
      "Visit the GitHub repository and download the latest version of the Reactive VS Code extension.",
    link: "https://github.com/oslabs-beta/reactive",
  },
  {
    title: "Step 2: Install the Extension",
    description:
      "Open VS Code, go to the Extensions Marketplace, and install Reactive from the VSIX package.",
    link: null,
  },
  {
    title: "Step 3: Start Visualizing",
    description:
      "Open your React project, launch the extension, and start exploring your component tree.",
    link: null,
  },
];

const GettingStarted = () => {
  return (
    <div className="bg-darkBackground py-16 text-center text-white">
      <h2 className="text-4xl font-bold text-neonPink mb-8">Getting Started</h2>
      <div className="max-w-5xl mx-auto space-y-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="p-6 bg-darkBackground border-2 border-neonGreen rounded-lg shadow-lg text-left"
          >
            <h3 className="text-2xl font-bold mb-2 text-neonCyan">
              {step.title}
            </h3>
            <p className="text-gray-300 mb-4">{step.description}</p>
            {step.link && (
              <a
                href={step.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neonPink underline hover:text-neonCyan"
              >
                Learn More
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GettingStarted;
