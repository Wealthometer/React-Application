import logo from './logo.svg';
import { Greeting } from './Greeting';
import './App.css';

function App() {
  let adjective = "COOL";
  let url = "https://reactjs.org"

  return (
    <div className="App">
      <header className="App-header">
        <Greeting name = "Wealth" numberOfMessages={100} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>This is so {adjective}</h1>
        </p>
        <a
          className="App-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
