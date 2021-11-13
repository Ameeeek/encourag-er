import './App.css';
import './index.css';
import Navbar from './Navbar.jsx'; // import navbar dari file navbar.jsx
import React from 'react'; 
import Tambah from './tambah.jsx';
import { useState} from 'react'; // import useState dari react
import { useEffect} from 'react';
import Home from './home.jsx'; // import halaman home dari file home.jsx
import Utama from './main.jsx'; // import halaman utama dari file main.jsx
import {BrowserRouter, Switch, Route} from 'react-router-dom'; //react router DOM untuk melakukan link dan routing untuk pindah page
import axios from 'axios';
function App() {
  
  // parameter quote adalah nama dari data untuk quote dan set quote merupakan function (fungsi) untuk menambah quote
  const [quote, setQuote] = useState([]);

  useEffect(() =>{
    retrieveData()
  }, [])
  function retrieveData(){
    axios
    .get("https://encourag-er.herokuapp.com/quote")
    .then((response) => {
      setQuote(response.data);
    })
    .catch(function(error){
      console.log(error)
    })
  }
  function storeData(inputQuote){
    console.log(inputQuote);
    // alert("quote telah ditambahkan")
    axios 
    .post("https://encourag-er.herokuapp.com/quote/add",inputQuote)
    .then((res)=>{
      setQuote((prevQuotes) => [...prevQuotes, inputQuote]);
      // alert("buku telah ditambahkan")
    })
    .catch((error) =>{
      console.log(error.response.data);
    })
  }
  return (
    <div className="bg-secondary w-full h-full ">
      <BrowserRouter>

        <Navbar />

        <Switch>
          <Route path="/home" exact> {/* routing menuju ke home page*/ }
            <Home/>
          </Route>
        </Switch>

        <Switch>
          <Route path="/main" > {/* quoteList={quote} berfungsi bila ingin mengoper data ke file child, bisa di dideklarasi dengan prop quoteList*/}
            <Utama  quoteList={quote} /> 
          </Route>
        </Switch>

        <Switch>
          <Route path="/tambah" >
            <Tambah store={storeData}/>
          </Route>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
