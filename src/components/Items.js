import React, { useEffect } from 'react'
import Result from './Result'
import classes from '../style/Items.module.css'

function Items({results, openPopup}) {
    return (
        <div className={classes.items_wrap}>
            {results.map(result => (
                <Result id={result.id} result={result} openPopup={openPopup}/>
            ))}
        </div>
    )
}

export default Items
