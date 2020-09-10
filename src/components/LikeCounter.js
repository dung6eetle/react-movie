import React from 'react'

function LikeCounter() {
    return (
      <div className={classes.likeBlock}>
        <img className={classes.like} src={like} />
      </div>
    )
}

export default LikeCounter
