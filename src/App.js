
import './App.css';
import './index.js';
import index from './index.jpeg';
import Counter from './components/Button';
import RandomJokeGen from './components/RandomJokeGen';



function App() {
  return (
    
    <div className="App">
      <h1>Synes du bildet under er pent?</h1>
      <Counter />
      <RandomJokeGen />
      
      <img src={index} alt="logo" />
    
 
  
    </div>
  );
}

export default App;
