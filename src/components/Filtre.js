import React from 'react';


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
                <h3>Rechercher un Pokémon : </h3>
                <input
                    className='search-input'
                    type="text"
                    placeholder="Nom du Pokémon"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
            <div className="filtre-box">
                <h3>Nombre de Pokémons à afficher : </h3>
                <input type="range" min="1" max="100" defaultValue={rangeValue} onChange={changeValue} />

            </div>
            <div className="filtre-box">
                <div className='menu-deroulant'>
                    <h3>Selectionnez le type  : </h3>
                    <select className='search-input' id="typeSelect" name="typeSelect" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                        <option value="">Tous les types</option>
                        {option.map((type) => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                    {selectedOption && <button className='delete-selected-option' onClick={() => setSelectedOption('')}>Annuler le filtre</button>}
                </div>

            </div>

        </div>

    );

};

export default Filtre;