import logo from './logo.svg';
import Form from './form/Form';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido a mi Henry Challenge
        </p>
        <Form/>
      </header>
    </div>
  );
}

export default App;
