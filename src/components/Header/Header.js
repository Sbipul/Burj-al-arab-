import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
// import header from '../../images/header.png';
// import logo from '../../images/icons/logo.png';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const {user,logOut} = useAuth()
    return (
        <div className="header">
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link className="btn-book" to="/book">Book</Link>
                    </li>
                    <li>
                        {
                            user.email ? <button className="logoutBtn" onClick={logOut}>Log Out</button> : <Link to="/login">Login</Link>
                        }
                    </li>
                    <li>
                    
                    </li>
                </ul>
            </nav>
            <div className="title-container">
                <h1 className="heading">{user.email ? user.displayName : 'Burj Al Arab'} <br />
                    Welcome to Arabian luxury hotel</h1>
            </div>
        </div>
    );
};

export default Header;