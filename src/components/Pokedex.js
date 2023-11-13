import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pokemoncard from './Pokemoncard';
import Filtre from './Filtre';

const Pokedex = () => {
    const [data, setData] = useState([]);
    const [selectedOption, setSelectedOption] = useState('')
    const [rangeValue, setRangeValue] = useState(20)
    const [searchTerm, setSearchTerm] = useState('');
    const option = ["Plante", "Feu", "Eau", "Insecte", "Normal", "Poison", "Fée", "Électrik", "Sol", "Ténèbres", "Dragon", "Psy", "Glace", "Combat", "Spectre", "Acier", "Roche"]

    useEffect(() => {
        axios
            .get("https://tyradex.vercel.app/api/v1/pokemon")
            .then((res) => setData(res.data))
            .catch((error) => {
                console.error("Error fetching data:", error);
            });

    }, []);


    if (data.length > 0) {
        data.shift(); // Supp le premier élément de l'array

        return (

            <div className='pokedex-container'>
                <div className="titre-h1">
                    <h1>POKEDEX</h1>
                </div>
                <Filtre option={option} selectedOption={selectedOption} setSelectedOption={setSelectedOption} rangeValue={rangeValue} setRangeValue={setRangeValue} searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm} />
                <div className='cards-container'>
                    {
                        data
                            .filter((pokemon) => pokemon.types[0].name.includes(selectedOption))
                            .filter((pokemon) => pokemon.name.fr.toLowerCase().includes(searchTerm.toLowerCase()))
                            .sort((a, b) => b.stats.hp - a.stats.hp)
                            .slice(0, rangeValue)
                            .map((pokemon) => (
                                <Pokemoncard key={pokemon.pokedexId} pokemon={pokemon} />
                            ))
                    }
                </div>
            </div >
        );
    } else {
        return <div>Loading...</div>;
    }

};

export default Pokedex;
