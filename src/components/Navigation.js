import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navbar'>
            <img id='logo' src="./images/pokemonlogo.png" alt="logo pokemon" />
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>ACCUEIL</li>
                </NavLink>
                <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>A PROPOS</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;