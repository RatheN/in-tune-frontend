export const deleteSuggestion = (suggestionId, artistId) => {
    return (dispatch) => {
      return fetch(`http://localhost:3000/api/v1/artists/${artistId}/suggestions/${suggestionId}`, {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(artist => dispatch({type: 'DELETE_SUGGESTION', payload: artist}))
    }
  }