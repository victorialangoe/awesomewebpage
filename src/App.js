
import './App.css';
import './index.js';
import index from './index.jpeg';
import Counter from './components/Button';



function App() {
  return (
    
    <div className="App">
      <h1>Synes du bildet under er pent?</h1>
      <Counter />
      
      <img src={index} alt="logo" />
    
 
  
    </div>
  );
}

export default App;
