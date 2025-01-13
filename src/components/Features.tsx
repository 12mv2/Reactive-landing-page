const features = [
    {
      title: "Interactive Dendrograms",
      description:
        "Explore and interact with React component trees in a dynamic and engaging way.",
      icon: "🌳",
    },
    {
      title: "State Analysis",
      description:
        "Inspect and understand component state with ease, making debugging faster.",
      icon: "🔍",
    },
    {
      title: "Component Insights",
      description:
        "Analyze your React app with detailed statistics on component types, including the percentage of class and functional components.",
      icon: "⚡",
    },
  ];
  
  const Features = () => {
    return (
      <div className="bg-darkBackground py-16 text-center text-white">
        <h2 className="text-4xl font-bold text-neonPink mb-8">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-darkBackground border-2 border-neonCyan rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="text-6xl">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mt-4 text-neonGreen">
                {feature.title}
              </h3>
              <p className="text-gray-300 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Features;
  