import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getPost } from '../actions'

const useSearchMovie = ({ searchInput, dispatch }) => {

    const result = useEffect(() => {
        dispatch(getPost(searchInput))
    }, [searchInput]);

    return { result }
}

const mapState = () => {

}


export default useSearchMovie;