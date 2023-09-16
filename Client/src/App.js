import { Routes, Route } from 'react-router-dom';
import Detail from './detail/Detail'
import Form from './form/Form';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form/>} />
        <Route path="/detail/:name" element={<Detail/>} />
      </Routes>
    </div>
  );
}

export default App;
