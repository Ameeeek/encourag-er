import {Link} from 'react-router-dom';

const navBar = () => {
    return (
        <div className="container flex justify-between p-4">
            <div className="logo-container font-pacifico text-primary shadow-lg">
                <p class="text-5xl">encourag-er</p>
            </div>
            <div className="navbar-links font-hammer flex text-4xl p-4">
                <Link  to="/home" class="mx-3 text-primary hover:text-secondary hover:bg-primary ease-linear duration-100">Home</Link>
            </div>
            
        </div>
    )
}

export default navBar;