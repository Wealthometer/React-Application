// import logo from './logo.svg';
import { Greeting } from './Greeting';
import { PeopleList } from './PeopleList';
import './App.css';

const people = [
  {
    name : 'Wealth',
    age : 99,
    hairColor : 'Blue'
  },
  {
    name : 'Aduragbemi',
    age : 98,
    hairColor : 'Black'
  },
  {
    name : 'Oriire',
    age : 97,
    hairColor : "Brown"
  },
  {
    name : 'Praise',
    age : 96,
    hairColor : "Bleach"
  }
]

function App() {
  let adjective = "COOL";
  let url = "https://reactjs.org"

  return (
    <div className="App">
      <header className="App-header">
        <Greeting name = "Wealth" numberOfMessages={22} />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <PeopleList people={people}/>
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
