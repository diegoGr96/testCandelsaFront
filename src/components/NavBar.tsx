import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Auth/useAuth';

export type INavBarProps = {
    
}

const NavBar: React.FC<INavBarProps> = () => {
    const auth = useAuth();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h2 className="navbar-brand">
            <Link to="/" className="nav-link">
                Candelsa
            </Link>
            </h2>
            <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/public-page" className="nav-link">
                            Public Page
                        </Link>
                    </li>
                    <li className="nav-item">
                    {auth?.token !== null &&
                        <Link to="/private-page" className="nav-link">
                            Private Page
                        </Link>
                    }
                    </li>
                    <li className="nav-item">
                    {auth?.token === null ? 
                            <Link to="/login" className="nav-link">
                                Login
                            </Link>
                        : 
                            <Link to="/logout" className="nav-link">
                                Logout
                            </Link>
                        }
                    </li>
                </ul>
            </div>
            <h1>{auth?.token}</h1>
        </nav>
    );
}

export { NavBar };