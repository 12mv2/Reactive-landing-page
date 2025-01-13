import './App.css';
import Hero from './components/Hero';
import Features from './components/Features';
import Demo from './components/Demo';
import GettingStarted from './components/GettingStarted';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-darkBackground min-h-screen">
      <Hero />
      <Features />
      <Demo />
      <GettingStarted />
      <Footer />
    </div>
  );
}

export default App;