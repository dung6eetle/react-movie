import React from 'react'
import classes from '../style/Movie.module.css'

function Movie({item}) {
    return (
        <div className={classes.movie}>
            <div className={classes.movie_container}>
              <div className={classes.movie_title}>{item.title}</div>
              <div className={classes.movie_discription}>{item.release_date}</div>
              <div className={classes.movie_overview}>{item.overview}</div>
            </div>
        </div>
    )
}

export default Movie
