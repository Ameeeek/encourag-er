import {Link} from 'react-router-dom';

const navBar = () => {
    return (
        <div className="container flex justify-between p-4">
            <div className="logo-container font-pacifico text-primary filter drop-shadow-2xl">
                <p class="text-5xl">encourag-er</p>
            </div>
            <div className="navbar-links font-hammer flex text-4xl ">
                <Link  to="/home" class="mx-3 text-primary p-4 hover:text-secondary rounded-t-2xl hover:bg-primary ease-linear duration-100">Home</Link>
            </div>
            
        </div>
    )
}

export default navBar;