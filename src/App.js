import logo from './logo.svg';
import './App.css';
import Documentation from './Documentation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world
        </p>
        <Documentation />
      </header>
    </div>
  );
}

export default App;
