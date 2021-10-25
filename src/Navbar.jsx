import {Link} from 'react-router-dom'; // {Link} berguna untuk routing pada parent app 
import {BsGithub} from 'react-icons/bs'; 

const navBar = () => {
    return (
        <div className="container flex justify-between p-4">
            <div className="logo-container font-pacifico text-primary filter drop-shadow-2xl">
                <p class="text-5xl hp:text-xl">encourag-er</p>

            </div>
            <div className="navbar-links font-hammer   flex text-4xl ">
                <Link  to="/home" class="mx-3 hp:text-xl text-primary p-4 hover:text-secondary rounded-t-2xl hover:bg-primary ease-linear duration-100">Home</Link>
            <a className="p-4 text-primary  hover:text-black hover:bg-primary rounded-t-2xl ease-linear duration-100" href="https://github.com/Ameeeek/encourag-er"><TopIcon  icon={<BsGithub size="40"/>}/></a>
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
export default navBar;