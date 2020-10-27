import React from 'react'
import SuggestionsContainer from '../containers/SuggestionsContainer'


const Artist = (props) => {

    let artist = props.artists.filter(artist => artist.id == props.match.params.id)[0]
    
    console.log(artist)

    return (
        <div>
            <h1 className="title is-2">
                {artist ? artist.name : null} <br/> <a className="title is-4">Genre: {artist ? artist.genre : null}</a>
            </h1>
            <SuggestionsContainer artist={artist}/>
        </div>
    )
}

export default Artist