  
import React from 'react';
import { connect } from 'react-redux'

const Nominate = ({ name, id, dispatch }) => {

    const handleClick = () => {
        dispatch({ type: 'DELETE_NOMINATION', movie: name, id: id })
    }

    return (
        <div className="my-3 mx-2 ">
            <h5 className="d-inline text-light px-4 ">{name}</h5>
            <button onClick={handleClick} className="btn btn-danger" >remove</button>
        </div>
    );
}


const mapState = (state) => ({
    err: state.err
})

export default connect(mapState)(Nominate);