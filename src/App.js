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
    </div>
  );
}

export default App;
