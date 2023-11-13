import React, { useState } from 'react';

const Searchbar = ({ list, setList, filterField = (item) => item.pokemon, ...props }) => {
    const [value, setValue] = useState("");

    const filterList = () => {
        return list.filter((item) => filterField(item).toLowerCase().includes(value.toLocaleLowerCase()));
    };

    const handleChange = (e) => {
        setValue(e.target.value);
        setList(filterList());
    };

    return (
        <div>
            <input type="text" placeholder='Search Pokemon' name='search' value={value} onChange={handleChange} />
        </div>
    );
};



export default Searchbar;