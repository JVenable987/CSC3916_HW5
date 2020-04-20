import React, {Component} from 'react';
import {connect} from "react-redux";
import { withRouter } from "react-router-dom";

class movie extends Component{

}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    return {
        selectedMovies: state.movie.selectedMovies,
        movieId: ownProps.match.params.movieId
    }
}

export default withRouter(connect(mapStateToProps)(movie));