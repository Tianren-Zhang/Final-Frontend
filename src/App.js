import './App.css';
import Body from './components/Body';
import Nav from './components/Navbar';
import VisualizationBlock from './components/VisualizationBlock';
import EndSection from './components/EndSection';

function App() {
  return (
    <div>
      <Nav />

      <Body />
      <VisualizationBlock information={1} />
      <VisualizationBlock information={2} />
      <VisualizationBlock information={3} />
      <VisualizationBlock information={4} />
      <EndSection />
    </div>
  );
}

export default App;
