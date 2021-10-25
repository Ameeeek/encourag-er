import './App.css';
import './index.css';
import Navbar from './Navbar';
import React from 'react';
import Home from './home';
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
        </Switch>
      </BrowserRouter>
      <div className="justify-evenly flex-wrap  flex">
            <p class="text-center mx-4 my-4 bg-white p-12 font-hammer text-base">lorem ipsum dolor sit amet, consectetur adip</p>
            <p class="text-center mx-4 my-4  max-w-2xl bg-white p-12 font-hammer text-base">lorem ipsum dolor sit amet, consectetur adip </p>
            <p class="text-center mx-4 my-4  bg-white p-12 font-hammer text-base">lorem ipsum dolor sit amet, consectetur adip</p>
            <p class="text-center mx-4 my-4  bg-white p-12 font-hammer text-base">lorem ipsum dolor sit amet, consectetur adip</p>
            <p class="text-center mx-4 my-4  bg-white p-12 font-hammer text-base">lorem ipsum dolor sit amet, consectetur adip</p>
            <p class="text-center mx-4 my-4  bg-white p-12 font-hammer text-base">lorem ipsum dolor sit amet, consectetur adip</p>
            <p class="text-center mx-4 my-4  bg-white p-12 font-hammer text-base">lorem ipsum dolor sit amet, consectetur adip</p>
            <p class="text-center mx-4 my-4  bg-white p-12 font-hammer text-base">lorem ipsum dolor sit amet, consectetur adip</p>
            <p class="text-center  mx-4 my-4 bg-white p-12 font-hammer text-base">lorem ipsum dolor sit amet, consectetur adip</p>
        </div>
    </div>
  );
}

export default App;
