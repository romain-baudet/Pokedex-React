import React from 'react';
import Navigation from '../components/Navigation';
import Pokedex from '../components/Pokedex';

const Home = () => {
    return (
        <div className='body'>
            <Navigation />
            <Pokedex />
        </div>
    );
};

export default Home;