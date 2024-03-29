import React from 'react';
import './Styles/Navbar.css';
import { NavLink } from 'react-router-dom';
import { useAuth } from './../AuthContext';
import { Login, RegistrationForm } from './Aunthenticate';

function Navbar() {
    const auth = useAuth();
    const user = auth.user;

    const handleLogout = () => {
        auth.logout();
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid custom-navbar">
                    <div>
                        <a className="navbar-brand" href="#">Online Jobs</a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to={"/"} className="nav-link">Home</NavLink>
                            </li>
                            
                            {!user || (user && user.role === 'Student') ? (
                                <>
                                    <li className="nav-item">
                                        <NavLink to={"/Jobs"} className="nav-link">Jobs</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to={"/company"} className="nav-link">Companies</NavLink>
                                    </li>
                                </>
                            ) : null}
                            {user && user.role === 'Company' && (
                                <li className="nav-item">
                                    <NavLink to={"/Applications"} className="nav-link">Applications</NavLink>
                                </li>
                            )}
                            <li className="nav-item">
                                <NavLink to={"/community"} className="nav-link">Community</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/learning"} className="nav-link">Learning</NavLink>
                            </li>
                        </ul>
                        <ul className='login-button'>
                            {!auth.user &&
                                <li className="nav-item">
                                    <button
                                        className="btn btn-primary loginbtn"
                                        data-bs-toggle="modal"
                                        data-bs-target="#registerModal"
                                    >
                                        <i className="fa-solid fa-unlock-keyhole"></i>&nbsp;Register
                                    </button>
                                </li>
                            }
                        </ul>
                        <ul className='login-button'>
                            {!auth.user &&
                                <li className="nav-item">
                                    <button
                                        className="btn btn-primary loginbtn"
                                        data-bs-toggle="modal"
                                        data-bs-target="#loginrModal"
                                    >
                                        <i className="fa-solid fa-unlock-keyhole"></i>&nbsp;Login
                                    </button>

                                </li>
                            }
                            {auth.user &&
                                <li className="nav-item">
                                    <button
                                        className="btn btn-primary loginbtn"
                                        onClick={handleLogout}
                                    >
                                        <i className="fa-solid fa-unlock-keyhole"></i>&nbsp;logout
                                    </button>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
            <Login />
            <RegistrationForm />
        </>
    );
}

export default Navbar;
