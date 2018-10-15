import React from 'react';

const SearchBox = ({ searchField, input }) => {
    return (
        <input type="search" onChange={input} value={searchField}></input>
    )
}

export default SearchBox;