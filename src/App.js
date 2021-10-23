import './App.css';
import './index.css';
import Navbar from './Navbar';
import React from 'react';
import Home from './home';
import Main from './main';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <div className="bg-secondary w-full h-screen ">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/home" exact>
            <Home/>
          </Route>
          <Route path="/main" exact>
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
