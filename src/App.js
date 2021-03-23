import logo from './my_logo.png';
import "./app/App.css"
import { BrowserRouter as Router,Route,Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          This is My Frist Learing project just check it out below.
        </p>
        <a className="App-link" href="http://localhost:8080/" target="_blank"  rel="noopener noreferrer">My Project</a>  
      </header>
    </div>
  );
}

export default App;
