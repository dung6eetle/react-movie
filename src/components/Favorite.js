import React from 'react'
import Movie from '../components/Movie'

function Favorite({favorite}) {
    console.log('favo:', favorite)
    return (
        <div>
            {favorite.map(item => (<Movie item={item}/>))}
        </div>
    )
}

export default Favorite
