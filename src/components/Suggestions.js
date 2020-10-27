import React from 'react'
import {connect} from 'react-redux'
import {deleteSuggestion} from '../actions/deleteSuggestion'

const Suggestions = (props) => {

    const handleDelete = (suggestion) => {
        props.deleteSuggestion(suggestion.id, suggestion.artist_id)
    }

  return (
    <div className="content" style={{padding: '20px'}}>
        <h1 className="title is-3">Artist Suggestions: </h1>
        <div className="box" style={{padding: '10px', background: '#00d1b2' }}>
            
            {props.suggestions && props.suggestions.map(suggestion =>
                <div key={suggestion.id} style={{padding: '20px'}}><h1 className="title is-4">{suggestion.artist_suggestion}</h1> Notable Songs: <b>{suggestion.notable_songs}</b> <br/> Description: <b>{suggestion.description}</b><br/> <button onClick={() => handleDelete(suggestion)}>Delete</button><br/><br/><br/></div>
            )}
        </div>
    </div>
  )


}

export default connect(null, {deleteSuggestion})(Suggestions)