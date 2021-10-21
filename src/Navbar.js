import {Link} from 'react-router-dom';

const navBar = () => {
    return (
        <div className="container flex justify-between">
            <div className="logo-container">
                <i>encourag-er</i>
            </div>
            <div className="navbar-links flex text-lg">
                <Link  to="/about" class="mx-3 hover:bg-black hover:text-white ease-linear duration-150">Home</Link>
                <Link  to="/sign-up" class="mx-3">Sign Up</Link>
                <Link  to="/Login" class="mx-3">Login</Link>
            </div>
        </div>
    )
}

export default navBar;