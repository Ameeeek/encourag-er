import './App.css';
import './index.css';
import Navbar from './Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <div className="p-4">
      <BrowserRouter>
      <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
