export default function artistReducer(state = {artists: []}, action) {

    switch (action.type) {
        case 'FETCH_ARTISTS':
            return {artists: action.payload}
        case 'ADD_ARTIST':
            return {...state, artists: [...state.artists, action.payload]}
        case 'ADD_SUGGESTION':
            let artists = state.artists.map(artist => {
                if (artist.id === action.payload.id) {
                    return action.payload
                } else {
                    return artist
                }
            })
            return {...state, artists: artists}
        case 'DELETE_SUGGESTION':
            let artistsD = state.artists.map(artist => {
                if (artist.id === action.payload.id) {
                    return action.payload
                } else {
                    return artist
                }
            })
      return {...state, artists: artistsD}
        default:
            return state
    }
}