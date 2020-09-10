import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Result from './Result'
import { compose } from "redux";
import {setLikeCounter} from "../redux/result-reducer"

function ResultContainer(props) {
      return (
        <Result
          {...props}
          likeCounter={props.setLike}
          setLikeCounter={props.setLikeCounter}
        />
      );
  }
  let mapStateToProps = (state) => {
    return {
      likeCounter: state.resultPage.likeCounter
    };
  };

  //Compose
  export default compose(
    connect(mapStateToProps,{setLikeCounter}),
    withRouter
  )(ResultContainer);