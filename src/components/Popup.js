import React from 'react'
import classes from '../style/Result.module.css'

function Popup({selected, closePopup}) {
    return (
        <div className={classes.popup}>
            <div className={classes.popup_close} onClick={closePopup}>X</div>
            <div className={classes.popup_content}>
                <div className={classes.popup_title}>{selected.original_title}<br></br><span> {selected.release_date}</span></div>
                <div className={classes.popup_rating}>Rating: {selected.popularity}</div>
                <div className={classes.popup_overview}> Discription: {selected.overview}</div>
            </div>
        </div>
    )
}

export default Popup

