import React from 'react'
import classes from '../style/Search.module.css'

function Search({handleInput, search}, ...props) {

    return (
        <div className={classes.search_wrap}>
            <input 
            onChange={handleInput} 
            onKeyPress={search} type="text" 
            placeholder="Search for the movie .." 
            className={classes.search_input} >
            </input>
        </div>
    )
}

export default Search
