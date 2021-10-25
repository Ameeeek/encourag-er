import './App.css';
import './index.css';
import Navbar from './Navbar.jsx'; // import navbar dari file navbar.jsx
import React from 'react'; 
import { useState} from 'react'; // import useState dari react
import Home from './home.jsx'; // import halaman home dari file home.jsx
import Utama from './main.jsx'; // import halaman utama dari file main.jsx
import {BrowserRouter, Switch, Route} from 'react-router-dom'; //react router DOM untuk melakukan link dan routing untuk pindah page

function App() {
  // parameter quote adalah nama dari data untuk quote dan set quote merupakan function (fungsi) untuk menambah quote
  const [quote, setQuote] = useState([
    {_id: 1, isi:`I love you, even if you don't love yourself,
      so don't give up yet`, by: "amek"},
    {_id: 2, isi:`Push yourself, no one's gonna do it for you`, by: "amek"},
    {_id: 3, isi:`Don't beat yourself up over a choice you made in the past, You did what felt right at that time, you did your best`, by: "amek"},
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
        <Switch>
          <Utama path="/main" quoteList={quote}/> {/* quoteList={quote} berfungsi bila ingin mengoper data ke file child, bisa di dideklarasi dengan prop quoteList*/}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
