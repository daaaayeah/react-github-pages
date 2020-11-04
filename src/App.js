import logo from './logo.svg';
import './App.css';

function App() {
  const logoStyle = {
    color: "white",
    backgroundColor: "transparent",
    fontSize: "25px",
    fontFamily: "Arial",
    fontWeight: "bold",
    padding: "30px 200px 30px",
    borderStyle: "none"
  };

  return (
    <div className="App">

      <div style={{backgroundColor: "green", display: "flex", justifyContent: "space-between"}}>
        <div>
          <button style={logoStyle}>
            PORTFOLIO
          </button>
        </div>

        <div style={{paddingRight: "200px"}}>
          <button className="button">
            Home
          </button>
          <button className="button">
            About
          </button>
          <button className="button">
            Ability
          </button>
          <button className="button">
            Portfolio
          </button>
          <button className="button">
            Contact
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default App;
