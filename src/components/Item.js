import React, { useState } from 'react';
import { connect } from 'react-redux'

const Item = ({ movie, id, nomination, dispatch, disable, block }) => {

    console.log(disable)
    // const [disabled, setDisabled] = useState(false)

    const handleClick = (e) => {
        console.log(e.target.id)
        if (nomination.length < 5) {
            dispatch({ type: 'ADD_NOMINATION', nomination: { movieTitle: movie.Title, movieYear: movie.Year } })
        }
    }


    return (
        <>
            <div className="row my-3 py-3 bg-secondary">
                <div className="col-12 col-sm-12 col-lg-12">
                    <div className="card--list">
                        <div className="row">
                            <div className="col-12 col-sm-12">
                                <div className="card__content">
                                    <h2 className="d-inline-block card__title pr-3 text-dark" >{movie.Title}</h2>
                                    <span className="text-dark px-3">{movie.Year}</span>
                                    <button onClick={handleClick} className="btn btn-lg bg-success text-light" disabled={block}>Nominate</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const mapState = (state) => ({
    nomination: state.nomination
})

export default connect(mapState)(Item);