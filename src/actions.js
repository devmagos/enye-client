export const getPost = () => {
    return (dispatch, getState) => {
        dispatch({ type: 'FETCH_POST_BEGINS', loading: true })
        fetch(`https://api.enye.tech/v1/challenge/records`)
            .then((res) => res.json())
            .then(json => {
                dispatch({
                    type: 'FETCH_POST_SUCCESS',
                    post: json
                })

            })
            .catch((err) => dispatch({ type: 'FETCH_POST_ERROR', err: err }))
    }
}
