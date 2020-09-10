import React from 'react'
import ResultContainer from './ResultContainer'
import classes from '../style/Items.module.css'

function Items({results, openPopup, setLikeCounter, setLike}) {
    return (
        <div className={classes.items_wrap}>
            {!!results.length &&results.map(result => (
                <ResultContainer setLike={setLike} id={result.id} result={result} openPopup={openPopup} setLikeCounter={setLikeCounter}/>
            ))}
        </div>
    )
}

export default Items
