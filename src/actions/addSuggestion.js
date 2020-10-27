export const addSuggestion = (suggestion, artistId) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/artists/${artistId}/suggestions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(suggestion)
        })
        .then(response => response.json())
        .then(artist => dispatch({type: 'ADD_SUGGESTION', payload: artist}
        ))
    }
}