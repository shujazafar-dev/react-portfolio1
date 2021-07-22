import React from 'react'


const SearchBox = (props) => {
const {placeholder, handleChange} = props

    return (
         <input
            className='search-box'
            type="search"
            placeholder={placeholder}
            onChange={handleChange}
          />
    )
}

export default SearchBox
