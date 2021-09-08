import React from 'react';
import { Link } from 'react-router-dom';
import PrivateRoutesList from './routers/PrivateRoutesList';

export type INavBarProps = {}

const NavBar: React.FC<INavBarProps> = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-end">
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
                    {localStorage.token &&
                        <PrivateRoutesList />
                    }
                    <li className="nav-item">
                        {!localStorage.token ?
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
        </nav>
    );
}

export { NavBar };