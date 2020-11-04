import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <div style={{backgroundColor: "green", display: "flex", justifyContent: "space-between"}}>
        <div>
          <button className="logo">
            PORTFOLIO
          </button>
        </div>

        <div style={{paddingRight: "200px"}}>
          <button className="button">Home</button>
          <button className="button">About</button>
          <button className="button">Ability</button>
          <button className="button">Portfolio</button>
          <button className="button">Contact</button>
        </div>
      </div>
      
    </div>
  );
}

export default App;
