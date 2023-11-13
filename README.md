Decouvrez le website live à l'url : https://romain-baudet.github.io/Pokedex-React/

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---

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
        data.shift(); // Supprimer le premier élément du tableau

        return (

            <div className='pokedex-container'>
                <h2>POKEDEX</h2>

                <Filtre option={option} selectedOption={selectedOption} setSelectedOption={setSelectedOption} rangeValue={rangeValue} setRangeValue={setRangeValue} searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />



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

import React, { useEffect } from 'react';
import { useState } from 'react';

const Filtre = ({ option, selectedOption, setSelectedOption, rangeValue, setRangeValue, searchTerm, setSearchTerm }) => {

    const handleSearchChange = (e) => {
        const term = e.target.value;
        // console.log('Search term:', term);
        setSearchTerm(term);
    };

    const changeValue = (e) => {
        setRangeValue(e.target.value);
    };

    return (

        <div className="filtre-container">
            <div className="filtre-box">
                <h3>Nombre de Pokémons à afficher : </h3>
                <input type="range" min="1" max="50" defaultValue={rangeValue} onChange={changeValue} />

            </div>
            <div className="filtre-box">

                <h3>Rechercher un Pokémon : </h3>
                <input
                    type="text"
                    placeholder="Nom du Pokémon"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />


            </div>
            <div className="filtre-box">

            </div>
            <div className="filtre-box">

                <div className='menu-deroulant'>
                    <h3>Selectionnez le type du Pokémon : </h3>
                    <select id="typeSelect" name="typeSelect" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                        <option value="">Tous les types</option>
                        {option.map((type) => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                    {selectedOption && <button onClick={() => setSelectedOption('')}>Annuler le filtre</button>}
                </div>

            </div>

        </div>

    );

};

export default Filtre;

css supprimé :

.card.animated {
/_ transition: none;
animation: holoCard 6s ease 0s 1; _/}
