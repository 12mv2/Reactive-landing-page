const Hero = () => {
    return (
      <div className="bg-darkBackground h-screen flex flex-col items-center justify-center text-center text-neonCyan">
        <h1 className="text-5xl font-bold">
          Welcome to <span className="text-neonPink">Reactive</span>
        </h1>
        <p className="text-xl mt-4 text-neonPurple">
          Visualize React Component Trees Like Never Before!
        </p>
        <button className="mt-8 px-6 py-3 bg-neonGreen text-darkBackground font-semibold rounded-lg hover:bg-neonCyan">
          Get Started
        </button>
      </div>
    );
  };
  
  export default Hero;
  