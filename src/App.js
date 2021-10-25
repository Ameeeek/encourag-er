import './App.css';
import './index.css';
import Navbar from './Navbar.jsx';
import React from 'react';
import { useState} from 'react';
import Home from './home.jsx';
import Utama from './main.jsx';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
function App() {

  const [quote, setQuote] = useState([
    {_id: 1, isi:"Never give up", by: "amek"},
    {_id: 2, isi:"be yourself", by: "amek"},
    {_id: 3, isi:"aowkoawkowakwaokawokwaowakowakoawkwaokawowakowako", by: "amek"},
    {_id: 4, isi:"awokaowk", by: "amek"},
    {_id: 5, isi:"be wlskaowiswosmwa9e812931", by: "amek"},
    {_id: 6, isi:"swaoskaowskawopskawpslapwsoawpsow", by: "amek"},
  ])

  return (
    <div className="bg-secondary w-full h-screen ">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/home" exact>
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>
        <Utama quoteList={quote}/>
    </div>
  );
}

export default App;
