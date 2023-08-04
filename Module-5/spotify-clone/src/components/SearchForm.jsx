import React from 'react'




const SearchForm = ({ setSearchKey }) => {

    return (
        <div>
            <input className='search-input'
                type="text"
                placeholder='Search..'
                onChange={(e) => { setSearchKey(e.target.value) }}
            />
        </div>
    )
}

export default SearchForm