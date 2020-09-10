import React from "react";
import classes from "../style/Result.module.css";
import moviePhoto from "../img/film.jpg";
import like from "../img/heart.svg";
import liketrue from "../img/heart-success.svg";

function Result({ id, result, openPopup, likeCounter, setLikeCounter }) {
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <div className={classes.result}>
      <div className={classes.likeBlock}>
      {result.liked ? (
        <img onClick={() => likeCounter(id)} className={classes.like} src={liketrue} />
      ) : (
        <img onClick={() => likeCounter(id)} className={classes.like} src={like} />
      )}
      </div>
      <div onClick={() => openPopup(id)}>
        <img
          className={classes.result_img}
          src={
            result.poster_path != null
              ? imgUrl + result.poster_path
              : moviePhoto
          }
        />
      </div>
      <div onClick={() => openPopup(id)} className={classes.result_title}>
        {result.title}
      </div>
    </div>
  );
}

export default Result;
