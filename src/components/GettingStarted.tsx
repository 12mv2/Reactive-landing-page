import React from 'react';

const steps = [
  {
    title: "Step 1: Download the Extension",
    description:
    <p>
    Visit the <a href="https://marketplace.visualstudio.com/items?itemName=oslabs-reactive.reactive" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Marketplace</a> or Extensions tab in VSCode and download the latest version of the Reactive VS Code extension.
    </p>
  },
  {
    title: "Step 2: Open the Extension Host and Select a Top Level Component",
    description:
      "Open the extension host by clicking on the Reactive icon in the sidebar, and select a top-level component to visualize.",
    link: null,
  },
  {
    title: "Step 3: Start Visualizing",
    description:
      "Explore the component tree, inspect state, and start migrating from class to functional components.",
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
                Install from Marketplace
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GettingStarted;
