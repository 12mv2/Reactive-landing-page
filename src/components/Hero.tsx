import React from 'react';
import DemoVideo from './DemoVideo';

const Hero = () => {
  return (
    <div className="relative py-8 bg-darkBackground bg-cyber-grid">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-darkBg-100/50 via-darkBackground to-darkBackground" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-neonPink via-neonCyan to-neonGreen bg-clip-text text-transparent">
              Reactive
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-neonCyan/80 max-w-2xl mx-auto">
            Visualize React Component Trees Like Never Before!
          </p>
        </div>

        {/* Demo Video */}
        <div className="my-8">
          <DemoVideo />
        </div>

        {/* Call to Action */}
        <div className="text-center mb-8">
          <button className="px-8 py-4 bg-neonGreen text-darkBackground font-bold rounded-lg 
                           transition-all duration-300 hover:bg-neonGreenDark hover:shadow-neon-green
                           transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-gradient-to-r from-neonPink to-transparent" />
      <div className="absolute top-0 right-0 w-1/3 h-1 bg-gradient-to-l from-neonCyan to-transparent" />
    </div>
  );
};

export default Hero;