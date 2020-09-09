import React from 'react'
import classes from '../style/Result.module.css'

function Result({id, result, openPopup}) {
    const imgUrl = 'https://image.tmdb.org/t/p/w500'
    return (
        <div className={classes.result} onClick={() => openPopup(id)}>
            <img className={classes.result_img} src={ imgUrl + result.poster_path} />
            <div className={classes.result_title}>{result.title}</div>
        </div>
    )
}

export default Result
