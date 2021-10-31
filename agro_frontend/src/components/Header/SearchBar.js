import React from 'react';
import {MdSearch} from 'react-icons/md';

const SearchBar = () => {
    return (
        <div style={searchBarStyle}>
            <MdSearch style={{justifySelf: 'center'}} />
            <input style={searchInputStyle} placeholder="Search" />
        </div>
    )
}

const searchBarStyle = {
    height: '35px',
    backgroundColor: '#F5F8F2',
    borderRadius: '10px',
    display: 'grid',
    gridTemplateColumns: '3vw auto',
    alignItems: 'center',
    marginRight: '10px'
};

const searchInputStyle = {
    border: 'none',
    backgroundColor: '#F5F8F2',
    outline: 'none'
}

export default SearchBar
