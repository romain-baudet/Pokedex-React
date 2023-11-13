import React from 'react';


const Pokemoncard = ({ pokemon }) => {
    const typeColors = {
        Plante: '#3fa129',
        Feu: '#e62829',
        Eau: '#2980ef',
        Insecte: '#91a119',
        Normal: '#9fa19f',
        Poison: '#8f41cb',
        Fée: '#ef71ef',
        Électrik: '#fac000',
        Sol: '#915121',
        Ténèbres: '#50413f',
        Dragon: '#5061e1',
        Psy: '#ef4179',
        Glace: '#41d7ff',
        Combat: '#ff8000',
        Spectre: '#704170',
        Acier: "#60a1b8",
        Roche: "#afa981",
        Vol: "#86bef2"
    };
    const type = pokemon.types[0].name;
    const backgroundColor = typeColors[type];


    return (
        <div className="card animated " style={{ backgroundColor }}>
            <div className="pokemon-img-container">
                <h2 className="title">{pokemon.name.fr} - PV : {pokemon.stats.hp}</h2>
                <div className="type">
                    <img src={pokemon.types[0].image} alt="" />
                    <p>{pokemon.types[0].name}</p>
                </div>
                <img className='pokemon-img' src={pokemon.sprites.regular} alt="Photo pokemon" />
            </div>
        </div>
    );
};

export default Pokemoncard;