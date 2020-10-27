export function fetchArtists() {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/artists')
        .then(response => response.json())
        .then(data => dispatch({
            type: 'FETCH_ARTISTS',
            payload: data
        }))
    }
}

