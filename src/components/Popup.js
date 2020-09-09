import React from 'react'
import classes from '../style/Result.module.css'

function Popup({selected, closePopup}) {
    return (
        <div className={classes.popup}>
            <div className={classes.popup_content}>
                <div>{selected.original_title}<span>{selected.release_date}</span></div>
                <div className={classes.popup_rating}>Rating:{selected.popularity}</div>
            </div>
            <div className={classes.popup_close} onClick={closePopup}>X</div>
        </div>
    )
}

export default Popup

