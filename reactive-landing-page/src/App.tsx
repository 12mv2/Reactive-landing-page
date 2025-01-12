import './App.css'
import Hero from './components/Hero.js'
import Features from './components/Features.js';
import Demo from './components/Demo.js';
import GettingStarted from './components/GettingStarted.js';
import Footer from './components/Footer.js';
import Dendrogram3D from './components/Dendrogram3D.js'; 
import sampleData from './data/sampleData.json';

function App() {
  return (
    <div>
      <Hero />
      <Dendrogram3D data={sampleData} />
      <Features />
      <Demo />
      <GettingStarted />
      <Footer />
    </div>
  );
}

export default App
