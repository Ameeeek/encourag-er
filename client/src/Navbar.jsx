import {Link} from 'react-router-dom'; // {Link} berguna untuk routing pada parent app 
import {BsGithub, BsPlus} from 'react-icons/bs'; 
import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 



const NavBar = () => {

    return (
        <div className="container flex justify-between p-4">
            <div className="logo-container flex font-pacifico text-primary filter drop-shadow-2xl">
                <p class="text-5xl hp:text-xl">encourag-er</p>
            <a className="p-4 ml-4 text-primary" href="https://github.com/Ameeeek/encourag-er"><TopIcon  icon={<BsGithub size="40"/>}/></a>
            </div>
            <div className="navbar-links font-hammer   flex text-4xl ">
                <Link  to="/" class="mx-3 hp:text-xl text-primary p-4 hover:text-secondary rounded-t-2xl hover:bg-primary ease-linear duration-100">Home</Link>
                <Link to="/tambah" class="mx-3 hp:text-xl text-primary p-4 hover:text-secondary rounded-t-2xl hover:bg-primary ease-linear duration-100"><StringContent icon={<BsPlus size="38"/>}/></Link>
                
            </div>
            
        </div>
    )
}
const TopIcon = ({icon}) =>{ // menambahkan component untuk icon
    return(
        <div>
            {icon}
        </div>
    )
}
const StringContent = ({icon}) => (
    <Tippy content="Add your own message!">
      <button>{icon}</button>
    </Tippy>
  );
export default NavBar;