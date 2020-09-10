import React from 'react'
import classes from '../style/Result.module.css'
import moviePhoto from '../img/film.jpg'
function Result({id, result, openPopup}) {
    const imgUrl = 'https://image.tmdb.org/t/p/w500'
    return (
        <div className={classes.result} onClick={() => openPopup(id)}>
            <img className={classes.result_img} src={ result.poster_path != null ? imgUrl + result.poster_path : moviePhoto} />
            <div className={classes.result_title}>{result.title}</div>
        </div>
    )
}

export default Result
// user.photos.small != null ? user.photos.small : userPhoto