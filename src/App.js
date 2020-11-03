import logo from './logo.svg';
import './App.css';

function App() {
  const logoStyle = {
    color: "WHITE",
    backgroundColor: "TRANSPARENT",
    fontSize: "25px",
    fontFamily: "Arial",
    fontWeight: "bold",
    padding: "30px 200px 30px",
    borderStyle: "none"
  };
  const menuStyle = {
    color: "#c8dbc8",
    backgroundColor: "TRANSPARENT",
    fontSize: "15px",
    fontFamily: "Arial",
    padding: "30px 20px 30px 20px",
    borderStyle: "none"
  };
  const onClickStyle = {
    color: "WHITE",
    backgroundColor: "TRANSPARENT",
    fontSize: "15px",
    fontFamily: "Arial",
    padding: "30px 20px 30px 20px",
    borderStyle: "none"
  };

  return (
    <div className="App">

      <div style={{backgroundColor: "GREEN", display: "flex", justifyContent: "space-between"}}>
        <div>
          <button style={logoStyle}>
            PORTFOLIO
          </button>
        </div>

        <div style={{paddingRight: "200px"}}>
          <button style={menuStyle}>
            Home
          </button>
          <button style={menuStyle}>
            About
          </button>
          <button style={menuStyle}>
            Ability
          </button>
          <button style={menuStyle}>
            Portfolio
          </button>
          <button style={menuStyle}>
            Contact
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default App;
