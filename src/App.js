import './App.css';
import Body from './components/Body';
import Nav from './components/Navbar';
import VisualizationBlock from './components/VisualizationBlock';

function App() {
  return (
    <div>
      <Nav />

      <Body />
      <VisualizationBlock information={1} />
      <VisualizationBlock information={2} />
      <VisualizationBlock information={3} />
      <VisualizationBlock information={4} />
    </div>
  );
}

export default App;
