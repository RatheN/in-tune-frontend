import React from 'react'
import SuggestionInput from '../components/SuggestionInput'
import Suggestions from '../components/Suggestions'

class SuggestionsContainer extends React.Component {


    render() {
        return (
            <div>
                <Suggestions suggestions={this.props.artist && this.props.artist.suggestions}/>
                <SuggestionInput artist={this.props.artist}/>
            </div>
        )
    }
}

export default SuggestionsContainer